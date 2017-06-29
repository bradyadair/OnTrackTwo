// Housing	K7
function housing1BedAverageMonthly() {
    let monthlyCost = (parseInt(sessionStorage.getItem('housing_1_bed_84401')) +
            parseFloat(sessionStorage.getItem('housing_1_bed_84403'))  +
            parseFloat(sessionStorage.getItem('housing_1_bed_84404'))  +
            parseFloat(sessionStorage.getItem('housing_1_bed_84405'))  +
            parseFloat(sessionStorage.getItem('housing_1_bed_84408'))) / 5;
    //console.log("Housing Monthly:   "+monthlyCost);
    return (monthlyCost);
}
// Housing	K8
function housing1BedAverageAnnual() {
    //console.log("monthly thangzsssss", housing1BedAverageMonthly());
    return housing1BedAverageMonthly() * 12;
}
// Housing	L7
function housing2BedAverageMonthly() {
    let monthlyCost = (parseFloat(sessionStorage.getItem('housing_2_bed_84401')) +
            parseFloat(sessionStorage.getItem('housing_2_bed_84403'))  +
            parseFloat(sessionStorage.getItem('housing_2_bed_84404'))  +
            parseFloat(sessionStorage.getItem('housing_2_bed_84405'))  +
            parseFloat(sessionStorage.getItem('housing_2_bed_84408'))) / 5;
    //console.log("Housing Monthly:   "+monthlyCost);
    return (monthlyCost);
}
// Housing	L8
function housing2BedAverageAnnual() {
    return housing2BedAverageMonthly() * 12;
}
// Housing	M7
function housing3BedAverageMonthly() {
    let monthlyCost = (parseFloat(sessionStorage.getItem('housing_3_bed_84401')) +
            parseFloat(sessionStorage.getItem('housing_3_bed_84403'))  +
            parseFloat(sessionStorage.getItem('housing_3_bed_84404'))  +
            parseFloat(sessionStorage.getItem('housing_3_bed_84405'))  +
            parseFloat(sessionStorage.getItem('housing_3_bed_84408'))) / 5;
    //console.log("Housing Monthly:   "+monthlyCost);
    return (monthlyCost);
}
// Housing	M8
function housing3BedAverageAnnual() {
    return housing3BedAverageMonthly() * 12;
}
// Housing	N7
function housing4BedAverageMonthly() {
    let monthlyCost = (parseFloat(sessionStorage.getItem('housing_4_bed_84401')) +
            parseFloat(sessionStorage.getItem('housing_4_bed_84403'))  +
            parseFloat(sessionStorage.getItem('housing_4_bed_84404'))  +
            parseFloat(sessionStorage.getItem('housing_4_bed_84405'))  +
            parseFloat(sessionStorage.getItem('housing_4_bed_84408'))) / 5;
    //console.log("Housing Monthly:   "+monthlyCost);
    return (monthlyCost);
}
// Housing	N8
function housing4BedAverageAnnual() {
    return housing4BedAverageMonthly() * 12;
}