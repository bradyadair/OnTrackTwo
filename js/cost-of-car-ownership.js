// CostOfCarOwnership	B13
function carTaxOnPurchase() {
    return sessionStorage.getItem('car_price') * sessionStorage.getItem('car_tax_multiplier');
}
// CostOfCarOwnership	B14
function carPaymentsMonthly() {
    return sessionStorage.getItem('car_monthly_payment') / 2;
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
    return sessionStorage.getItem('car_gas_price') * (sessionStorage.getItem('car_miles_driven') / sessionStorage.getItem('car_miles_per_gallon'));
}
// CostOfCarOwnership	C17
function carTotalCostAnnualOne() {
    return (sessionStorage.getItem('car_registration_annual') +
            sessionStorage.getItem('car_emissions_annual') +
            sessionStorage.getItem('car_maintenance_annual') +
            carTaxOnPurchaseAnnual() +
            carPaymentsAnnual() +
            carGasCostAnnual());
}
// CostOfCarOwnership	C18 - NO DEPENDENTS
function carTotalCostAnnualTwo() {
    return carTotalCostAnnualOne() * 2;
}
