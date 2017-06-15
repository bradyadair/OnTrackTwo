// CostOfCarOwnership	B13
function carTaxOnPurchase() {
    //console.log('carTax: ' + parseFloat(sessionStorage.getItem('car_price')) * parseFloat(sessionStorage.getItem('car_tax_multiplier')))
    return parseFloat(sessionStorage.getItem('car_price')) * parseFloat(sessionStorage.getItem('car_tax_multiplier'));
}
// CostOfCarOwnership	B14
function carPaymentsMonthly() {
    //console.log('carPayment:  ' + parseFloat(sessionStorage.getItem('car_monthly_payment')) / 2)
    return parseFloat(sessionStorage.getItem('car_monthly_payment')) / 2;
}
// CostOfCarOwnership	C13
function carTaxOnPurchaseAnnual() {
    return carTaxOnPurchase() / 6;
}
// CostOfCarOwnership	C14
function carPaymentsAnnual() {
    return carPaymentsMonthly() * 12;
}
// CostOfCarOwnership	C15
function carGasCostAnnual() {
    //console.log('carGasCost:  ' + parseFloat(sessionStorage.getItem('car_gas_price')) * (parseFloat(sessionStorage.getItem('car_miles_driven')) / parseFloat(sessionStorage.getItem('car_miles_per_gallon'))))
    return parseFloat(sessionStorage.getItem('car_gas_price')) * (parseFloat(sessionStorage.getItem('car_miles_driven')) / parseFloat(sessionStorage.getItem('car_miles_per_gallon')));
}
// CostOfCarOwnership	C17
function carTotalCostAnnualOne() {
    //console.log('car Registration:  ' + parseFloat(sessionStorage.getItem('car_registration_annual')))
    //console.log('car Emissions:  ' + parseFloat(sessionStorage.getItem('car_emissions_annual')))
    //console.log('car Maintenance:  ' + parseFloat(sessionStorage.getItem('car_maintenance_annual')))
    return (parseFloat(sessionStorage.getItem('car_registration_annual')) +
            parseFloat(sessionStorage.getItem('car_emissions_annual')) +
            parseFloat(sessionStorage.getItem('car_maintenance_annual')) +
            carTaxOnPurchaseAnnual() +
            carPaymentsAnnual() +
            carGasCostAnnual());
}
// CostOfCarOwnership	C18 - NO DEPENDENTS
function carTotalCostAnnualTwo() {
    return carTotalCostAnnualOne() * 2;
}
