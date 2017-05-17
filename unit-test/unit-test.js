/**
 * Created by Adam Salvo on 2/27/2017.
 */



//generated-standard formulas
$(document).ready(function () {
    // ------------------------------------------ INITIAL TABLE WRITE --------------------------------------------------

    getUserInputs();            // Get radio button values.
    writeVerificationRows();    // Write verification test rows to page.
    // writeAllCombinations();     // Write all combinations to page.

    // ---------------------------------------------- ON CHANGE --------------------------------------------------------

    $('input[type=radio]').change(function() {

        $('#unit').find('tbody').empty();   // Remove everything in unit table body.

        getUserInputs();            // Get radio button values.
        writeVerificationRows();    // Write verification test rows to page.
        // writeAllCombinations();     // Write all combinations to page.
    });
});

// -------------------------------------------------- FUNCTIONS --------------------------------------------------------

/** getUserInputs:
 * Assigns the input variables to the radio button values on the unit-test page. */
function getUserInputs() {
    // Set MHC/EHC to checked value.
    let selected_mhc = $('input[id=radio-mhc]').is(':checked');
    console.log("selected_mhc",selected_mhc);
    if (selected_mhc) {
        marketplace_healthcare = "Yes";
    } else {
        marketplace_healthcare = "No";
    }
    // Set Childcare and Family Care to checked value.
    let selected_childcare_value = $('input[name=radio-childcare]:checked').val();
    if (selected_childcare_value  === "childcare-center-care") {
        // If Center Care used: child_care_needed_bool = true, use_family_care_bool = false
        use_childcare = "Yes";
        use_family_care = "No";
    } else if (selected_childcare_value  === "childcare-family-care") {
        // If Family Care used: child_care_needed_bool = true, use_family_care_bool = true
        use_childcare = "Yes";
        use_family_care = "Yes";
    } else if (selected_childcare_value  === "childcare-none") {
        // If Childcare not required: child_care_needed_bool = false, use_family_care_bool = false
        use_childcare = "No";
        use_family_care = "No";
    }
    // Number of adult bus passes is set to 1.
    bus_passes_adult = 1;
}

/** writeMHCTableData:
 * Calculates all MHC tax functions and appends results to unit table */
function writeMHCTableData() {
    let goal_seek_loop_count = 100; // The number of times to run goalSeek function.
    for (let i = 0; i < goal_seek_loop_count; i++) {
        mhc_gross_income = mhcCalculateGrossIncome();
    }

    let markup =
        "<tr class='unit-data'>" +
        "<td class='unit-datas'>" + num_adults + "</td>" + // Adults
        "<td class='unit-datas'>" + num_infants + "</td>" + // Infants
        "<td class='unit-datas'>" + num_preschoolers + "</td>" + // Preschoolers
        "<td class='unit-datas'>" + num_schoolagers + "</td>" + // Schoolagers
        "<td class='unit-datas'>" + num_teenagers + "</td>" + // Teenagers
        "<td class='unit-data'>" + use_family_care + "</td>" + // Family Care
        "<td class='unit-data'>" + marketplace_healthcare + "</td>" + // Marketplace Health Care
        "<td class='unit-data'>" + mhc_gross_income.toFixed(2) + "</td>" + // Gross Annual Income
        "<td class='unit-data'>" + finalNetTaxesAnnual().toFixed(2) + "</td>"; // Net Taxes

    // If difference between net income and expenses+savings is > $0.01, our table data are marked with the 'danger' class.
    if (Math.abs(finalNetIncomeAnnual() - (finalTotalExpensesAnnual()+finalSavingsAnnual())) > 0.01) {
        markup +=
            "<td class='unit-data'>" + finalNetIncomeAnnual().toFixed(2) + "</td>" +        // Net Annual Income
            "<td class='unit-data'>" + (finalTotalExpensesAnnual()+finalSavingsAnnual()).toFixed(2) + "</td>";    // Total Expenses + Savings
    } else {
        markup +=
            "<td class='unit-data'>" + finalNetIncomeAnnual().toFixed(2) + "</td>" +       // Net Annual Income
            "<td class='unit-data'>" + (finalTotalExpensesAnnual()+finalSavingsAnnual()).toFixed(2) + "</td>";   // Total Expenses + Savings
    }

    markup +=
        "<td class='unit-data'>" + finalTotalExpensesAnnual().toFixed(2) + "</td>" + // Total Expenses
        "<td class='unit-data'>" + finalHousingAnnual().toFixed(2) + "</td>" + // Housing
        "<td class='unit-data'>" + finalChildcareAnnual().toFixed(2) + "</td>" + // Childcare
        "<td class='unit-data'>" + finalFoodAnnual().toFixed(2) + "</td>" + // Food
        "<td class='unit-data'>" + finalCarInsuranceAnnual().toFixed(2) + "</td>" + // Car Insurance
        "<td class='unit-data'>" + finalCarOwnershipAnnual().toFixed(2) + "</td>" + // Car Ownership
        "<td class='unit-data'>" + finalPublicTransportationAnnual().toFixed(2) + "</td>" + // Public Transport
        "<td class='unit-data'>" + finalHealthInsuranceAnnual().toFixed(2) + "</td>" + // Health
        "<td class='unit-data'>" + finalOutOfPocketAnnual().toFixed(2) + "</td>" + // Out of Pocket
        "<td class='unit-data'>" + finalEntertainmentAnnual().toFixed(2) + "</td>" + // Entertainment
        "<td class='unit-data'>" + finalMiscellaneousAnnual().toFixed(2) + "</td>" + // Miscellaneous
        "<td class='unit-data'>" + finalSavingsAnnual().toFixed(2) + "</td>" + // Savings
        "</tr>";

    $("table tbody").append(markup);
}

/** writeEHCTableData:
 * Calculates all EHC tax functions and appends results to unit table */
function writeEHCTableData() {
    let goal_seek_loop_count = 100; // The number of times to run goalSeek function.
    for (let i = 0; i < goal_seek_loop_count; i++) {
        ehc_gross_income = ehcCalculateGrossIncome();
    }

    let markup =
        "<tr class='unit-data'>" +
        "<td class='unit-datas'>" + num_adults + "</td>" + // Adults
        "<td class='unit-datas'>" + num_infants + "</td>" + // Infants
        "<td class='unit-datas'>" + num_preschoolers + "</td>" + // Preschoolers
        "<td class='unit-datas'>" + num_schoolagers + "</td>" + // Schoolagers
        "<td class='unit-datas'>" + num_teenagers + "</td>" + // Teenagers
        "<td class='unit-data'>" + use_family_care + "</td>" + // Family Care
        "<td class='unit-data'>" + marketplace_healthcare + "</td>" + // Marketplace Health Care
        "<td class='unit-data'>" + ehc_gross_income.toFixed(2) + "</td>" + // Gross Annual Income
        "<td class='unit-data'>" + finalNetTaxesAnnual().toFixed(2) + "</td>"; // Net Taxes

    // If difference between net income and expenses+savings is > $0.01, our table data are marked with the 'danger' class.
    if (Math.abs(finalNetIncomeAnnual() - (finalTotalExpensesAnnual()+finalSavingsAnnual())) > 0.01) {
        markup +=
            "<td class='unit-data'>" + finalNetIncomeAnnual().toFixed(2) + "</td>" +        // Net Annual Income
            "<td class='unit-data'>" + (finalTotalExpensesAnnual()+finalSavingsAnnual()).toFixed(2) + "</td>";    // Total Expenses + Savings
    } else {
        markup +=
            "<td class='unit-data'>" + finalNetIncomeAnnual().toFixed(2) + "</td>" +       // Net Annual Income
            "<td class='unit-data'>" + (finalTotalExpensesAnnual()+finalSavingsAnnual()).toFixed(2) + "</td>";   // Total Expenses + Savings
    }

    markup +=
        "<td class='unit-data'>" + finalTotalExpensesAnnual().toFixed(2) + "</td>" + // Total Expenses
        "<td class='unit-data'>" + finalHousingAnnual().toFixed(2) + "</td>" + // Housing
        "<td class='unit-data'>" + finalChildcareAnnual().toFixed(2) + "</td>" + // Childcare
        "<td class='unit-data'>" + finalFoodAnnual().toFixed(2) + "</td>" + // Food
        "<td class='unit-data'>" + finalCarInsuranceAnnual().toFixed(2) + "</td>" + // Car Insurance
        "<td class='unit-data'>" + finalCarOwnershipAnnual().toFixed(2) + "</td>" + // Car Ownership
        "<td class='unit-data'>" + finalPublicTransportationAnnual().toFixed(2) + "</td>" + // Public Transport
        "<td class='unit-data'>" + finalHealthInsuranceAnnual().toFixed(2) + "</td>" + // Health
        "<td class='unit-data'>" + finalOutOfPocketAnnual().toFixed(2) + "</td>" + // Out of Pocket
        "<td class='unit-data'>" + finalEntertainmentAnnual().toFixed(2) + "</td>" + // Entertainment
        "<td class='unit-data'>" + finalMiscellaneousAnnual().toFixed(2) + "</td>" + // Miscellaneous
        "<td class='unit-data'>" + finalSavingsAnnual().toFixed(2) + "</td>" + // Savings
        "</tr>";

    $("table tbody").append(markup);
}

/** writeAllCombinations:
 * Iterates through every possible family composition and appends all livable wage calculations to unit table. */
function writeAllCombinations() {
    // Calculate values for every accepted family combination.
    for(let i = 1; i < 3; i++) {    // Adults: Min 1, Max 2
        for(let j = 0; j < 6; j++) {    // Infants: Min 0, Max 5
            for(let k = 0; k < 6; k++) {    // Preschoolers: Min 0, Max 5
                for(let t = 0; t < 6; t++) {    // Schoolagers: Min 0, Max 5
                    for(let z = 0; z < 6; z++) {    // Teenagers: Min 0, Max 5
                        if(j + k + t + z < 6) {     // Families may have up to 5 total children
                            num_adults = i;
                            num_infants = j;
                            num_preschoolers = k;
                            num_schoolagers = t;
                            num_teenagers = z;
                            // Number of child bus passes is set equal to number of schoolagers and teenagers.
                            bus_passes_child = num_schoolagers + num_teenagers;

                            // MHC
                            if (marketplace_healthcare === "Yes") { writeMHCTableData(); }
                            // EHC
                            else { writeEHCTableData(); }
                        } //end if (combination filter)
                    } // end inner for (number of teenagers)
                } // end for (number of schoolagers)
            } // end for (number of preschoolers)
        } // end for (number of infants)
    } // end outer for (number of adults)
}

/** writeVerificationRows:
 * Writes select family composition rows for verification against Excel sheet. */
function writeVerificationRows() {
    // Verification Test Combinations (top of table)
    let test_combinations_array = [
        {"adults":1,"infants":0,"preschoolers":0,"schoolagers":0,"teenagers":0}, // MIN 1A (1A0K)
        {"adults":2,"infants":0,"preschoolers":0,"schoolagers":1,"teenagers":0}, // MED 2A 1S (2A1K)
        {"adults":2,"infants":1,"preschoolers":1,"schoolagers":2,"teenagers":1}, // MAX 2A 1I 1P 2S 1T (2A5K)
        {"adults":1,"infants":1,"preschoolers":1,"schoolagers":1,"teenagers":0}, // MIN2 1A 1I 1P 1S 0T(2A5K)
        {"adults":3,"infants":0,"preschoolers":0,"schoolagers":0,"teenagers":2}, // MED2 3A 0I 0P 0S 2T (2A5K)
        {"adults":1,"infants":2,"preschoolers":2,"schoolagers":2,"teenagers":0} // MAX2 1A 2I 2P 2S 0T (2A5K)
    ];
    // Loop over each verification-test combination, append calculation results to top of table
    for (let i = 0; i < test_combinations_array.length; i++) {
        num_adults = test_combinations_array[i].adults;
        num_infants = test_combinations_array[i].infants;
        num_preschoolers = test_combinations_array[i].preschoolers;
        num_schoolagers = test_combinations_array[i].schoolagers;
        num_teenagers = test_combinations_array[i].teenagers;
        bus_passes_child = num_schoolagers + num_teenagers;

        // MHC
        if (marketplace_healthcare === "Yes") {
            writeMHCTableData();
            log_taxes_mhc(test_combinations_array[i]);
        }
        // EHC
        else {
            writeEHCTableData();
            log_taxes_ehc(test_combinations_array[i]);
        }

    }
    verifyTheStuffAndThings();
}

//verifies the stuff and things
function verifyTheStuffAndThings(){

    //console.log("values:", $('#unit tr:eq(1) td:eq(11)').text());

    // if(!use_marketplace_health_insurance_bool && childcare_needed_bool && !use_family_care_bool){
    if(marketplace_healthcare === "No" && use_childcare === "Yes" && use_family_care === "No"){
        min_ehc_values();
        med_ehc_childcare_center_values();
        max_ehc_childcare_center_values();
        min2_ehc_childcare_center_values();
        med2_ehc_childcare_center_values();
        max2_ehc_childcare_center_values();
    // } else if(!use_marketplace_health_insurance_bool && childcare_needed_bool && use_family_care_bool) {
    } else if(marketplace_healthcare === "No" && use_childcare === "Yes" && use_family_care === "Yes") {
        min_ehc_values();
        med_ehc_childcare_family_values();
        max_ehc_childcare_family_values();
        min2_ehc_childcare_family_values();
        med2_ehc_childcare_family_values();
        max2_ehc_childcare_family_values();
    // } else if(!use_marketplace_health_insurance_bool && !childcare_needed_bool && !use_family_care_bool){
    } else if(marketplace_healthcare === "No" && use_childcare === "No" && use_family_care === "No"){
        min_ehc_values();
        med_ehc_childcare_none_values();
        max_ehc_childcare_none_values();
        min2_ehc_childcare_none_values();
        med2_ehc_childcare_none_values();
        max2_ehc_childcare_none_values();
    // } else if(use_marketplace_health_insurance_bool && childcare_needed_bool && !use_family_care_bool){
    } else if(marketplace_healthcare === "Yes" && use_childcare === "Yes" && use_family_care === "No"){
        min_mhc_values();
        med_mhc_childcare_center_values();
        max_mhc_childcare_center_values();
        min2_mhc_childcare_center_values();
        med2_mhc_childcare_center_values();
        max2_mhc_childcare_center_values();
    // } else if(use_marketplace_health_insurance_bool && childcare_needed_bool && use_family_care_bool) {
    } else if(marketplace_healthcare === "Yes"  && use_childcare === "Yes" && use_family_care === "Yes") {
        min_mhc_values();
        med_mhc_childcare_family_values();
        max_mhc_childcare_family_values();
        min2_mhc_childcare_family_values();
        med2_mhc_childcare_family_values();
        max2_mhc_childcare_family_values();
    // } else if(use_marketplace_health_insurance_bool && !childcare_needed_bool && !use_family_care_bool){
    } else if(marketplace_healthcare === "Yes"  && use_childcare === "No" && use_family_care === "No"){
        min_mhc_values();
        med_mhc_childcare_none_values();
        max_mhc_childcare_none_values();
        min2_mhc_childcare_none_values();
        med2_mhc_childcare_none_values();
        max2_mhc_childcare_none_values();
    }

}

const tolerance = 0.03;

function min_ehc_values(){

    if(Math.abs($('#unit tr:eq(1) td:eq(7)').text() - combinationValues.min_ehc.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(1) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(8)').text() - combinationValues.min_ehc.Taxes) > tolerance) {
        $('#unit tr:eq(1) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(9)').text() - combinationValues.min_ehc.Net_Income) > tolerance) {
        $('#unit tr:eq(1) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(10)').text() - (combinationValues.min_ehc.Total_Expenses + combinationValues.min_ehc.Savings)) > tolerance) {
        $('#unit tr:eq(1) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(11)').text() - combinationValues.min_ehc.Total_Expenses) > tolerance) {
        $('#unit tr:eq(1) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(12)').text() - combinationValues.min_ehc.Housing) > tolerance) {
        $('#unit tr:eq(1) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(13)').text() - combinationValues.min_ehc.Childcare) > tolerance) {
        $('#unit tr:eq(1) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(14)').text() - combinationValues.min_ehc.Food) > tolerance) {
        $('#unit tr:eq(1) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(15)').text() - combinationValues.min_ehc.Car_Insurance) > tolerance) {
        $('#unit tr:eq(1) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(16)').text() - combinationValues.min_ehc.Car_Ownership) > tolerance) {
        $('#unit tr:eq(1) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(17)').text() - combinationValues.min_ehc.Public_Transport) > tolerance) {
        $('#unit tr:eq(1) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(18)').text() - combinationValues.min_ehc.Health_Insurance) > tolerance) {
        $('#unit tr:eq(1) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(19)').text() - combinationValues.min_ehc.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(1) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(20)').text() - combinationValues.min_ehc.Entertainment) > tolerance) {
        $('#unit tr:eq(1) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(21)').text() - combinationValues.min_ehc.Miscellaneous) > tolerance) {
        $('#unit tr:eq(1) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(22)').text() - combinationValues.min_ehc.Savings) > tolerance) {
        $('#unit tr:eq(1) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(22)').addClass('match');
    }
}
function min_mhc_values(){

    if(Math.abs($('#unit tr:eq(1) td:eq(7)').text() - combinationValues.min_mhc.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(1) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(8)').text() - combinationValues.min_mhc.Taxes) > tolerance) {
        $('#unit tr:eq(1) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(9)').text() - combinationValues.min_mhc.Net_Income) > tolerance) {
        $('#unit tr:eq(1) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(10)').text() - (combinationValues.min_mhc.Total_Expenses + combinationValues.min_mhc.Savings)) > tolerance) {
        $('#unit tr:eq(1) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(11)').text() - combinationValues.min_mhc.Total_Expenses) > tolerance) {
        $('#unit tr:eq(1) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(12)').text() - combinationValues.min_mhc.Housing) > tolerance) {
        $('#unit tr:eq(1) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(13)').text() - combinationValues.min_mhc.Childcare) > tolerance) {
        $('#unit tr:eq(1) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(14)').text() - combinationValues.min_mhc.Food) > tolerance) {
        $('#unit tr:eq(1) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(15)').text() - combinationValues.min_mhc.Car_Insurance) > tolerance) {
        $('#unit tr:eq(1) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(16)').text() - combinationValues.min_mhc.Car_Ownership) > tolerance) {
        $('#unit tr:eq(1) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(17)').text() - combinationValues.min_mhc.Public_Transport) > tolerance) {
        $('#unit tr:eq(1) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(18)').text() - combinationValues.min_mhc.Health_Insurance) > tolerance) {
        $('#unit tr:eq(1) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(19)').text() - combinationValues.min_mhc.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(1) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(20)').text() - combinationValues.min_mhc.Entertainment) > tolerance) {
        $('#unit tr:eq(1) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(21)').text() - combinationValues.min_mhc.Miscellaneous) > tolerance) {
        $('#unit tr:eq(1) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(1) td:eq(22)').text() - combinationValues.min_mhc.Savings) > tolerance) {
        $('#unit tr:eq(1) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(1) td:eq(22)').addClass('match');
    }

}
function med_ehc_childcare_family_values(){

    if(Math.abs($('#unit tr:eq(2) td:eq(7)').text() - combinationValues.med_ehc_childcare_family.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(2) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(8)').text() - combinationValues.med_ehc_childcare_family.Taxes) > tolerance) {
        $('#unit tr:eq(2) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(9)').text() - combinationValues.med_ehc_childcare_family.Net_Income) > tolerance) {
        $('#unit tr:eq(2) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(10)').text() - (combinationValues.med_ehc_childcare_family.Total_Expenses + combinationValues.med_ehc_childcare_family.Savings)) > tolerance) {
        $('#unit tr:eq(2) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(11)').text() - combinationValues.med_ehc_childcare_family.Total_Expenses) > tolerance) {
        $('#unit tr:eq(2) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(12)').text() - combinationValues.med_ehc_childcare_family.Housing) > tolerance) {
        $('#unit tr:eq(2) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(13)').text() - combinationValues.med_ehc_childcare_family.Childcare) > tolerance) {
        $('#unit tr:eq(2) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(14)').text() - combinationValues.med_ehc_childcare_family.Food) > tolerance) {
        $('#unit tr:eq(2) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(15)').text() - combinationValues.med_ehc_childcare_family.Car_Insurance) > tolerance) {
        $('#unit tr:eq(2) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(16)').text() - combinationValues.med_ehc_childcare_family.Car_Ownership) > tolerance) {
        $('#unit tr:eq(2) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(17)').text() - combinationValues.med_ehc_childcare_family.Public_Transport) > tolerance) {
        $('#unit tr:eq(2) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(18)').text() - combinationValues.med_ehc_childcare_family.Health_Insurance) > tolerance) {
        $('#unit tr:eq(2) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(19)').text() - combinationValues.med_ehc_childcare_family.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(2) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(20)').text() - combinationValues.med_ehc_childcare_family.Entertainment) > tolerance) {
        $('#unit tr:eq(2) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(21)').text() - combinationValues.med_ehc_childcare_family.Miscellaneous) > tolerance) {
        $('#unit tr:eq(2) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(22)').text() - combinationValues.med_ehc_childcare_family.Savings) > tolerance) {
        $('#unit tr:eq(2) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(22)').addClass('match');
    }

}
function med_ehc_childcare_center_values(){

    if(Math.abs($('#unit tr:eq(2) td:eq(7)').text() - combinationValues.med_ehc_childcare_center.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(2) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(8)').text() - combinationValues.med_ehc_childcare_center.Taxes) > tolerance) {
        $('#unit tr:eq(2) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(9)').text() - combinationValues.med_ehc_childcare_center.Net_Income) > tolerance) {
        $('#unit tr:eq(2) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(10)').text() - (combinationValues.med_ehc_childcare_center.Total_Expenses + combinationValues.med_ehc_childcare_center.Savings)) > tolerance) {
        $('#unit tr:eq(2) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(11)').text() - combinationValues.med_ehc_childcare_center.Total_Expenses) > tolerance) {
        $('#unit tr:eq(2) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(12)').text() - combinationValues.med_ehc_childcare_center.Housing) > tolerance) {
        $('#unit tr:eq(2) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(13)').text() - combinationValues.med_ehc_childcare_center.Childcare) > tolerance) {
        $('#unit tr:eq(2) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(14)').text() - combinationValues.med_ehc_childcare_center.Food) > tolerance) {
        $('#unit tr:eq(2) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(15)').text() - combinationValues.med_ehc_childcare_center.Car_Insurance) > tolerance) {
        $('#unit tr:eq(2) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(16)').text() - combinationValues.med_ehc_childcare_center.Car_Ownership) > tolerance) {
        $('#unit tr:eq(2) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(17)').text() - combinationValues.med_ehc_childcare_center.Public_Transport) > tolerance) {
        $('#unit tr:eq(2) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(18)').text() - combinationValues.med_ehc_childcare_center.Health_Insurance) > tolerance) {
        $('#unit tr:eq(2) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(19)').text() - combinationValues.med_ehc_childcare_center.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(2) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(20)').text() - combinationValues.med_ehc_childcare_center.Entertainment) > tolerance) {
        $('#unit tr:eq(2) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(21)').text() - combinationValues.med_ehc_childcare_center.Miscellaneous) > tolerance) {
        $('#unit tr:eq(2) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(22)').text() - combinationValues.med_ehc_childcare_center.Savings) > tolerance) {
        $('#unit tr:eq(2) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(22)').addClass('match');
    }
}
function med_ehc_childcare_none_values(){

    if(Math.abs($('#unit tr:eq(2) td:eq(7)').text() - combinationValues.med_ehc_childcare_none.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(2) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(8)').text() - combinationValues.med_ehc_childcare_none.Taxes) > tolerance) {
        $('#unit tr:eq(2) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(9)').text() - combinationValues.med_ehc_childcare_none.Net_Income) > tolerance) {
        $('#unit tr:eq(2) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(10)').text() - (combinationValues.med_ehc_childcare_none.Total_Expenses + combinationValues.med_ehc_childcare_none.Savings)) > tolerance) {
        $('#unit tr:eq(2) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(11)').text() - combinationValues.med_ehc_childcare_none.Total_Expenses) > tolerance) {
        $('#unit tr:eq(2) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(12)').text() - combinationValues.med_ehc_childcare_none.Housing) > tolerance) {
        $('#unit tr:eq(2) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(13)').text() - combinationValues.med_ehc_childcare_none.Childcare) > tolerance) {
        $('#unit tr:eq(2) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(14)').text() - combinationValues.med_ehc_childcare_none.Food) > tolerance) {
        $('#unit tr:eq(2) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(15)').text() - combinationValues.med_ehc_childcare_none.Car_Insurance) > tolerance) {
        $('#unit tr:eq(2) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(16)').text() - combinationValues.med_ehc_childcare_none.Car_Ownership) > tolerance) {
        $('#unit tr:eq(2) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(17)').text() - combinationValues.med_ehc_childcare_none.Public_Transport) > tolerance) {
        $('#unit tr:eq(2) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(18)').text() - combinationValues.med_ehc_childcare_none.Health_Insurance) > tolerance) {
        $('#unit tr:eq(2) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(19)').text() - combinationValues.med_ehc_childcare_none.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(2) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(20)').text() - combinationValues.med_ehc_childcare_none.Entertainment) > tolerance) {
        $('#unit tr:eq(2) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(21)').text() - combinationValues.med_ehc_childcare_none.Miscellaneous) > tolerance) {
        $('#unit tr:eq(2) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(22)').text() - combinationValues.med_ehc_childcare_none.Savings) > tolerance) {
        $('#unit tr:eq(2) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(22)').addClass('match');
    }

}
function med_mhc_childcare_family_values(){

    if(Math.abs($('#unit tr:eq(2) td:eq(7)').text() - combinationValues.med_mhc_childcare_family.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(2) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(8)').text() - combinationValues.med_mhc_childcare_family.Taxes) > tolerance) {
        $('#unit tr:eq(2) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(9)').text() - combinationValues.med_mhc_childcare_family.Net_Income) > tolerance) {
        $('#unit tr:eq(2) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(10)').text() - (combinationValues.med_mhc_childcare_family.Total_Expenses + combinationValues.med_mhc_childcare_family.Savings)) > tolerance) {
        $('#unit tr:eq(2) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(11)').text() - combinationValues.med_mhc_childcare_family.Total_Expenses) > tolerance) {
        $('#unit tr:eq(2) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(12)').text() - combinationValues.med_mhc_childcare_family.Housing) > tolerance) {
        $('#unit tr:eq(2) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(13)').text() - combinationValues.med_mhc_childcare_family.Childcare) > tolerance) {
        $('#unit tr:eq(2) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(14)').text() - combinationValues.med_mhc_childcare_family.Food) > tolerance) {
        $('#unit tr:eq(2) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(15)').text() - combinationValues.med_mhc_childcare_family.Car_Insurance) > tolerance) {
        $('#unit tr:eq(2) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(16)').text() - combinationValues.med_mhc_childcare_family.Car_Ownership) > tolerance) {
        $('#unit tr:eq(2) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(17)').text() - combinationValues.med_mhc_childcare_family.Public_Transport) > tolerance) {
        $('#unit tr:eq(2) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(18)').text() - combinationValues.med_mhc_childcare_family.Health_Insurance) > tolerance) {
        $('#unit tr:eq(2) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(19)').text() - combinationValues.med_mhc_childcare_family.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(2) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(20)').text() - combinationValues.med_mhc_childcare_family.Entertainment) > tolerance) {
        $('#unit tr:eq(2) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(21)').text() - combinationValues.med_mhc_childcare_family.Miscellaneous) > tolerance) {
        $('#unit tr:eq(2) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(22)').text() - combinationValues.med_mhc_childcare_family.Savings) > tolerance) {
        $('#unit tr:eq(2) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(22)').addClass('match');
    }

}
function med_mhc_childcare_center_values(){

    if(Math.abs($('#unit tr:eq(2) td:eq(7)').text() - combinationValues.med_mhc_childcare_center.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(2) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(8)').text() - combinationValues.med_mhc_childcare_center.Taxes) > tolerance) {
        $('#unit tr:eq(2) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(9)').text() - combinationValues.med_mhc_childcare_center.Net_Income) > tolerance) {
        $('#unit tr:eq(2) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(10)').text() - (combinationValues.med_mhc_childcare_center.Total_Expenses + combinationValues.med_mhc_childcare_center.Savings)) > tolerance) {
        $('#unit tr:eq(2) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(11)').text() - combinationValues.med_mhc_childcare_center.Total_Expenses) > tolerance) {
        $('#unit tr:eq(2) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(12)').text() - combinationValues.med_mhc_childcare_center.Housing) > tolerance) {
        $('#unit tr:eq(2) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(13)').text() - combinationValues.med_mhc_childcare_center.Childcare) > tolerance) {
        $('#unit tr:eq(2) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(14)').text() - combinationValues.med_mhc_childcare_center.Food) > tolerance) {
        $('#unit tr:eq(2) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(15)').text() - combinationValues.med_mhc_childcare_center.Car_Insurance) > tolerance) {
        $('#unit tr:eq(2) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(16)').text() - combinationValues.med_mhc_childcare_center.Car_Ownership) > tolerance) {
        $('#unit tr:eq(2) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(17)').text() - combinationValues.med_mhc_childcare_center.Public_Transport) > tolerance) {
        $('#unit tr:eq(2) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(18)').text() - combinationValues.med_mhc_childcare_center.Health_Insurance) > tolerance) {
        $('#unit tr:eq(2) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(19)').text() - combinationValues.med_mhc_childcare_center.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(2) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(20)').text() - combinationValues.med_mhc_childcare_center.Entertainment) > tolerance) {
        $('#unit tr:eq(2) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(21)').text() - combinationValues.med_mhc_childcare_center.Miscellaneous) > tolerance) {
        $('#unit tr:eq(2) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(22)').text() - combinationValues.med_mhc_childcare_center.Savings) > tolerance) {
        $('#unit tr:eq(2) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(22)').addClass('match');
    }


}
function med_mhc_childcare_none_values(){

    if(Math.abs($('#unit tr:eq(2) td:eq(7)').text() - combinationValues.med_mhc_childcare_none.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(2) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(8)').text() - combinationValues.med_mhc_childcare_none.Taxes) > tolerance) {
        $('#unit tr:eq(2) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(9)').text() - combinationValues.med_mhc_childcare_none.Net_Income) > tolerance) {
        $('#unit tr:eq(2) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(10)').text() - (combinationValues.med_mhc_childcare_none.Total_Expenses + combinationValues.med_mhc_childcare_none.Savings)) > tolerance) {
        $('#unit tr:eq(2) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(11)').text() - combinationValues.med_mhc_childcare_none.Total_Expenses) > tolerance) {
        $('#unit tr:eq(2) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(12)').text() - combinationValues.med_mhc_childcare_none.Housing) > tolerance) {
        $('#unit tr:eq(2) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(13)').text() - combinationValues.med_mhc_childcare_none.Childcare) > tolerance) {
        $('#unit tr:eq(2) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(14)').text() - combinationValues.med_mhc_childcare_none.Food) > tolerance) {
        $('#unit tr:eq(2) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(15)').text() - combinationValues.med_mhc_childcare_none.Car_Insurance) > tolerance) {
        $('#unit tr:eq(2) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(16)').text() - combinationValues.med_mhc_childcare_none.Car_Ownership) > tolerance) {
        $('#unit tr:eq(2) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(17)').text() - combinationValues.med_mhc_childcare_none.Public_Transport) > tolerance) {
        $('#unit tr:eq(2) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(18)').text() - combinationValues.med_mhc_childcare_none.Health_Insurance) > tolerance) {
        $('#unit tr:eq(2) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(19)').text() - combinationValues.med_mhc_childcare_none.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(2) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(20)').text() - combinationValues.med_mhc_childcare_none.Entertainment) > tolerance) {
        $('#unit tr:eq(2) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(21)').text() - combinationValues.med_mhc_childcare_none.Miscellaneous) > tolerance) {
        $('#unit tr:eq(2) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(2) td:eq(22)').text() - combinationValues.med_mhc_childcare_none.Savings) > tolerance) {
        $('#unit tr:eq(2) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(2) td:eq(22)').addClass('match');
    }

}
function max_ehc_childcare_family_values(){

    if(Math.abs($('#unit tr:eq(3) td:eq(7)').text() - combinationValues.max_ehc_childcare_family.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(3) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(8)').text() - combinationValues.max_ehc_childcare_family.Taxes) > tolerance) {
        $('#unit tr:eq(3) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(9)').text() - combinationValues.max_ehc_childcare_family.Net_Income) > tolerance) {
        $('#unit tr:eq(3) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(10)').text() - (combinationValues.max_ehc_childcare_family.Total_Expenses + combinationValues.max_ehc_childcare_family.Savings)) > tolerance) {
        $('#unit tr:eq(3) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(11)').text() - combinationValues.max_ehc_childcare_family.Total_Expenses) > tolerance) {
        $('#unit tr:eq(3) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(12)').text() - combinationValues.max_ehc_childcare_family.Housing) > tolerance) {
        $('#unit tr:eq(3) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(13)').text() - combinationValues.max_ehc_childcare_family.Childcare) > tolerance) {
        $('#unit tr:eq(3) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(14)').text() - combinationValues.max_ehc_childcare_family.Food) > tolerance) {
        $('#unit tr:eq(3) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(15)').text() - combinationValues.max_ehc_childcare_family.Car_Insurance) > tolerance) {
        $('#unit tr:eq(3) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(16)').text() - combinationValues.max_ehc_childcare_family.Car_Ownership) > tolerance) {
        $('#unit tr:eq(3) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(17)').text() - combinationValues.max_ehc_childcare_family.Public_Transport) > tolerance) {
        $('#unit tr:eq(3) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(18)').text() - combinationValues.max_ehc_childcare_family.Health_Insurance) > tolerance) {
        $('#unit tr:eq(3) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(19)').text() - combinationValues.max_ehc_childcare_family.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(3) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(20)').text() - combinationValues.max_ehc_childcare_family.Entertainment) > tolerance) {
        $('#unit tr:eq(3) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(21)').text() - combinationValues.max_ehc_childcare_family.Miscellaneous) > tolerance) {
        $('#unit tr:eq(3) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(22)').text() - combinationValues.max_ehc_childcare_family.Savings) > tolerance) {
        $('#unit tr:eq(3) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(22)').addClass('match');
    }


}
function max_ehc_childcare_center_values(){

    if(Math.abs($('#unit tr:eq(3) td:eq(7)').text() - combinationValues.max_ehc_childcare_center.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(3) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(8)').text() - combinationValues.max_ehc_childcare_center.Taxes) > tolerance) {
        $('#unit tr:eq(3) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(9)').text() - combinationValues.max_ehc_childcare_center.Net_Income) > tolerance) {
        $('#unit tr:eq(3) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(10)').text() - (combinationValues.max_ehc_childcare_center.Total_Expenses + combinationValues.max_ehc_childcare_center.Savings)) > tolerance) {
        $('#unit tr:eq(3) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(11)').text() - combinationValues.max_ehc_childcare_center.Total_Expenses) > tolerance) {
        $('#unit tr:eq(3) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(12)').text() - combinationValues.max_ehc_childcare_center.Housing) > tolerance) {
        $('#unit tr:eq(3) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(13)').text() - combinationValues.max_ehc_childcare_center.Childcare) > tolerance) {
        $('#unit tr:eq(3) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(14)').text() - combinationValues.max_ehc_childcare_center.Food) > tolerance) {
        $('#unit tr:eq(3) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(15)').text() - combinationValues.max_ehc_childcare_center.Car_Insurance) > tolerance) {
        $('#unit tr:eq(3) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(16)').text() - combinationValues.max_ehc_childcare_center.Car_Ownership) > tolerance) {
        $('#unit tr:eq(3) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(17)').text() - combinationValues.max_ehc_childcare_center.Public_Transport) > tolerance) {
        $('#unit tr:eq(3) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(18)').text() - combinationValues.max_ehc_childcare_center.Health_Insurance) > tolerance) {
        $('#unit tr:eq(3) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(19)').text() - combinationValues.max_ehc_childcare_center.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(3) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(20)').text() - combinationValues.max_ehc_childcare_center.Entertainment) > tolerance) {
        $('#unit tr:eq(3) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(21)').text() - combinationValues.max_ehc_childcare_center.Miscellaneous) > tolerance) {
        $('#unit tr:eq(3) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(22)').text() - combinationValues.max_ehc_childcare_center.Savings) > tolerance) {
        $('#unit tr:eq(3) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(22)').addClass('match');
    }

}
function max_ehc_childcare_none_values(){

    if(Math.abs($('#unit tr:eq(3) td:eq(7)').text() - combinationValues.max_ehc_childcare_none.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(3) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(8)').text() - combinationValues.max_ehc_childcare_none.Taxes) > tolerance) {
        $('#unit tr:eq(3) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(9)').text() - combinationValues.max_ehc_childcare_none.Net_Income) > tolerance) {
        $('#unit tr:eq(3) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(10)').text() - (combinationValues.max_ehc_childcare_none.Total_Expenses + combinationValues.max_ehc_childcare_none.Savings)) > tolerance) {
        $('#unit tr:eq(3) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(11)').text() - combinationValues.max_ehc_childcare_none.Total_Expenses) > tolerance) {
        $('#unit tr:eq(3) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(12)').text() - combinationValues.max_ehc_childcare_none.Housing) > tolerance) {
        $('#unit tr:eq(3) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(13)').text() - combinationValues.max_ehc_childcare_none.Childcare) > tolerance) {
        $('#unit tr:eq(3) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(14)').text() - combinationValues.max_ehc_childcare_none.Food) > tolerance) {
        $('#unit tr:eq(3) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(15)').text() - combinationValues.max_ehc_childcare_none.Car_Insurance) > tolerance) {
        $('#unit tr:eq(3) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(16)').text() - combinationValues.max_ehc_childcare_none.Car_Ownership) > tolerance) {
        $('#unit tr:eq(3) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(17)').text() - combinationValues.max_ehc_childcare_none.Public_Transport) > tolerance) {
        $('#unit tr:eq(3) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(18)').text() - combinationValues.max_ehc_childcare_none.Health_Insurance) > tolerance) {
        $('#unit tr:eq(3) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(19)').text() - combinationValues.max_ehc_childcare_none.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(3) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(20)').text() - combinationValues.max_ehc_childcare_none.Entertainment) > tolerance) {
        $('#unit tr:eq(3) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(21)').text() - combinationValues.max_ehc_childcare_none.Miscellaneous) > tolerance) {
        $('#unit tr:eq(3) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(22)').text() - combinationValues.max_ehc_childcare_none.Savings) > tolerance) {
        $('#unit tr:eq(3) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(22)').addClass('match');
    }
}
function max_mhc_childcare_family_values(){

    if(Math.abs($('#unit tr:eq(3) td:eq(7)').text() - combinationValues.max_mhc_childcare_family.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(3) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(8)').text() - combinationValues.max_mhc_childcare_family.Taxes) > tolerance) {
        $('#unit tr:eq(3) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(9)').text() - combinationValues.max_mhc_childcare_family.Net_Income) > tolerance) {
        $('#unit tr:eq(3) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(10)').text() - (combinationValues.max_mhc_childcare_family.Total_Expenses + combinationValues.max_mhc_childcare_family.Savings)) > tolerance) {
        $('#unit tr:eq(3) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(11)').text() - combinationValues.max_mhc_childcare_family.Total_Expenses) > tolerance) {
        $('#unit tr:eq(3) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(12)').text() - combinationValues.max_mhc_childcare_family.Housing) > tolerance) {
        $('#unit tr:eq(3) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(13)').text() - combinationValues.max_mhc_childcare_family.Childcare) > tolerance) {
        $('#unit tr:eq(3) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(14)').text() - combinationValues.max_mhc_childcare_family.Food) > tolerance) {
        $('#unit tr:eq(3) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(15)').text() - combinationValues.max_mhc_childcare_family.Car_Insurance) > tolerance) {
        $('#unit tr:eq(3) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(16)').text() - combinationValues.max_mhc_childcare_family.Car_Ownership) > tolerance) {
        $('#unit tr:eq(3) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(17)').text() - combinationValues.max_mhc_childcare_family.Public_Transport) > tolerance) {
        $('#unit tr:eq(3) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(18)').text() - combinationValues.max_mhc_childcare_family.Health_Insurance) > tolerance) {
        $('#unit tr:eq(3) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(19)').text() - combinationValues.max_mhc_childcare_family.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(3) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(20)').text() - combinationValues.max_mhc_childcare_family.Entertainment) > tolerance) {
        $('#unit tr:eq(3) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(21)').text() - combinationValues.max_mhc_childcare_family.Miscellaneous) > tolerance) {
        $('#unit tr:eq(3) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(22)').text() - combinationValues.max_mhc_childcare_family.Savings) > tolerance) {
        $('#unit tr:eq(3) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(22)').addClass('match');
    }


}
function max_mhc_childcare_center_values(){

    if(Math.abs($('#unit tr:eq(3) td:eq(7)').text() - combinationValues.max_mhc_childcare_center.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(3) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(8)').text() - combinationValues.max_mhc_childcare_center.Taxes) > tolerance) {
        $('#unit tr:eq(3) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(9)').text() - combinationValues.max_mhc_childcare_center.Net_Income) > tolerance) {
        $('#unit tr:eq(3) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(10)').text() - (combinationValues.max_mhc_childcare_center.Total_Expenses + combinationValues.max_mhc_childcare_center.Savings)) > tolerance) {
        $('#unit tr:eq(3) td:eq(10)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(11)').text() - combinationValues.max_mhc_childcare_center.Total_Expenses) > tolerance) {
        $('#unit tr:eq(3) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(12)').text() - combinationValues.max_mhc_childcare_center.Housing) > tolerance) {
        $('#unit tr:eq(3) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(13)').text() - combinationValues.max_mhc_childcare_center.Childcare) > tolerance) {
        $('#unit tr:eq(3) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(14)').text() - combinationValues.max_mhc_childcare_center.Food) > tolerance) {
        $('#unit tr:eq(3) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(15)').text() - combinationValues.max_mhc_childcare_center.Car_Insurance) > tolerance) {
        $('#unit tr:eq(3) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(16)').text() - combinationValues.max_mhc_childcare_center.Car_Ownership) > tolerance) {
        $('#unit tr:eq(3) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(17)').text() - combinationValues.max_mhc_childcare_center.Public_Transport) > tolerance) {
        $('#unit tr:eq(3) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(18)').text() - combinationValues.max_mhc_childcare_center.Health_Insurance) > tolerance) {
        $('#unit tr:eq(3) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(19)').text() - combinationValues.max_mhc_childcare_center.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(3) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(20)').text() - combinationValues.max_mhc_childcare_center.Entertainment) > tolerance) {
        $('#unit tr:eq(3) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(21)').text() - combinationValues.max_mhc_childcare_center.Miscellaneous) > tolerance) {
        $('#unit tr:eq(3) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(22)').text() - combinationValues.max_mhc_childcare_center.Savings) > tolerance) {
        $('#unit tr:eq(3) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(22)').addClass('match');
    }


}
function max_mhc_childcare_none_values(){

    if(Math.abs($('#unit tr:eq(3) td:eq(7)').text() - combinationValues.max_mhc_childcare_none.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(3) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(8)').text() - combinationValues.max_mhc_childcare_none.Taxes) > tolerance) {
        $('#unit tr:eq(3) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(9)').text() - combinationValues.max_mhc_childcare_none.Net_Income) > tolerance) {
        $('#unit tr:eq(3) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(10)').text() - (combinationValues.max_mhc_childcare_none.Total_Expenses + combinationValues.max_mhc_childcare_none.Savings)) > tolerance) {
        $('#unit tr:eq(3) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(3) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.max_mhc_childcare_none.Total_Expenses + combinationValues.max_mhc_childcare_none.Savings);
    } else {
        $('#unit tr:eq(3) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(11)').text() - combinationValues.max_mhc_childcare_none.Total_Expenses) > tolerance) {
        $('#unit tr:eq(3) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(12)').text() - combinationValues.max_mhc_childcare_none.Housing) > tolerance) {
        $('#unit tr:eq(3) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(13)').text() - combinationValues.max_mhc_childcare_none.Childcare) > tolerance) {
        $('#unit tr:eq(3) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(14)').text() - combinationValues.max_mhc_childcare_none.Food) > tolerance) {
        $('#unit tr:eq(3) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(15)').text() - combinationValues.max_mhc_childcare_none.Car_Insurance) > tolerance) {
        $('#unit tr:eq(3) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(16)').text() - combinationValues.max_mhc_childcare_none.Car_Ownership) > tolerance) {
        $('#unit tr:eq(3) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(17)').text() - combinationValues.max_mhc_childcare_none.Public_Transport) > tolerance) {
        $('#unit tr:eq(3) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(18)').text() - combinationValues.max_mhc_childcare_none.Health_Insurance) > tolerance) {
        $('#unit tr:eq(3) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(19)').text() - combinationValues.max_mhc_childcare_none.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(3) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(20)').text() - combinationValues.max_mhc_childcare_none.Entertainment) > tolerance) {
        $('#unit tr:eq(3) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(21)').text() - combinationValues.max_mhc_childcare_none.Miscellaneous) > tolerance) {
        $('#unit tr:eq(3) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(3) td:eq(22)').text() - combinationValues.max_mhc_childcare_none.Savings) > tolerance) {
        $('#unit tr:eq(3) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(3) td:eq(22)').addClass('match');
    }

}

function min2_ehc_childcare_none_values(){
    if(Math.abs($('#unit tr:eq(4) td:eq(7)').text() - combinationValues.min2_ehc_childcare_none.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(4) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(8)').text() - combinationValues.min2_ehc_childcare_none.Taxes) > tolerance) {
        $('#unit tr:eq(4) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(9)').text() - combinationValues.min2_ehc_childcare_none.Net_Income) > tolerance) {
        $('#unit tr:eq(4) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(10)').text() - (combinationValues.min2_ehc_childcare_none.Total_Expenses + combinationValues.min2_ehc_childcare_none.Savings)) > tolerance) {
        $('#unit tr:eq(4) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(4) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.min2_ehc_childcare_none.Total_Expenses + combinationValues.min2_ehc_childcare_none.Savings);
    } else {
        $('#unit tr:eq(4) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(11)').text() - combinationValues.min2_ehc_childcare_none.Total_Expenses) > tolerance) {
        $('#unit tr:eq(4) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(12)').text() - combinationValues.min2_ehc_childcare_none.Housing) > tolerance) {
        $('#unit tr:eq(4) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(13)').text() - combinationValues.min2_ehc_childcare_none.Childcare) > tolerance) {
        $('#unit tr:eq(4) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(14)').text() - combinationValues.min2_ehc_childcare_none.Food) > tolerance) {
        $('#unit tr:eq(4) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(15)').text() - combinationValues.min2_ehc_childcare_none.Car_Insurance) > tolerance) {
        $('#unit tr:eq(4) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(16)').text() - combinationValues.min2_ehc_childcare_none.Car_Ownership) > tolerance) {
        $('#unit tr:eq(4) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(17)').text() - combinationValues.min2_ehc_childcare_none.Public_Transport) > tolerance) {
        $('#unit tr:eq(4) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(18)').text() - combinationValues.min2_ehc_childcare_none.Health_Insurance) > tolerance) {
        $('#unit tr:eq(4) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(19)').text() - combinationValues.min2_ehc_childcare_none.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(4) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(20)').text() - combinationValues.min2_ehc_childcare_none.Entertainment) > tolerance) {
        $('#unit tr:eq(4) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(21)').text() - combinationValues.min2_ehc_childcare_none.Miscellaneous) > tolerance) {
        $('#unit tr:eq(4) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(22)').text() - combinationValues.min2_ehc_childcare_none.Savings) > tolerance) {
        $('#unit tr:eq(4) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(22)').addClass('match');
    }
}
function min2_ehc_childcare_family_values(){
    if(Math.abs($('#unit tr:eq(4) td:eq(7)').text() - combinationValues.min2_ehc_childcare_family.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(4) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(8)').text() - combinationValues.min2_ehc_childcare_family.Taxes) > tolerance) {
        $('#unit tr:eq(4) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(9)').text() - combinationValues.min2_ehc_childcare_family.Net_Income) > tolerance) {
        $('#unit tr:eq(4) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(10)').text() - (combinationValues.min2_ehc_childcare_family.Total_Expenses + combinationValues.min2_ehc_childcare_family.Savings)) > tolerance) {
        $('#unit tr:eq(4) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(4) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.min2_ehc_childcare_family.Total_Expenses + combinationValues.min2_ehc_childcare_family.Savings);
    } else {
        $('#unit tr:eq(4) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(11)').text() - combinationValues.min2_ehc_childcare_family.Total_Expenses) > tolerance) {
        $('#unit tr:eq(4) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(12)').text() - combinationValues.min2_ehc_childcare_family.Housing) > tolerance) {
        $('#unit tr:eq(4) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(13)').text() - combinationValues.min2_ehc_childcare_family.Childcare) > tolerance) {
        $('#unit tr:eq(4) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(14)').text() - combinationValues.min2_ehc_childcare_family.Food) > tolerance) {
        $('#unit tr:eq(4) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(15)').text() - combinationValues.min2_ehc_childcare_family.Car_Insurance) > tolerance) {
        $('#unit tr:eq(4) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(16)').text() - combinationValues.min2_ehc_childcare_family.Car_Ownership) > tolerance) {
        $('#unit tr:eq(4) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(17)').text() - combinationValues.min2_ehc_childcare_family.Public_Transport) > tolerance) {
        $('#unit tr:eq(4) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(18)').text() - combinationValues.min2_ehc_childcare_family.Health_Insurance) > tolerance) {
        $('#unit tr:eq(4) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(19)').text() - combinationValues.min2_ehc_childcare_family.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(4) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(20)').text() - combinationValues.min2_ehc_childcare_family.Entertainment) > tolerance) {
        $('#unit tr:eq(4) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(21)').text() - combinationValues.min2_ehc_childcare_family.Miscellaneous) > tolerance) {
        $('#unit tr:eq(4) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(22)').text() - combinationValues.min2_ehc_childcare_family.Savings) > tolerance) {
        $('#unit tr:eq(4) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(22)').addClass('match');
    }
}
function min2_ehc_childcare_center_values(){
    if(Math.abs($('#unit tr:eq(4) td:eq(7)').text() - combinationValues.min2_ehc_childcare_center.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(4) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(8)').text() - combinationValues.min2_ehc_childcare_center.Taxes) > tolerance) {
        $('#unit tr:eq(4) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(9)').text() - combinationValues.min2_ehc_childcare_center.Net_Income) > tolerance) {
        $('#unit tr:eq(4) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(10)').text() - (combinationValues.min2_ehc_childcare_center.Total_Expenses + combinationValues.min2_ehc_childcare_center.Savings)) > tolerance) {
        $('#unit tr:eq(4) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(4) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.min2_ehc_childcare_center.Total_Expenses + combinationValues.min2_ehc_childcare_center.Savings);
    } else {
        $('#unit tr:eq(4) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(11)').text() - combinationValues.min2_ehc_childcare_center.Total_Expenses) > tolerance) {
        $('#unit tr:eq(4) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(12)').text() - combinationValues.min2_ehc_childcare_center.Housing) > tolerance) {
        $('#unit tr:eq(4) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(13)').text() - combinationValues.min2_ehc_childcare_center.Childcare) > tolerance) {
        $('#unit tr:eq(4) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(14)').text() - combinationValues.min2_ehc_childcare_center.Food) > tolerance) {
        $('#unit tr:eq(4) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(15)').text() - combinationValues.min2_ehc_childcare_center.Car_Insurance) > tolerance) {
        $('#unit tr:eq(4) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(16)').text() - combinationValues.min2_ehc_childcare_center.Car_Ownership) > tolerance) {
        $('#unit tr:eq(4) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(17)').text() - combinationValues.min2_ehc_childcare_center.Public_Transport) > tolerance) {
        $('#unit tr:eq(4) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(18)').text() - combinationValues.min2_ehc_childcare_center.Health_Insurance) > tolerance) {
        $('#unit tr:eq(4) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(19)').text() - combinationValues.min2_ehc_childcare_center.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(4) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(20)').text() - combinationValues.min2_ehc_childcare_center.Entertainment) > tolerance) {
        $('#unit tr:eq(4) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(21)').text() - combinationValues.min2_ehc_childcare_center.Miscellaneous) > tolerance) {
        $('#unit tr:eq(4) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(22)').text() - combinationValues.min2_ehc_childcare_center.Savings) > tolerance) {
        $('#unit tr:eq(4) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(22)').addClass('match');
    }
}
function min2_mhc_childcare_none_values(){
    if(Math.abs($('#unit tr:eq(4) td:eq(7)').text() - combinationValues.min2_mhc_childcare_none.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(4) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(8)').text() - combinationValues.min2_mhc_childcare_none.Taxes) > tolerance) {
        $('#unit tr:eq(4) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(9)').text() - combinationValues.min2_mhc_childcare_none.Net_Income) > tolerance) {
        $('#unit tr:eq(4) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(10)').text() - (combinationValues.min2_mhc_childcare_none.Total_Expenses + combinationValues.min2_mhc_childcare_none.Savings)) > tolerance) {
        $('#unit tr:eq(4) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(4) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.min2_mhc_childcare_none.Total_Expenses + combinationValues.min2_mhc_childcare_none.Savings);
    } else {
        $('#unit tr:eq(4) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(11)').text() - combinationValues.min2_mhc_childcare_none.Total_Expenses) > tolerance) {
        $('#unit tr:eq(4) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(12)').text() - combinationValues.min2_mhc_childcare_none.Housing) > tolerance) {
        $('#unit tr:eq(4) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(13)').text() - combinationValues.min2_mhc_childcare_none.Childcare) > tolerance) {
        $('#unit tr:eq(4) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(14)').text() - combinationValues.min2_mhc_childcare_none.Food) > tolerance) {
        $('#unit tr:eq(4) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(15)').text() - combinationValues.min2_mhc_childcare_none.Car_Insurance) > tolerance) {
        $('#unit tr:eq(4) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(16)').text() - combinationValues.min2_mhc_childcare_none.Car_Ownership) > tolerance) {
        $('#unit tr:eq(4) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(17)').text() - combinationValues.min2_mhc_childcare_none.Public_Transport) > tolerance) {
        $('#unit tr:eq(4) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(18)').text() - combinationValues.min2_mhc_childcare_none.Health_Insurance) > tolerance) {
        $('#unit tr:eq(4) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(19)').text() - combinationValues.min2_mhc_childcare_none.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(4) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(20)').text() - combinationValues.min2_mhc_childcare_none.Entertainment) > tolerance) {
        $('#unit tr:eq(4) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(21)').text() - combinationValues.min2_mhc_childcare_none.Miscellaneous) > tolerance) {
        $('#unit tr:eq(4) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(22)').text() - combinationValues.min2_mhc_childcare_none.Savings) > tolerance) {
        $('#unit tr:eq(4) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(22)').addClass('match');
    }
}
function min2_mhc_childcare_family_values(){
    if(Math.abs($('#unit tr:eq(4) td:eq(7)').text() - combinationValues.min2_mhc_childcare_family.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(4) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(8)').text() - combinationValues.min2_mhc_childcare_family.Taxes) > tolerance) {
        $('#unit tr:eq(4) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(9)').text() - combinationValues.min2_mhc_childcare_family.Net_Income) > tolerance) {
        $('#unit tr:eq(4) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(10)').text() - (combinationValues.min2_mhc_childcare_family.Total_Expenses + combinationValues.min2_mhc_childcare_family.Savings)) > tolerance) {
        $('#unit tr:eq(4) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(4) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.min2_mhc_childcare_family.Total_Expenses + combinationValues.min2_mhc_childcare_family.Savings);
    } else {
        $('#unit tr:eq(4) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(11)').text() - combinationValues.min2_mhc_childcare_family.Total_Expenses) > tolerance) {
        $('#unit tr:eq(4) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(12)').text() - combinationValues.min2_mhc_childcare_family.Housing) > tolerance) {
        $('#unit tr:eq(4) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(13)').text() - combinationValues.min2_mhc_childcare_family.Childcare) > tolerance) {
        $('#unit tr:eq(4) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(14)').text() - combinationValues.min2_mhc_childcare_family.Food) > tolerance) {
        $('#unit tr:eq(4) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(15)').text() - combinationValues.min2_mhc_childcare_family.Car_Insurance) > tolerance) {
        $('#unit tr:eq(4) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(16)').text() - combinationValues.min2_mhc_childcare_family.Car_Ownership) > tolerance) {
        $('#unit tr:eq(4) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(17)').text() - combinationValues.min2_mhc_childcare_family.Public_Transport) > tolerance) {
        $('#unit tr:eq(4) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(18)').text() - combinationValues.min2_mhc_childcare_family.Health_Insurance) > tolerance) {
        $('#unit tr:eq(4) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(19)').text() - combinationValues.min2_mhc_childcare_family.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(4) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(20)').text() - combinationValues.min2_mhc_childcare_family.Entertainment) > tolerance) {
        $('#unit tr:eq(4) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(21)').text() - combinationValues.min2_mhc_childcare_family.Miscellaneous) > tolerance) {
        $('#unit tr:eq(4) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(22)').text() - combinationValues.min2_mhc_childcare_family.Savings) > tolerance) {
        $('#unit tr:eq(4) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(22)').addClass('match');
    }
}
function min2_mhc_childcare_center_values(){
    if(Math.abs($('#unit tr:eq(4) td:eq(7)').text() - combinationValues.min2_mhc_childcare_center.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(4) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(8)').text() - combinationValues.min2_mhc_childcare_center.Taxes) > tolerance) {
        $('#unit tr:eq(4) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(9)').text() - combinationValues.min2_mhc_childcare_center.Net_Income) > tolerance) {
        $('#unit tr:eq(4) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(10)').text() - (combinationValues.min2_mhc_childcare_center.Total_Expenses + combinationValues.min2_mhc_childcare_center.Savings)) > tolerance) {
        $('#unit tr:eq(4) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(4) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.min2_mhc_childcare_center.Total_Expenses + combinationValues.min2_mhc_childcare_center.Savings);
    } else {
        $('#unit tr:eq(4) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(11)').text() - combinationValues.min2_mhc_childcare_center.Total_Expenses) > tolerance) {
        $('#unit tr:eq(4) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(12)').text() - combinationValues.min2_mhc_childcare_center.Housing) > tolerance) {
        $('#unit tr:eq(4) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(13)').text() - combinationValues.min2_mhc_childcare_center.Childcare) > tolerance) {
        $('#unit tr:eq(4) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(14)').text() - combinationValues.min2_mhc_childcare_center.Food) > tolerance) {
        $('#unit tr:eq(4) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(15)').text() - combinationValues.min2_mhc_childcare_center.Car_Insurance) > tolerance) {
        $('#unit tr:eq(4) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(16)').text() - combinationValues.min2_mhc_childcare_center.Car_Ownership) > tolerance) {
        $('#unit tr:eq(4) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(17)').text() - combinationValues.min2_mhc_childcare_center.Public_Transport) > tolerance) {
        $('#unit tr:eq(4) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(18)').text() - combinationValues.min2_mhc_childcare_center.Health_Insurance) > tolerance) {
        $('#unit tr:eq(4) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(19)').text() - combinationValues.min2_mhc_childcare_center.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(4) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(20)').text() - combinationValues.min2_mhc_childcare_center.Entertainment) > tolerance) {
        $('#unit tr:eq(4) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(21)').text() - combinationValues.min2_mhc_childcare_center.Miscellaneous) > tolerance) {
        $('#unit tr:eq(4) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(4) td:eq(22)').text() - combinationValues.min2_mhc_childcare_center.Savings) > tolerance) {
        $('#unit tr:eq(4) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(4) td:eq(22)').addClass('match');
    }
}
function med2_ehc_childcare_none_values(){
    if(Math.abs($('#unit tr:eq(5) td:eq(7)').text() - combinationValues.med2_ehc_childcare_none.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(5) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(8)').text() - combinationValues.med2_ehc_childcare_none.Taxes) > tolerance) {
        $('#unit tr:eq(5) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(9)').text() - combinationValues.med2_ehc_childcare_none.Net_Income) > tolerance) {
        $('#unit tr:eq(5) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(10)').text() - (combinationValues.med2_ehc_childcare_none.Total_Expenses + combinationValues.med2_ehc_childcare_none.Savings)) > tolerance) {
        $('#unit tr:eq(5) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(5) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.med2_ehc_childcare_none.Total_Expenses + combinationValues.med2_ehc_childcare_none.Savings);
    } else {
        $('#unit tr:eq(5) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(11)').text() - combinationValues.med2_ehc_childcare_none.Total_Expenses) > tolerance) {
        $('#unit tr:eq(5) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(12)').text() - combinationValues.med2_ehc_childcare_none.Housing) > tolerance) {
        $('#unit tr:eq(5) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(13)').text() - combinationValues.med2_ehc_childcare_none.Childcare) > tolerance) {
        $('#unit tr:eq(5) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(14)').text() - combinationValues.med2_ehc_childcare_none.Food) > tolerance) {
        $('#unit tr:eq(5) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(15)').text() - combinationValues.med2_ehc_childcare_none.Car_Insurance) > tolerance) {
        $('#unit tr:eq(5) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(16)').text() - combinationValues.med2_ehc_childcare_none.Car_Ownership) > tolerance) {
        $('#unit tr:eq(5) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(17)').text() - combinationValues.med2_ehc_childcare_none.Public_Transport) > tolerance) {
        $('#unit tr:eq(5) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(18)').text() - combinationValues.med2_ehc_childcare_none.Health_Insurance) > tolerance) {
        $('#unit tr:eq(5) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(19)').text() - combinationValues.med2_ehc_childcare_none.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(5) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(20)').text() - combinationValues.med2_ehc_childcare_none.Entertainment) > tolerance) {
        $('#unit tr:eq(5) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(21)').text() - combinationValues.med2_ehc_childcare_none.Miscellaneous) > tolerance) {
        $('#unit tr:eq(5) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(22)').text() - combinationValues.med2_ehc_childcare_none.Savings) > tolerance) {
        $('#unit tr:eq(5) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(22)').addClass('match');
    }
}
function med2_ehc_childcare_family_values(){
    if(Math.abs($('#unit tr:eq(5) td:eq(7)').text() - combinationValues.med2_ehc_childcare_family.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(5) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(8)').text() - combinationValues.med2_ehc_childcare_family.Taxes) > tolerance) {
        $('#unit tr:eq(5) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(9)').text() - combinationValues.med2_ehc_childcare_family.Net_Income) > tolerance) {
        $('#unit tr:eq(5) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(10)').text() - (combinationValues.med2_ehc_childcare_family.Total_Expenses + combinationValues.med2_ehc_childcare_family.Savings)) > tolerance) {
        $('#unit tr:eq(5) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(5) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.med2_ehc_childcare_family.Total_Expenses + combinationValues.med2_ehc_childcare_family.Savings);
    } else {
        $('#unit tr:eq(5) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(11)').text() - combinationValues.med2_ehc_childcare_family.Total_Expenses) > tolerance) {
        $('#unit tr:eq(5) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(12)').text() - combinationValues.med2_ehc_childcare_family.Housing) > tolerance) {
        $('#unit tr:eq(5) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(13)').text() - combinationValues.med2_ehc_childcare_family.Childcare) > tolerance) {
        $('#unit tr:eq(5) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(14)').text() - combinationValues.med2_ehc_childcare_family.Food) > tolerance) {
        $('#unit tr:eq(5) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(15)').text() - combinationValues.med2_ehc_childcare_family.Car_Insurance) > tolerance) {
        $('#unit tr:eq(5) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(16)').text() - combinationValues.med2_ehc_childcare_family.Car_Ownership) > tolerance) {
        $('#unit tr:eq(5) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(17)').text() - combinationValues.med2_ehc_childcare_family.Public_Transport) > tolerance) {
        $('#unit tr:eq(5) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(18)').text() - combinationValues.med2_ehc_childcare_family.Health_Insurance) > tolerance) {
        $('#unit tr:eq(5) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(19)').text() - combinationValues.med2_ehc_childcare_family.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(5) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(20)').text() - combinationValues.med2_ehc_childcare_family.Entertainment) > tolerance) {
        $('#unit tr:eq(5) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(21)').text() - combinationValues.med2_ehc_childcare_family.Miscellaneous) > tolerance) {
        $('#unit tr:eq(5) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(22)').text() - combinationValues.med2_ehc_childcare_family.Savings) > tolerance) {
        $('#unit tr:eq(5) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(22)').addClass('match');
    }
}
function med2_ehc_childcare_center_values(){
    if(Math.abs($('#unit tr:eq(5) td:eq(7)').text() - combinationValues.med2_ehc_childcare_center.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(5) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(8)').text() - combinationValues.med2_ehc_childcare_center.Taxes) > tolerance) {
        $('#unit tr:eq(5) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(9)').text() - combinationValues.med2_ehc_childcare_center.Net_Income) > tolerance) {
        $('#unit tr:eq(5) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(10)').text() - (combinationValues.med2_ehc_childcare_center.Total_Expenses + combinationValues.med2_ehc_childcare_center.Savings)) > tolerance) {
        $('#unit tr:eq(5) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(5) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.med2_ehc_childcare_center.Total_Expenses + combinationValues.med2_ehc_childcare_center.Savings);
    } else {
        $('#unit tr:eq(5) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(11)').text() - combinationValues.med2_ehc_childcare_center.Total_Expenses) > tolerance) {
        $('#unit tr:eq(5) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(12)').text() - combinationValues.med2_ehc_childcare_center.Housing) > tolerance) {
        $('#unit tr:eq(5) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(13)').text() - combinationValues.med2_ehc_childcare_center.Childcare) > tolerance) {
        $('#unit tr:eq(5) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(14)').text() - combinationValues.med2_ehc_childcare_center.Food) > tolerance) {
        $('#unit tr:eq(5) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(15)').text() - combinationValues.med2_ehc_childcare_center.Car_Insurance) > tolerance) {
        $('#unit tr:eq(5) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(16)').text() - combinationValues.med2_ehc_childcare_center.Car_Ownership) > tolerance) {
        $('#unit tr:eq(5) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(17)').text() - combinationValues.med2_ehc_childcare_center.Public_Transport) > tolerance) {
        $('#unit tr:eq(5) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(18)').text() - combinationValues.med2_ehc_childcare_center.Health_Insurance) > tolerance) {
        $('#unit tr:eq(5) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(19)').text() - combinationValues.med2_ehc_childcare_center.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(5) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(20)').text() - combinationValues.med2_ehc_childcare_center.Entertainment) > tolerance) {
        $('#unit tr:eq(5) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(21)').text() - combinationValues.med2_ehc_childcare_center.Miscellaneous) > tolerance) {
        $('#unit tr:eq(5) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(22)').text() - combinationValues.med2_ehc_childcare_center.Savings) > tolerance) {
        $('#unit tr:eq(5) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(22)').addClass('match');
    }
}
function med2_mhc_childcare_none_values(){
    if(Math.abs($('#unit tr:eq(5) td:eq(7)').text() - combinationValues.med2_mhc_childcare_none.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(5) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(8)').text() - combinationValues.med2_mhc_childcare_none.Taxes) > tolerance) {
        $('#unit tr:eq(5) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(9)').text() - combinationValues.med2_mhc_childcare_none.Net_Income) > tolerance) {
        $('#unit tr:eq(5) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(10)').text() - (combinationValues.med2_mhc_childcare_none.Total_Expenses + combinationValues.med2_mhc_childcare_none.Savings)) > tolerance) {
        $('#unit tr:eq(5) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(5) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.med2_mhc_childcare_none.Total_Expenses + combinationValues.med2_mhc_childcare_none.Savings);
    } else {
        $('#unit tr:eq(5) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(11)').text() - combinationValues.med2_mhc_childcare_none.Total_Expenses) > tolerance) {
        $('#unit tr:eq(5) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(12)').text() - combinationValues.med2_mhc_childcare_none.Housing) > tolerance) {
        $('#unit tr:eq(5) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(13)').text() - combinationValues.med2_mhc_childcare_none.Childcare) > tolerance) {
        $('#unit tr:eq(5) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(14)').text() - combinationValues.med2_mhc_childcare_none.Food) > tolerance) {
        $('#unit tr:eq(5) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(15)').text() - combinationValues.med2_mhc_childcare_none.Car_Insurance) > tolerance) {
        $('#unit tr:eq(5) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(16)').text() - combinationValues.med2_mhc_childcare_none.Car_Ownership) > tolerance) {
        $('#unit tr:eq(5) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(17)').text() - combinationValues.med2_mhc_childcare_none.Public_Transport) > tolerance) {
        $('#unit tr:eq(5) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(18)').text() - combinationValues.med2_mhc_childcare_none.Health_Insurance) > tolerance) {
        $('#unit tr:eq(5) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(19)').text() - combinationValues.med2_mhc_childcare_none.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(5) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(20)').text() - combinationValues.med2_mhc_childcare_none.Entertainment) > tolerance) {
        $('#unit tr:eq(5) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(21)').text() - combinationValues.med2_mhc_childcare_none.Miscellaneous) > tolerance) {
        $('#unit tr:eq(5) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(22)').text() - combinationValues.med2_mhc_childcare_none.Savings) > tolerance) {
        $('#unit tr:eq(5) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(22)').addClass('match');
    }
}
function med2_mhc_childcare_family_values(){
    if(Math.abs($('#unit tr:eq(5) td:eq(7)').text() - combinationValues.med2_mhc_childcare_family.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(5) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(8)').text() - combinationValues.med2_mhc_childcare_family.Taxes) > tolerance) {
        $('#unit tr:eq(5) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(9)').text() - combinationValues.med2_mhc_childcare_family.Net_Income) > tolerance) {
        $('#unit tr:eq(5) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(10)').text() - (combinationValues.med2_mhc_childcare_family.Total_Expenses + combinationValues.med2_mhc_childcare_family.Savings)) > tolerance) {
        $('#unit tr:eq(5) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(5) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.med2_mhc_childcare_family.Total_Expenses + combinationValues.med2_mhc_childcare_family.Savings);
    } else {
        $('#unit tr:eq(5) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(11)').text() - combinationValues.med2_mhc_childcare_family.Total_Expenses) > tolerance) {
        $('#unit tr:eq(5) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(12)').text() - combinationValues.med2_mhc_childcare_family.Housing) > tolerance) {
        $('#unit tr:eq(5) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(13)').text() - combinationValues.med2_mhc_childcare_family.Childcare) > tolerance) {
        $('#unit tr:eq(5) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(14)').text() - combinationValues.med2_mhc_childcare_family.Food) > tolerance) {
        $('#unit tr:eq(5) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(15)').text() - combinationValues.med2_mhc_childcare_family.Car_Insurance) > tolerance) {
        $('#unit tr:eq(5) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(16)').text() - combinationValues.med2_mhc_childcare_family.Car_Ownership) > tolerance) {
        $('#unit tr:eq(5) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(17)').text() - combinationValues.med2_mhc_childcare_family.Public_Transport) > tolerance) {
        $('#unit tr:eq(5) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(18)').text() - combinationValues.med2_mhc_childcare_family.Health_Insurance) > tolerance) {
        $('#unit tr:eq(5) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(19)').text() - combinationValues.med2_mhc_childcare_family.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(5) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(20)').text() - combinationValues.med2_mhc_childcare_family.Entertainment) > tolerance) {
        $('#unit tr:eq(5) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(21)').text() - combinationValues.med2_mhc_childcare_family.Miscellaneous) > tolerance) {
        $('#unit tr:eq(5) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(22)').text() - combinationValues.med2_mhc_childcare_family.Savings) > tolerance) {
        $('#unit tr:eq(5) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(22)').addClass('match');
    }
}
function med2_mhc_childcare_center_values(){
    if(Math.abs($('#unit tr:eq(5) td:eq(7)').text() - combinationValues.med2_mhc_childcare_center.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(5) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(8)').text() - combinationValues.med2_mhc_childcare_center.Taxes) > tolerance) {
        $('#unit tr:eq(5) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(9)').text() - combinationValues.med2_mhc_childcare_center.Net_Income) > tolerance) {
        $('#unit tr:eq(5) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(10)').text() - (combinationValues.med2_mhc_childcare_center.Total_Expenses + combinationValues.med2_mhc_childcare_center.Savings)) > tolerance) {
        $('#unit tr:eq(5) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(5) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.med2_mhc_childcare_center.Total_Expenses + combinationValues.med2_mhc_childcare_center.Savings);
    } else {
        $('#unit tr:eq(5) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(11)').text() - combinationValues.med2_mhc_childcare_center.Total_Expenses) > tolerance) {
        $('#unit tr:eq(5) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(12)').text() - combinationValues.med2_mhc_childcare_center.Housing) > tolerance) {
        $('#unit tr:eq(5) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(13)').text() - combinationValues.med2_mhc_childcare_center.Childcare) > tolerance) {
        $('#unit tr:eq(5) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(14)').text() - combinationValues.med2_mhc_childcare_center.Food) > tolerance) {
        $('#unit tr:eq(5) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(15)').text() - combinationValues.med2_mhc_childcare_center.Car_Insurance) > tolerance) {
        $('#unit tr:eq(5) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(16)').text() - combinationValues.med2_mhc_childcare_center.Car_Ownership) > tolerance) {
        $('#unit tr:eq(5) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(17)').text() - combinationValues.med2_mhc_childcare_center.Public_Transport) > tolerance) {
        $('#unit tr:eq(5) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(18)').text() - combinationValues.med2_mhc_childcare_center.Health_Insurance) > tolerance) {
        $('#unit tr:eq(5) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(19)').text() - combinationValues.med2_mhc_childcare_center.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(5) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(20)').text() - combinationValues.med2_mhc_childcare_center.Entertainment) > tolerance) {
        $('#unit tr:eq(5) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(21)').text() - combinationValues.med2_mhc_childcare_center.Miscellaneous) > tolerance) {
        $('#unit tr:eq(5) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(5) td:eq(22)').text() - combinationValues.med2_mhc_childcare_center.Savings) > tolerance) {
        $('#unit tr:eq(5) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(5) td:eq(22)').addClass('match');
    }
}
function max2_ehc_childcare_none_values(){

    if(Math.abs($('#unit tr:eq(6) td:eq(7)').text() - combinationValues.max2_ehc_childcare_none.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(6) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(8)').text() - combinationValues.max2_ehc_childcare_none.Taxes) > tolerance) {
        $('#unit tr:eq(6) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(9)').text() - combinationValues.max2_ehc_childcare_none.Net_Income) > tolerance) {
        $('#unit tr:eq(6) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(10)').text() - (combinationValues.max2_ehc_childcare_none.Total_Expenses + combinationValues.max2_ehc_childcare_none.Savings)) > tolerance) {
        $('#unit tr:eq(6) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(6) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.max2_ehc_childcare_none.Total_Expenses + combinationValues.max2_ehc_childcare_none.Savings);
    } else {
        $('#unit tr:eq(6) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(11)').text() - combinationValues.max2_ehc_childcare_none.Total_Expenses) > tolerance) {
        $('#unit tr:eq(6) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(12)').text() - combinationValues.max2_ehc_childcare_none.Housing) > tolerance) {
        $('#unit tr:eq(6) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(13)').text() - combinationValues.max2_ehc_childcare_none.Childcare) > tolerance) {
        $('#unit tr:eq(6) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(14)').text() - combinationValues.max2_ehc_childcare_none.Food) > tolerance) {
        $('#unit tr:eq(6) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(15)').text() - combinationValues.max2_ehc_childcare_none.Car_Insurance) > tolerance) {
        $('#unit tr:eq(6) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(16)').text() - combinationValues.max2_ehc_childcare_none.Car_Ownership) > tolerance) {
        $('#unit tr:eq(6) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(17)').text() - combinationValues.max2_ehc_childcare_none.Public_Transport) > tolerance) {
        $('#unit tr:eq(6) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(18)').text() - combinationValues.max2_ehc_childcare_none.Health_Insurance) > tolerance) {
        $('#unit tr:eq(6) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(19)').text() - combinationValues.max2_ehc_childcare_none.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(6) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(20)').text() - combinationValues.max2_ehc_childcare_none.Entertainment) > tolerance) {
        $('#unit tr:eq(6) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(21)').text() - combinationValues.max2_ehc_childcare_none.Miscellaneous) > tolerance) {
        $('#unit tr:eq(6) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(22)').text() - combinationValues.max2_ehc_childcare_none.Savings) > tolerance) {
        $('#unit tr:eq(6) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(22)').addClass('match');
    }

}
function max2_ehc_childcare_family_values(){

    if(Math.abs($('#unit tr:eq(6) td:eq(7)').text() - combinationValues.max2_ehc_childcare_family.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(6) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(8)').text() - combinationValues.max2_ehc_childcare_family.Taxes) > tolerance) {
        $('#unit tr:eq(6) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(9)').text() - combinationValues.max2_ehc_childcare_family.Net_Income) > tolerance) {
        $('#unit tr:eq(6) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(10)').text() - (combinationValues.max2_ehc_childcare_family.Total_Expenses + combinationValues.max2_ehc_childcare_family.Savings)) > tolerance) {
        $('#unit tr:eq(6) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(6) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.max2_ehc_childcare_family.Total_Expenses + combinationValues.max2_ehc_childcare_family.Savings);
    } else {
        $('#unit tr:eq(6) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(11)').text() - combinationValues.max2_ehc_childcare_family.Total_Expenses) > tolerance) {
        $('#unit tr:eq(6) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(12)').text() - combinationValues.max2_ehc_childcare_family.Housing) > tolerance) {
        $('#unit tr:eq(6) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(13)').text() - combinationValues.max2_ehc_childcare_family.Childcare) > tolerance) {
        $('#unit tr:eq(6) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(14)').text() - combinationValues.max2_ehc_childcare_family.Food) > tolerance) {
        $('#unit tr:eq(6) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(15)').text() - combinationValues.max2_ehc_childcare_family.Car_Insurance) > tolerance) {
        $('#unit tr:eq(6) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(16)').text() - combinationValues.max2_ehc_childcare_family.Car_Ownership) > tolerance) {
        $('#unit tr:eq(6) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(17)').text() - combinationValues.max2_ehc_childcare_family.Public_Transport) > tolerance) {
        $('#unit tr:eq(6) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(18)').text() - combinationValues.max2_ehc_childcare_family.Health_Insurance) > tolerance) {
        $('#unit tr:eq(6) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(19)').text() - combinationValues.max2_ehc_childcare_family.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(6) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(20)').text() - combinationValues.max2_ehc_childcare_family.Entertainment) > tolerance) {
        $('#unit tr:eq(6) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(21)').text() - combinationValues.max2_ehc_childcare_family.Miscellaneous) > tolerance) {
        $('#unit tr:eq(6) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(22)').text() - combinationValues.max2_ehc_childcare_family.Savings) > tolerance) {
        $('#unit tr:eq(6) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(22)').addClass('match');
    }

}
function max2_ehc_childcare_center_values(){

    if(Math.abs($('#unit tr:eq(6) td:eq(7)').text() - combinationValues.max2_ehc_childcare_center.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(6) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(8)').text() - combinationValues.max2_ehc_childcare_center.Taxes) > tolerance) {
        $('#unit tr:eq(6) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(9)').text() - combinationValues.max2_ehc_childcare_center.Net_Income) > tolerance) {
        $('#unit tr:eq(6) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(10)').text() - (combinationValues.max2_ehc_childcare_center.Total_Expenses + combinationValues.max2_ehc_childcare_center.Savings)) > tolerance) {
        $('#unit tr:eq(6) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(6) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.max2_ehc_childcare_center.Total_Expenses + combinationValues.max2_ehc_childcare_center.Savings);
    } else {
        $('#unit tr:eq(6) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(11)').text() - combinationValues.max2_ehc_childcare_center.Total_Expenses) > tolerance) {
        $('#unit tr:eq(6) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(12)').text() - combinationValues.max2_ehc_childcare_center.Housing) > tolerance) {
        $('#unit tr:eq(6) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(13)').text() - combinationValues.max2_ehc_childcare_center.Childcare) > tolerance) {
        $('#unit tr:eq(6) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(14)').text() - combinationValues.max2_ehc_childcare_center.Food) > tolerance) {
        $('#unit tr:eq(6) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(15)').text() - combinationValues.max2_ehc_childcare_center.Car_Insurance) > tolerance) {
        $('#unit tr:eq(6) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(16)').text() - combinationValues.max2_ehc_childcare_center.Car_Ownership) > tolerance) {
        $('#unit tr:eq(6) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(17)').text() - combinationValues.max2_ehc_childcare_center.Public_Transport) > tolerance) {
        $('#unit tr:eq(6) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(18)').text() - combinationValues.max2_ehc_childcare_center.Health_Insurance) > tolerance) {
        $('#unit tr:eq(6) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(19)').text() - combinationValues.max2_ehc_childcare_center.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(6) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(20)').text() - combinationValues.max2_ehc_childcare_center.Entertainment) > tolerance) {
        $('#unit tr:eq(6) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(21)').text() - combinationValues.max2_ehc_childcare_center.Miscellaneous) > tolerance) {
        $('#unit tr:eq(6) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(22)').text() - combinationValues.max2_ehc_childcare_center.Savings) > tolerance) {
        $('#unit tr:eq(6) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(22)').addClass('match');
    }

}
function max2_mhc_childcare_none_values(){

    if(Math.abs($('#unit tr:eq(6) td:eq(7)').text() - combinationValues.max2_mhc_childcare_none.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(6) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(8)').text() - combinationValues.max2_mhc_childcare_none.Taxes) > tolerance) {
        $('#unit tr:eq(6) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(9)').text() - combinationValues.max2_mhc_childcare_none.Net_Income) > tolerance) {
        $('#unit tr:eq(6) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(10)').text() - (combinationValues.max2_mhc_childcare_none.Total_Expenses + combinationValues.max2_mhc_childcare_none.Savings)) > tolerance) {
        $('#unit tr:eq(6) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(6) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.max2_mhc_childcare_none.Total_Expenses + combinationValues.max2_mhc_childcare_none.Savings);
    } else {
        $('#unit tr:eq(6) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(11)').text() - combinationValues.max2_mhc_childcare_none.Total_Expenses) > tolerance) {
        $('#unit tr:eq(6) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(12)').text() - combinationValues.max2_mhc_childcare_none.Housing) > tolerance) {
        $('#unit tr:eq(6) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(13)').text() - combinationValues.max2_mhc_childcare_none.Childcare) > tolerance) {
        $('#unit tr:eq(6) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(14)').text() - combinationValues.max2_mhc_childcare_none.Food) > tolerance) {
        $('#unit tr:eq(6) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(15)').text() - combinationValues.max2_mhc_childcare_none.Car_Insurance) > tolerance) {
        $('#unit tr:eq(6) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(16)').text() - combinationValues.max2_mhc_childcare_none.Car_Ownership) > tolerance) {
        $('#unit tr:eq(6) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(17)').text() - combinationValues.max2_mhc_childcare_none.Public_Transport) > tolerance) {
        $('#unit tr:eq(6) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(18)').text() - combinationValues.max2_mhc_childcare_none.Health_Insurance) > tolerance) {
        $('#unit tr:eq(6) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(19)').text() - combinationValues.max2_mhc_childcare_none.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(6) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(20)').text() - combinationValues.max2_mhc_childcare_none.Entertainment) > tolerance) {
        $('#unit tr:eq(6) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(21)').text() - combinationValues.max2_mhc_childcare_none.Miscellaneous) > tolerance) {
        $('#unit tr:eq(6) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(22)').text() - combinationValues.max2_mhc_childcare_none.Savings) > tolerance) {
        $('#unit tr:eq(6) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(22)').addClass('match');
    }

}
function max2_mhc_childcare_family_values(){


    if(Math.abs($('#unit tr:eq(6) td:eq(7)').text() - combinationValues.max2_mhc_childcare_family.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(6) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(8)').text() - combinationValues.max2_mhc_childcare_family.Taxes) > tolerance) {
        $('#unit tr:eq(6) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(9)').text() - combinationValues.max2_mhc_childcare_family.Net_Income) > tolerance) {
        $('#unit tr:eq(6) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(10)').text() - (combinationValues.max2_mhc_childcare_family.Total_Expenses + combinationValues.max2_mhc_childcare_family.Savings)) > tolerance) {
        $('#unit tr:eq(6) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(6) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.max2_mhc_childcare_family.Total_Expenses + combinationValues.max2_mhc_childcare_family.Savings);
    } else {
        $('#unit tr:eq(6) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(11)').text() - combinationValues.max2_mhc_childcare_family.Total_Expenses) > tolerance) {
        $('#unit tr:eq(6) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(12)').text() - combinationValues.max2_mhc_childcare_family.Housing) > tolerance) {
        $('#unit tr:eq(6) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(13)').text() - combinationValues.max2_mhc_childcare_family.Childcare) > tolerance) {
        $('#unit tr:eq(6) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(14)').text() - combinationValues.max2_mhc_childcare_family.Food) > tolerance) {
        $('#unit tr:eq(6) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(15)').text() - combinationValues.max2_mhc_childcare_family.Car_Insurance) > tolerance) {
        $('#unit tr:eq(6) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(16)').text() - combinationValues.max2_mhc_childcare_family.Car_Ownership) > tolerance) {
        $('#unit tr:eq(6) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(17)').text() - combinationValues.max2_mhc_childcare_family.Public_Transport) > tolerance) {
        $('#unit tr:eq(6) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(18)').text() - combinationValues.max2_mhc_childcare_family.Health_Insurance) > tolerance) {
        $('#unit tr:eq(6) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(19)').text() - combinationValues.max2_mhc_childcare_family.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(6) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(20)').text() - combinationValues.max2_mhc_childcare_family.Entertainment) > tolerance) {
        $('#unit tr:eq(6) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(21)').text() - combinationValues.max2_mhc_childcare_family.Miscellaneous) > tolerance) {
        $('#unit tr:eq(6) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(22)').text() - combinationValues.max2_mhc_childcare_family.Savings) > tolerance) {
        $('#unit tr:eq(6) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(22)').addClass('match');
    }

}
function max2_mhc_childcare_center_values(){


    if(Math.abs($('#unit tr:eq(6) td:eq(7)').text() - combinationValues.max2_mhc_childcare_center.Gross_Income) > tolerance) { // tolerance used to account for floats
        $('#unit tr:eq(6) td:eq(7)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(7)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(8)').text() - combinationValues.max2_mhc_childcare_center.Taxes) > tolerance) {
        $('#unit tr:eq(6) td:eq(8)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(8)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(9)').text() - combinationValues.max2_mhc_childcare_center.Net_Income) > tolerance) {
        $('#unit tr:eq(6) td:eq(9)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(9)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(10)').text() - (combinationValues.max2_mhc_childcare_center.Total_Expenses + combinationValues.max2_mhc_childcare_center.Savings)) > tolerance) {
        $('#unit tr:eq(6) td:eq(10)').addClass('mismatch');
        console.log("max-mhc-none CELL:",$('#unit tr:eq(6) td:eq(10)').text());
        console.log("max-mhc-none JSON:",combinationValues.max2_mhc_childcare_center.Total_Expenses + combinationValues.max2_mhc_childcare_center.Savings);
    } else {
        $('#unit tr:eq(6) td:eq(10)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(11)').text() - combinationValues.max2_mhc_childcare_center.Total_Expenses) > tolerance) {
        $('#unit tr:eq(6) td:eq(11)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(11)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(12)').text() - combinationValues.max2_mhc_childcare_center.Housing) > tolerance) {
        $('#unit tr:eq(6) td:eq(12)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(12)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(13)').text() - combinationValues.max2_mhc_childcare_center.Childcare) > tolerance) {
        $('#unit tr:eq(6) td:eq(13)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(13)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(14)').text() - combinationValues.max2_mhc_childcare_center.Food) > tolerance) {
        $('#unit tr:eq(6) td:eq(14)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(14)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(15)').text() - combinationValues.max2_mhc_childcare_center.Car_Insurance) > tolerance) {
        $('#unit tr:eq(6) td:eq(15)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(15)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(16)').text() - combinationValues.max2_mhc_childcare_center.Car_Ownership) > tolerance) {
        $('#unit tr:eq(6) td:eq(16)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(16)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(17)').text() - combinationValues.max2_mhc_childcare_center.Public_Transport) > tolerance) {
        $('#unit tr:eq(6) td:eq(17)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(17)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(18)').text() - combinationValues.max2_mhc_childcare_center.Health_Insurance) > tolerance) {
        $('#unit tr:eq(6) td:eq(18)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(18)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(19)').text() - combinationValues.max2_mhc_childcare_center.Out_of_Pocket_Costs) > tolerance) {
        $('#unit tr:eq(6) td:eq(19)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(19)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(20)').text() - combinationValues.max2_mhc_childcare_center.Entertainment) > tolerance) {
        $('#unit tr:eq(6) td:eq(20)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(20)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(21)').text() - combinationValues.max2_mhc_childcare_center.Miscellaneous) > tolerance) {
        $('#unit tr:eq(6) td:eq(21)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(21)').addClass('match');
    }

    if(Math.abs($('#unit tr:eq(6) td:eq(22)').text() - combinationValues.max2_mhc_childcare_center.Savings) > tolerance) {
        $('#unit tr:eq(6) td:eq(22)').addClass('mismatch');
    } else {
        $('#unit tr:eq(6) td:eq(22)').addClass('match');
    }

}



function log_taxes_ehc(family_combination) {
    console.log("==========FAMILY COMBINATION==========");
    console.log(family_combination.adults,
    family_combination.infants,
    family_combination.preschoolers,
    family_combination.schoolagers,
    family_combination.teenagers);
    console.log('ehcQualifyingChildCareExpenses()', ehcQualifyingChildCareExpenses());
    console.log('ehcFamilySize()', ehcFamilySize());
    console.log('ehcStandardDeduction()', ehcStandardDeduction());
    console.log('ehcExemptionsFederal()', ehcExemptionsFederal());
    console.log('ehcExemptionsState()', ehcExemptionsState());
    console.log('ehcCalculateGrossIncome()', ehcCalculateGrossIncome());
    console.log('ehcGrossTaxableFederal()', ehcGrossTaxableFederal());
    console.log('ehcUtahStateCreditValueHolder()', ehcUtahStateCreditValueHolder());
    console.log('ehcStateTaxBeforeCredits()', ehcStateTaxBeforeCredits());
    console.log('ehcGrossTaxableFederalUtahStateCreditValueHolder()', ehcGrossTaxableFederalUtahStateCreditValueHolder());
    console.log('ehcCreditBeforePhaseOut()', ehcCreditBeforePhaseOut());
    console.log('ehcPhaseOutXMultiplier()', ehcPhaseOutXMultiplier());
    console.log('ehcNumKids()', ehcNumKids());
    console.log('ehcFederalTaxesOwedBeforeCredits()', ehcFederalTaxesOwedBeforeCredits());
    console.log('ehcEITC()', ehcEITC());
    console.log('ehcChildTaxCredit()', ehcChildTaxCredit());
    console.log('ehcAdjustedChildTaxCredit()', ehcAdjustedChildTaxCredit());
    console.log('ehcFederalTaxesLessChildCareTaxCredit()', ehcFederalTaxesLessChildCareTaxCredit());
    console.log('ehcAdjustedChildTaxCreditUsed()', ehcAdjustedChildTaxCreditUsed());
    console.log('ehcAdditionalChildTaxCredit()', ehcAdditionalChildTaxCredit());
    console.log('ehcChildCareTaxCredit()', ehcChildCareTaxCredit());
    console.log('ehcSumOfNonRefundableTaxCredits()', ehcSumOfNonRefundableTaxCredits());
    console.log('ehcSumOfRefundableTaxCredits()', ehcSumOfRefundableTaxCredits());
    console.log('ehcFederalTaxesOwedLessNonRefundableTaxCredits()', ehcFederalTaxesOwedLessNonRefundableTaxCredits());
    console.log('ehcFederalDeductionPlusStateExemtionTimesMultiplier()', ehcFederalDeductionPlusStateExemtionTimesMultiplier());
    console.log('ehcUtahTaxCredit()', ehcUtahTaxCredit());
    console.log('ehcFederalPayrollTax()', ehcFederalPayrollTax());
    console.log('ehcFederalTaxOwed()', ehcFederalTaxOwed());
    console.log('ehcUtahTaxOwed()', ehcUtahTaxOwed());
    console.log('ehcTotalExpenses()', ehcTotalExpenses());
    console.log('ehcSavingsAsPercentageOfGrossIncome()', ehcSavingsAsPercentageOfGrossIncome());
    console.log('ehcTotalExpensesPlusSavings()', ehcTotalExpensesPlusSavings());
    console.log('ehcTotalTax()', ehcTotalTax());
    console.log('ehcNetYearlyIncome()', ehcNetYearlyIncome());

}
function log_taxes_mhc(family_combination) {
    console.log("==========FAMILY COMBINATION==========");
    console.log(family_combination.adults,
        family_combination.infants,
        family_combination.preschoolers,
        family_combination.schoolagers,
        family_combination.teenagers);
    console.log('mhcQualifyingChildCareExpenses()',mhcQualifyingChildCareExpenses());
    console.log('mhcFamilySize()',mhcFamilySize());
    console.log('mhcStandardDeduction()',mhcStandardDeduction());
    console.log('mhcExemptionsFederal()',mhcExemptionsFederal());
    console.log('mhcExemptionsState()',mhcExemptionsState());
    console.log('mhcCalculateGrossIncome()',mhcCalculateGrossIncome());
    console.log('mhcGrossTaxableFederal()',mhcGrossTaxableFederal());
    console.log('mhcUtahStateCreditValueHolder()',mhcUtahStateCreditValueHolder());
    console.log('mhcStateTaxBeforeCredits()',mhcStateTaxBeforeCredits());
    console.log('mhcGrossTaxableFederalUtahStateCreditValueHolder()',mhcGrossTaxableFederalUtahStateCreditValueHolder());
    console.log('mhcCreditBeforePhaseOut()',mhcCreditBeforePhaseOut());
    console.log('mhcPhaseOutXMultiplier()',mhcPhaseOutXMultiplier());
    console.log('mhcNumKids()',mhcNumKids());
    console.log('mhcFederalTaxesOwedBeforeCredits()',mhcFederalTaxesOwedBeforeCredits());
    console.log('mhcEITC()',mhcEITC());
    console.log('mhcChildTaxCredit()',mhcChildTaxCredit());
    console.log('mhcAdjustedChildTaxCredit()',mhcAdjustedChildTaxCredit());
    console.log('mhcFederalTaxesLessChildCareTaxCredit()',mhcFederalTaxesLessChildCareTaxCredit());
    console.log('mhcAdjustedChildTaxCreditUsed()',mhcAdjustedChildTaxCreditUsed());
    console.log('mhcAdditionalChildTaxCredit()',mhcAdditionalChildTaxCredit());
    console.log('mhcChildCareTaxCredit()',mhcChildCareTaxCredit());
    console.log('mhcFederalPovertyLine()',mhcFederalPovertyLine());
    console.log('mhcGrossIncomeDividedByFederalPovertyLine()',mhcGrossIncomeDividedByFederalPovertyLine());
    console.log('mhcValueFromApplicableFigureTable()',mhcValueFromApplicableFigureTable());
    console.log('mhcApplicableFigureTimesGrossIncome()',mhcApplicableFigureTimesGrossIncome());
    console.log('mhcBenchmarkSilverPlan()',mhcBenchmarkSilverPlan());
    console.log('mhcBenchmarkMinusApplicableFigureTimesGrossIncome()',mhcBenchmarkMinusApplicableFigureTimesGrossIncome());
    console.log('mhcMarketplacePlanChosen()',mhcMarketplacePlanChosen());
    console.log('mhcPremiumTaxCredit()',mhcPremiumTaxCredit());
    console.log('mhcEligibleExpenses()',mhcEligibleExpenses());
    console.log('mhcUtahHealthBenefitPlanCredit()',mhcUtahHealthBenefitPlanCredit());
    console.log('mhcSumOfNonRefundableTaxCredits()',mhcSumOfNonRefundableTaxCredits());
    console.log('mhcSumOfRefundableTaxCredits()',mhcSumOfRefundableTaxCredits());
    console.log('mhcFederalTaxesOwedLessNonRefundableTaxCredits()',mhcFederalTaxesOwedLessNonRefundableTaxCredits());
    console.log('mhcFederalDeductionPlusStateExemtionTimesMultiplier()',mhcFederalDeductionPlusStateExemtionTimesMultiplier());
    console.log('mhcUtahTaxCredit()',mhcUtahTaxCredit());
    console.log('mhcFederalPayrollTax()',mhcFederalPayrollTax());
    console.log('mhcFederalTaxOwed()',mhcFederalTaxOwed());
    console.log('mhcUtahTaxOwed()',mhcUtahTaxOwed());
    console.log('mhcTotalExpenses()',mhcTotalExpenses());
    console.log('mhcSavingsAsPercentageOfGrossIncome()',mhcSavingsAsPercentageOfGrossIncome());
    console.log('mhcTotalExpensesPlusSavings()',mhcTotalExpensesPlusSavings());
    console.log('mhcTotalTax()',mhcTotalTax());
    console.log('mhcNetYearlyIncome()',mhcNetYearlyIncome());

}