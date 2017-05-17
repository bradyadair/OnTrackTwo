// CostOfCarOwnership	B13
function carTaxOnPurchase() {
    return car_price * car_tax_multiplier;
}
// CostOfCarOwnership	B14
function carPaymentsMonthly() {
    return car_monthly_payment / 2;
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
    return car_gas_price * (car_miles_driven / car_miles_per_gallon);
}
// CostOfCarOwnership	C17
function carTotalCostAnnualOne() {
    return (car_registration_annual +
            car_emissions_annual +
            car_maintenance_annual +
            carTaxOnPurchaseAnnual() +
            carPaymentsAnnual() +
            carGasCostAnnual());
}
// CostOfCarOwnership	C18 - NO DEPENDENTS
function carTotalCostAnnualTwo() {
    return carTotalCostAnnualOne() * 2;
}
