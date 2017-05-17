// GeneratedStandard	J4
function finalHousingAnnual() {
    console.log("roomssssssss", rooms);
    return rooms === "Standard" ? costTotalHousing() :
        rooms === 1 ? housing1BedAverageAnnual() :
            rooms === 2 ? housing2BedAverageAnnual() :
                rooms === 3 ? housing3BedAverageAnnual() :
                    rooms === 4 ? housing4BedAverageAnnual() :
                        0;
}
// GeneratedStandard	J7
function finalChildcareAnnual() {
    return estimated_baby_sitting_annual > 0 ? estimated_baby_sitting_annual :
        use_family_care === "Yes" ? costTotalFamilyCare() :
            costTotalCenterCare();
}
// GeneratedStandard	J10
function finalFoodAnnual() {
    return costTotalFood();
}
// GeneratedStandard	J13
function finalCarInsuranceAnnual() {
    return costTotalCarInsurance();
}
// GeneratedStandard	J16
function finalCarOwnershipAnnual() {
    return costTotalCarOwnership();
}
// GeneratedStandard	J19
function finalPublicTransportationAnnual() {
    return costTotalPublicTransport();
}
// GeneratedStandard	J22
function finalHealthInsuranceAnnual() {
    return marketplace_healthcare === "No" ? costEmployerHealthInsurance() :
        costTotalMarketplaceExpense();
}
// GeneratedStandard	J25
function finalOutOfPocketAnnual() {
    return marketplace_healthcare === "No" ? costTotalOOPEmployer() :
        costTotalOOPMarketplace();
}
// GeneratedStandard	J28
function finalEntertainmentAnnual() {
    return costTotalEntertainment();
}
// GeneratedStandard	J31
function finalMiscellaneousAnnual() {
    return costTotalMisc();
}
// GeneratedStandard	AD4
function finalSavingsAnnual() {
    return marketplace_healthcare === "No" ? ehcSavingsAsPercentageOfGrossIncome() :
        mhcSavingsAsPercentageOfGrossIncome();
}
// GeneratedStandard	AD7
function finalNetTaxesAnnual() {
    return marketplace_healthcare === "No" ? ehcTotalTax() :
        mhcTotalTax()
}
// GeneratedStandard	Y22
function finalGrossIncomeAnnual() {
    return marketplace_healthcare === "No" ? ehc_gross_income :
        mhc_gross_income;
}
// GeneratedStandard	AC22
function finalGrossIncomeAnnualHourly() {
    return finalGrossIncomeAnnual() / (52 * 40);
}
// GeneratedStandard	Y24
function finalNetIncomeAnnual() {
    return marketplace_healthcare === "No" ? ehcNetYearlyIncome() :
        mhcNetYearlyIncome();
}
// GeneratedStandard	AC24
function finalNetIncomeAnnualHourly() {
    return finalNetIncomeAnnual() / (52 * 40);
}
// GeneratedStandard	Y27
function finalTotalExpensesAnnual() {
    return finalHousingAnnual() +
    finalChildcareAnnual() +
    finalFoodAnnual() +
    finalCarInsuranceAnnual() +
    finalCarOwnershipAnnual() +
    finalPublicTransportationAnnual() +
    finalHealthInsuranceAnnual() +
    finalOutOfPocketAnnual() +
    finalEntertainmentAnnual() +
    finalMiscellaneousAnnual();
}



