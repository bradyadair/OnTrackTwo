// Family Care ---------------------------------------------------------------------------------------------
// ChildCareCosts	B7
function familyCareSchoolagerCombined() {
    return (familyCareSchoolagerNotInSchool() * 0.25 +
            familyCareSchoolagerInSchool() * 0.75);
}
// ChildCareCosts   D3
function familyCareAverageInfantAnnual() {
    return familyCareAverageInfant() * 12;
}
// ChildCareCosts   D4
function familyCareAveragePreschoolerAnnual() {
    return familyCareAveragePreschooler() * 12;
}
// ChildCareCosts   D5
function familyCareSchoolagerInSchoolAnnual() {
    return familyCareSchoolagerInSchool() * 12;
}
// ChildCareCosts   D6
function familyCareSchoolagerNotInSchoolAnnual() {
    return familyCareSchoolagerNotInSchool() * 12;
}
// ChildCareCosts   D7
function familyCareSchoolagerCombinedAnnual() {
    return familyCareSchoolagerCombined() * 12;
}
// ChildCareCosts	E13/B3
function familyCareAverageInfant() {
    return (parseFloat(sessionStorage.getItem('family_care_0_to_12_mo')) +
        parseFloat(sessionStorage.getItem('family_care_1_yr')) +
        parseFloat(sessionStorage.getItem('family_care_2_yr'))) / 3;
}
// ChildCareCosts	E16/B4
function familyCareAveragePreschooler() {
    return (parseFloat(sessionStorage.getItem('family_care_3_yr')) +
        parseFloat(sessionStorage.getItem('family_care_4_yr')) +
        parseFloat(sessionStorage.getItem('family_care_5_yr'))) / 3;
}
// ChildCareCosts	E18/B5
function familyCareSchoolagerInSchool() {
    return (parseFloat(sessionStorage.getItem('family_care_kindergarten_in_school')) * 0.14 +
    parseFloat(sessionStorage.getItem('family_care_schoolage_in_school')) * 0.86);
}
// ChildCareCosts	E20/B6
function familyCareSchoolagerNotInSchool() {
    return (parseFloat(sessionStorage.getItem('family_care_kindergarten_not_in_school')) * 0.14 +
    parseFloat(sessionStorage.getItem('family_care_schoolage_not_in_school')) * 0.86);
}

// Center Care ---------------------------------------------------------------------------------------------
// ChildCareCosts	C7
function centerCareSchoolagerCombined() {
    return (centerCareSchoolagerNotInSchool() * 0.25 +
    centerCareSchoolagerInSchool() * 0.75);
}
// ChildCareCosts	E3
function centerCareAverageInfantAnnual() {
    return centerCareAverageInfant() * 12;
}
// ChildCareCosts	E4
function centerCareAveragePreschoolerAnnual() {
    return centerCareAveragePreschooler() * 12;
}
// ChildCareCosts	E5 - NO DEPENDENTS
function centerCareSchoolagerInSchoolAnnual() {
    return centerCareSchoolagerInSchool() * 12;
}
// ChildCareCosts   E6 - NO DEPENDENTS
function centerCareSchoolagerNotInSchoolAnnual() {
    return centerCareSchoolagerNotInSchool() * 12;
}
// ChildCareCosts   E7
function centerCareSchoolagerCombinedAnnual() {
    return centerCareSchoolagerCombined() * 12;
}
// ChildCareCosts	C13/C3
function centerCareAverageInfant() {
    return (parseFloat(sessionStorage.getItem('center_care_0_to_12_mo')) +
            parseFloat(sessionStorage.getItem('center_care_1_yr')) +
            parseFloat(sessionStorage.getItem('center_care_2_yr'))) / 3;
}
// ChildCareCosts	C16/C4
function centerCareAveragePreschooler() {
    return (parseFloat(sessionStorage.getItem('center_care_3_yr')) +
            parseFloat(sessionStorage.getItem('center_care_4_yr')) +
            parseFloat(sessionStorage.getItem('center_care_5_yr'))) / 3;
}
// ChildCareCosts	C18/C5
function centerCareSchoolagerInSchool() {
    return (parseFloat(sessionStorage.getItem('center_care_kindergarten_in_school')) * 0.14 +
            parseFloat(sessionStorage.getItem('center_care_schoolage_in_school')) * 0.86);
}
// ChildCareCosts	C20/C6
function centerCareSchoolagerNotInSchool() {
    return (parseFloat(sessionStorage.getItem('center_care_kindergarten_not_in_school')) * 0.14 +
            parseFloat(sessionStorage.getItem('center_care_schoolage_not_in_school')) * 0.86);
}
