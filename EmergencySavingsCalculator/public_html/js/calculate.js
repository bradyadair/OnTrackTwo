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

window.onload = function() {
    
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
        resultsNav = document.getElementById("resultsNav");

		console.log("Loaded")
	//Housing Percentage Needed-------------------------------------------------------------------------------------------
	rentPercent = 100;
	electricityPercent = 90;
	gasPercent = 90;
	waterPercent = 100;
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

	$.ajax({
            'url': '../../api/v1/api.php?endpoint=entry&category=18',
            'method': 'GET',
            'dataType': 'json',
            'success': function (entries) {
                for (let entry_index = 0; entry_index < entries.length; entry_index++) {
                    console.log(entries[entry_index]['entryName'])

					switch(entries[entry_index]['entryName']) {
						case 'Housing_Rent':
							rentPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Housing_Electricity':
							electricityPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Housing_Gas':
							gasPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Housing_Water':
							waterPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Housing_Cable':
							 netflixPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Housing_Internet':
							 internetPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Housing_Entertainment':
							 entertainmentPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Housing_Other':
							 otherUtilitiesPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Housing_CellPhone':
							 cellPhonePercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Food_Groceries':
							 groceriesPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Food_Out':
							 eatingOutPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Food_Hygiene':
							 personalHygienePercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Food_Other':
							 groceriesOtherPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Trans_Insurance':
							 autoInsurancePercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Trans_Fuel':
							 autoFuelPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Trans_Public':
							 publicTransitPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Trans_Other':
							 transOtherPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Medical_Pocket':
							 medicalPocketPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Medical_Prescription':
							 medicalPrescriptionsPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Medical_Other':
							 medicalOtherPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Edu_Fees':
							 eduFeesPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Edu_Supplies':
							 eduSuppliesPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Edu_Other':
							 eduOtherPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Child_Care':
							 childCareExpensePercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Child_Support':
							 childSupportPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Child_Rec':
							 childRecreationPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Child_Cloth':
							 childClothingPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Child_Other':
							 childOtherPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Other_Memberships':
							 membershipsPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Other_Legal':
							 legalFeesPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Other_Charity':
							 donationsPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Other_Entertainment':
							 otherEntertainmentPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Other_Pets':
							 petsPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Other_Storage':
							 storagePercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Other_Shopping':
							  clothingPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Other_DebtConstructive':
							 constructiveDebtPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Other_DebtConsumer':
							 consumerDebtPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Other_Collections':
							 collectionsPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						case 'Other_Expenses':
							 otherExpensesPercent = parseInt(entries[entry_index]['entryValue'])
							break;
						default:
							break;
					}
					setElements()
                }
            },
            error: function(response){
                console.log(response);
				setElements()
            }
    });
	

	//savingsPercent = 0;
	//document.getElementById("savingsPercent").placeholder = savingsPercent +"%";


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
};

function setElements(){
	document.getElementById("rentPercent").placeholder = rentPercent +"%";
	
	document.getElementById("electricityPercent").placeholder = electricityPercent +"%";
	
	document.getElementById("gasPercent").placeholder = gasPercent +"%";
	
	document.getElementById("waterPercent").placeholder = waterPercent +"%";
	
	document.getElementById("netflixPercent").placeholder = netflixPercent +"%";
	
	document.getElementById("internetPercent").placeholder = internetPercent +"%";
	
	document.getElementById("entertainmentPercent").placeholder = entertainmentPercent +"%";
	
	document.getElementById("otherUtilitiesPercent").placeholder = otherUtilitiesPercent +"%";
	
	document.getElementById("cellPhonePercent").placeholder = cellPhonePercent +"%";
	//------------------------------------------------------------------------------------------------------------------------

	//Food Percentage Needed---------------------------------------------------------------------------------------------
	
	document.getElementById("groceriesPercent").placeholder = groceriesPercent +"%";

	
	document.getElementById("eatingOutPercent").placeholder = eatingOutPercent +"%";

	
	document.getElementById("personalHygienePercent").placeholder = personalHygienePercent +"%";

	
	document.getElementById("groceriesOtherPercent").placeholder = groceriesOtherPercent +"%";
	//-----------------------------------------------------------------------------------------------------------------------

	//Auto/Bus Percentage Needed--------------------------------------------------------------------------------------------
	
	document.getElementById("autoInsurancePercent").placeholder = autoInsurancePercent +"%";

	
	document.getElementById("autoFuelPercent").placeholder = autoFuelPercent +"%";

	
	document.getElementById("publicTransitPercent").placeholder = publicTransitPercent +"%";

	
	document.getElementById("transOtherPercent").placeholder = transOtherPercent +"%";
	//-------------------------------------------------------------------------------------------------------------------------

	//Medical Percentage Needed---------------------------------------------------------------------------------------------
	
	document.getElementById("medicalPocketPercent").placeholder = medicalPocketPercent +"%";

	
	document.getElementById("medicalPrescriptionsPercent").placeholder = medicalPrescriptionsPercent +"%";

	
	document.getElementById("medicalOtherPercent").placeholder = medicalOtherPercent +"%";

	//---------------------------------------------------------------------------------------------------------------------

	//Education Percentage Needed--------------------------------------------------------------------------------------------
	
	document.getElementById("eduFeesPercent").placeholder = eduFeesPercent +"%";

	
	document.getElementById("eduSuppliesPercent").placeholder = eduSuppliesPercent +"%";

	
	document.getElementById("eduOtherPercent").placeholder = eduOtherPercent +"%";

	//------------------------------------------------------------------------------------------------------------------------

	//Child Percentage Needed------------------------------------------------------------------------------------------------------
	
	document.getElementById("childCareExpensePercent").placeholder = childCareExpensePercent +"%";

	
	document.getElementById("childSupportPercent").placeholder = childSupportPercent +"%";

	
	document.getElementById("childRecreationPercent").placeholder = childRecreationPercent +"%";

	
	document.getElementById("childClothingPercent").placeholder = childClothingPercent +"%";

	
	document.getElementById("childOtherPercent").placeholder = childOtherPercent +"%";
	//--------------------------------------------------------------------------------------------------------------------------

	
	
	//Other Percentage Needed-------------------------------------------------------------------------------------------------
	document.getElementById("membershipsPercent").placeholder = membershipsPercent +"%";

	
	document.getElementById("legalFeesPercent").placeholder = legalFeesPercent +"%";

	
	document.getElementById("donationsPercent").placeholder = donationsPercent +"%";

	
	document.getElementById("otherEntertainmentPercent").placeholder = otherEntertainmentPercent +"%";

	
	document.getElementById("petsPercent").placeholder = petsPercent +"%";

	
	document.getElementById("storagePercent").placeholder = storagePercent +"%";

	
	document.getElementById("clothingPercent").placeholder = clothingPercent +"%";

	
	document.getElementById("constructiveDebtPercent").placeholder = constructiveDebtPercent +"%";

	
	document.getElementById("consumerDebtPercent").placeholder = consumerDebtPercent +"%";

	
	document.getElementById("collectionsPercent").placeholder = collectionsPercent +"%";

	
	document.getElementById("otherExpensesPercent").placeholder = otherExpensesPercent +"%";


	//hides show/hide calculations button at beginning
    $("#showHidePercent").hide();
    $(".percentNeeded").hide();

}

function showHidePercent()
{

	//Hide Percentage Needed Columns-------------------------------------------------------------------------------------------------
	$(".percentNeeded").toggle();
	
	/*
	$("#rentPercent").hide();
	$("#electricityPercent").hide();
	$("#gasPercent").hide();
	$("#waterPercent").hide();
	$("#netflixPercent").hide();
	$("#internetPercent").hide();
	$("#entertainmentPercent").hide();
	$("#otherUtilitiesPercent").hide();
	$("#cellPhonePercent").hide();
	$("#groceriesPercent").hide();
	$("#eatingOutPercent").hide();
	$("#personalHygienePercent").hide();
	$("#groceriesOtherPercent").hide();
	$("#autoInsurancePercent").hide();
	$("#autoFuelPercent").hide();
	$("#publicTransitPercent").hide();
	$("#transOtherPercent").hide();
	$("#medicalPocketPercent").hide();
	$("#medicalPrescriptionsPercent").hide();
	$("#medicalOtherPercent").hide();
	$("#eduFeesPercent").hide();
	$("#eduSuppliesPercent").hide();
	$("#eduOtherPercent").hide();
	$("#childCareExpensePercent").hide();
	$("#childSupportPercent").hide();
	$("#childRecreationPercent").hide();
	$("#childClothingPercent").hide();
	$("#childOtherPercent").hide();
	$("#membershipsPercent").hide();
	$("#legalFeesPercent").hide();
	$("#donationsPercent").hide();
	$("#otherEntertainmentPercent").hide();
	$("#petsPercent").hide();
	$("#storagePercent").hide();
	$("#clothingPercent").hide();
	$("#constructiveDebtPercent").hide();
	$("#consumerDebtPercent").hide();
	$("#collectionsPercent").hide();
	$("#otherExpensesPercent").hide();
	*/
	/////////---------------------------------------------------------------------------------------------------------------------------
}






	


//used to Calculate Client and Spouse Wages
function calculate() 
{
	//Calculate Client Wages---------------------------------------------------------------------------------------------------------------
	clientHours = 0;
	clientRate = 0;
	clientPRDeductions = 0;
	clientSelfEmployment=0;
	clientSocialSecurityRetirement=0;
	clientPension =0;
	clientAlimony =0;
	clientChildSupport=0;
	clientOtherIncome=0;
	
	if (document.getElementById("clientHours").value)
	{
		clientHours = document.getElementById("clientHours").value;
	}
	if (document.getElementById("clientRate").value)
	{
		clientRate = document.getElementById("clientRate").value;
	}
	clientWages = parseFloat(clientHours * clientRate *(4+(1/3)), 10);
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
		clientChildSupport= document.getElementById("clientChildSupport").value;
	}
	if (document.getElementById("clientOtherIncome").value)
	{
		clientOtherIncome = document.getElementById("clientOtherIncome").value;
	}


	document.getElementById("clientWages").placeholder = "$" +parseFloat(clientWages).toFixed(2);
	document.getElementById("clientNet").placeholder = "$"+ (parseFloat(clientWages)-parseFloat(clientPRDeductions)).toFixed(2);
	
    clientTotal = parseFloat(clientWages) +parseFloat(clientSelfEmployment) +parseFloat(clientSocialSecurityRetirement) +parseFloat(clientPension) +parseFloat(clientAlimony) +parseFloat(clientChildSupport) +parseFloat(clientOtherIncome);

	document.getElementById("clientTotal").placeholder = "$"+ clientTotal.toFixed(2);
	//-----------------------------------------------------------------------------------------------------------------------
	



	//Calculate Spouses Wages----------------------------------------------------------------------------------------------
	spouseHours = 0;
	spouseRate = 0;
	spousePRDeductions = 0;
	spouseSelfEmployment=0;
	spouseSocialSecurityRetirement=0;
	spousePension =0;
	spouseAlimony =0;
	spouseChildSupport=0;
	spouseOtherIncome=0;
	
	if (document.getElementById("spouseHours").value)
	{
		spouseHours = document.getElementById("spouseHours").value;
	}
	if (document.getElementById("spouseRate").value)
	{
		spouseRate = document.getElementById("spouseRate").value;
	}
	spouseWages = parseFloat(spouseHours * spouseRate *(4+(1/3)), 10);
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
		spouseChildSupport= document.getElementById("spouseChildSupport").value;
	}
	if (document.getElementById("spouseOtherIncome").value)
	{
		spouseOtherIncome = document.getElementById("spouseOtherIncome").value;
	}


	document.getElementById("spouseWages").placeholder = "$" +parseFloat(spouseWages).toFixed(2);
	document.getElementById("spouseNet").placeholder = "$"+ (parseFloat(spouseWages)-parseFloat(spousePRDeductions)).toFixed(2);
	
    spouseTotal = parseFloat(spouseWages) +parseFloat(spouseSelfEmployment) +parseFloat(spouseSocialSecurityRetirement) +parseFloat(spousePension) +parseFloat(spouseAlimony) +parseFloat(spouseChildSupport) +parseFloat(spouseOtherIncome);

	document.getElementById("spouseTotal").placeholder = "$"+ spouseTotal.toFixed(2);

	//---------------------------------------------------------------------------------------------------------------------------
}














function calculateHousing() 
{
	rent = 0;
	if (document.getElementById("rent").value)
	{
		rent = document.getElementById("rent").value;
	}
	rentRequired = parseFloat(rent*(rentPercent/100));
	document.getElementById("rentRequired").placeholder = "$" +rentRequired.toFixed(2);

	electricity = 0;
	if (document.getElementById("electricity").value)
	{
		electricity = document.getElementById("electricity").value;
	}
	electricityRequired = parseFloat(electricity*(electricityPercent/100));
	document.getElementById("electricityRequired").placeholder = "$" +electricityRequired.toFixed(2);

	gas = 0;
	if (document.getElementById("gas").value)
	{
		gas = document.getElementById("gas").value;
	}
	gasRequired = parseFloat(gas*(gasPercent/100));
	document.getElementById("gasRequired").placeholder = "$" +gasRequired.toFixed(2);

	water = 0;
	if (document.getElementById("water").value)
	{
		water = document.getElementById("water").value;
	}
	waterRequired = parseFloat(water*(waterPercent/100));
	document.getElementById("waterRequired").placeholder = "$" +waterRequired.toFixed(2);

	netflix = 0;
	if (document.getElementById("netflix").value)
	{
		netflix = document.getElementById("netflix").value;
	}
	netflixRequired = parseFloat(netflix*(netflixPercent/100));
	document.getElementById("netflixRequired").placeholder = "$" +netflixRequired.toFixed(2);

	internet = 0;
	if (document.getElementById("internet").value)
	{
		internet = document.getElementById("internet").value;
	}
	internetRequired = parseFloat(internet*(internetPercent/100));
	document.getElementById("internetRequired").placeholder = "$" +internetRequired.toFixed(2);

	entertainment = 0;
	if (document.getElementById("entertainment").value)
	{
		entertainment = document.getElementById("entertainment").value;
	}
	entertainmentRequired = parseFloat(entertainment*(entertainmentPercent/100));
	document.getElementById("entertainmentRequired").placeholder = "$" +entertainmentRequired.toFixed(2);

	otherUtilities = 0;
	if (document.getElementById("otherUtilities").value)
	{
		otherUtilities = document.getElementById("otherUtilities").value;
	}
	otherUtilitiesRequired = parseFloat(otherUtilities*(otherUtilitiesPercent/100));
	document.getElementById("otherUtilitiesRequired").placeholder = "$" +otherUtilitiesRequired.toFixed(2);

	cellPhone = 0;
	if (document.getElementById("cellPhone").value)
	{
		cellPhone = document.getElementById("cellPhone").value;
	}
	cellPhoneRequired = parseFloat(cellPhone*(cellPhonePercent/100));
	document.getElementById("cellPhoneRequired").placeholder = "$" +cellPhoneRequired.toFixed(2);

}


function calculateFood() 
{

	groceries = 0;
	if (document.getElementById("groceries").value)
	{
		groceries = document.getElementById("groceries").value;
	}
	groceriesRequired = parseFloat(groceries*(groceriesPercent/100));
	document.getElementById("groceriesRequired").placeholder = "$" +groceriesRequired.toFixed(2);

	eatingOut = 0;
	if (document.getElementById("eatingOut").value)
	{
		eatingOut = document.getElementById("eatingOut").value;
	}
	eatingOutRequired = parseFloat(eatingOut*(eatingOutPercent/100));
	document.getElementById("eatingOutRequired").placeholder = "$" +eatingOutRequired.toFixed(2);

	personalHygiene = 0;
	if (document.getElementById("personalHygiene").value)
	{
		personalHygiene = document.getElementById("personalHygiene").value;
	}
	personalHygieneRequired = parseFloat(personalHygiene*(personalHygienePercent/100));
	document.getElementById("personalHygieneRequired").placeholder = "$" +personalHygieneRequired.toFixed(2);

	groceriesOther = 0;
	if (document.getElementById("groceriesOther").value)
	{
		groceriesOther = document.getElementById("groceriesOther").value;
	}
	groceriesOtherRequired = parseFloat(groceriesOther*(groceriesOtherPercent/100));
	document.getElementById("groceriesOtherRequired").placeholder = "$" +groceriesOtherRequired.toFixed(2);

}


function calculateAuto() 
{


	autoInsurance = 0;
	if (document.getElementById("autoInsurance").value)
	{
		autoInsurance = document.getElementById("autoInsurance").value;
	}
	autoInsuranceRequired = parseFloat(autoInsurance*(autoInsurancePercent/100));
	document.getElementById("autoInsuranceRequired").placeholder = "$" +autoInsuranceRequired.toFixed(2);

	autoFuel = 0;
	if (document.getElementById("autoFuel").value)
	{
		autoFuel = document.getElementById("autoFuel").value;
	}
	autoFuelRequired = parseFloat(autoFuel*(autoFuelPercent/100));
	document.getElementById("autoFuelRequired").placeholder = "$" +autoFuelRequired.toFixed(2);

	publicTransit = 0;
	if (document.getElementById("publicTransit").value)
	{
		publicTransit = document.getElementById("publicTransit").value;
	}
	publicTransitRequired = parseFloat(publicTransit*(publicTransitPercent/100));
	document.getElementById("publicTransitRequired").placeholder = "$" +publicTransitRequired.toFixed(2);

	transOther = 0;
	if (document.getElementById("transOther").value)
	{
		transOther = document.getElementById("transOther").value;
	}
	transOtherRequired = parseFloat(transOther*(transOtherPercent/100));
	document.getElementById("transOtherRequired").placeholder = "$" +transOtherRequired.toFixed(2);
}



function calculateMedical() 
{
	medicalPocket = 0;
	if (document.getElementById("medicalPocket").value)
	{
		medicalPocket = document.getElementById("medicalPocket").value;
	}
	medicalPocketRequired = parseFloat(medicalPocket*(medicalPocketPercent/100));
	document.getElementById("medicalPocketRequired").placeholder = "$" +medicalPocketRequired.toFixed(2);

	medicalPrescriptions = 0;
	if (document.getElementById("medicalPrescriptions").value)
	{
		medicalPrescriptions = document.getElementById("medicalPrescriptions").value;
	}
	medicalPrescriptionsRequired = parseFloat(medicalPrescriptions*(medicalPrescriptionsPercent/100));
	document.getElementById("medicalPrescriptionsRequired").placeholder = "$" +medicalPrescriptionsRequired.toFixed(2);


	medicalOther = 0;
	if (document.getElementById("medicalOther").value)
	{
		medicalOther = document.getElementById("medicalOther").value;
	}
	medicalOtherRequired = parseFloat(medicalOther*(medicalOtherPercent/100));
	document.getElementById("medicalOtherRequired").placeholder = "$" +medicalOtherRequired.toFixed(2);
}





function calculateEducation() 
{

	eduFees = 0;
	if (document.getElementById("eduFees").value)
	{
		eduFees = document.getElementById("eduFees").value;
	}
	eduFeesRequired = parseFloat(eduFees*(eduFeesPercent/100));
	document.getElementById("eduFeesRequired").placeholder = "$" +eduFeesRequired.toFixed(2);

	eduSupplies = 0;
	if (document.getElementById("eduSupplies").value)
	{
		eduSupplies = document.getElementById("eduSupplies").value;
	}
	eduSuppliesRequired = parseFloat(eduSupplies*(eduSuppliesPercent/100));
	document.getElementById("eduSuppliesRequired").placeholder = "$" +eduSuppliesRequired.toFixed(2);

	eduOther = 0;
	if (document.getElementById("eduOther").value)
	{
		eduOther = document.getElementById("eduOther").value;
	}
	eduOtherRequired = parseFloat(eduOther*(eduOtherPercent/100));
	document.getElementById("eduOtherRequired").placeholder = "$" +eduOtherRequired.toFixed(2);

}


function calculateChild() 
{
	childCareExpense = 0;
	if (document.getElementById("childCareExpense").value)
	{
		childCareExpense = document.getElementById("childCareExpense").value;
	}
	childCareExpenseRequired = parseFloat(childCareExpense*(childCareExpensePercent/100));
	document.getElementById("childCareExpenseRequired").placeholder = "$" +childCareExpenseRequired.toFixed(2);

	childSupport = 0;
	if (document.getElementById("childSupport").value)
	{
		childSupport = document.getElementById("childSupport").value;
	}
	childSupportRequired = parseFloat(childSupport*(childSupportPercent/100));
	document.getElementById("childSupportRequired").placeholder = "$" +childSupportRequired.toFixed(2);

	childRecreation = 0;
	if (document.getElementById("childRecreation").value)
	{
		childRecreation = document.getElementById("childRecreation").value;
	}
	childRecreationRequired = parseFloat(childRecreation*(childRecreationPercent/100));
	document.getElementById("childRecreationRequired").placeholder = "$" +childRecreationRequired.toFixed(2);

	childClothing = 0;
	if (document.getElementById("childClothing").value)
	{
		childClothing = document.getElementById("childClothing").value;
	}
	childClothingRequired = parseFloat(childClothing*(childClothingPercent/100));
	document.getElementById("childClothingRequired").placeholder = "$" +childClothingRequired.toFixed(2);

	childOther = 0;
	if (document.getElementById("childOther").value)
	{
		childOther = document.getElementById("childOther").value;
	}
	childOtherRequired = parseFloat(childOther*(childOtherPercent/100));
	document.getElementById("childOtherRequired").placeholder = "$" +childOtherRequired.toFixed(2);
}




function calculateOther() 
{

	memberships = 0;
	if (document.getElementById("memberships").value)
	{
		memberships = document.getElementById("memberships").value;
	}
	membershipsRequired = parseFloat(memberships*(membershipsPercent/100));
	document.getElementById("membershipsRequired").placeholder = "$" +membershipsRequired.toFixed(2);


	legalFees = 0;
	if (document.getElementById("legalFees").value)
	{
		legalFees = document.getElementById("legalFees").value;
	}
	legalFeesRequired = parseFloat(legalFees*(legalFeesPercent/100));
	document.getElementById("legalFeesRequired").placeholder = "$" +legalFeesRequired.toFixed(2);


	donations = 0;
	if (document.getElementById("donations").value)
	{
		donations = document.getElementById("donations").value;
	}
	donationsRequired = parseFloat(donations*(donationsPercent/100));
	document.getElementById("donationsRequired").placeholder = "$" +donationsRequired.toFixed(2);


	otherEntertainment = 0;
	if (document.getElementById("otherEntertainment").value)
	{
		otherEntertainment = document.getElementById("otherEntertainment").value;
	}
	otherEntertainmentRequired = parseFloat(otherEntertainment*(otherEntertainmentPercent/100));
	document.getElementById("otherEntertainmentRequired").placeholder = "$" +otherEntertainmentRequired.toFixed(2);


	pets = 0;
	if (document.getElementById("pets").value)
	{
		pets = document.getElementById("pets").value;
	}
	petsRequired = parseFloat(pets*(petsPercent/100));
	document.getElementById("petsRequired").placeholder = "$" +petsRequired.toFixed(2);


	storage = 0;
	if (document.getElementById("storage").value)
	{
		storage = document.getElementById("storage").value;
	}
	storageRequired = parseFloat(storage*(storagePercent/100));
	document.getElementById("storageRequired").placeholder = "$" +storageRequired.toFixed(2);


	clothing = 0;
	if (document.getElementById("clothing").value)
	{
		clothing = document.getElementById("clothing").value;
	}
	clothingRequired = parseFloat(clothing*(clothingPercent/100));
	document.getElementById("clothingRequired").placeholder = "$" +clothingRequired.toFixed(2);


	constructiveDebt = 0;
	if (document.getElementById("constructiveDebt").value)
	{
		constructiveDebt = document.getElementById("constructiveDebt").value;
	}
	constructiveDebtRequired = parseFloat(constructiveDebt*(constructiveDebtPercent/100));
	document.getElementById("constructiveDebtRequired").placeholder = "$" +constructiveDebtRequired.toFixed(2);


	consumerDebt = 0;
	if (document.getElementById("consumerDebt").value)
	{
		consumerDebt = document.getElementById("consumerDebt").value;
	}
	consumerDebtRequired = parseFloat(consumerDebt*(consumerDebtPercent/100));
	document.getElementById("consumerDebtRequired").placeholder = "$" +consumerDebtRequired.toFixed(2);


	collections = 0;
	if (document.getElementById("collections").value)
	{
		collections = document.getElementById("collections").value;
	}
	collectionsRequired = parseFloat(collections*(collectionsPercent/100));
	document.getElementById("collectionsRequired").placeholder = "$" +collectionsRequired.toFixed(2);


	otherExpenses = 0;
	if (document.getElementById("otherExpenses").value)
	{
		otherExpenses = document.getElementById("otherExpenses").value;
	}
	otherExpensesRequired = parseFloat(otherExpenses*(otherExpensesPercent/100));
	document.getElementById("otherExpensesRequired").placeholder = "$" +otherExpensesRequired.toFixed(2);

/*
	savings = 0;
	if (document.getElementById("savings").value)
	{
		savings = document.getElementById("savings").value;
	}
	savingsRequired = parseFloat(savings*(savingsPercent/100));
	document.getElementById("savingsRequired").placeholder = "$" +savingsRequired;
*/
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
	clientHouseholdPercent = (clientTotal/(clientTotal+spouseTotal))*100;
	spouseHouseholdPercent = ((spouseTotal/(clientTotal+spouseTotal))*100);

	document.getElementById("clientFinalTotalIncome").placeholder = '$' + clientTotal.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	document.getElementById("spouseFinalTotalIncome").placeholder = '$' + spouseTotal.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	document.getElementById("householdIncome").placeholder = '$' +(clientTotal + spouseTotal).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	
	if (clientHouseholdPercent)
	{
		document.getElementById("clientHouseholdPercent").placeholder = clientHouseholdPercent.toFixed(2)+"%";
	}
	else
	{
		document.getElementById("clientHouseholdPercent").placeholder = (0).toFixed(2)+"%";
	}

	if (spouseHouseholdPercent)
	{
		document.getElementById("spouseHouseholdPercent").placeholder = spouseHouseholdPercent.toFixed(2)+"%";
	}
	else
	{
		document.getElementById("spouseHouseholdPercent").placeholder = (0).toFixed(2)+"%";
	}
	
	document.getElementById("householdPercent").value = "N/A";

	if ((clientTotal/(clientTotal+spouseTotal))*100-50 >0)
	{
		clientFinalAboveFifty = ((clientTotal/(clientTotal+spouseTotal))*100-50)
		document.getElementById("clientFinalAboveFifty").placeholder = clientFinalAboveFifty.toFixed(2)+"%";
	}
	else
	{
		
		document.getElementById("clientFinalAboveFifty").placeholder = clientFinalAboveFifty.toFixed(2)+"%";
	}

	if ((spouseTotal/(clientTotal+spouseTotal))*100-50 >0)
	{
		spouseFinalAboveFifty = ((spouseTotal/(clientTotal+spouseTotal))*100-50)
		document.getElementById("spouseFinalAboveFifty").placeholder = spouseFinalAboveFifty.toFixed(2)+"%";
	}
	else
	{	
		document.getElementById("spouseFinalAboveFifty").placeholder = spouseFinalAboveFifty.toFixed(2)+"%";
	}

	householdAboveFifty = clientFinalAboveFifty +  spouseFinalAboveFifty
	document.getElementById("householdAboveFifty").placeholder = householdAboveFifty.toFixed(2)+"%";


	
	percentOfFifty = householdAboveFifty*2;
	document.getElementById("percentOfFifty").placeholder = percentOfFifty.toFixed(2)+"%";
	percentOfFiftyTimesThree = ((householdAboveFifty*2)/100*3+3);
	document.getElementById("percentOfFiftyTimesThree").placeholder = percentOfFiftyTimesThree.toFixed(2) + " Months";

	budgetTotal = parseFloat(rent) + parseFloat(electricity)+ parseFloat(gas)+parseFloat(water)+ parseFloat(netflix)+parseFloat(internet)+parseFloat(entertainment)+ parseFloat(otherUtilities )+parseFloat(cellPhone)+parseFloat(groceries) +parseFloat(eatingOut)+parseFloat(personalHygiene)+parseFloat(groceriesOther)+parseFloat(autoInsurance)+parseFloat(autoFuel)+parseFloat(publicTransit)+parseFloat(transOther)+parseFloat(medicalPocket)+parseFloat(medicalPrescriptions)+parseFloat(medicalOther)+parseFloat(eduFees)+parseFloat(eduSupplies)+parseFloat(eduOther)+parseFloat(childCareExpense)+parseFloat(childSupport)+parseFloat(childRecreation)+parseFloat(childClothing)+parseFloat(childOther)+parseFloat(memberships)+parseFloat(legalFees)+parseFloat(donations)+parseFloat(otherEntertainment)+parseFloat(pets)+parseFloat(storage)+parseFloat(clothing)+parseFloat(constructiveDebt)+parseFloat(consumerDebt)+parseFloat(collections)+parseFloat(otherExpenses)
	document.getElementById("budgetTotal").placeholder = "$" +budgetTotal.toFixed(2);
	
	budgetTotalRequired= parseFloat(rentRequired) + parseFloat(electricityRequired)+ parseFloat(gasRequired)+parseFloat(waterRequired) +parseFloat(netflixRequired)+parseFloat(internetRequired)+parseFloat(entertainmentRequired)+ parseFloat(otherUtilitiesRequired )+parseFloat(cellPhoneRequired)+parseFloat(groceriesRequired) +parseFloat(eatingOutRequired)+parseFloat(personalHygieneRequired)+parseFloat(groceriesOtherRequired)+parseFloat(autoInsuranceRequired)+parseFloat(autoFuelRequired)+parseFloat(publicTransitRequired)+parseFloat(transOtherRequired)+parseFloat(medicalPocketRequired)+parseFloat(medicalPrescriptionsRequired)+parseFloat(medicalOtherRequired)+parseFloat(eduFeesRequired)+parseFloat(eduSuppliesRequired)+parseFloat(eduOtherRequired)+parseFloat(childCareExpenseRequired)+parseFloat(childSupportRequired)+parseFloat(childRecreationRequired)+parseFloat(childClothingRequired)+parseFloat(childOtherRequired)+parseFloat(memberships)+parseFloat(legalFeesRequired)+parseFloat(donationsRequired)+parseFloat(otherEntertainmentRequired)+parseFloat(petsRequired)+parseFloat(storageRequired)+parseFloat(clothingRequired)+parseFloat(constructiveDebtRequired)+parseFloat(consumerDebtRequired)+parseFloat(collectionsRequired)+parseFloat(otherExpensesRequired);
	document.getElementById("budgetTotalRequired").placeholder = "$" + budgetTotalRequired.toFixed(2);

	monthsEmergencySavingsRequired = percentOfFiftyTimesThree;
	document.getElementById("monthsEmergencySavingsRequired").placeholder = monthsEmergencySavingsRequired.toFixed(2) + " Months";
	totalEmergencySavingsRequired = (monthsEmergencySavingsRequired * budgetTotalRequired);
	document.getElementById("totalEmergencySavingsRequired").placeholder = totalEmergencySavingsRequired.toFixed(2);

}

//flow functions
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

    $("#showHidePercent").show();
}

function food_click()
{
    hideAllDivs();
    foodOp.style.display = "block";
    foodNav.className = "list-group-item active";

    $("#showHidePercent").show();
}

function trans_click()
{
    hideAllDivs();
    transOp.style.display = "block";
    transNav.className = "list-group-item active";

    $("#showHidePercent").show();
}

function medical_click()
{
    hideAllDivs();
    medicalOp.style.display = "block";
    medicalNav.className = "list-group-item active";

    $("#showHidePercent").show();
}

function education_click()
{
    hideAllDivs();
    educationOp.style.display = "block";
    educationNav.className = "list-group-item active";

    $("#showHidePercent").show();
}

function children_click()
{
    hideAllDivs();
    childrenOp.style.display = "block";
    childrenNav.className = "list-group-item active";

    $("#showHidePercent").show();
}

function other_click()
{
    hideAllDivs();
    otherOp.style.display = "block";
    otherNav.className = "list-group-item active";

    $("#showHidePercent").show();
}

function results_click()
{
    hideAllDivs();
    resultsOp.style.display = "block";
    resultsNav.className = "list-group-item active";
    calculateEmergencySavings();

    $("#showHidePercent").show();
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

    $("#showHidePercent").hide();
    $(".percentNeeded").hide();
}
