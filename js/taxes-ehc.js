// Taxes	A9
function ehcQualifyingChildCareExpenses() {
    return (
        (numInfants() + numPreschoolers() + numSchoolagers()) === 0 ? qualifying_childcare_expenses_0_kids :
            numInfants() + numPreschoolers() + numSchoolagers() === 1 ? qualifying_childcare_expenses_1_kids :
                numInfants() + numPreschoolers() + numSchoolagers() > 1 ? qualifying_childcare_expenses_2_kids_plus :
                    "False")
}
// Taxes	B9
function ehcFamilySize() {
    return familySize();
}
// Taxes	C9
function ehcStandardDeduction() {
    return num_adults === 1 ?
        (ehcFamilySize() > 1 ? standard_deduction_1_adults_1_kids_plus :
            standard_deduction_1_adults_0_kids)
        :
        standard_deduction_2_adults_any_kids;
}
// Taxes	D9
function ehcExemptionsFederal() {
    return ehcFamilySize() * exemptions_federal_each;
}
// Taxes	E9
function ehcExemptionsState() {
    return ehcFamilySize() * exemptions_state_each;
}
// Taxes    F9
let ehc_gross_income = 19999; // Starting guess value.
function ehcCalculateGrossIncome() {
    let ehc_gross = ehc_gross_income;
    let ehc_expenses_plus_savings = ehcTotalExpensesPlusSavings();
    let ehc_total_tax = ehcTotalTax();
    let ehc_net_income = function (ehc_gross, ehc_total_tax) {
        return ehc_gross - ehc_total_tax;
    };

    ehc_gross = goalSeek({
        Func: ehc_net_income,   // The function which should return the value of the goal cell.
        aFuncParams: [ehc_gross, ehc_total_tax],    // The params to be passed to the function above.
        oFuncArgTarget: {
            Position: 0 // The position in the aFuncParams array of the value which will be changed.
        },
        Goal: ehc_expenses_plus_savings,    // The value which the function above should match.
        Tol: 0.01,  // The tolerance of the final result.
        maxIter: 1000   // The maximum number of iterations for the goalSeek function to take.
    });
    return ehc_gross;
}
// Taxes	G9
function ehcGrossTaxableFederal() {
    return (ehc_gross_income - ehcExemptionsFederal() - ehcStandardDeduction()) > 0 ?
        (ehc_gross_income - ehcExemptionsFederal() - ehcStandardDeduction())
        :
        0;
}
// Taxes	H9
function ehcUtahStateCreditValueHolder() {
    return num_adults === 1 ?
        (ehcFamilySize() >= 2 ? utah_state_credit_value_holder_1_adults_2_kids_plus :
            utah_state_credit_value_holder_1_adults_1_kids_minus)
        :
        utah_state_credit_value_holder_2_adults_any_kids;
}
// Taxes	I9
function ehcStateTaxBeforeCredits() {
    return ehc_gross_income * state_tax_multiplier;
}
// Taxes	J9
function ehcGrossTaxableFederalUtahStateCreditValueHolder() {
    return (ehc_gross_income - ehcUtahStateCreditValueHolder()) > 0 ?
        (ehc_gross_income - ehcUtahStateCreditValueHolder())
        :
        0;
}
// Taxes	K9
function ehcCreditBeforePhaseOut() {
    return (ehcStandardDeduction() + ehcExemptionsState())
        *
        credit_before_phase_out_multiplier;
}
// Taxes	L9
function ehcPhaseOutXMultiplier() {
    return ehcGrossTaxableFederalUtahStateCreditValueHolder() * phase_out_multiplier;
}
// Taxes	M9
function ehcNumKids() {
    return numInfants() + numPreschoolers() + numSchoolagers() + numTeenagers();
}
// Taxes	N9
function ehcFederalTaxesOwedBeforeCredits() {
    return num_adults === 1 ? (
        ehcFamilySize() > 1 ? ( // adults = 1, family size > 1
            ehcGrossTaxableFederal() - 13150 < 0 ?
                ehcGrossTaxableFederal()
                * 0.1
                : (
                ehcGrossTaxableFederal() - 50200 < 0 ?
                    (ehcGrossTaxableFederal() - 13150)
                    * 0.15 + 1315
                    : (
                    ehcGrossTaxableFederal() - 129600 < 0 ?
                        (ehcGrossTaxableFederal() - 50200)
                        * 0.25 + 1315 + 5557.35
                        : (
                        ehcGrossTaxableFederal() - 209850 < 0 ?
                            (ehcGrossTaxableFederal() - 129600)
                            * 0.28 + 1315 + 5557.35 + 19849.75
                            : (
                            ehcGrossTaxableFederal() - 411500 < 0 ?
                                (ehcGrossTaxableFederal() - 209850)
                                * 0.33 + 1315 + 5557.35 + 19849.75 + 22469.72
                                : (
                                (ehcGrossTaxableFederal() - 209850)
                                * 0.33 + 1315 + 5557.35 + 19849.75 + 22469.72 + 66544.17
                            ))))))
            : ( // adults = 1, family size = 1
            ehcGrossTaxableFederal() - 9225 < 0 ?
                ehcGrossTaxableFederal() * 0.1
                : (
                ehcGrossTaxableFederal() - 37450 < 0 ?
                    (ehcGrossTaxableFederal() - 9225)
                    * 0.15 + 922.5
                    : (
                    ehcGrossTaxableFederal() - 90750 < 0 ?
                        (ehcGrossTaxableFederal() - 37450)
                        * 0.25 + 922.5 + 4233.75
                        : (
                        ehcGrossTaxableFederal() - 189300 < 0 ?
                            (ehcGrossTaxableFederal() - 90751)
                            * 0.28 + 922.5 + 4233.75 + 13324.75
                            : (
                            ehcGrossTaxableFederal() - 411500 < 0 ?
                                (ehcGrossTaxableFederal() - 189301)
                                * 0.33 + 922.5 + 4233.75 + 13324.75 + 27593
                                : (
                                (ehcGrossTaxableFederal() - 411500)
                                * 0.396 + 922.5 + 4233.75 + 13324.75 + 27593 + 73325.67
                            )))))))
        : ( // adults > 1, family size = any
            ehcGrossTaxableFederal() - 18450 < 0 ?
                ehcGrossTaxableFederal() * 0.1
                : (
                ehcGrossTaxableFederal() - 74900 < 0 ?
                    (ehcGrossTaxableFederal() - 18450)
                    * 0.15 + 1845
                    : (
                    ehcGrossTaxableFederal() - 181500 < 0 ?
                        (ehcGrossTaxableFederal() - 74900)
                        * 0.25 + 1845 + 8467.5
                        : (
                        ehcGrossTaxableFederal() - 378600 < 0 ?
                            (ehcGrossTaxableFederal() - 181500)
                            * 0.28 + 1845 + 8467.5 + 26650
                            : (
                            ehcGrossTaxableFederal() - 823000 < 0 ?
                                (ehcGrossTaxableFederal() - 378600)
                                * 0.33 + 1845 + 8467.5 + 26650 + 55188
                                : (
                                (ehcGrossTaxableFederal() - 823000)
                                * 0.396 + 1845 + 8467.5 + 26650 + 55188 + 146652
                            ))))));
}
// Taxes	O9
function ehcEITC() {
    // choose correct list based on number of children
    let eitc_lookup_list = (
        ehcNumKids() === 1 ? eitc_mfj_1_kids_amounts_list
            : (ehcNumKids() === 2 ? eitc_mfj_2_kids_amounts_list
            : (ehcNumKids() === 0 ? eitc_mfj_0_kids_amounts_list
                : (ehcNumKids() >= 3 ? eitc_mfj_3_kids_amounts_list
                        : false
                ))));
    // find index in at-least/less-than lists where gross income > at-least[index] and < less-than[index]
    for (let i = 0; i < eitc_income_at_least_list.length; i++) {
        if (ehc_gross_income >= eitc_income_at_least_list[i] &&
            ehc_gross_income < eitc_income_less_than_list[i]) {
            // get the eitc value at that index
            return eitc_lookup_list[i];
        }
    }
    // return 0 if we looked through the whole list and didn't find a value (simulates IFNA(index-match, 0))
    return 0;
}
// Taxes	P6
function ehcChildTaxCredit() {
    return ehcNumKids() * parseFloat(sessionStorage.getItem('child_tax_credit_each'));
}
// Taxes	Q9
function ehcAdjustedChildTaxCredit() {
    return (
        ehc_gross_income < adjusted_child_tax_credit_limit ?
            ehcChildTaxCredit()
            : (
            (ehc_gross_income - adjusted_child_tax_credit_limit)
            * adjusted_child_tax_credit_multiplier < ehcChildTaxCredit() ?
                0 :
                ehcChildTaxCredit() -
                (ehc_gross_income
                - adjusted_child_tax_credit_limit
                * adjusted_child_tax_credit_multiplier)
        )
    ) < 0 ? 0
        :
        ehc_gross_income < adjusted_child_tax_credit_limit ?
            ehcChildTaxCredit()
            :
            (ehc_gross_income - adjusted_child_tax_credit_limit)
            * adjusted_child_tax_credit_multiplier < ehcChildTaxCredit() ?
                0 :
                ehcChildTaxCredit() -
                (ehc_gross_income
                - adjusted_child_tax_credit_limit
                * adjusted_child_tax_credit_multiplier);
}
// Taxes	R9
function ehcFederalTaxesLessChildCareTaxCredit() {
    return ehcFederalTaxesOwedBeforeCredits() < ehcChildCareTaxCredit() ? 0 :
        ehcFederalTaxesOwedBeforeCredits() - ehcChildCareTaxCredit();
}
// Taxes	S9
function ehcAdjustedChildTaxCreditUsed() {
    return ehcAdjustedChildTaxCredit() < ehcFederalTaxesLessChildCareTaxCredit() ?
        ehcAdjustedChildTaxCredit() :
        ehcFederalTaxesLessChildCareTaxCredit();
}
// Taxes	T9
function ehcAdditionalChildTaxCredit() {
    // Automatically generated from Excel -> Javascript converter.
    return (ehcNumKids() <= 3 ?
        (((((ehc_gross_income - additional_child_tax_credit_income_adjustment) <= 0 ?
            0 : (ehc_gross_income - additional_child_tax_credit_income_adjustment))
        * additional_child_tax_credit_income_adjustment_multiplier)) < ((((ehcNumKids() * 1000)
        - ehcAdjustedChildTaxCreditUsed()) <= 0 ?
            0 : ((ehcNumKids() * 1000) - ehcAdjustedChildTaxCreditUsed()))) ?
            (((ehc_gross_income - additional_child_tax_credit_income_adjustment) <= 0 ?
                0 : (ehc_gross_income - additional_child_tax_credit_income_adjustment))
            * additional_child_tax_credit_income_adjustment_multiplier) :
            ((((ehcNumKids() * 1000) - ehcAdjustedChildTaxCreditUsed()) <= 0 ?
                0 : ((ehcNumKids() * 1000) - ehcAdjustedChildTaxCreditUsed())))) :
        (((ehc_gross_income - additional_child_tax_credit_income_adjustment)
        * additional_child_tax_credit_income_adjustment_multiplier) >= ((ehcNumKids() * 1000)
        - ehcAdjustedChildTaxCreditUsed()) ? ((ehcNumKids() * 1000) - ehcAdjustedChildTaxCreditUsed()) :
            (((((additional_child_tax_credit_income_eitc_multiplier * ehc_gross_income) - ehcEITC) < 0 ?
                0 : ((additional_child_tax_credit_income_eitc_multiplier * ehc_gross_income)
                - ehcEITC)) > (((ehc_gross_income - additional_child_tax_credit_income_adjustment) <= 0 ?
                0 : (ehc_gross_income - additional_child_tax_credit_income_adjustment))
            * additional_child_tax_credit_income_adjustment_multiplier) ?
                (((additional_child_tax_credit_income_eitc_multiplier * ehc_gross_income) - ehcEITC) < 0 ?
                    0 : (((additional_child_tax_credit_income_eitc_multiplier * ehc_gross_income)
                    - ehcEITC))) : (((ehc_gross_income - additional_child_tax_credit_income_adjustment) <= 0 ?
                    0 : (ehc_gross_income - additional_child_tax_credit_income_adjustment))
                * additional_child_tax_credit_income_adjustment_multiplier)) < ((((ehcNumKids() * 1000)
            - ehcAdjustedChildTaxCreditUsed()) <= 0 ?
                0 : ((ehcNumKids() * 1000) - ehcAdjustedChildTaxCreditUsed()))) ?
                ((((additional_child_tax_credit_income_eitc_multiplier * ehc_gross_income) - ehcEITC) < 0 ?
                    0 : ((additional_child_tax_credit_income_eitc_multiplier * ehc_gross_income)
                    - ehcEITC)) > (((ehc_gross_income - additional_child_tax_credit_income_adjustment) <= 0 ?
                    0 : (ehc_gross_income - additional_child_tax_credit_income_adjustment))
                * additional_child_tax_credit_income_adjustment_multiplier) ?
                    (((additional_child_tax_credit_income_eitc_multiplier * ehc_gross_income) - ehcEITC) < 0 ?
                        0 : (((additional_child_tax_credit_income_eitc_multiplier * ehc_gross_income) - ehcEITC))) :
                    (((ehc_gross_income - additional_child_tax_credit_income_adjustment) <= 0 ?
                        0 : (ehc_gross_income - additional_child_tax_credit_income_adjustment))
                    * additional_child_tax_credit_income_adjustment_multiplier)) :
                ((ehcNumKids() * 1000) - ehcAdjustedChildTaxCreditUsed()))));
}
// Taxes	U9
function ehcChildCareTaxCredit() {
    return (ehc_gross_income > 75000 ?
        0 :
        (ehc_gross_income > 43000 ?
            ehcQualifyingChildCareExpenses() * 0.2 :
            (ehc_gross_income > 41000 ?
                ehcQualifyingChildCareExpenses() * 0.21 :
                (ehc_gross_income > 39000 ?
                    ehcQualifyingChildCareExpenses() * 0.22 :
                    (ehc_gross_income > 37000 ?
                        ehcQualifyingChildCareExpenses() * 0.23 :
                        (ehc_gross_income > 35000 ?
                            ehcQualifyingChildCareExpenses() * 0.24 :
                            (ehc_gross_income > 33000 ?
                                ehcQualifyingChildCareExpenses() * 0.25 :
                                (ehc_gross_income > 31000 ?
                                    ehcQualifyingChildCareExpenses() * 0.26 :
                                    (ehc_gross_income > 29000 ?
                                        ehcQualifyingChildCareExpenses() * 0.27 :
                                        (ehc_gross_income > 27000 ?
                                            ehcQualifyingChildCareExpenses() * 0.28 :
                                            (ehc_gross_income > 25000 ?
                                                ehcQualifyingChildCareExpenses() * 0.29 :
                                                (ehc_gross_income > 23000 ?
                                                    ehcQualifyingChildCareExpenses() * 0.3 :
                                                    (ehc_gross_income > 21000 ?
                                                        ehcQualifyingChildCareExpenses() * 0.31 :
                                                        (ehc_gross_income > 19000 ?
                                                            ehcQualifyingChildCareExpenses() * 0.32 :
                                                            (ehc_gross_income > 17000 ?
                                                                ehcQualifyingChildCareExpenses() * 0.33 :
                                                                (ehc_gross_income > 17000 ?
                                                                    ehcQualifyingChildCareExpenses() * 0.34 :
                                                                    (ehc_gross_income < 15000 ?
                                                                            ehcQualifyingChildCareExpenses() * 0.35 :
                                                                            0
                                                                    )))))))))))))))));
}
// Taxes	V9
function ehcSumOfNonRefundableTaxCredits() {
    return ehcChildCareTaxCredit() + ehcAdjustedChildTaxCredit()
}
// Taxes	W9
function ehcSumOfRefundableTaxCredits() {
    return ehcEITC() + ehcAdditionalChildTaxCredit();
}
// Taxes	X9
function ehcFederalTaxesOwedLessNonRefundableTaxCredits() {
    return ehcFederalTaxesOwedBeforeCredits() - ehcSumOfNonRefundableTaxCredits() < 0 ?
        0 :
        ehcFederalTaxesOwedBeforeCredits() - ehcSumOfNonRefundableTaxCredits();
}
// Taxes	Y9 - NO DEPENDENTS
function ehcFederalDeductionPlusStateExemtionTimesMultiplier() {
    return (ehcExemptionsState() + ehcStandardDeduction())
        * fed_deduction_plus_state_exemption_multiplier;
}
// Taxes	Z9
function ehcUtahTaxCredit() {
    return ehcPhaseOutXMultiplier() > ehcCreditBeforePhaseOut() ?
        0 :
        ehcCreditBeforePhaseOut() - ehcPhaseOutXMultiplier();
}
// Taxes	AA9
function ehcFederalPayrollTax() {
    return ehc_gross_income * federal_payroll_tax_multiplier;
}
// Taxes	AB9
function ehcFederalTaxOwed() {
    return ehcFederalTaxesOwedLessNonRefundableTaxCredits() - ehcSumOfRefundableTaxCredits();
}
// Taxes	AC9
function ehcUtahTaxOwed() {
    return (ehcStateTaxBeforeCredits() - ehcUtahTaxCredit()) < 0 ?
        0 :
        (ehcStateTaxBeforeCredits() - ehcUtahTaxCredit());
}
// Taxes	AD9
function ehcTotalExpenses() {
    return costOverall();
}
// Taxes	AE9
function ehcSavingsAsPercentageOfGrossIncome() {
    return ehc_gross_income * savings_multiplier;
}
// Taxes	AF9
function ehcTotalExpensesPlusSavings() {
    return ehcTotalExpenses() + ehcSavingsAsPercentageOfGrossIncome();
}
// Taxes	AG9
function ehcTotalTax() {
    return ehcFederalTaxOwed() + ehcUtahTaxOwed() + ehcFederalPayrollTax();
}
// Taxes	AH9
function ehcNetYearlyIncome() {
    return ehc_gross_income - ehcTotalTax();
}










































