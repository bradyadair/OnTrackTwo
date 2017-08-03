var clients = [];
var reports = [];
var selectedClient;
var selectedReport;
;
var clientList;
var clientReports;
var noClients;
var noReports;
var viewBtn;
var removeBtn;

$(window).load(function () {
    //wire up elements
    clientList = document.getElementById("clientList");
    clientReports = document.getElementById("clientReports");
    noClients = document.getElementById("noClients");
    noReports = document.getElementById("noReports");
    viewBtn = document.getElementById("viewBtn");
    removeBtn = document.getElementById("removeBtn");

    //ajax call to get list of clients
    $.ajax({
        'url': '../api/v1/api.php?endpoint=monthSavingsByCoach&token=' + sessionStorage.getItem('token'),
        'method': 'get',
        data: JSON.stringify({
            'token': sessionStorage.getItem('token')
        }),
        beforeSend: beforeSend,
        'dataType': 'json',
        'success': function (savings) {
            for (var savingsID = 0; savingsID < savings.length; savingsID++) {
                console.log('Month Savings:   ' + savings[savingsID]);
                clients.push(savings[savingsID]);
            }
            console.log(clients);
            populateClients();
            selectedClient = 0;
            clientList.childNodes[selectedClient + 1].className = "list-group-item active";
            getReports(clients[selectedClient]);
        },
        error: function (response) {
            console.log(response);
        }
    });
});

var beforeSend = function (request) {
    request.setRequestHeader(
            "Authorization",
            "Bearer " + localStorage.getItem("token")
            );
};

function populateClients()
{
    if (typeof clients !== 'undefined' && clients.length > 0)
    {
        for (var i = 0; i < clients.length; i++)
        {
            $("#clientList").append("<a href='#' class='list-group-item list-group-item-action' onclick='activeClient(" + i + ")'>" + clients[i].toString() + "</a>");
        }
    }
    else
    {
        clientList.style.display = "none";
        noClients.style.display = "block";
    }
}

function activeClient(index)
{
    //disable view button
    viewBtn.disabled = true;
    removeBtn.disabled = true;
    for (var i = 0; i < clients.length; i++)
    {
        clientList.childNodes[i + 1].className = "list-group-item";
    }
    clientList.childNodes[index + 1].className = "list-group-item active";
    console.log("Selected Index:" + index);
    selectedClient = index;
    getReports(clients[index]);
    console.log(clients[index]);
}

function getReports(id)
{
    reports = [];
    $.ajax({
        'url': '../api/v1/api.php?endpoint=getMonthSavingsForClient&clientID=' + id,
        'method': 'get',
        data: JSON.stringify({
            'clientID': id
        }),
        beforeSend: beforeSend,
        'dataType': 'json',
        'success': function (savings) {
            for (var savingsID = 0; savingsID < savings.length; savingsID++) {
                console.log('Client Records:   ' + savings[savingsID][0] + '   ' + savings[savingsID][1]);
                reports.push(savings[savingsID][1]);
            }
            console.log(reports);
            populateReports();
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function populateReports()
{
    //clear current list
    while (clientReports.firstChild)
    {
        clientReports.removeChild(clientReports.firstChild);
    }
    if (typeof reports !== 'undefined' && reports.length > 0)
    {
        for (var i = 0; i < reports.length; i++)
        {
            $("#clientReports").append("<a href='#' class='list-group-item list-group-item-action' onclick='activeReport(" + i + ")'>" + reports[i].toString() + "</a>");
        }
    }
    else
    {
        clientReports.style.display = "none";
        noReports.style.display = "block";
    }
    console.log(clientReports.childNodes);
}

function activeReport(index)
{
    for (var i = 0; i < reports.length; i++)
    {
        console.log(i);
        clientReports.childNodes[i].className = "list-group-item";
    }
    console.log("Selected Index:" + index);
    clientReports.childNodes[index].className = "list-group-item active";
    selectedReport = index;
    //enable view button
    viewBtn.disabled = false;
    removeBtn.disabled = false;
}

function viewReport()
{
    console.log("clientID: " + clients[selectedClient]);
    console.log("date: " + reports[selectedReport]);
    sessionStorage.setItem('clientID', clients[selectedClient]);
    sessionStorage.setItem('date', reports[selectedReport]);
}

function deleteReport()
{
    console.log("delete button clicked");

    var r = confirm("Are you sure you want to delete this record?");
    if (r == true) {
        console.log("Client ID: " + parseInt(clients[selectedClient]) + " Date: " + reports[selectedReport].toString());
        $.ajax({
            'url': '../api/v1/api.php?endpoint=deleteMonthSavings&clientID=' + parseInt(clients[selectedClient]) + '&date=' + reports[selectedReport].toString(),
            'method': 'post',
            data: JSON.stringify({
            }),
            beforeSend: beforeSend,
            'dataType': 'json',
            'success': function (savings) {
                console.log('Record Deleted');
                location.reload();
            },
            error: function (response) {
                console.log(response);
                window.alert("There was an error deleting this report.");
            }
        });     
    }
    else {
        //do nothing
    }
}