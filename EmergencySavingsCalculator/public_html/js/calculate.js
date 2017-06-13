window.onload = function(){

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


	document.getElementById("clientWages").value = parseFloat(clientWages);
	document.getElementById("clientNet").value = parseFloat(clientWages)-parseFloat(clientPRDeductions);
	
    clientTotal = clientWages +parseFloat(clientSelfEmployment) +parseFloat(clientSocialSecurityRetirement) +parseFloat(clientPension) +parseFloat(clientAlimony) +parseFloat(clientChildSupport) +parseFloat(clientOtherIncome);

	document.getElementById("clientTotal").value = clientTotal;
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
	spouseWages = parseFloat(spouseHours * spouseRate *4.333333333333333, 10);
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


	document.getElementById("spouseWages").value = parseFloat(spouseWages);
	document.getElementById("spouseNet").value = parseFloat(spouseWages)-parseFloat(spousePRDeductions);
	
    spouseTotal = spouseWages +parseFloat(spouseSelfEmployment) +parseFloat(spouseSocialSecurityRetirement) +parseFloat(spousePension) +parseFloat(spouseAlimony) +parseFloat(spouseChildSupport) +parseFloat(spouseOtherIncome);

	document.getElementById("spouseTotal").value = spouseTotal;
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
	document.getElementById("rentRequired").value = rentRequired;

	electricity = 0;
	if (document.getElementById("electricity").value)
	{
		electricity = document.getElementById("electricity").value;
	}
	electricityRequired = parseFloat(electricity*(electricityPercent/100));
	document.getElementById("electricityRequired").value = electricityRequired;

	gas = 0;
	if (document.getElementById("gas").value)
	{
		gas = document.getElementById("gas").value;
	}
	gasRequired = parseFloat(gas*(gasPercent/100));
	document.getElementById("gasRequired").value = gasRequired;

	water = 0;
	if (document.getElementById("water").value)
	{
		water = document.getElementById("water").value;
	}
	waterRequired = parseFloat(water*(waterPercent/100));
	document.getElementById("waterRequired").value = waterRequired;

	netflix = 0;
	if (document.getElementById("netflix").value)
	{
		netflix = document.getElementById("netflix").value;
	}
	netflixRequired = parseFloat(netflix*(netflixPercent/100));
	document.getElementById("netflixRequired").value = netflixRequired;

	internet = 0;
	if (document.getElementById("internet").value)
	{
		internet = document.getElementById("internet").value;
	}
	internetRequired = parseFloat(internet*(internetPercent/100));
	document.getElementById("internetRequired").value = internetRequired;

	entertainment = 0;
	if (document.getElementById("entertainment").value)
	{
		entertainment = document.getElementById("entertainment").value;
	}
	entertainmentRequired = parseFloat(entertainment*(entertainmentPercent/100));
	document.getElementById("entertainmentRequired").value = entertainmentRequired;

	otherUtilities = 0;
	if (document.getElementById("otherUtilities").value)
	{
		otherUtilities = document.getElementById("otherUtilities").value;
	}
	otherUtilitiesRequired = parseFloat(otherUtilities*(otherUtilitiesPercent/100));
	document.getElementById("otherUtilitiesRequired").value = otherUtilitiesRequired;

	cellPhone = 0;
	if (document.getElementById("cellPhone").value)
	{
		cellPhone = document.getElementById("cellPhone").value;
	}
	cellPhoneRequired = parseFloat(cellPhone*(cellPhonePercent/100));
	document.getElementById("cellPhoneRequired").value = cellPhoneRequired;

}


function calculateFood() 
{

	groceries = 0;
	if (document.getElementById("groceries").value)
	{
		groceries = document.getElementById("groceries").value;
	}
	groceriesRequired = parseFloat(groceries*(groceriesPercent/100));
	document.getElementById("groceriesRequired").value = groceriesRequired;

	eatingOut = 0;
	if (document.getElementById("eatingOut").value)
	{
		eatingOut = document.getElementById("eatingOut").value;
	}
	eatingOutRequired = parseFloat(eatingOut*(eatingOutPercent/100));
	document.getElementById("eatingOutRequired").value = eatingOutRequired;

	personalHygiene = 0;
	if (document.getElementById("personalHygiene").value)
	{
		personalHygiene = document.getElementById("personalHygiene").value;
	}
	personalHygieneRequired = parseFloat(personalHygiene*(personalHygienePercent/100));
	document.getElementById("personalHygieneRequired").value = personalHygieneRequired;

	groceriesOther = 0;
	if (document.getElementById("groceriesOther").value)
	{
		groceriesOther = document.getElementById("groceriesOther").value;
	}
	groceriesOtherRequired = parseFloat(groceriesOther*(groceriesOtherPercent/100));
	document.getElementById("groceriesOtherRequired").value = groceriesOtherRequired;

}


function calculateAuto() 
{


	autoInsurance = 0;
	if (document.getElementById("autoInsurance").value)
	{
		autoInsurance = document.getElementById("autoInsurance").value;
	}
	autoInsuranceRequired = parseFloat(autoInsurance*(autoInsurancePercent/100));
	document.getElementById("autoInsuranceRequired").value = autoInsuranceRequired;

	autoFuel = 0;
	if (document.getElementById("autoFuel").value)
	{
		autoFuel = document.getElementById("autoFuel").value;
	}
	autoFuelRequired = parseFloat(autoFuel*(autoFuelPercent/100));
	document.getElementById("autoFuelRequired").value = autoFuelRequired;

	publicTransit = 0;
	if (document.getElementById("publicTransit").value)
	{
		publicTransit = document.getElementById("publicTransit").value;
	}
	publicTransitRequired = parseFloat(publicTransit*(publicTransitPercent/100));
	document.getElementById("publicTransitRequired").value = publicTransitRequired;

	transOther = 0;
	if (document.getElementById("transOther").value)
	{
		transOther = document.getElementById("transOther").value;
	}
	transOtherRequired = parseFloat(transOther*(transOtherPercent/100));
	document.getElementById("transOtherRequired").value = transOtherRequired;
}



function calculateMedical() 
{
	medicalPocket = 0;
	if (document.getElementById("medicalPocket").value)
	{
		medicalPocket = document.getElementById("medicalPocket").value;
	}
	medicalPocketRequired = parseFloat(medicalPocket*(medicalPocketPercent/100));
	document.getElementById("medicalPocketRequired").value = medicalPocketRequired;

	medicalPrescriptions = 0;
	if (document.getElementById("medicalPrescriptions").value)
	{
		medicalPrescriptions = document.getElementById("medicalPrescriptions").value;
	}
	medicalPrescriptionsRequired = parseFloat(medicalPrescriptions*(medicalPrescriptionsPercent/100));
	document.getElementById("medicalPrescriptionsRequired").value = medicalPrescriptionsRequired;


	medicalOther = 0;
	if (document.getElementById("medicalOther").value)
	{
		medicalOther = document.getElementById("medicalOther").value;
	}
	medicalOtherRequired = parseFloat(medicalOther*(medicalOtherPercent/100));
	document.getElementById("medicalOtherRequired").value = medicalOtherRequired;
}





function calculateEducation() 
{

	eduFees = 0;
	if (document.getElementById("eduFees").value)
	{
		eduFees = document.getElementById("eduFees").value;
	}
	eduFeesRequired = parseFloat(eduFees*(eduFeesPercent/100));
	document.getElementById("eduFeesRequired").value = eduFeesRequired;

	eduSupplies = 0;
	if (document.getElementById("eduSupplies").value)
	{
		eduSupplies = document.getElementById("eduSupplies").value;
	}
	eduSuppliesRequired = parseFloat(eduSupplies*(eduSuppliesPercent/100));
	document.getElementById("eduSuppliesRequired").value = eduSuppliesRequired;

	eduOther = 0;
	if (document.getElementById("eduOther").value)
	{
		eduOther = document.getElementById("eduOther").value;
	}
	eduOtherRequired = parseFloat(eduOther*(eduOtherPercent/100));
	document.getElementById("eduOtherRequired").value = eduOtherRequired;

}


function calculateChild() 
{
	childCareExpense = 0;
	if (document.getElementById("childCareExpense").value)
	{
		childCareExpense = document.getElementById("childCareExpense").value;
	}
	childCareExpenseRequired = parseFloat(childCareExpense*(childCareExpensePercent/100));
	document.getElementById("childCareExpenseRequired").value = childCareExpenseRequired;

	childSupport = 0;
	if (document.getElementById("childSupport").value)
	{
		childSupport = document.getElementById("childSupport").value;
	}
	childSupportRequired = parseFloat(childSupport*(childSupportPercent/100));
	document.getElementById("childSupportRequired").value = childSupportRequired;

	childRecreation = 0;
	if (document.getElementById("childRecreation").value)
	{
		childRecreation = document.getElementById("childRecreation").value;
	}
	childRecreationRequired = parseFloat(childRecreation*(childRecreationPercent/100));
	document.getElementById("childRecreationRequired").value = childRecreationRequired;

	childClothing = 0;
	if (document.getElementById("childClothing").value)
	{
		childClothing = document.getElementById("childClothing").value;
	}
	childClothingRequired = parseFloat(childClothing*(childClothingPercent/100));
	document.getElementById("childClothingRequired").value = childClothingRequired;

	childOther = 0;
	if (document.getElementById("childOther").value)
	{
		childOther = document.getElementById("childOther").value;
	}
	childOtherRequired = parseFloat(childOther*(childOtherPercent/100));
	document.getElementById("childOtherRequired").value = childOtherRequired;
}




function calculateOther() 
{

	memberships = 0;
	if (document.getElementById("memberships").value)
	{
		memberships = document.getElementById("memberships").value;
	}
	membershipsRequired = parseFloat(memberships*(membershipsPercent/100));
	document.getElementById("membershipsRequired").value = membershipsRequired;


	legalFees = 0;
	if (document.getElementById("legalFees").value)
	{
		legalFees = document.getElementById("legalFees").value;
	}
	legalFeesRequired = parseFloat(legalFees*(legalFeesPercent/100));
	document.getElementById("legalFeesRequired").value = legalFeesRequired;


	donations = 0;
	if (document.getElementById("donations").value)
	{
		donations = document.getElementById("donations").value;
	}
	donationsRequired = parseFloat(donations*(donationsPercent/100));
	document.getElementById("donationsRequired").value = donationsRequired;


	otherEntertainment = 0;
	if (document.getElementById("otherEntertainment").value)
	{
		otherEntertainment = document.getElementById("otherEntertainment").value;
	}
	otherEntertainmentRequired = parseFloat(otherEntertainment*(otherEntertainmentPercent/100));
	document.getElementById("otherEntertainmentRequired").value = otherEntertainmentRequired;


	pets = 0;
	if (document.getElementById("pets").value)
	{
		pets = document.getElementById("pets").value;
	}
	petsRequired = parseFloat(pets*(petsPercent/100));
	document.getElementById("petsRequired").value = petsRequired;


	storage = 0;
	if (document.getElementById("storage").value)
	{
		storage = document.getElementById("storage").value;
	}
	storageRequired = parseFloat(storage*(storagePercent/100));
	document.getElementById("storageRequired").value = storageRequired;


	clothing = 0;
	if (document.getElementById("clothing").value)
	{
		clothing = document.getElementById("clothing").value;
	}
	clothingRequired = parseFloat(clothing*(clothingPercent/100));
	document.getElementById("clothingRequired").value = clothingRequired;


	constructiveDebt = 0;
	if (document.getElementById("constructiveDebt").value)
	{
		constructiveDebt = document.getElementById("constructiveDebt").value;
	}
	constructiveDebtRequired = parseFloat(constructiveDebt*(constructiveDebtPercent/100));
	document.getElementById("constructiveDebtRequired").value = constructiveDebtRequired;


	consumerDebt = 0;
	if (document.getElementById("consumerDebt").value)
	{
		consumerDebt = document.getElementById("consumerDebt").value;
	}
	consumerDebtRequired = parseFloat(consumerDebt*(consumerDebtPercent/100));
	document.getElementById("consumerDebtRequired").value = consumerDebtRequired;


	collections = 0;
	if (document.getElementById("collections").value)
	{
		collections = document.getElementById("collections").value;
	}
	collectionsRequired = parseFloat(collections*(collectionsPercent/100));
	document.getElementById("collectionsRequired").value = collectionsRequired;


	otherExpenses = 0;
	if (document.getElementById("otherExpenses").value)
	{
		otherExpenses = document.getElementById("otherExpenses").value;
	}
	otherExpensesRequired = parseFloat(otherExpenses*(otherExpensesPercent/100));
	document.getElementById("otherExpensesRequired").value = otherExpensesRequired;

/*
	savings = 0;
	if (document.getElementById("savings").value)
	{
		savings = document.getElementById("savings").value;
	}
	savingsRequired = parseFloat(savings*(savingsPercent/100));
	document.getElementById("savingsRequired").value = savingsRequired;
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

	document.getElementById("clientFinalTotalIncome").value = '$' + clientTotal.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	document.getElementById("spouseFinalTotalIncome").value = '$' + spouseTotal.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	document.getElementById("householdIncome").value = '$' +(clientTotal + spouseTotal).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	document.getElementById("clientHouseholdPercent").value = (clientTotal/(clientTotal+spouseTotal))*100;
	document.getElementById("spouseHouseholdPercent").value = (spouseTotal/(clientTotal+spouseTotal))*100;
	document.getElementById("householdPercent").value = "N/A";

	if ((clientTotal/(clientTotal+spouseTotal))*100-50 >0)
	{
		document.getElementById("clientFinalAboveFifty").value = (clientTotal/(clientTotal+spouseTotal))*100-50;
	}
	else
	{
		clientAboveFifty = 0;
		document.getElementById("clientFinalAboveFifty").value = clientAboveFifty;
	}

	if ((spouseTotal/(clientTotal+spouseTotal))*100-50 >0)
	{
		document.getElementById("spouseFinalAboveFifty").value = (spouseTotal/(clientTotal+spouseTotal))*100-50;
	}
	else
	{
		spouseAboveFifty = 0;
		document.getElementById("spouseFinalAboveFifty").value = spouseAboveFifty;
	}

	document.getElementById("householdAboveFifty").value = parseFloat(document.getElementById("clientFinalAboveFifty").value) + parseFloat(document.getElementById("spouseFinalAboveFifty").value);


	
	//% of 50 is absolute value of (client % - spouse %).
	document.getElementById("percentOfFifty").value = document.getElementById("householdAboveFifty").value*2;
	document.getElementById("percentOfFiftyTimesThree").value = (document.getElementById("householdAboveFifty").value*2)/100*3+3;

	document.getElementById("budgetTotal").value = parseFloat(rent) + parseFloat(electricity)+ parseFloat(gas)+parseFloat(water)+ parseFloat(netflix)+parseFloat(internet)+parseFloat(entertainment)+ parseFloat(otherUtilities )+parseFloat(cellPhone)+parseFloat(groceries) +parseFloat(eatingOut)+parseFloat(personalHygiene)+parseFloat(groceriesOther)+parseFloat(autoInsurance)+parseFloat(autoFuel)+parseFloat(publicTransit)+parseFloat(transOther)+parseFloat(medicalPocket)+parseFloat(medicalPrescriptions)+parseFloat(medicalOther)+parseFloat(eduFees)+parseFloat(eduSupplies)+parseFloat(eduOther)+parseFloat(childCareExpense)+parseFloat(childSupport)+parseFloat(childRecreation)+parseFloat(childClothing)+parseFloat(childOther)+parseFloat(memberships)+parseFloat(legalFees)+parseFloat(donations)+parseFloat(otherEntertainment)+parseFloat(pets)+parseFloat(storage)+parseFloat(clothing)+parseFloat(constructiveDebt)+parseFloat(consumerDebt)+parseFloat(collections)+parseFloat(otherExpenses);
	
	document.getElementById("bugetTotalRequired").value = parseFloat(rentRequired) + parseFloat(electricityRequired)+ parseFloat(gasRequired)+parseFloat(waterRequired) +parseFloat(netflixRequired)+parseFloat(internetRequired)+parseFloat(entertainmentRequired)+ parseFloat(otherUtilitiesRequired )+parseFloat(cellPhoneRequired)+parseFloat(groceriesRequired) +parseFloat(eatingOutRequired)+parseFloat(personalHygieneRequired)+parseFloat(groceriesOtherRequired)+parseFloat(autoInsuranceRequired)+parseFloat(autoFuelRequired)+parseFloat(publicTransitRequired)+parseFloat(transOtherRequired)+parseFloat(medicalPocketRequired)+parseFloat(medicalPrescriptionsRequired)+parseFloat(medicalOtherRequired)+parseFloat(eduFeesRequired)+parseFloat(eduSuppliesRequired)+parseFloat(eduOtherRequired)+parseFloat(childCareExpenseRequired)+parseFloat(childSupportRequired)+parseFloat(childRecreationRequired)+parseFloat(childClothingRequired)+parseFloat(childOtherRequired)+parseFloat(memberships)+parseFloat(legalFeesRequired)+parseFloat(donationsRequired)+parseFloat(otherEntertainmentRequired)+parseFloat(petsRequired)+parseFloat(storageRequired)+parseFloat(clothingRequired)+parseFloat(constructiveDebtRequired)+parseFloat(consumerDebtRequired)+parseFloat(collectionsRequired)+parseFloat(otherExpensesRequired);


	document.getElementById("monthsEmergencySavingsRequired").value = document.getElementById("percentOfFiftyTimesThree").value;
	document.getElementById("totalEmergencySavingsRequired").value = document.getElementById("monthsEmergencySavingsRequired").value * document.getElementById("bugetTotalRequired").value;

}