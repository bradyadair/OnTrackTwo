var overviewOp;
var incomeOp;
var housingOp;
var foodOp;
var transOp;
var medicalOp;
var educationOp;
var childrenOp;
var otherOp;
var resultsOp;

var overviewNav;
var incomeNav;
var housingNav;
var foodNav;
var transNav;
var medicalNav;
var educationNav;
var childrenNav;
var otherNav;
var resultsNav;

window.onload = function()
{
    overviewOp = document.getElementById("overviewOp");
    incomeOp = document.getElementById("incomeOp");
    housingOp = document.getElementById("housingOp");
    foodOp = document.getElementById("foodOp");
    transOp = document.getElementById("transOp");
    medicalOp = document.getElementById("medicalOp");
    educationOp = document.getElementById("educationOp");
    childrenOp = document.getElementById("childrenOp");
    otherOp = document.getElementById("otherOp");
    resultsOp = document.getElementById("resultsOp");
    
    overviewNav = document.getElementById("overviewNav");
    incomeNav = document.getElementById("incomeNav");
    housingNav = document.getElementById("housingNav");
    foodNav = document.getElementById("foodNav");
    transNav = document.getElementById("transNav");
    medicalNav = document.getElementById("medicalNav");
    educationNav = document.getElementById("educationNav");
    childrenNav = document.getElementById("childrenNav");
    otherNav = document.getElementById("otherNav");
    resultsNav = document.getElementById("resultsNav");
};

function overview_click()
{
    hideAllDivs();
    overviewOp.style.display = "block";
    overviewNav.className = "list-group-item active";
}

function income_click()
{
    hideAllDivs();
    incomeOp.style.display = "block";
    incomeNav.className = "list-group-item active";
}

function housing_click()
{
    hideAllDivs();
    housingOp.style.display = "block";
    housingNav.className = "list-group-item active";
}

function food_click()
{
    hideAllDivs();
    foodOp.style.display = "block";
    foodNav.className = "list-group-item active";
}

function trans_click()
{
    hideAllDivs();
    transOp.style.display = "block";
    transNav.className = "list-group-item active";
}

function medical_click()
{
    hideAllDivs();
    medicalOp.style.display = "block";
    medicalNav.className = "list-group-item active";
}

function education_click()
{
    hideAllDivs();
    educationOp.style.display = "block";
    educationNav.className = "list-group-item active";
}

function children_click()
{
    hideAllDivs();
    childrenOp.style.display = "block";
    childrenNav.className = "list-group-item active";
}

function other_click()
{
    hideAllDivs();
    otherOp.style.display = "block";
    otherNav.className = "list-group-item active";
}

function results_click()
{
    hideAllDivs();
    resultsOp.style.display = "block";
    resultsNav.className = "list-group-item active";
}

function hideAllDivs()
{
    overviewOp.style.display = "none";
    incomeOp.style.display = "none";
    housingOp.style.display = "none";
    foodOp.style.display = "none";
    transOp.style.display = "none";
    medicalOp.style.display = "none";
    educationOp.style.display = "none";
    childrenOp.style.display = "none";
    otherOp.style.display = "none";
    resultsOp.style.display = "none";
    
    overviewNav.className = "list-group-item";
    incomeNav.className = "list-group-item";
    housingNav.className = "list-group-item";
    foodNav.className = "list-group-item";
    transNav.className = "list-group-item";
    medicalNav.className = "list-group-item";
    educationNav.className = "list-group-item";
    childrenNav.className = "list-group-item";
    otherNav.className = "list-group-item";
    resultsNav.className = "list-group-item";
}