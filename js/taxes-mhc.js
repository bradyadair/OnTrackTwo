// Taxes	A6
function mhcQualifyingChildCareExpenses() {
    return (
        (numInfants() + numPreschoolers() + numSchoolagers()) === 0 ? qualifying_childcare_expenses_0_kids :
            numInfants() + numPreschoolers() + numSchoolagers() === 1 ? qualifying_childcare_expenses_1_kids :
                numInfants() + numPreschoolers() + numSchoolagers() > 1 ? qualifying_childcare_expenses_2_kids_plus :
                    "False")
}
// Taxes	B6
function mhcFamilySize() {
    return familySize();
}
// Taxes	C6
function mhcStandardDeduction() {
    return num_adults === 1 ?
        (mhcFamilySize() > 1 ? standard_deduction_1_adults_1_kids_plus :
            standard_deduction_1_adults_0_kids)
        :
        standard_deduction_2_adults_any_kids;
}
// Taxes	D6
function mhcExemptionsFederal() {
    return mhcFamilySize() * exemptions_federal_each;
}
// Taxes	E6
function mhcExemptionsState() {
    return mhcFamilySize() * exemptions_state_each;
}
// Taxes    F6
let mhc_gross_income = 21999; // Starting guess value.
function mhcCalculateGrossIncome() {
    let mhc_gross = mhc_gross_income;
    let mhc_expenses_plus_savings = mhcTotalExpensesPlusSavings();
    let mhc_total_tax = mhcTotalTax();
    let mhc_net_income = function (mhc_gross, mhc_total_tax) {
        return mhc_gross - mhc_total_tax;
    };

    mhc_gross = goalSeek({
        Func: mhc_net_income,   // The function which should return the value of the goal cell.
        aFuncParams: [mhc_gross, mhc_total_tax],    // The params to be passed to the function above.
        oFuncArgTarget: {
            Position: 0 // The position in the aFuncParams array of the value which will be changed.
        },
        Goal: mhc_expenses_plus_savings,    // The value which the function above should match.
        Tol: 0.01,  // The tolerance of the final result.
        maxIter: 1000   // The maximum number of iterations for the goalSeek function to take.
    });
    return mhc_gross;
}
// Taxes	G6
function mhcGrossTaxableFederal() {
    return (mhc_gross_income - mhcExemptionsFederal() - mhcStandardDeduction()) > 0 ?
        (mhc_gross_income - mhcExemptionsFederal() - mhcStandardDeduction())
        :
        0;
}
// Taxes	H6
function mhcUtahStateCreditValueHolder() {
    return num_adults === 1 ?
        (mhcFamilySize() >= 2 ? utah_state_credit_value_holder_1_adults_2_kids_plus :
            utah_state_credit_value_holder_1_adults_1_kids_minus)
        :
        utah_state_credit_value_holder_2_adults_any_kids;
}
// Taxes	I6
function mhcStateTaxBeforeCredits() {
    return mhc_gross_income * state_tax_multiplier;
}
// Taxes	J6
function mhcGrossTaxableFederalUtahStateCreditValueHolder() {
    return (mhc_gross_income - mhcUtahStateCreditValueHolder()) > 0 ?
        (mhc_gross_income - mhcUtahStateCreditValueHolder())
        :
        0;
}
// Taxes	K6
function mhcCreditBeforePhaseOut() {
    return (mhcStandardDeduction() + mhcExemptionsState())
        *
        credit_before_phase_out_multiplier;
}
// Taxes	L6
function mhcPhaseOutXMultiplier() {
    return mhcGrossTaxableFederalUtahStateCreditValueHolder() * phase_out_multiplier;
}
// Taxes	M6
function mhcNumKids() {
    return numInfants() + numPreschoolers() + numSchoolagers() + numTeenagers();
}
// Taxes	N6
function mhcFederalTaxesOwedBeforeCredits() {
    return num_adults === 1 ? (
        mhcFamilySize() > 1 ? ( // adults = 1, family size > 1
            mhcGrossTaxableFederal() - 13150 < 0 ?
                mhcGrossTaxableFederal()
                * 0.1
                : (
                mhcGrossTaxableFederal() - 50200 < 0 ?
                    (mhcGrossTaxableFederal() - 13150)
                    * 0.15 + 1315
                    : (
                    mhcGrossTaxableFederal() - 129600 < 0 ?
                        (mhcGrossTaxableFederal() - 50200)
                        * 0.25 + 1315 + 5557.35
                        : (
                        mhcGrossTaxableFederal() - 209850 < 0 ?
                            (mhcGrossTaxableFederal() - 129600)
                            * 0.28 + 1315 + 5557.35 + 19849.75
                            : (
                            mhcGrossTaxableFederal() - 411500 < 0 ?
                                (mhcGrossTaxableFederal() - 209850)
                                * 0.33 + 1315 + 5557.35 + 19849.75 + 22469.72
                                : (
                                (mhcGrossTaxableFederal() - 209850)
                                * 0.33 + 1315 + 5557.35 + 19849.75 + 22469.72 + 66544.17
                            ))))))
            : ( // adults = 1, family size = 1
            mhcGrossTaxableFederal() - 9225 < 0 ?
                mhcGrossTaxableFederal() * 0.1
                : (
                mhcGrossTaxableFederal() - 37450 < 0 ?
                    (mhcGrossTaxableFederal() - 9225)
                    * 0.15 + 922.5
                    : (
                    mhcGrossTaxableFederal() - 90750 < 0 ?
                        (mhcGrossTaxableFederal() - 37450)
                        * 0.25 + 922.5 + 4233.75
                        : (
                        mhcGrossTaxableFederal() - 189300 < 0 ?
                            (mhcGrossTaxableFederal() - 90751)
                            * 0.28 + 922.5 + 4233.75 + 13324.75
                            : (
                            mhcGrossTaxableFederal() - 411500 < 0 ?
                                (mhcGrossTaxableFederal() - 189301)
                                * 0.33 + 922.5 + 4233.75 + 13324.75 + 27593
                                : (
                                (mhcGrossTaxableFederal() - 411500)
                                * 0.396 + 922.5 + 4233.75 + 13324.75 + 27593 + 73325.67
                            )))))))
        : ( // adults > 1, family size = any
            mhcGrossTaxableFederal() - 18450 < 0 ?
                mhcGrossTaxableFederal() * 0.1
                : (
                mhcGrossTaxableFederal() - 74900 < 0 ?
                    (mhcGrossTaxableFederal() - 18450)
                    * 0.15 + 1845
                    : (
                    mhcGrossTaxableFederal() - 181500 < 0 ?
                        (mhcGrossTaxableFederal() - 74900)
                        * 0.25 + 1845 + 8467.5
                        : (
                        mhcGrossTaxableFederal() - 378600 < 0 ?
                            (mhcGrossTaxableFederal() - 181500)
                            * 0.28 + 1845 + 8467.5 + 26650
                            : (
                            mhcGrossTaxableFederal() - 823000 < 0 ?
                                (mhcGrossTaxableFederal() - 378600)
                                * 0.33 + 1845 + 8467.5 + 26650 + 55188
                                : (
                                (mhcGrossTaxableFederal() - 823000)
                                * 0.396 + 1845 + 8467.5 + 26650 + 55188 + 146652
                            ))))));
}
// Taxes	O6
function mhcEITC() {
    return 0;
    /* Excel formula always return 0 for some reason.
     * Actual formula is below if that ever gets fixed.
     */
    // // choose correct list based on number of children
    // let eitc_lookup_list = (
    //     mhcNumKids() === 1 ? eitc_single_1_kids_amounts_list
    //         : (mhcNumKids() === 2 ? eitc_single_2_kids_amounts_list
    //         : (mhcNumKids() === 0 ? sessionStorage.getItem('eitc_single_0_kids_amounts_list')
    //             : (mhcNumKids() >= 3 ? eitc_single_3_kids_amounts_list
    //                     : false
    //             ))));
    // // find index in at-least/less-than lists where gross income > at-least[index] and < less-than[index]
    // for (let i = 0; i < eitc_income_at_least_list.length; i++) {
    //     if (mhc_gross_income >= eitc_income_at_least_list[i] &&
    //         mhc_gross_income < eitc_income_less_than_list[i]) {
    //         // get the eitc value at that index
    //         return eitc_lookup_list[i];
    //     }
    // }
    // // return 0 if we looked through the whole list and didn't find a value
    // return 0;
}
// Taxes	P6
function mhcChildTaxCredit() {
    return mhcNumKids() * parseFloat(sessionStorage.getItem('child_tax_credit_each'));
}
// Taxes	Q6
function mhcAdjustedChildTaxCredit() {
    return (
        mhc_gross_income < adjusted_child_tax_credit_limit ?
            mhcChildTaxCredit()
            : (
            (mhc_gross_income - adjusted_child_tax_credit_limit)
            * adjusted_child_tax_credit_multiplier < mhcChildTaxCredit() ?
                0 :
                mhcChildTaxCredit() -
                (mhc_gross_income
                - adjusted_child_tax_credit_limit
                * adjusted_child_tax_credit_multiplier)
        )
    ) < 0 ? 0
        :
        mhc_gross_income < adjusted_child_tax_credit_limit ?
            mhcChildTaxCredit()
            :
            (mhc_gross_income - adjusted_child_tax_credit_limit)
            * adjusted_child_tax_credit_multiplier < mhcChildTaxCredit() ?
                0 :
                mhcChildTaxCredit() -
                (mhc_gross_income
                - adjusted_child_tax_credit_limit
                * adjusted_child_tax_credit_multiplier);
}
// Taxes	R6
function mhcFederalTaxesLessChildCareTaxCredit() {
    return mhcFederalTaxesOwedBeforeCredits() < mhcChildCareTaxCredit() ? 0 :
        mhcFederalTaxesOwedBeforeCredits() - mhcChildCareTaxCredit();
}
// Taxes	S6
function mhcAdjustedChildTaxCreditUsed() {
    return mhcAdjustedChildTaxCredit() < mhcFederalTaxesLessChildCareTaxCredit() ?
        mhcAdjustedChildTaxCredit() :
        mhcFederalTaxesLessChildCareTaxCredit();
}
// Taxes	T6
function mhcAdditionalChildTaxCredit() {
    // Automatically generated from Excel -> Javascript converter.
    return (mhcNumKids() <= 3 ?
        (((((mhc_gross_income - additional_child_tax_credit_income_adjustment) <= 0 ?
            0 : (mhc_gross_income - additional_child_tax_credit_income_adjustment))
        * additional_child_tax_credit_income_adjustment_multiplier)) < ((((mhcNumKids() * 1000)
        - mhcAdjustedChildTaxCreditUsed()) <= 0 ?
            0 : ((mhcNumKids() * 1000) - mhcAdjustedChildTaxCreditUsed()))) ?
            (((mhc_gross_income - additional_child_tax_credit_income_adjustment) <= 0 ?
                0 : (mhc_gross_income - additional_child_tax_credit_income_adjustment))
            * additional_child_tax_credit_income_adjustment_multiplier) :
            ((((mhcNumKids() * 1000) - mhcAdjustedChildTaxCreditUsed()) <= 0 ?
                0 : ((mhcNumKids() * 1000) - mhcAdjustedChildTaxCreditUsed())))) :
        (((mhc_gross_income - additional_child_tax_credit_income_adjustment)
        * additional_child_tax_credit_income_adjustment_multiplier) >= ((mhcNumKids() * 1000)
        - mhcAdjustedChildTaxCreditUsed()) ? ((mhcNumKids() * 1000) - mhcAdjustedChildTaxCreditUsed()) :
            (((((additional_child_tax_credit_income_eitc_multiplier * mhc_gross_income) - mhcEITC) < 0 ?
                0 : ((additional_child_tax_credit_income_eitc_multiplier * mhc_gross_income)
                - mhcEITC)) > (((mhc_gross_income - additional_child_tax_credit_income_adjustment) <= 0 ?
                0 : (mhc_gross_income - additional_child_tax_credit_income_adjustment))
            * additional_child_tax_credit_income_adjustment_multiplier) ?
                (((additional_child_tax_credit_income_eitc_multiplier * mhc_gross_income) - mhcEITC) < 0 ?
                    0 : (((additional_child_tax_credit_income_eitc_multiplier * mhc_gross_income)
                    - mhcEITC))) : (((mhc_gross_income - additional_child_tax_credit_income_adjustment) <= 0 ?
                    0 : (mhc_gross_income - additional_child_tax_credit_income_adjustment))
                * additional_child_tax_credit_income_adjustment_multiplier)) < ((((mhcNumKids() * 1000)
            - mhcAdjustedChildTaxCreditUsed()) <= 0 ?
                0 : ((mhcNumKids() * 1000) - mhcAdjustedChildTaxCreditUsed()))) ?
                ((((additional_child_tax_credit_income_eitc_multiplier * mhc_gross_income) - mhcEITC) < 0 ?
                    0 : ((additional_child_tax_credit_income_eitc_multiplier * mhc_gross_income)
                    - mhcEITC)) > (((mhc_gross_income - additional_child_tax_credit_income_adjustment) <= 0 ?
                    0 : (mhc_gross_income - additional_child_tax_credit_income_adjustment))
                * additional_child_tax_credit_income_adjustment_multiplier) ?
                    (((additional_child_tax_credit_income_eitc_multiplier * mhc_gross_income) - mhcEITC) < 0 ?
                        0 : (((additional_child_tax_credit_income_eitc_multiplier * mhc_gross_income) - mhcEITC))) :
                    (((mhc_gross_income - additional_child_tax_credit_income_adjustment) <= 0 ?
                        0 : (mhc_gross_income - additional_child_tax_credit_income_adjustment))
                    * additional_child_tax_credit_income_adjustment_multiplier)) :
                ((mhcNumKids() * 1000) - mhcAdjustedChildTaxCreditUsed()))));
}
// Taxes	U6
function mhcChildCareTaxCredit() {
    return (mhc_gross_income > 75000 ?
        0 :
        (mhc_gross_income > 43000 ?
            mhcQualifyingChildCareExpenses() * 0.2 :
            (mhc_gross_income > 41000 ?
                mhcQualifyingChildCareExpenses() * 0.21 :
                (mhc_gross_income > 39000 ?
                    mhcQualifyingChildCareExpenses() * 0.22 :
                    (mhc_gross_income > 37000 ?
                        mhcQualifyingChildCareExpenses() * 0.23 :
                        (mhc_gross_income > 35000 ?
                            mhcQualifyingChildCareExpenses() * 0.24 :
                            (mhc_gross_income > 33000 ?
                                mhcQualifyingChildCareExpenses() * 0.25 :
                                (mhc_gross_income > 31000 ?
                                    mhcQualifyingChildCareExpenses() * 0.26 :
                                    (mhc_gross_income > 29000 ?
                                        mhcQualifyingChildCareExpenses() * 0.27 :
                                        (mhc_gross_income > 27000 ?
                                            mhcQualifyingChildCareExpenses() * 0.28 :
                                            (mhc_gross_income > 25000 ?
                                                mhcQualifyingChildCareExpenses() * 0.29 :
                                                (mhc_gross_income > 23000 ?
                                                    mhcQualifyingChildCareExpenses() * 0.3 :
                                                    (mhc_gross_income > 21000 ?
                                                        mhcQualifyingChildCareExpenses() * 0.31 :
                                                        (mhc_gross_income > 19000 ?
                                                            mhcQualifyingChildCareExpenses() * 0.32 :
                                                            (mhc_gross_income > 17000 ?
                                                                mhcQualifyingChildCareExpenses() * 0.33 :
                                                                (mhc_gross_income > 17000 ?
                                                                    mhcQualifyingChildCareExpenses() * 0.34 :
                                                                    (mhc_gross_income < 15000 ?
                                                                            mhcQualifyingChildCareExpenses() * 0.35 :
                                                                            0
                                                                    )))))))))))))))));
}
// Taxes	V6
function mhcFederalPovertyLine() {
    // Doesn't support family sizes larger than 8.
    for (let i = 0; i < federal_poverty_level_family_size_list.length; i++) {
        if (mhcFamilySize() === federal_poverty_level_family_size_list[i]) {
            return federal_poverty_level_value_list[i];
        }
    }
}
// Taxes	W6
function mhcGrossIncomeDividedByFederalPovertyLine() {
    return Math.round(mhc_gross_income / mhcFederalPovertyLine() * 100);
}
// Taxes	X6
function mhcValueFromApplicableFigureTable() {
    var applicable_figure_table_values_list = JSON.parse(localStorage.getItem("applicable_figure_table_values"));

    if (mhcGrossIncomeDividedByFederalPovertyLine() < mhc_applicable_figure_index_min) {
        return applicable_figure_table_values_list[0];
    }
    if (mhcGrossIncomeDividedByFederalPovertyLine() > mhc_applicable_figure_index_max) {
        return applicable_figure_table_values_list[applicable_figure_table_values_list.length - 1];
    }
    for (let i = 0; i < applicable_figure_table_indices_list.length; i++) {
        if (mhcGrossIncomeDividedByFederalPovertyLine() === applicable_figure_table_indices_list[i]) {
            return applicable_figure_table_values_list[i];
        }
    }
}
// Taxes	Y6
function mhcApplicableFigureTimesGrossIncome() {
    return mhcValueFromApplicableFigureTable() * mhc_gross_income;
}
// Taxes	Z6
function mhcBenchmarkSilverPlan() {
    return (parseFloat(sessionStorage.getItem('mhc_benchmark_silver_adult_each')) * num_adults) +
        (
            (num_infants + num_preschoolers + num_schoolagers + num_teenagers) > mhc_benchmark_silver_child_limit ?
                mhc_benchmark_silver_child_limit * parseFloat(sessionStorage.getItem('mhc_benchmark_silver_child_each')) :
                (num_infants + num_preschoolers + num_schoolagers + num_teenagers) * parseFloat(sessionStorage.getItem('mhc_benchmark_silver_child_each'))
        );
}
// Taxes	AA6
function mhcBenchmarkMinusApplicableFigureTimesGrossIncome() {
    return mhcBenchmarkSilverPlan() - mhcApplicableFigureTimesGrossIncome() < 0 ?
        0 :
        mhcBenchmarkSilverPlan() - mhcApplicableFigureTimesGrossIncome();
}
// Taxes	AB6
function mhcMarketplacePlanChosen() {
    return costTotalMarketplaceExpense();
}
// Taxes	AC6
function mhcPremiumTaxCredit() {
    return mhcMarketplacePlanChosen() < mhcBenchmarkMinusApplicableFigureTimesGrossIncome() ?
        mhcMarketplacePlanChosen() :
        mhcBenchmarkMinusApplicableFigureTimesGrossIncome();
}
// Taxes	AD6
function mhcEligibleExpenses() {
    return mhcMarketplacePlanChosen() - mhcPremiumTaxCredit();
}
// Taxes	AE6
function mhcUtahHealthBenefitPlanCredit() {
    return mhcEligibleExpenses() * mhc_utah_health_benefit_plan_credit_multiplier;
}
// Taxes	AF6
function mhcSumOfNonRefundableTaxCredits() {
    return mhcChildCareTaxCredit() + mhcAdjustedChildTaxCredit()
}
// Taxes	AG6
function mhcSumOfRefundableTaxCredits() {
    return mhcEITC() + mhcAdditionalChildTaxCredit() + mhcPremiumTaxCredit();
}
// Taxes	AH6
function mhcFederalTaxesOwedLessNonRefundableTaxCredits() {
    return mhcFederalTaxesOwedBeforeCredits() - mhcSumOfNonRefundableTaxCredits() < 0 ?
        0 :
        mhcFederalTaxesOwedBeforeCredits() - mhcSumOfNonRefundableTaxCredits();
}
// Taxes	AI6 - NO DEPENDENTS
function mhcFederalDeductionPlusStateExemtionTimesMultiplier() {
    return (mhcExemptionsState() + mhcStandardDeduction())
        * fed_deduction_plus_state_exemption_multiplier;
}
// Taxes	AJ6
function mhcUtahTaxCredit() {
    return mhcPhaseOutXMultiplier() > mhcCreditBeforePhaseOut() ?
        0 :
        mhcCreditBeforePhaseOut() - mhcPhaseOutXMultiplier();
}
// Taxes	AK6
function mhcFederalPayrollTax() {
    return mhc_gross_income * federal_payroll_tax_multiplier;
}
// Taxes	AL6
function mhcFederalTaxOwed() {
    return mhcFederalTaxesOwedLessNonRefundableTaxCredits() - mhcSumOfRefundableTaxCredits();
}
// Taxes	AM6
function mhcUtahTaxOwed() {
    return (mhcStateTaxBeforeCredits() - mhcUtahTaxCredit() - mhcUtahHealthBenefitPlanCredit()) < 0 ?
        0 :
        (mhcStateTaxBeforeCredits() - mhcUtahTaxCredit() - mhcUtahHealthBenefitPlanCredit());
}
// Taxes	AN6
function mhcTotalExpenses() {
    return costOverall();
}
// Taxes	AO6
function mhcSavingsAsPercentageOfGrossIncome() {
    return mhc_gross_income * savings_multiplier;
}
// Taxes	AP6
function mhcTotalExpensesPlusSavings() {
    return mhcTotalExpenses() + mhcSavingsAsPercentageOfGrossIncome();
}
// Taxes	AQ6
function mhcTotalTax() {
    return mhcFederalTaxOwed() + mhcUtahTaxOwed() + mhcFederalPayrollTax();
}
// Taxes	AR6
function mhcNetYearlyIncome() {
    return mhc_gross_income - mhcTotalTax();
}


























