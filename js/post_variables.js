function post_to_database(name, value, category) {
    $.ajax({
        'url': 'https://icarus.cs.weber.edu/~tg46219/cottages/api/v1/entry/',
        data:JSON.stringify({
            'entryName': name,
            'entryValue': value,
            'categoryId': category
        }),
        method: 'POST',
        success: function(response){
            console.log(response);
        }
    })
}
let database_values = [];

$.ajax({
    'url': '../api/v1/entry/',
    'method': 'GET',
    success: function(response){
        database_values = JSON.parse(response);
        console.log(database_values);
        console.log(database_values[0]);
        console.log(get_database_value(9050));
        for(let i = 8944; i < 9051; i++){
            let value_in_question = get_database_value(i.toString());
            window[value_in_question['entryName']] =
                parseFloat(value_in_question['entryValue']);
        }
    }
});

function get_database_value(id){
    let value = database_values.filter(function(value){
        return value['id'] == id
    })[0];
    return value;
}

//('center_care_avg_0_to_12_mo', "653.65", 3);
//('center_care_avg_1_yr', "663.05", 3);
//('center_care_avg_2_yr', "535.23", 3);
//('center_care_avg_3_yr', "511.42", 3);
//('center_care_avg_4_yr', "503.42", 3);
//('center_care_avg_5_yr', "511.33", 3);
//('center_care_avg_kindergarten_in', "466.12", 3);
//('center_care_avg_kindergarten_out', "489.09", 3);
//('center_care_avg_schoolage_in', "442.00", 3);
//('center_care_avg_schoolage_out', "476.89", 3);
//('family_care_avg_0_to_12_mo', "514.77", 3);
//('family_care_avg_1_yr', "521.68", 3);
//('family_care_avg_2_yr', "482.32", 3);
//('family_care_avg_3_yr', "467.64", 3);
//('family_care_avg_4_yr', "457.12", 3);
//('family_care_avg_5_yr', "467.38", 3);
//('family_care_avg_kindergarten_in', "412.79", 3);
//('family_care_avg_kindergarten_out', "437.43", 3);
//('family_care_avg_schoolage_in', "384.65", 3);
//('family_care_avg_schoolage_out', "439.08", 3);
//('housing_1_bed_84401', "550.00", 1);
//('housing_1_bed_84403', "560.00", 1);
//('housing_1_bed_84404', "620.00", 1);
//('housing_1_bed_84405', "620.00", 1);
//('housing_1_bed_84408', "610.00", 1);
//('housing_2_bed_84401', "710.00", 1);
//('housing_2_bed_84403', "720.00", 1);
//('housing_2_bed_84404', "790.00", 1);
//('housing_2_bed_84405', "790.00", 1);
//('housing_2_bed_84408', "780.00", 1);
//('housing_3_bed_84401', "1020.00", 1);
//('housing_3_bed_84403', "1030.00", 1);
//('housing_3_bed_84404', "1130.00", 1);
//('housing_3_bed_84405', "1130.00", 1);
//('housing_3_bed_84408', "1120.00", 1);
//('housing_4_bed_84401', "1170.00", 1);
//('housing_4_bed_84403', "1190.00", 1);
//('housing_4_bed_84404', "1300.00", 1);
//('housing_4_bed_84405', "1300.00", 1);
//('housing_4_bed_84408', "1290.00", 1);
//('low_cost_food_plan_price_per_mo_weber_county_infant', "118.84", 2);
//('low_cost_food_plan_price_per_mo_weber_county_preschooler', "124.92", 2);
//('low_cost_food_plan_price_per_mo_weber_county_schoolager', "193.37", 2);
//('low_cost_food_plan_price_per_mo_weber_county_teenager', "209.30", 2);
//('low_cost_food_plan_price_per_mo_weber_county_adult', "210.30", 2);
//('car_insurance_avg_per_mo_single', "465.64", 4);
//('car_insurance_avg_per_mo_married', "466.00", 4);
//('car_price', "5341.00", 4);
//('car_miles_per_gallon', "26.00", 4);
//('car_finance_cost', "373.64", 4);
//('car_monthly_payment', "158.74", 4);
//('car_gas_price', "2.75", 4);
//('car_miles', "14716.00", 4);
//('car_registration', "110.50", 4);
//('car_emissions', "27.00", 4);
//('car_maintenance', "580.00", 4);
//('employer_health_premium_in_avg_single', "1406.00", 6);
//('employer_health_premium_in_avg_couple', "2592.00", 6);
//('employer_health_premium_in_avg_family', "3412.00", 6);
//('entertainment_household_of_1', "1139.00", 16);
//('entertainment_household_of_2', "1496.00", 16);
//('entertainment_household_of_3', "1650.00", 16);
//('entertainment_household_of_4', "2379.00", 16);
//('entertainment_household_of_5_or_more', "2429.00", 16);
//('misc_for_1_15000_to_19999', "403.00", 16);
//('personal_products_for_1_15000_to_19999', "311.00", 16);
//('housekeeping_supplies_for_1_15000_to_19999', "307.00", 16);
//('apparel_for_1_15000_to_19999', "593.00", 16);
//('misc_for_2_20000_to_29999', "275.00", 16);
//('personal_products_for_2_20000_to_29999', "487.00", 16);
//('housekeeping_supplies_for_2_20000_to_29999', "520.00", 16);
//('apparel_for_2_20000_to_29999', "709.00", 16);
//('misc_for_3_30000_to_39999', "389.00", 16);
//('personal_products_for_3_30000_to_39999', "522.00", 16);
//('housekeeping_supplies_for_3_30000_to_39999', "400.00", 16);
//('apparel_for_3_30000_to_39999', "1230.00", 16);
//('misc_for_4_50000_to_69999', "512.00", 16);
//('personal_products_for_4_50000_to_69999', "730.00", 16);
//('housekeeping_supplies_for_4_50000_to_69999', "598.00", 16);
//('apparel_for_4_50000_to_69999', "1676.00", 16);
//('misc_for_5_or_more_50000_to_69999', "610.00", 16);
//('personal_products_for_5_or_more_50000_to_69999', "582.00", 16);
//('housekeeping_supplies_for_5_or_more_50000_to_69999', "752.00", 16);
//('apparel_for_5_or_more_50000_to_69999', "2271.00", 16);
//('misc_for_5_or_more_70000_and_up', "932.00", 16);
//('personal_products_for_5_or_more_70000_and_up', "980.00", 16);
//('housekeeping_supplies_for_5_or_more_70000_and_up', "1115.00", 16);
//('apparel_for_5_or_more_70000_and_up', "3095.00", 16);
//('marketplace_oop_infant', "46.74", 6);
//('marketplace_oop_preschooler', "46.74", 6);
//('marketplace_oop_schoolager', "139.86", 6);
//('marketplace_oop_teenager', "139.86", 6);
//('marketplace_oop_adult', "161.43", 6);
//('employer_oop_infant', "31.16", 6);
//('employer_oop_preschooler', "31.16", 6);
//('employer_oop_schoolager', "93.24", 6);
//('employer_oop_teenager', "93.24", 6);
//('employer_oop_adult', "107.62", 6);
//('adult_marketplace_cost', "2536", 6);
//('child_marketplace_cost', "2536", 6);
//('benchmark_silver_base', "2932", 6);
//('benchmark_silver_additional', "1673", 6);
//('child_tax_credit', "1000", 6);
//('public_transportation_child_cost', "753", 6);
//('public_transportation_adult_cost', "1005", 6);
//('ehc_gross_income', "21999.30", 6);
//('mhc_gross_income', "19069.30", 6);
