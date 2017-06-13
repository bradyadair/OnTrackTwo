// CostByAge	B2
function numInfants() {
    return num_infants;
}
// CostByAge	B3
function numPreschoolers() {
    return num_preschoolers;
}
// CostByAge	B4
function numSchoolagers() {
    return num_schoolagers;
}
// CostByAge	B5
function numTeenagers() {
    return num_teenagers;
}
// CostByAge	B6
function numAdults() {
    return num_adults;
}
// CostByAge	B8
function numKids() {
    return (numInfants() +
    numPreschoolers() +
    numSchoolagers() +
    numTeenagers());
}
// CostByAge	B9
function familySize() {
    return (numInfants() +
    numPreschoolers() +
    numSchoolagers() +
    numTeenagers() +
    numAdults());
}
// CostByAge	B11
function numExcessiveChildren() {
    return numKids() - 5 < 1 ? 0 :
        numKids() - 5;
}
// CostByAge	B12
function numExcessiveAdults() {
    return numAdults() - 2 < 1 ? 0 :
        numAdults() - 2;
}
// CostByAge	B14
function numCars() {
    return cars === "Standard" ? numAdults() :
        cars;
}
// CostByAge	B19
function costOverall() {
    return (
        (rooms === "Standard" ? costTotalHousing() :
            rooms === 1 ? housing1BedAverageAnnual() :
                rooms === 2 ? housing2BedAverageAnnual() :
                    rooms === 3 ? housing3BedAverageAnnual() :
                        rooms === 4 ? housing4BedAverageAnnual() : 0)
        +
        (estimated_baby_sitting_annual > 0 ? estimated_baby_sitting_annual :
            use_family_care === "Yes" ? costTotalFamilyCare() :
                costTotalCenterCare())
        +
        costTotalCarInsurance() +
        costTotalCarOwnership() +
        (marketplace_healthcare === "No" ? costTotalEmployerCombined() :
            costTotalMarketplaceCombined())
        +
        costTotalEntertainment() +
        costTotalMisc() +
        costExcessiveChildren() +
        costExcessiveAdults() +
        costTotalPublicTransport() +
        costTotalFood()
    )
}
// CostByAge	C16
function costTotalHousing() {
    return (
        numKids() < 1 ? housing1BedAverageAnnual() :
            numKids() <= 2 ? housing2BedAverageAnnual() :
                numKids() <= 4 ? housing3BedAverageAnnual() :
                    housing4BedAverageAnnual());
}
// CostByAge	D2
function costCenterCareInfant() {
    return numInfants() * centerCareAverageInfantAnnual();
}
// CostByAge	D3
function costCenterCarePreschooler() {
    return numPreschoolers() * centerCareAveragePreschoolerAnnual();
}
// CostByAge	D4
function costCenterCareSchoolager() {
    return numSchoolagers() * centerCareSchoolagerCombinedAnnual();
}
// CostByAge	D16
function costTotalCenterCare() {
    return use_childcare === "Yes" ?
        costCenterCareInfant() +
        costCenterCarePreschooler() +
        costCenterCareSchoolager()
        :
        0;
}
// CostByAge	E2
function costFoodInfant() {
    return 12 * numInfants() * sessionStorage.getItem('food_infant');
}
// CostByAge	E3
function costFoodPreschooler() {
    return 12 * numPreschoolers() * sessionStorage.getItem('food_preschooler');
}
// CostByAge	E4
function costFoodSchoolager() {
    return 12 * numSchoolagers() * sessionStorage.getItem('food_schoolager');
}
// CostByAge	E5
function costFoodTeenager() {
    return 12 * numTeenagers() * sessionStorage.getItem('food_teenager');
}
// CostByAge	E6
function costFoodAdult() {
    return 12 * numAdults() * sessionStorage.getItem('food_adult');
}
// CostByAge	E16
function costTotalFood() {
    let food_multiplier = (
        familySize() === 1 ? 1.20 :
            familySize() === 2 ? 1.10 :
                familySize() === 3 ? 1.05 :
                    familySize() === 4 ? 1.00 :
                        familySize() < 7 ? 0.95 :
                            0.90
    );
    return (costFoodInfant() +
            costFoodPreschooler() +
            costFoodSchoolager() +
            costFoodTeenager() +
            costFoodAdult()
        ) * food_multiplier;

}

// CostByAge	F14
function costCarInsurance() {
    return numCars() * car_insurance_single;
}
// CostByAge	F16
function costTotalCarInsurance() {
    return costCarInsurance();
}
// CostByAge	G14
function costCarOwnership() {
    return numCars() * carTotalCostAnnualOne();
}
// CostByAge	G16
function costTotalCarOwnership() {
    return costCarOwnership();
}
// CostByAge	H16
function costEmployerHealthInsurance() {
    return (
        familySize() === 1 ? employer_health_insurance_average_1_person :
            familySize() === 2 ? employer_health_insurance_average_2_people :
                employer_health_insurance_average_3_people);
}
// CostByAge	I2
function costOOPEmployerInfant() {
    return numInfants() * oop_ehc_infant_annual;
}
// CostByAge	I3
function costOOPEmployerPreschooler() {
    return numPreschoolers() * oop_ehc_preschooler_annual;
}
// CostByAge	I4
function costOOPEmployerSchoolager() {
    return numSchoolagers() * oop_ehc_schoolager_annual;
}
// CostByAge	I5
function costOOPEmployerTeenager() {
    return numTeenagers() * oop_ehc_teenager_annual;
}
// CostByAge	I6
function costOOPEmployerAdult() {
    return numAdults() * oop_ehc_adult_annual;
}
// CostByAge	I16
function costTotalOOPEmployer() {
    return costOOPEmployerInfant() +
        costOOPEmployerPreschooler() +
        costOOPEmployerSchoolager() +
        costOOPEmployerTeenager() +
        costOOPEmployerAdult();
}
// CostByAge	I17
function costTotalEmployerCombined() {
    return costTotalOOPEmployer() + costEmployerHealthInsurance();
}
// CostByAge	J16
function costTotalEntertainment() {
    return (
        familySize() === 1 ? entertainment_family_size_1 :
            familySize() === 2 ? entertainment_family_size_2 :
                familySize() === 3 ? entertainment_family_size_3 :
                    familySize() === 4 ? entertainment_family_size_4 :
                        entertainment_family_size_5_plus);
}
// CostByAge	K16
function costTotalMisc() {
    return (
        familySize() === 1 ? misc1() :
            familySize() === 2 ? misc2() :
                familySize() === 3 ? misc3() :
                    familySize() === 4 ? misc4() :
                        familySize() === 5 ? misc5Plus50k() :
                            misc5Plus70k());
}
// CostByAge	L16
function costExcessiveChildren() {
    return numExcessiveChildren() * excessive_child_annual;
}
// CostByAge	M16
function costExcessiveAdults() {
    return numExcessiveAdults() * excessive_adult_annual;
}
// CostByAge	P2
function costFamilyCareInfant() {
    return numInfants() * familyCareAverageInfantAnnual();
}
// CostByAge	P3
function costFamilyCarePreschooler() {
    return numPreschoolers() * familyCareAveragePreschoolerAnnual();
}
// CostByAge	P4
function costFamilyCareSchoolager() {
    return numSchoolagers() * familyCareSchoolagerCombinedAnnual();
}
// CostByAge	P16
function costTotalFamilyCare() {
    return costFamilyCareInfant() +
        costFamilyCarePreschooler() +
        costFamilyCareSchoolager();
}
// CostByAge	R4
function costPublicTransportChild() {
    return bus_child_annual * bus_passes_child;
}
// CostByAge	R6
function costPublicTransportAdult() {
    return bus_adult_annual * bus_passes_adult;
}
// CostByAge	R16
function costTotalPublicTransport() {
    return costPublicTransportChild() + costPublicTransportAdult();
}
// CostByAge	S2
function costOOPMarketplaceInfant() {
    return oop_mhc_infant_annual * numInfants();
}
// CostByAge	S3
function costOOPMarketplacePreschooler() {
    return oop_mhc_preschooler_annual * numPreschoolers();
}
// CostByAge	S4
function costOOPMarketplaceSchoolager() {
    return oop_mhc_schoolager_annual * numSchoolagers();
}
// CostByAge	S5
function costOOPMarketplaceTeenager() {
    return oop_mhc_teenager_annual * numTeenagers();
}
// CostByAge	S6
function costOOPMarketplaceAdult() {
    return oop_mhc_adult_annual * numAdults();
}
// CostByAge	S16
function costTotalOOPMarketplace() {
    return costOOPMarketplaceInfant() +
        costOOPMarketplacePreschooler() +
        costOOPMarketplaceSchoolager() +
        costOOPMarketplaceTeenager() +
        costOOPMarketplaceAdult();
}
// CostByAge	V3
function costMarketplaceExpenseAdult() {
    return expense_mhc_adult_annual * numAdults();
}
// CostByAge	V4
function costMarketplaceExpenseChild() {
    return expense_mhc_child_annual * numKids();
}
// CostByAge	V16
function costTotalMarketplaceExpense() {
    return costMarketplaceExpenseAdult() + costMarketplaceExpenseChild();
}
// CostByAge	V17
function costTotalMarketplaceCombined() {
    return costTotalMarketplaceExpense() + costTotalOOPMarketplace();
}
































