//define vars
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

let beforeSend = function(request){
    console.log("In beforeSend with token:");
    console.log(sessionStorage.getItem("token"));
    request.setRequestHeader(
        "Authorization",
        "Bearer " + sessionStorage.getItem("token")  
    );
    console.log("after beforeSend");
};

window.onload = function () {

    //flow stuff
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
    checkBudgetNav = document.getElementById("checkBudgetNav");
    resultsNav = document.getElementById("resultsNav");

    overviewNav.className = "list-group-item active";
    incomeNav.className = "list-group-item disabled";
    housingNav.className = "list-group-item disabled";
    foodNav.className = "list-group-item disabled";
    transNav.className = "list-group-item disabled";
    medicalNav.className = "list-group-item disabled";
    educationNav.className = "list-group-item disabled";
    childrenNav.className = "list-group-item disabled";
    otherNav.className = "list-group-item disabled";
    checkBudgetNav.className = "list-group-item disabled";
    resultsNav.className = "list-group-item disabled";

    //wire up nav
    document.getElementById("btnStart").onclick = function () {
        navigate("start");
    };
    document.getElementById("btnIncomeBack").onclick = function () {
        navigate("income_back");
    };
    document.getElementById("btnIncomeNext").onclick = function () {
        navigate("income_next");
    };
    document.getElementById("btnHousingBack").onclick = function () {
        navigate("housing_back");
    };
    document.getElementById("btnHousingNext").onclick = function () {
        navigate("housing_next");
    };
    document.getElementById("btnFoodBack").onclick = function () {
        navigate("food_back");
    };
    document.getElementById("btnFoodNext").onclick = function () {
        navigate("food_next");
    };
    document.getElementById("btnTransBack").onclick = function () {
        navigate("trans_back");
    };
    document.getElementById("btnTransNext").onclick = function () {
        navigate("trans_next");
    };
    document.getElementById("btnMedicalBack").onclick = function () {
        navigate("medical_back");
    };
    document.getElementById("btnMedicalNext").onclick = function () {
        navigate("medical_next");
    };
    document.getElementById("btnEducationBack").onclick = function () {
        navigate("education_back");
    };
    document.getElementById("btnEducationNext").onclick = function () {
        navigate("education_next");
    };
    document.getElementById("btnChildrenBack").onclick = function () {
        navigate("children_back");
    };
    document.getElementById("btnChildrenNext").onclick = function () {
        navigate("children_next");
    };
    document.getElementById("btnOtherBack").onclick = function () {
        navigate("other_back");
    };
    document.getElementById("btnOtherNext").onclick = function () {
        navigate("other_next");
    };
    document.getElementById("btnCheckBudgetBack").onclick = function () {
        navigate("checkBudget_back");
    };
    document.getElementById("btnCheckBudgetNext").onclick = function () {
        navigate("checkBudget_next");
    };
    document.getElementById("btnResultsBack").onclick = function () {
        navigate("results_back");
    };
    document.getElementById("btnReset").onclick = function () {
        navigate("reset");
    };

    console.log("Loaded");   

    $.ajax({
        'url': '../../api/v1/api.php?endpoint=entry&category=18',
        'method': 'GET',
        'dataType': 'json',
        'success': function (entries) {
            for (let entry_index = 0; entry_index < entries.length; entry_index++) {
                console.log(entries[entry_index]['entryName'])

                switch (entries[entry_index]['entryName']) {
                    case 'Housing_Rent':
                        rentPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Housing_Electricity':
                        electricityPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Housing_Gas':
                        gasPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Housing_Water':
                        waterPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Housing_Cable':
                        netflixPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Housing_Internet':
                        internetPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Housing_Entertainment':
                        entertainmentPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Housing_Other':
                        otherUtilitiesPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Housing_CellPhone':
                        cellPhonePercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Food_Groceries':
                        groceriesPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Food_Out':
                        eatingOutPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Food_Hygiene':
                        personalHygienePercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Food_Other':
                        groceriesOtherPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Trans_Insurance':
                        autoInsurancePercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Trans_Fuel':
                        autoFuelPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Trans_Public':
                        publicTransitPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Trans_Other':
                        transOtherPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Medical_Pocket':
                        medicalPocketPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Medical_Prescription':
                        medicalPrescriptionsPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Medical_Other':
                        medicalOtherPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Edu_Fees':
                        eduFeesPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Edu_Supplies':
                        eduSuppliesPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Edu_Other':
                        eduOtherPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Child_Care':
                        childCareExpensePercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Child_Support':
                        childSupportPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Child_Rec':
                        childRecreationPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Child_Cloth':
                        childClothingPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Child_Other':
                        childOtherPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Other_Memberships':
                        membershipsPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Other_Legal':
                        legalFeesPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Other_Charity':
                        donationsPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Other_Entertainment':
                        otherEntertainmentPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Other_Pets':
                        petsPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Other_Storage':
                        storagePercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Other_Shopping':
                        clothingPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Other_DebtConstructive':
                        constructiveDebtPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Other_DebtConsumer':
                        consumerDebtPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Other_Collections':
                        collectionsPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    case 'Other_Expenses':
                        otherExpensesPercent = parseFloat(entries[entry_index]['entryValue'])
                        break;
                    default:
                        break;
                }
                setElements()
            }
        },
        error: function (response) {
            console.log(response);
            rentPercent = 100;
            electricityPercent = 90;
            gasPercent = 90;
            waterPercent = 90;
            netflixPercent = 50;
            internetPercent = 50;
            entertainmentPercent = 0;
            otherUtilitiesPercent = 0;
            cellPhonePercent = 75;
            groceriesPercent = 50;
            eatingOutPercent = 0;
            personalHygienePercent = 30;
            groceriesOtherPercent = 50;
            autoInsurancePercent = 100;
            autoFuelPercent = 75;
            publicTransitPercent = 100;
            transOtherPercent = 0;
            medicalPocketPercent = 100;
            medicalPrescriptionsPercent = 100;
            medicalOtherPercent = 0;
            eduFeesPercent = 0;
            eduSuppliesPercent = 0;
            eduOtherPercent = 0;
            childCareExpensePercent = 100;
            childSupportPercent = 100;
            childRecreationPercent = 0;
            childClothingPercent = 0;
            childOtherPercent = 0;
            membershipsPercent = 100;
            legalFeesPercent = 50;
            donationsPercent = 50;
            otherEntertainmentPercent = 0;
            petsPercent = 50;
            storagePercent = 100;
            clothingPercent = 0;
            constructiveDebtPercent = 100;
            consumerDebtPercent = 75;
            collectionsPercent = 0;
            otherExpensesPercent = 0;
            savingsPercent = 0;
            setElements()
        }
    });

    
    console.log("About to do Brady's ajax call");
    //Brady Added this to test pulling values from database
    $.ajax({
           'url': '../../api/v1/api.php?endpoint=getMonthSavingsForClientDate&clientID=' + 2 + '&date=' + '2017-07-12 17:43:50',
           'method': 'get',
           data: JSON.stringify({
              
           }),
           beforeSend: beforeSend,
           'dataType': 'json',
           'success': function (savings) {
               console.log('Emergency Savings Record:   ' + savings[0]['ClientHours'] + '   ' + savings[0]['Rent']);
           },
           error: function(response){
               console.log(response);
               console.log("Brady's ajax call returned error");
           }
       });



    
};

function setElements() {
    //-------------------------------------------------------------------------------------------------------------------------

    //Run All functions so all output starts out at 0---------------------------------------------------------------------------
    calculate();
    calculateHousing();
    calculateFood();
    calculateAuto();
    calculateMedical();
    calculateEducation();
    calculateChild();
    calculateOther();
    //---------------------------------------------------------------------------------------------------------------------------
    
    document.getElementById("rentPercent").placeholder = rentPercent + "%";

    document.getElementById("electricityPercent").placeholder = electricityPercent + "%";

    document.getElementById("gasPercent").placeholder = gasPercent + "%";

    document.getElementById("waterPercent").placeholder = waterPercent + "%";

    document.getElementById("netflixPercent").placeholder = netflixPercent + "%";

    document.getElementById("internetPercent").placeholder = internetPercent + "%";

    document.getElementById("entertainmentPercent").placeholder = entertainmentPercent + "%";

    document.getElementById("otherUtilitiesPercent").placeholder = otherUtilitiesPercent + "%";

    document.getElementById("cellPhonePercent").placeholder = cellPhonePercent + "%";
    //------------------------------------------------------------------------------------------------------------------------

    //Food Percentage Needed---------------------------------------------------------------------------------------------

    document.getElementById("groceriesPercent").placeholder = groceriesPercent + "%";


    document.getElementById("eatingOutPercent").placeholder = eatingOutPercent + "%";


    document.getElementById("personalHygienePercent").placeholder = personalHygienePercent + "%";


    document.getElementById("groceriesOtherPercent").placeholder = groceriesOtherPercent + "%";
    //-----------------------------------------------------------------------------------------------------------------------

    //Auto/Bus Percentage Needed--------------------------------------------------------------------------------------------

    document.getElementById("autoInsurancePercent").placeholder = autoInsurancePercent + "%";


    document.getElementById("autoFuelPercent").placeholder = autoFuelPercent + "%";


    document.getElementById("publicTransitPercent").placeholder = publicTransitPercent + "%";


    document.getElementById("transOtherPercent").placeholder = transOtherPercent + "%";
    //-------------------------------------------------------------------------------------------------------------------------

    //Medical Percentage Needed---------------------------------------------------------------------------------------------

    document.getElementById("medicalPocketPercent").placeholder = medicalPocketPercent + "%";


    document.getElementById("medicalPrescriptionsPercent").placeholder = medicalPrescriptionsPercent + "%";


    document.getElementById("medicalOtherPercent").placeholder = medicalOtherPercent + "%";

    //---------------------------------------------------------------------------------------------------------------------

    //Education Percentage Needed--------------------------------------------------------------------------------------------

    document.getElementById("eduFeesPercent").placeholder = eduFeesPercent + "%";


    document.getElementById("eduSuppliesPercent").placeholder = eduSuppliesPercent + "%";


    document.getElementById("eduOtherPercent").placeholder = eduOtherPercent + "%";

    //------------------------------------------------------------------------------------------------------------------------

    //Child Percentage Needed------------------------------------------------------------------------------------------------------

    document.getElementById("childCareExpensePercent").placeholder = childCareExpensePercent + "%";


    document.getElementById("childSupportPercent").placeholder = childSupportPercent + "%";


    document.getElementById("childRecreationPercent").placeholder = childRecreationPercent + "%";


    document.getElementById("childClothingPercent").placeholder = childClothingPercent + "%";


    document.getElementById("childOtherPercent").placeholder = childOtherPercent + "%";
    //--------------------------------------------------------------------------------------------------------------------------



    //Other Percentage Needed-------------------------------------------------------------------------------------------------
    document.getElementById("membershipsPercent").placeholder = membershipsPercent + "%";


    document.getElementById("legalFeesPercent").placeholder = legalFeesPercent + "%";


    document.getElementById("donationsPercent").placeholder = donationsPercent + "%";


    document.getElementById("otherEntertainmentPercent").placeholder = otherEntertainmentPercent + "%";


    document.getElementById("petsPercent").placeholder = petsPercent + "%";


    document.getElementById("storagePercent").placeholder = storagePercent + "%";


    document.getElementById("clothingPercent").placeholder = clothingPercent + "%";


    document.getElementById("constructiveDebtPercent").placeholder = constructiveDebtPercent + "%";


    document.getElementById("consumerDebtPercent").placeholder = consumerDebtPercent + "%";


    document.getElementById("collectionsPercent").placeholder = collectionsPercent + "%";


    document.getElementById("otherExpensesPercent").placeholder = otherExpensesPercent + "%";

    document.getElementById("savingsPercent").placeholder = savingsPercent +"%";


    //hides show/hide calculations button at beginning
    $("#showHidePercent").hide();
    $(".percentNeeded").hide();

}

function showHidePercent()
{

    //Hide Percentage Needed Columns-------------------------------------------------------------------------------------------------
    $(".percentNeeded").toggle();

}









//used to Calculate Client and Spouse Wages
function calculate()
{
    //Calculate Client Wages---------------------------------------------------------------------------------------------------------------
    clientHours = 0;
    clientRate = 0;
    clientPRDeductions = 0;
    clientSelfEmployment = 0;
    clientSocialSecurityRetirement = 0;
    clientPension = 0;
    clientAlimony = 0;
    clientChildSupport = 0;
    clientOtherIncome = 0;

    if (document.getElementById("clientHours").value)
    {
        clientHours = document.getElementById("clientHours").value;
    }
    if (document.getElementById("clientRate").value)
    {
        clientRate = document.getElementById("clientRate").value;
    }
    clientWages = parseFloat(clientHours * clientRate * (4 + (1 / 3)), 10);
    if (document.getElementById("clientPRDeductions").value)
    {
        clientPRDeductions = document.getElementById("clientPRDeductions").value;
    }
    if (document.getElementById("clientSelfEmployment").value)
    {
        clientSelfEmployment = document.getElementById("clientSelfEmployment").value;
    }
    if (document.getElementById("clientSocialSecurityRetirement").value)
    {
        clientSocialSecurityRetirement = document.getElementById("clientSocialSecurityRetirement").value;
    }
    if (document.getElementById("clientPension").value)
    {
        clientPension = document.getElementById("clientPension").value;
    }
    if (document.getElementById("clientAlimony").value)
    {
        clientAlimony = document.getElementById("clientAlimony").value;
    }
    if (document.getElementById("clientChildSupport").value)
    {
        clientChildSupport = document.getElementById("clientChildSupport").value;
    }
    if (document.getElementById("clientOtherIncome").value)
    {
        clientOtherIncome = document.getElementById("clientOtherIncome").value;
    }


    document.getElementById("clientWages").placeholder = "$" + parseFloat(clientWages).toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});
    document.getElementById("clientNet").placeholder = "$" + (parseFloat(clientWages) - parseFloat(clientPRDeductions)).toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    clientTotal = parseFloat(clientWages) + parseFloat(clientSelfEmployment) + parseFloat(clientSocialSecurityRetirement) + parseFloat(clientPension) + parseFloat(clientAlimony) + parseFloat(clientChildSupport) + parseFloat(clientOtherIncome);

    document.getElementById("clientTotal").placeholder = "$" + clientTotal.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});
    //-----------------------------------------------------------------------------------------------------------------------




    //Calculate Spouses Wages----------------------------------------------------------------------------------------------
    spouseHours = 0;
    spouseRate = 0;
    spousePRDeductions = 0;
    spouseSelfEmployment = 0;
    spouseSocialSecurityRetirement = 0;
    spousePension = 0;
    spouseAlimony = 0;
    spouseChildSupport = 0;
    spouseOtherIncome = 0;

    if (document.getElementById("spouseHours").value)
    {
        spouseHours = document.getElementById("spouseHours").value;
    }
    if (document.getElementById("spouseRate").value)
    {
        spouseRate = document.getElementById("spouseRate").value;
    }
    spouseWages = parseFloat(spouseHours * spouseRate * (4 + (1 / 3)), 10);
    if (document.getElementById("spousePRDeductions").value)
    {
        spousePRDeductions = document.getElementById("spousePRDeductions").value;
    }
    if (document.getElementById("spouseSelfEmployment").value)
    {
        spouseSelfEmployment = document.getElementById("spouseSelfEmployment").value;
    }
    if (document.getElementById("spouseSocialSecurityRetirement").value)
    {
        spouseSocialSecurityRetirement = document.getElementById("spouseSocialSecurityRetirement").value;
    }
    if (document.getElementById("spousePension").value)
    {
        spousePension = document.getElementById("spousePension").value;
    }
    if (document.getElementById("spouseAlimony").value)
    {
        spouseAlimony = document.getElementById("spouseAlimony").value;
    }
    if (document.getElementById("spouseChildSupport").value)
    {
        spouseChildSupport = document.getElementById("spouseChildSupport").value;
    }
    if (document.getElementById("spouseOtherIncome").value)
    {
        spouseOtherIncome = document.getElementById("spouseOtherIncome").value;
    }

    

    
    document.getElementById("spouseWages").placeholder = "$" + parseFloat(spouseWages).toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});
    document.getElementById("spouseNet").placeholder = "$" + (parseFloat(spouseWages) - parseFloat(spousePRDeductions)).toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    spouseTotal = parseFloat(spouseWages) + parseFloat(spouseSelfEmployment) + parseFloat(spouseSocialSecurityRetirement) + parseFloat(spousePension) + parseFloat(spouseAlimony) + parseFloat(spouseChildSupport) + parseFloat(spouseOtherIncome);

    document.getElementById("spouseTotal").placeholder = "$" + spouseTotal.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    //---------------------------------------------------------------------------------------------------------------------------
}














function calculateHousing()
{
    rent = 0;
    if (document.getElementById("rent").value)
    {
        rent = document.getElementById("rent").value;
    }
    rentRequired = parseFloat(rent * (rentPercent / 100));
    document.getElementById("rentRequired").placeholder = "$" + rentRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    electricity = 0;
    if (document.getElementById("electricity").value)
    {
        electricity = document.getElementById("electricity").value;
    }
    electricityRequired = parseFloat(electricity * (electricityPercent / 100));
    document.getElementById("electricityRequired").placeholder = "$" + electricityRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    gas = 0;
    if (document.getElementById("gas").value)
    {
        gas = document.getElementById("gas").value;
    }
    gasRequired = parseFloat(gas * (gasPercent / 100));
    document.getElementById("gasRequired").placeholder = "$" + gasRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    water = 0;
    if (document.getElementById("water").value)
    {
        water = document.getElementById("water").value;
    }
    waterRequired = parseFloat(water * (waterPercent / 100));
    document.getElementById("waterRequired").placeholder = "$" + waterRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    netflix = 0;
    if (document.getElementById("netflix").value)
    {
        netflix = document.getElementById("netflix").value;
    }
    netflixRequired = parseFloat(netflix * (netflixPercent / 100));
    document.getElementById("netflixRequired").placeholder = "$" + netflixRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    internet = 0;
    if (document.getElementById("internet").value)
    {
        internet = document.getElementById("internet").value;
    }
    internetRequired = parseFloat(internet * (internetPercent / 100));
    document.getElementById("internetRequired").placeholder = "$" + internetRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    entertainment = 0;
    if (document.getElementById("entertainment").value)
    {
        entertainment = document.getElementById("entertainment").value;
    }
    entertainmentRequired = parseFloat(entertainment * (entertainmentPercent / 100));
    document.getElementById("entertainmentRequired").placeholder = "$" + entertainmentRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    otherUtilities = 0;
    if (document.getElementById("otherUtilities").value)
    {
        otherUtilities = document.getElementById("otherUtilities").value;
    }
    otherUtilitiesRequired = parseFloat(otherUtilities * (otherUtilitiesPercent / 100));
    document.getElementById("otherUtilitiesRequired").placeholder = "$" + otherUtilitiesRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    cellPhone = 0;
    if (document.getElementById("cellPhone").value)
    {
        cellPhone = document.getElementById("cellPhone").value;
    }
    cellPhoneRequired = parseFloat(cellPhone * (cellPhonePercent / 100));
    document.getElementById("cellPhoneRequired").placeholder = "$" + cellPhoneRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});



    housingTotal = parseFloat(rent) + parseFloat(electricity) + parseFloat(gas) + parseFloat(water) + parseFloat(netflix) + parseFloat(internet) + parseFloat(entertainment) + parseFloat(otherUtilities) + parseFloat(cellPhone);
    document.getElementById("housingTotal").placeholder = "$" + housingTotal.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    housingTotalRequired = parseFloat(rentRequired) + parseFloat(electricityRequired) + parseFloat(gasRequired) + parseFloat(waterRequired) + parseFloat(netflixRequired) + parseFloat(internetRequired) + parseFloat(entertainmentRequired) + parseFloat(otherUtilitiesRequired) + parseFloat(cellPhoneRequired);
    document.getElementById("housingTotalRequired").placeholder = "$" + housingTotalRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    housingTotalFirst = parseFloat(rent) + parseFloat(electricity) + parseFloat(gas) + parseFloat(water) + parseFloat(netflix) + parseFloat(internet) + parseFloat(entertainment) + parseFloat(otherUtilities) + parseFloat(cellPhone);
    document.getElementById("housingTotalFirst").placeholder = "$" + housingTotalFirst.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    housingTotalFirstRequired = parseFloat(rentRequired) + parseFloat(electricityRequired) + parseFloat(gasRequired) + parseFloat(waterRequired) + parseFloat(netflixRequired) + parseFloat(internetRequired) + parseFloat(entertainmentRequired) + parseFloat(otherUtilitiesRequired) + parseFloat(cellPhoneRequired);
    document.getElementById("housingTotalFirstRequired").placeholder = "$" + housingTotalFirstRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

}


function calculateFood()
{

    groceries = 0;
    if (document.getElementById("groceries").value)
    {
        groceries = document.getElementById("groceries").value;
    }
    groceriesRequired = parseFloat(groceries * (groceriesPercent / 100));
    document.getElementById("groceriesRequired").placeholder = "$" + groceriesRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    eatingOut = 0;
    if (document.getElementById("eatingOut").value)
    {
        eatingOut = document.getElementById("eatingOut").value;
    }
    eatingOutRequired = parseFloat(eatingOut * (eatingOutPercent / 100));
    document.getElementById("eatingOutRequired").placeholder = "$" + eatingOutRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    personalHygiene = 0;
    if (document.getElementById("personalHygiene").value)
    {
        personalHygiene = document.getElementById("personalHygiene").value;
    }
    personalHygieneRequired = parseFloat(personalHygiene * (personalHygienePercent / 100));
    document.getElementById("personalHygieneRequired").placeholder = "$" + personalHygieneRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    groceriesOther = 0;
    if (document.getElementById("groceriesOther").value)
    {
        groceriesOther = document.getElementById("groceriesOther").value;
    }
    groceriesOtherRequired = parseFloat(groceriesOther * (groceriesOtherPercent / 100));
    document.getElementById("groceriesOtherRequired").placeholder = "$" + groceriesOtherRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});


    foodTotal = parseFloat(groceries) + parseFloat(eatingOut) + parseFloat(personalHygiene) + parseFloat(groceriesOther);
    document.getElementById("foodTotal").placeholder = "$" + foodTotal.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    foodTotalRequired = parseFloat(groceriesRequired) + parseFloat(eatingOutRequired) + parseFloat(personalHygieneRequired) + parseFloat(groceriesOtherRequired)
    document.getElementById("foodTotalRequired").placeholder = "$" + foodTotalRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    foodTotalFirst = parseFloat(groceries) + parseFloat(eatingOut) + parseFloat(personalHygiene) + parseFloat(groceriesOther);
    document.getElementById("foodTotalFirst").placeholder = "$" + foodTotalFirst.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    foodTotalFirstRequired = parseFloat(groceriesRequired) + parseFloat(eatingOutRequired) + parseFloat(personalHygieneRequired) + parseFloat(groceriesOtherRequired)
    document.getElementById("foodTotalFirstRequired").placeholder = "$" + foodTotalFirstRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});


}


function calculateAuto()
{


    autoInsurance = 0;
    if (document.getElementById("autoInsurance").value)
    {
        autoInsurance = document.getElementById("autoInsurance").value;
    }
    autoInsuranceRequired = parseFloat(autoInsurance * (autoInsurancePercent / 100));
    document.getElementById("autoInsuranceRequired").placeholder = "$" + autoInsuranceRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    autoFuel = 0;
    if (document.getElementById("autoFuel").value)
    {
        autoFuel = document.getElementById("autoFuel").value;
    }
    autoFuelRequired = parseFloat(autoFuel * (autoFuelPercent / 100));
    document.getElementById("autoFuelRequired").placeholder = "$" + autoFuelRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    publicTransit = 0;
    if (document.getElementById("publicTransit").value)
    {
        publicTransit = document.getElementById("publicTransit").value;
    }
    publicTransitRequired = parseFloat(publicTransit * (publicTransitPercent / 100));
    document.getElementById("publicTransitRequired").placeholder = "$" + publicTransitRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    transOther = 0;
    if (document.getElementById("transOther").value)
    {
        transOther = document.getElementById("transOther").value;
    }
    transOtherRequired = parseFloat(transOther * (transOtherPercent / 100));
    document.getElementById("transOtherRequired").placeholder = "$" + transOtherRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});


    transTotal = parseFloat(autoInsurance) + parseFloat(autoFuel) + parseFloat(publicTransit) + parseFloat(transOther);
    document.getElementById("transTotal").placeholder = "$" + transTotal.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    transTotalRequired = parseFloat(autoInsuranceRequired) + parseFloat(autoFuelRequired) + parseFloat(publicTransitRequired) + parseFloat(transOtherRequired);
    document.getElementById("transTotalRequired").placeholder = "$" + transTotalRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    transTotalFirst = parseFloat(autoInsurance) + parseFloat(autoFuel) + parseFloat(publicTransit) + parseFloat(transOther);
    document.getElementById("transTotalFirst").placeholder = "$" + transTotalFirst.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    transTotalFirstRequired = parseFloat(autoInsuranceRequired) + parseFloat(autoFuelRequired) + parseFloat(publicTransitRequired) + parseFloat(transOtherRequired);
    document.getElementById("transTotalFirstRequired").placeholder = "$" + transTotalFirstRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

}



function calculateMedical()
{
    medicalPocket = 0;
    if (document.getElementById("medicalPocket").value)
    {
        medicalPocket = document.getElementById("medicalPocket").value;
    }
    medicalPocketRequired = parseFloat(medicalPocket * (medicalPocketPercent / 100));
    document.getElementById("medicalPocketRequired").placeholder = "$" + medicalPocketRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    medicalPrescriptions = 0;
    if (document.getElementById("medicalPrescriptions").value)
    {
        medicalPrescriptions = document.getElementById("medicalPrescriptions").value;
    }
    medicalPrescriptionsRequired = parseFloat(medicalPrescriptions * (medicalPrescriptionsPercent / 100));
    document.getElementById("medicalPrescriptionsRequired").placeholder = "$" + medicalPrescriptionsRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});


    medicalOther = 0;
    if (document.getElementById("medicalOther").value)
    {
        medicalOther = document.getElementById("medicalOther").value;
    }
    medicalOtherRequired = parseFloat(medicalOther * (medicalOtherPercent / 100));
    document.getElementById("medicalOtherRequired").placeholder = "$" + medicalOtherRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    medicalTotal = parseFloat(medicalPocket) + parseFloat(medicalPrescriptions) + parseFloat(medicalOther);
    document.getElementById("medicalTotal").placeholder = "$" + medicalTotal.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    medicalTotalRequired = parseFloat(medicalPocketRequired) + parseFloat(medicalPrescriptionsRequired) + parseFloat(medicalOtherRequired);
    document.getElementById("medicalTotalRequired").placeholder = "$" + medicalTotalRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    medicalTotalFirst = parseFloat(medicalPocket) + parseFloat(medicalPrescriptions) + parseFloat(medicalOther);
    document.getElementById("medicalTotalFirst").placeholder = "$" + medicalTotalFirst.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    medicalTotalFirstRequired = parseFloat(medicalPocketRequired) + parseFloat(medicalPrescriptionsRequired) + parseFloat(medicalOtherRequired);
    document.getElementById("medicalTotalFirstRequired").placeholder = "$" + medicalTotalFirstRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

}





function calculateEducation()
{

    eduFees = 0;
    if (document.getElementById("eduFees").value)
    {
        eduFees = document.getElementById("eduFees").value;
    }
    eduFeesRequired = parseFloat(eduFees * (eduFeesPercent / 100));
    document.getElementById("eduFeesRequired").placeholder = "$" + eduFeesRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    eduSupplies = 0;
    if (document.getElementById("eduSupplies").value)
    {
        eduSupplies = document.getElementById("eduSupplies").value;
    }
    eduSuppliesRequired = parseFloat(eduSupplies * (eduSuppliesPercent / 100));
    document.getElementById("eduSuppliesRequired").placeholder = "$" + eduSuppliesRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    eduOther = 0;
    if (document.getElementById("eduOther").value)
    {
        eduOther = document.getElementById("eduOther").value;
    }
    eduOtherRequired = parseFloat(eduOther * (eduOtherPercent / 100));
    document.getElementById("eduOtherRequired").placeholder = "$" + eduOtherRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    eduTotal = parseFloat(eduFees) + parseFloat(eduSupplies) + parseFloat(eduOther);
    document.getElementById("eduTotal").placeholder = "$" + eduTotal.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    eduTotalRequired = parseFloat(eduFeesRequired) + parseFloat(eduSuppliesRequired) + parseFloat(eduOtherRequired);
    document.getElementById("eduTotalRequired").placeholder = "$" + eduTotalRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    eduTotalFirst = parseFloat(eduFees) + parseFloat(eduSupplies) + parseFloat(eduOther);
    document.getElementById("eduTotalFirst").placeholder = "$" + eduTotalFirst.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    eduTotalFirstRequired = parseFloat(eduFeesRequired) + parseFloat(eduSuppliesRequired) + parseFloat(eduOtherRequired);
    document.getElementById("eduTotalFirstRequired").placeholder = "$" + eduTotalFirstRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

}


function calculateChild()
{
    childCareExpense = 0;
    if (document.getElementById("childCareExpense").value)
    {
        childCareExpense = document.getElementById("childCareExpense").value;
    }
    childCareExpenseRequired = parseFloat(childCareExpense * (childCareExpensePercent / 100));
    document.getElementById("childCareExpenseRequired").placeholder = "$" + childCareExpenseRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    childSupport = 0;
    if (document.getElementById("childSupport").value)
    {
        childSupport = document.getElementById("childSupport").value;
    }
    childSupportRequired = parseFloat(childSupport * (childSupportPercent / 100));
    document.getElementById("childSupportRequired").placeholder = "$" + childSupportRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    childRecreation = 0;
    if (document.getElementById("childRecreation").value)
    {
        childRecreation = document.getElementById("childRecreation").value;
    }
    childRecreationRequired = parseFloat(childRecreation * (childRecreationPercent / 100));
    document.getElementById("childRecreationRequired").placeholder = "$" + childRecreationRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    childClothing = 0;
    if (document.getElementById("childClothing").value)
    {
        childClothing = document.getElementById("childClothing").value;
    }
    childClothingRequired = parseFloat(childClothing * (childClothingPercent / 100));
    document.getElementById("childClothingRequired").placeholder = "$" + childClothingRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    childOther = 0;
    if (document.getElementById("childOther").value)
    {
        childOther = document.getElementById("childOther").value;
    }
    childOtherRequired = parseFloat(childOther * (childOtherPercent / 100));
    document.getElementById("childOtherRequired").placeholder = "$" + childOtherRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    childTotal = parseFloat(childCareExpense) + parseFloat(childSupport) + parseFloat(childRecreation) + parseFloat(childClothing) + parseFloat(childOther);
    document.getElementById("childTotal").placeholder = "$" + childTotal.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    childTotalRequired = parseFloat(childCareExpenseRequired) + parseFloat(childSupportRequired) + parseFloat(childRecreationRequired) + parseFloat(childClothingRequired) + parseFloat(childOtherRequired);
    document.getElementById("childTotalRequired").placeholder = "$" + childTotalRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    childTotalFirst = parseFloat(childCareExpense) + parseFloat(childSupport) + parseFloat(childRecreation) + parseFloat(childClothing) + parseFloat(childOther);
    document.getElementById("childTotalFirst").placeholder = "$" + childTotalFirst.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    childTotalFirstRequired = parseFloat(childCareExpenseRequired) + parseFloat(childSupportRequired) + parseFloat(childRecreationRequired) + parseFloat(childClothingRequired) + parseFloat(childOtherRequired);
    document.getElementById("childTotalFirstRequired").placeholder = "$" + childTotalFirstRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

}




function calculateOther()
{

    memberships = 0;
    if (document.getElementById("memberships").value)
    {
        memberships = document.getElementById("memberships").value;
    }
    membershipsRequired = parseFloat(memberships * (membershipsPercent / 100));
    document.getElementById("membershipsRequired").placeholder = "$" + membershipsRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});


    legalFees = 0;
    if (document.getElementById("legalFees").value)
    {
        legalFees = document.getElementById("legalFees").value;
    }
    legalFeesRequired = parseFloat(legalFees * (legalFeesPercent / 100));
    document.getElementById("legalFeesRequired").placeholder = "$" + legalFeesRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});


    donations = 0;
    if (document.getElementById("donations").value)
    {
        donations = document.getElementById("donations").value;
    }
    donationsRequired = parseFloat(donations * (donationsPercent / 100));
    document.getElementById("donationsRequired").placeholder = "$" + donationsRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});


    otherEntertainment = 0;
    if (document.getElementById("otherEntertainment").value)
    {
        otherEntertainment = document.getElementById("otherEntertainment").value;
    }
    otherEntertainmentRequired = parseFloat(otherEntertainment * (otherEntertainmentPercent / 100));
    document.getElementById("otherEntertainmentRequired").placeholder = "$" + otherEntertainmentRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});


    pets = 0;
    if (document.getElementById("pets").value)
    {
        pets = document.getElementById("pets").value;
    }
    petsRequired = parseFloat(pets * (petsPercent / 100));
    document.getElementById("petsRequired").placeholder = "$" + petsRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});


    storage = 0;
    if (document.getElementById("storage").value)
    {
        storage = document.getElementById("storage").value;
    }
    storageRequired = parseFloat(storage * (storagePercent / 100));
    document.getElementById("storageRequired").placeholder = "$" + storageRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});


    clothing = 0;
    if (document.getElementById("clothing").value)
    {
        clothing = document.getElementById("clothing").value;
    }
    clothingRequired = parseFloat(clothing * (clothingPercent / 100));
    document.getElementById("clothingRequired").placeholder = "$" + clothingRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});


    constructiveDebt = 0;
    if (document.getElementById("constructiveDebt").value)
    {
        constructiveDebt = document.getElementById("constructiveDebt").value;
    }
    constructiveDebtRequired = parseFloat(constructiveDebt * (constructiveDebtPercent / 100));
    document.getElementById("constructiveDebtRequired").placeholder = "$" + constructiveDebtRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});


    consumerDebt = 0;
    if (document.getElementById("consumerDebt").value)
    {
        consumerDebt = document.getElementById("consumerDebt").value;
    }
    consumerDebtRequired = parseFloat(consumerDebt * (consumerDebtPercent / 100));
    document.getElementById("consumerDebtRequired").placeholder = "$" + consumerDebtRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});


    collections = 0;
    if (document.getElementById("collections").value)
    {
        collections = document.getElementById("collections").value;
    }
    collectionsRequired = parseFloat(collections * (collectionsPercent / 100));
    document.getElementById("collectionsRequired").placeholder = "$" + collectionsRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});


    otherExpenses = 0;
    if (document.getElementById("otherExpenses").value)
    {
        otherExpenses = document.getElementById("otherExpenses").value;
    }
    otherExpensesRequired = parseFloat(otherExpenses * (otherExpensesPercent / 100));
    document.getElementById("otherExpensesRequired").placeholder = "$" + otherExpensesRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});    

    savings = 0;
    if (document.getElementById("savings").value)
    {
        savings = document.getElementById("savings").value;
    }
    savingsRequired = parseFloat(savings*(savingsPercent/100));
    document.getElementById("savingsRequired").placeholder = "$" +savingsRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    otherTotal = parseFloat(memberships) + parseFloat(legalFees) + parseFloat(donations) + parseFloat(otherEntertainment) + parseFloat(pets) + parseFloat(storage) + parseFloat(clothing) + parseFloat(constructiveDebt) + parseFloat(consumerDebt) + parseFloat(collections) + parseFloat(otherExpenses) + parseFloat(savings);
    document.getElementById("otherTotal").placeholder = "$" + otherTotal.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    otherTotalRequired = parseFloat(memberships) + parseFloat(legalFeesRequired) + parseFloat(donationsRequired) + parseFloat(otherEntertainmentRequired) + parseFloat(petsRequired) + parseFloat(storageRequired) + parseFloat(clothingRequired) + parseFloat(constructiveDebtRequired) + parseFloat(consumerDebtRequired) + parseFloat(collectionsRequired) + parseFloat(otherExpensesRequired) + parseFloat(savingsRequired);
    document.getElementById("otherTotalRequired").placeholder = "$" + childTotalRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    otherTotalFirst = parseFloat(memberships) + parseFloat(legalFees) + parseFloat(donations) + parseFloat(otherEntertainment) + parseFloat(pets) + parseFloat(storage) + parseFloat(clothing) + parseFloat(constructiveDebt) + parseFloat(consumerDebt) + parseFloat(collections) + parseFloat(otherExpenses) + parseFloat(savings);
    document.getElementById("otherTotalFirst").placeholder = "$" + otherTotalFirst.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    otherTotalFirstRequired = parseFloat(memberships) + parseFloat(legalFeesRequired) + parseFloat(donationsRequired) + parseFloat(otherEntertainmentRequired) + parseFloat(petsRequired) + parseFloat(storageRequired) + parseFloat(clothingRequired) + parseFloat(constructiveDebtRequired) + parseFloat(consumerDebtRequired) + parseFloat(collectionsRequired) + parseFloat(otherExpensesRequired) + parseFloat(savingsRequired);
    document.getElementById("otherTotalFirstRequired").placeholder = "$" + childTotalFirstRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

}




function calculateEmergencySavings()
{
    calculate();
    calculateHousing();
    calculateFood();
    calculateAuto();
    calculateMedical();
    calculateEducation();
    calculateChild();
    calculateOther();
    clientFinalAboveFifty = 0;
    spouseFinalAboveFifty = 0;
    clientHouseholdPercent = (clientTotal / (clientTotal + spouseTotal)) * 100;
    spouseHouseholdPercent = ((spouseTotal / (clientTotal + spouseTotal)) * 100);

    document.getElementById("clientFinalTotalIncome").placeholder = '$' + clientTotal.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    document.getElementById("spouseFinalTotalIncome").placeholder = '$' + spouseTotal.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    document.getElementById("householdIncome").placeholder = '$' + (clientTotal + spouseTotal).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

    if (clientHouseholdPercent)
    {
        document.getElementById("clientHouseholdPercent").placeholder = clientHouseholdPercent.toFixed(2) + "%";
    } else
    {
        document.getElementById("clientHouseholdPercent").placeholder = (0).toFixed(2) + "%";
    }

    if (spouseHouseholdPercent)
    {
        document.getElementById("spouseHouseholdPercent").placeholder = spouseHouseholdPercent.toFixed(2) + "%";
    } else
    {
        document.getElementById("spouseHouseholdPercent").placeholder = (0).toFixed(2) + "%";
    }

    document.getElementById("householdPercent").value = "N/A";

    if ((clientTotal / (clientTotal + spouseTotal)) * 100 - 50 > 0)
    {
        clientFinalAboveFifty = ((clientTotal / (clientTotal + spouseTotal)) * 100 - 50)
        document.getElementById("clientFinalAboveFifty").placeholder = clientFinalAboveFifty.toFixed(2) + "%";
    } else
    {

        document.getElementById("clientFinalAboveFifty").placeholder = clientFinalAboveFifty.toFixed(2) + "%";
    }

    if ((spouseTotal / (clientTotal + spouseTotal)) * 100 - 50 > 0)
    {
        spouseFinalAboveFifty = ((spouseTotal / (clientTotal + spouseTotal)) * 100 - 50)
        document.getElementById("spouseFinalAboveFifty").placeholder = spouseFinalAboveFifty.toFixed(2) + "%";
    } else
    {
        document.getElementById("spouseFinalAboveFifty").placeholder = spouseFinalAboveFifty.toFixed(2) + "%";
    }

    householdAboveFifty = clientFinalAboveFifty + spouseFinalAboveFifty
    document.getElementById("householdAboveFifty").placeholder = householdAboveFifty.toFixed(2) + "%";



    percentOfFifty = householdAboveFifty * 2;
    document.getElementById("percentOfFifty").placeholder = percentOfFifty.toFixed(2) + "%";
    percentOfFiftyTimesThree = ((householdAboveFifty * 2) / 100 * 3 + 3);
    document.getElementById("percentOfFiftyTimesThree").placeholder = percentOfFiftyTimesThree.toFixed(2) + " Months";

    budgetTotal = parseFloat(rent) + parseFloat(electricity) + parseFloat(gas) + parseFloat(water) + parseFloat(netflix) + parseFloat(internet) + parseFloat(entertainment) + parseFloat(otherUtilities) + parseFloat(cellPhone) + parseFloat(groceries) + parseFloat(eatingOut) + parseFloat(personalHygiene) + parseFloat(groceriesOther) + parseFloat(autoInsurance) + parseFloat(autoFuel) + parseFloat(publicTransit) + parseFloat(transOther) + parseFloat(medicalPocket) + parseFloat(medicalPrescriptions) + parseFloat(medicalOther) + parseFloat(eduFees) + parseFloat(eduSupplies) + parseFloat(eduOther) + parseFloat(childCareExpense) + parseFloat(childSupport) + parseFloat(childRecreation) + parseFloat(childClothing) + parseFloat(childOther) + parseFloat(memberships) + parseFloat(legalFees) + parseFloat(donations) + parseFloat(otherEntertainment) + parseFloat(pets) + parseFloat(storage) + parseFloat(clothing) + parseFloat(constructiveDebt) + parseFloat(consumerDebt) + parseFloat(collections) + parseFloat(otherExpenses) + parseFloat(savings);
    document.getElementById("budgetTotal").placeholder = "$" + budgetTotal.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    budgetTotalRequired = parseFloat(rentRequired) + parseFloat(electricityRequired) + parseFloat(gasRequired) + parseFloat(waterRequired) + parseFloat(netflixRequired) + parseFloat(internetRequired) + parseFloat(entertainmentRequired) + parseFloat(otherUtilitiesRequired) + parseFloat(cellPhoneRequired) + parseFloat(groceriesRequired) + parseFloat(eatingOutRequired) + parseFloat(personalHygieneRequired) + parseFloat(groceriesOtherRequired) + parseFloat(autoInsuranceRequired) + parseFloat(autoFuelRequired) + parseFloat(publicTransitRequired) + parseFloat(transOtherRequired) + parseFloat(medicalPocketRequired) + parseFloat(medicalPrescriptionsRequired) + parseFloat(medicalOtherRequired) + parseFloat(eduFeesRequired) + parseFloat(eduSuppliesRequired) + parseFloat(eduOtherRequired) + parseFloat(childCareExpenseRequired) + parseFloat(childSupportRequired) + parseFloat(childRecreationRequired) + parseFloat(childClothingRequired) + parseFloat(childOtherRequired) + parseFloat(memberships) + parseFloat(legalFeesRequired) + parseFloat(donationsRequired) + parseFloat(otherEntertainmentRequired) + parseFloat(petsRequired) + parseFloat(storageRequired) + parseFloat(clothingRequired) + parseFloat(constructiveDebtRequired) + parseFloat(consumerDebtRequired) + parseFloat(collectionsRequired) + parseFloat(otherExpensesRequired) + parseFloat(savingsRequired);
    document.getElementById("budgetTotalRequired").placeholder = "$" + budgetTotalRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    monthsEmergencySavingsRequired = percentOfFiftyTimesThree;
    document.getElementById("monthsEmergencySavingsRequired").placeholder = monthsEmergencySavingsRequired.toFixed(2) + " Months";
    totalEmergencySavingsRequired = (monthsEmergencySavingsRequired * budgetTotalRequired);
    document.getElementById("totalEmergencySavingsRequired").placeholder = "$" + totalEmergencySavingsRequired.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    $("#monthsOfSavingsRequiredColor").css("color", "blue");
    $("#emergencySavingsRequiredColor").css("color", "blue");
}

function checkBudget()
{
    calculateEmergencySavings();

    document.getElementById("checkhouseholdIncome").placeholder = '$' + (clientTotal + spouseTotal).toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    document.getElementById("checkbudgetTotal").placeholder = "$" + budgetTotal.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    var surplus = ((clientTotal + spouseTotal)-budgetTotal);
    if (surplus < -10 )
    {
        $("#surplusIndicatorLabel").css("color", "red");
        $("#surplusIndicatorLabel").text("You Have Too Much In Your Budget! (Lower Money In A Budget Category)");
        document.getElementById("surplusIndicator").placeholder = '- $' + (surplus*-1).toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});
    }
    else if (surplus <= 10 && surplus >= -10)
    {
        $("#surplusIndicatorLabel").css("color", "green");
        $("#surplusIndicatorLabel").text("You Budgeted Your Money Perfectly!");
        document.getElementById("surplusIndicator").placeholder = '$' + surplus.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});
    }
    else
    {
        $("#surplusIndicatorLabel").css("color", "red");
        $("#surplusIndicatorLabel").text("You Didn't Budget All Your Money! (Add to Savings?)");
        document.getElementById("surplusIndicator").placeholder = '$' + surplus.toLocaleString(undefined,{minimumFractionDigits: 2,maximumFractionDigits: 2});

    }
}

//flow functions
function overview_click()
{
    hideAllDivs();
    updateAll();
    overviewOp.style.display = "block";
    overviewNav.className = "list-group-item active";
}

function income_click()
{
    if (!incomeNav.className.includes("disabled"))
    {
        hideAllDivs();
        updateAll();
        incomeOp.style.display = "block";
        incomeNav.className = "list-group-item active";
    }
}

function housing_click()
{
    if (!housingNav.className.includes("disabled"))
    {
        hideAllDivs();
        updateAll();
        housingOp.style.display = "block";
        housingNav.className = "list-group-item active";

        $("#showHidePercent").show();
    }
}

function food_click()
{
    if (!foodNav.className.includes("disabled"))
    {
        hideAllDivs();
        updateAll();
        foodOp.style.display = "block";
        foodNav.className = "list-group-item active";

        $("#showHidePercent").show();
    }
}

function trans_click()
{
    if (!transNav.className.includes("disabled"))
    {
        hideAllDivs();
        updateAll();
        transOp.style.display = "block";
        transNav.className = "list-group-item active";

        $("#showHidePercent").show();
    }
}

function medical_click()
{
    if (!medicalNav.className.includes("disabled"))
    {
        hideAllDivs();
        updateAll();
        medicalOp.style.display = "block";
        medicalNav.className = "list-group-item active";

        $("#showHidePercent").show();
    }
}

function education_click()
{
    if (!educationNav.className.includes("disabled"))
    {
        hideAllDivs();
        updateAll();
        educationOp.style.display = "block";
        educationNav.className = "list-group-item active";

        $("#showHidePercent").show();
    }
}

function children_click()
{
    if (!childrenNav.className.includes("disabled"))
    {
        hideAllDivs();
        updateAll();
        childrenOp.style.display = "block";
        childrenNav.className = "list-group-item active";

        $("#showHidePercent").show();
    }
}

function other_click()
{
    if (!otherNav.className.includes("disabled"))
    {
        hideAllDivs();
        updateAll();
        otherOp.style.display = "block";
        otherNav.className = "list-group-item active";

        $("#showHidePercent").show();
    }
}

function checkBudget_click()
{
    if (!checkBudgetNav.className.includes("disabled"))
    {
        hideAllDivs();
        updateAll();
        checkBudgetOp.style.display = "block";
        checkBudgetNav.className = "list-group-item active";
        checkBudget();

        $("#showHidePercent").show();
    }
}

function results_click()
{
    if (!resultsNav.className.includes("disabled"))
    {
        hideAllDivs();
        updateAll();
        resultsOp.style.display = "block";
        resultsNav.className = "list-group-item active";
        calculateEmergencySavings();

        $("#showHidePercent").show();
    }
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
    checkBudgetOp.style.display = "none";
    resultsOp.style.display = "none";

//    overviewNav.className = "list-group-item";
//    incomeNav.className = "list-group-item";
//    housingNav.className = "list-group-item";
//    foodNav.className = "list-group-item";
//    transNav.className = "list-group-item";
//    medicalNav.className = "list-group-item";
//    educationNav.className = "list-group-item";
//    childrenNav.className = "list-group-item";
//    otherNav.className = "list-group-item";
//    resultsNav.className = "list-group-item";

    $("#showHidePercent").hide();
    $(".percentNeeded").hide();
}

var startStatus = "visited";
var incomeStatus = "disabled";
var housingStatus = "disabled";
var foodStatus = "disabled";
var transStatus = "disabled";
var medicalStatus = "disabled";
var educationStatus = "disabled";
var childrenStatus = "disabled";
var otherStatus = "disabled";
var checkBudgetStatus = "disabled";
var resultsStatus = "disabled";

function updateAll()
{
    if (startStatus === "complete")
    {
        overviewNav.className = "list-group-item list-group-item-success";
        overviewNav.innerHTML = "<span class='glyphicon glyphicon-ok' aria-hidden='true'></span> Overview";
    } else if (startStatus === "visited")
    {
        overviewNav.className = "list-group-item";
        overviewNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Overview";
    } else
    {
        overviewNav.className = "list-group-item disabled";
        overviewNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Overview";
    }

    if (incomeStatus === "complete")
    {
        incomeNav.className = "list-group-item list-group-item-success";
        incomeNav.innerHTML = "<span class='glyphicon glyphicon-ok' aria-hidden='true'></span> Income";
    } else if (incomeStatus === "visited")
    {
        incomeNav.className = "list-group-item";
        incomeNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Income";
    } else
    {
        incomeNav.className = "list-group-item disabled";
        incomeNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Income";
    }

    if (housingStatus === "complete")
    {
        housingNav.className = "list-group-item list-group-item-success";
        housingNav.innerHTML = "<span class='glyphicon glyphicon-ok' aria-hidden='true'></span> Housing";
    } else if (housingStatus === "visited")
    {
        housingNav.className = "list-group-item";
        housingNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Housing";
    } else
    {
        housingNav.className = "list-group-item disabled";
        housingNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Housing";
    }

    if (foodStatus === "complete")
    {
        foodNav.className = "list-group-item list-group-item-success";
        foodNav.innerHTML = "<span class='glyphicon glyphicon-ok' aria-hidden='true'></span> Food";
    } else if (foodStatus === "visited")
    {
        foodNav.className = "list-group-item";
        foodNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Food";
    } else
    {
        foodNav.className = "list-group-item disabled";
        foodNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Food";
    }

    if (transStatus === "complete")
    {
        transNav.className = "list-group-item list-group-item-success";
        transNav.innerHTML = "<span class='glyphicon glyphicon-ok' aria-hidden='true'></span> Transportation";
    } else if (transStatus === "visited")
    {
        transNav.className = "list-group-item";
        transNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Transportation";
    } else
    {
        transNav.className = "list-group-item disabled";
        transNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Transportation";
    }

    if (medicalStatus === "complete")
    {
        medicalNav.className = "list-group-item list-group-item-success";
        medicalNav.innerHTML = "<span class='glyphicon glyphicon-ok' aria-hidden='true'></span> Medical";
    } else if (medicalStatus === "visited")
    {
        medicalNav.className = "list-group-item";
        medicalNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Medical";
    } else
    {
        medicalNav.className = "list-group-item disabled";
        medicalNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Medical";
    }

    if (educationStatus === "complete")
    {
        educationNav.className = "list-group-item list-group-item-success";
        educationNav.innerHTML = "<span class='glyphicon glyphicon-ok' aria-hidden='true'></span> Education";
    } else if (educationStatus === "visited")
    {
        educationNav.className = "list-group-item";
        educationNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Education";
    } else
    {
        educationNav.className = "list-group-item disabled";
        educationNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Education";
    }

    if (childrenStatus === "complete")
    {
        childrenNav.className = "list-group-item list-group-item-success";
        childrenNav.innerHTML = "<span class='glyphicon glyphicon-ok' aria-hidden='true'></span> Children";
    } else if (childrenStatus === "visited")
    {
        childrenNav.className = "list-group-item";
        childrenNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Children";
    } else
    {
        childrenNav.className = "list-group-item disabled";
        childrenNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Children";
    }

    if (otherStatus === "complete")
    {
        otherNav.className = "list-group-item list-group-item-success";
        otherNav.innerHTML = "<span class='glyphicon glyphicon-ok' aria-hidden='true'></span> Other";
    } else if (otherStatus === "visited")
    {
        otherNav.className = "list-group-item";
        otherNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Other";
    } else
    {
        otherNav.className = "list-group-item disabled";
        otherNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Other";
    }

    if (checkBudgetStatus === "complete")
    {
        checkBudgetNav.className = "list-group-item list-group-item-success";
        checkBudgetNav.innerHTML = "<span class='glyphicon glyphicon-ok' aria-hidden='true'></span> Check Budget";
    } else if (checkBudgetStatus === "visited")
    {
        checkBudgetNav.className = "list-group-item";
        checkBudgetNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Check Budget";
    } else
    {
        checkBudgetNav.className = "list-group-item disabled";
        checkBudgetNav.innerHTML = "<span class='glyphicon glyphicon-remove' aria-hidden='true'></span> Check Budget";
    }

    if (resultsStatus === "complete")
    {
        resultsNav.className = "list-group-item list-group-item-success";
        resultsNav.innerHTML = "<span class='glyphicon glyphicon-ok' aria-hidden='true'></span> Results";
    } else if (resultsStatus === "visited")
    {
        resultsNav.className = "list-group-item";
    } else
    {
        resultsNav.className = "list-group-item disabled";
    }
}

function navigate(direction)
{
switch (direction)
    {
        case "start":
            startStatus = "complete";
            updateAll();
            incomeNav.className = "list-group-item active";
            hideAllDivs();
            incomeOp.style.display = "block";
            break;
        case "income_back":
            //incomeStatus = "visited";
            updateAll();
            overviewNav.className = "list-group-item active";
            hideAllDivs();
            overviewOp.style.display = "block";
            break;
        case "income_next":
            incomeStatus = "complete";
            updateAll();
            housingNav.className = "list-group-item active";
            hideAllDivs();
            housingOp.style.display = "block";
            $("#showHidePercent").show();
            break;
        case "housing_back":
            //housingStatus = "visited";
            updateAll();
            incomeNav.className = "list-group-item active";
            hideAllDivs();
            incomeOp.style.display = "block";
            break;
        case "housing_next":
            housingStatus = "complete";
            updateAll();
            foodNav.className = "list-group-item active";
            hideAllDivs();
            foodOp.style.display = "block";
            $("#showHidePercent").show();
            break;
        case "food_back":
            //foodStatus = "visited";
            updateAll();
            housingNav.className = "list-group-item active";
            hideAllDivs();
            housingOp.style.display = "block";
            $("#showHidePercent").show();
            break;
        case "food_next":
            foodStatus = "complete";
            updateAll();
            transNav.className = "list-group-item active";
            hideAllDivs();
            transOp.style.display = "block";
            $("#showHidePercent").show();
            break;
        case "trans_back":
            //transStatus = "visited";
            updateAll();
            foodNav.className = "list-group-item active";
            hideAllDivs();
            foodOp.style.display = "block";
            $("#showHidePercent").show();
            break;
        case "trans_next":
            transStatus = "complete";
            updateAll();
            medicalNav.className = "list-group-item active";
            hideAllDivs();
            medicalOp.style.display = "block";
            $("#showHidePercent").show();
            break;
        case "medical_back":
            //medicalStatus = "visited";
            updateAll();
            transNav.className = "list-group-item active";
            hideAllDivs();
            transOp.style.display = "block";
            $("#showHidePercent").show();
            break;
        case "medical_next":
            medicalStatus = "complete";
            updateAll();
            educationNav.className = "list-group-item active";
            hideAllDivs();
            educationOp.style.display = "block";
            $("#showHidePercent").show();
            break;
        case "education_back":
            //educationStatus = "visited";
            updateAll();
            medicalNav.className = "list-group-item active";
            hideAllDivs();
            medicalOp.style.display = "block";
            $("#showHidePercent").show();
            break;
        case "education_next":
            educationStatus = "complete";
            updateAll();
            childrenNav.className = "list-group-item active";
            hideAllDivs();
            childrenOp.style.display = "block";
            $("#showHidePercent").show();
            break;
        case "children_back":
            //childrenStatus = "visited";
            updateAll();
            educationNav.className = "list-group-item active";
            hideAllDivs();
            educationOp.style.display = "block";
            $("#showHidePercent").show();
            break;
        case "children_next":
            childrenStatus = "complete";
            updateAll();
            otherNav.className = "list-group-item active";
            hideAllDivs();
            otherOp.style.display = "block";
            $("#showHidePercent").show();
            break;
        case "other_back":
            //otherStatus = "visited";
            updateAll();
            childrenNav.className = "list-group-item active";
            hideAllDivs();
            childrenOp.style.display = "block";
            $("#showHidePercent").show();
            break;
        case "other_next":
            otherStatus = "complete";
            checkBudgetStatus = "visited";
            updateAll();
            checkBudgetNav.className = "list-group-item active";
            hideAllDivs();
            checkBudgetOp.style.display = "block";
            $("#showHidePercent").show();
            checkBudget();
            break;
        case "checkBudget_back":
            //otherStatus = "visited";
            updateAll();
            otherNav.className = "list-group-item active";
            hideAllDivs();
            otherOp.style.display = "block";
            $("#showHidePercent").show();
            break;
        case "checkBudget_next":
            checkBudgetStatus = "complete";
            resultsStatus = "visited";
            updateAll();
            resultsNav.className = "list-group-item active";
            hideAllDivs();
            resultsOp.style.display = "block";
            calculateEmergencySavings();
            $("#showHidePercent").show();
            break;
        case "results_back":           
            updateAll();
            checkBudgetNav.className = "list-group-item active";
            hideAllDivs();
            checkBudgetOp.style.display = "block";
            $("#showHidePercent").show();
            checkBudget();
            break;
        case "reset":
            var r = confirm("Are you sure you want to reset?");
            if (r == true) {
                location.reload();
            } else {
                //do nothing
            }
            break;
        default:
            break;
    }
    window.scrollTo(0, 0);
}

function printPage() {

    var x1 = 0;
    var x2= 0;
    var x3 = 220;
    var y1 = 0;
    var y2 = 0;
    var y3 = 0;
    var moneyX = 190;
    var doc = new jsPDF();
    doc.setDrawColor(128,0,0);
    var name = prompt('What is your name?');
    y1 += 20;
    doc.text(200, y1, name.toString(), null, null, 'right')

    doc.setFontSize(22);
    y1 += 10;
    doc.text(105, y1, 'Emergency Savings', null, null, 'center')
    
    x1 += 20;
    doc.setFontSize(16);
    y1 += 10;
    y2 +=33;
    doc.line(x2, y2, x3, y2);
    doc.text(x1, y1, 'Months of Savings Required:')
    doc.text(moneyX, y1, monthsEmergencySavingsRequired.toFixed(2) + " Months", null, null, 'right');
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    y1 += 10;
    doc.text(x1, y1, 'Total Emergency Savings Required:')
    doc.text(moneyX, y1, "$" + totalEmergencySavingsRequired.toFixed(2), null, null, 'right')
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    

    doc.setFontSize(22);
    y1 += 20;
    doc.text(105, y1, 'Monthly Totals', null, null, 'center')
    doc.setFontSize(16);
    y1 += 10;
    y2 +=20;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    doc.text(x1, y1, 'Monthly Budget Total:')
    doc.text(moneyX, y1, "$" + budgetTotal.toFixed(2), null, null, 'right')
    y1 += 10;
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    doc.text(x1, y1, 'Monthly Budget Required:')
    doc.text(moneyX, y1, "$" + budgetTotalRequired.toFixed(2), null, null, 'right')
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);

    doc.setFontSize(22);
    y1 += 20;
    doc.text(105, y1, 'Categorized Monthly Totals', null, null, 'center')

    doc.setFontSize(16);
    y1 += 10;
    y2 +=20;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    doc.text(x1, y1, 'Housing Total:')
    doc.text(moneyX, y1, "$" + housingTotal.toFixed(2), null, null, 'right')
    y1 += 10;
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    doc.text(x1, y1, 'Housing Total Required:')
    doc.text(moneyX, y1, "$" + housingTotalRequired.toFixed(2), null, null, 'right')
    y1 += 10;   
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    doc.text(x1, y1, 'Food Total:')
    doc.text(moneyX, y1, "$" + foodTotal.toFixed(2), null, null, 'right')
    y1 += 10;
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    doc.text(x1, y1, 'Food Total Required:')
    doc.text(moneyX, y1, "$" + housingTotalRequired.toFixed(2), null, null, 'right')
    y1 += 10;
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    doc.text(x1, y1, 'Transportation Total:')
    doc.text(moneyX, y1, "$" + transTotal.toFixed(2), null, null, 'right')
    y1 += 10;
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    doc.text(x1, y1, 'Transportation Total Required:')
    doc.text(moneyX, y1, "$" + transTotalRequired.toFixed(2), null, null, 'right')
    y1 += 10;
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    doc.text(x1, y1, 'Medical Total:')
    doc.text(moneyX, y1, "$" + medicalTotal.toFixed(2), null, null, 'right')
    y1 += 10;
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    doc.text(x1, y1, 'Medical Total Required:')
    doc.text(moneyX, y1, "$" + medicalTotalRequired.toFixed(2), null, null, 'right')
    y1 += 10;
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    doc.text(x1, y1, 'Education Total:')
    doc.text(moneyX, y1, "$" + eduTotal.toFixed(2), null, null, 'right')
    y1 += 10;
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    doc.text(x1, y1, 'Education Total Required:')
    doc.text(moneyX, y1, "$" + eduTotalRequired.toFixed(2), null, null, 'right')
    y1 += 10;
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    doc.text(x1, y1, 'Child Total:')
    doc.text(moneyX, y1, "$" + childTotal.toFixed(2), null, null, 'right')
    y1 += 10;
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    doc.text(x1, y1, 'Child Total Required:')
    doc.text(moneyX, y1, "$" + childTotalRequired.toFixed(2), null, null, 'right')
    y1 += 10;
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    doc.text(x1, y1, 'Other Total:')
    doc.text(moneyX, y1, "$" + otherTotal.toFixed(2), null, null, 'right')
    y1 += 10;
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    doc.text(x1, y1, 'Other Total Required:')
    doc.text(moneyX, y1, "$" + otherTotalRequired.toFixed(2), null, null, 'right')
    y2 +=10;
    //(x2, y2, x3, y3)
    doc.line(x2, y2, x3, y2);
    //doc.addPage()
  
    doc.save('a4.pdf')
                      

}


function checkInput(event)
{
 
    if (event.which != 8 && event.which != 0 && (event.which < 48 || event.which > 57)) {
        event.preventDefault();
    }
    
}

function checkInputIncome(event)
{

    var charCode = (event.which) ? event.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46)
    {
        event.preventDefault();
        return false;
    }

    return true;
}
