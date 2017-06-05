// Housing	K7
function housing1BedAverageMonthly() {
    // ******** USING VARIABLES FROM THE DATABASE
    /*
    let totalCost = 0;
    $.ajax({
            'url': '../api/v1/api.php?endpoint=entry&name=housing_1%',
            'method': 'GET',
            'dataType': 'json',
            'success': function (entries) {
                for (let entry_index = 0; entry_index < entries.length; entry_index++) {
                    totalCost += parseInt(entries[entry_index]['entryValue']);
                    console.log(totalCost)
                }
                $('#housing-cost').text('$' + (totalCost / 5).toLocaleString(undefined, {maximumFractionDigits:0}));
                return totalCost / 5;
            },
            error: function(response){
                console.log(response);
            }
    });
    */
    // ******** USING HARDCODED VARIABLES
    return (housing_1_bed_84401  +
            housing_1_bed_84403  +
            housing_1_bed_84404  +
            housing_1_bed_84405  +
            housing_1_bed_84408) / 5;
}
// Housing	K8
function housing1BedAverageAnnual() {
    console.log("monthly thangzsssss", housing1BedAverageMonthly());
    return housing1BedAverageMonthly() * 12;
}
// Housing	L7
function housing2BedAverageMonthly() {
    return (housing_2_bed_84401  +
            housing_2_bed_84403  +
            housing_2_bed_84404  +
            housing_2_bed_84405  +
            housing_2_bed_84408) / 5;
}
// Housing	L8
function housing2BedAverageAnnual() {
    return housing2BedAverageMonthly() * 12;
}
// Housing	M7
function housing3BedAverageMonthly() {
    return (housing_3_bed_84401  +
            housing_3_bed_84403  +
            housing_3_bed_84404  +
            housing_3_bed_84405  +
            housing_3_bed_84408) / 5;
}
// Housing	M8
function housing3BedAverageAnnual() {
    return housing3BedAverageMonthly() * 12;
}
// Housing	N7
function housing4BedAverageMonthly() {
    return (housing_4_bed_84401  +
            housing_4_bed_84403  +
            housing_4_bed_84404  +
            housing_4_bed_84405  +
            housing_4_bed_84408) / 5;
}
// Housing	N8
function housing4BedAverageAnnual() {
    return housing4BedAverageMonthly() * 12;
}