var clients;

$(window).load(function () {
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
            for (let savingsID = 0; savingsID < savings.length; savingsID++) {
                console.log('Month Savings:   ' + savings[savingsID][0]);
                clients.push(savings[savingsID][0]);
            }

        },
        error: function (response) {
            console.log(response);
            console.log(clients);
        }
    });
});

let beforeSend = function(request){
    request.setRequestHeader(
        "Authorization",
        "Bearer " + localStorage.getItem("token")
    );
};