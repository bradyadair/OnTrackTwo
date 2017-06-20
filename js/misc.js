// Misc	B2
function misc1() {
    return (parseFloat(sessionStorage.getItem('misc_general_1')) +
            parseFloat(sessionStorage.getItem('misc_personal_1')) +
            parseFloat(sessionStorage.getItem('misc_housekeeping_1')) +
            parseFloat(sessionStorage.getItem('misc_apparel_1')))
}
// Misc	C7
function misc2() {
    return (parseFloat(sessionStorage.getItem('misc_general_2')) +
            parseFloat(sessionStorage.getItem('misc_personal_2')) +
            parseFloat(sessionStorage.getItem('misc_housekeeping_2')) +
            parseFloat(sessionStorage.getItem('misc_apparel_2')))
}
// Misc	D12
function misc3() {
    return (parseFloat(sessionStorage.getItem('misc_general_3')) +
            parseFloat(sessionStorage.getItem('misc_personal_3')) +
            parseFloat(sessionStorage.getItem('misc_housekeeping_3')) +
            parseFloat(sessionStorage.getItem('misc_apparel_3')))
}
// Misc	E17
function misc4() {
    return (parseFloat(sessionStorage.getItem('misc_general_4')) +
            parseFloat(sessionStorage.getItem('misc_personal_4')) +
            parseFloat(sessionStorage.getItem('misc_housekeeping_4')) +
            parseFloat(sessionStorage.getItem('misc_apparel_4')))
}
// Misc	E22
function misc5Plus50k() {
    return (parseFloat(sessionStorage.getItem('misc_general_50k_5_plus')) +
            parseFloat(sessionStorage.getItem('misc_personal_50k_5_plus')) +
            parseFloat(sessionStorage.getItem('misc_housekeeping_50k_5_plus')) +
            parseFloat(sessionStorage.getItem('misc_apparel_50k_5_plus')))
}
// Misc	F22
function misc5Plus70k() {
    return (parseFloat(sessionStorage.getItem('misc_general_70k_5_plus')) +
            parseFloat(sessionStorage.getItem('misc_personal_70k_5_plus')) +
            parseFloat(sessionStorage.getItem('misc_housekeeping_70k_5_plus')) +
            parseFloat(sessionStorage.getItem('misc_apparel_70k_5_plus')))
}