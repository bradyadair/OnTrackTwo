// Family Composition --------------------------------------------------------------------------------------------------
// Total of these cannot be > 8.
let num_adults        = 1; // 'Family Composition'!G4 - Default 1
let num_infants       = 0; // 'Family Composition'!G7 - Default 0
let num_preschoolers  = 0; // 'Family Composition'!G10 - Default 0
let num_schoolagers   = 0; // 'Family Composition'!G13 - Default 0
let num_teenagers     = 0; // 'Family Composition'!G16 - Default 0

// ChangeChildcare  ----------------------------------------------------------------------------------------------------
let estimated_baby_sitting_annual   = 0;    // 'ChangeChildcare'!E13 - Default 0
let use_childcare                   = "Yes"; // 'ChangeChildcare'!F17 - "No"/"Yes" - Default "Yes"
let use_family_care                 = "No"; // 'ChangeChildcare'!I13 - "No"/"Yes" - Default "No"

// ChangeHousing  ------------------------------------------------------------------------------------------------------
let rooms = "Standard"; // 'ChangeHousing'!E15 - "Standard"/1/2/3/4 - Default "Standard"

// MarketplaceHealthcare -----------------------------------------------------------------------------------------------
let marketplace_healthcare = "No";  // 'MarketplaceHealthcare'!F16 - "No"/"Yes" - Default "No"

// Number of Cars ------------------------------------------------------------------------------------------------------
let cars = "Standard";  // 'Number of Cars'H13 - "Standard"/0/1/2/3/4/5/6 - Default "Standard"

// PublicTransportation ------------------------------------------------------------------------------------------------
let bus_passes_adult = 0;   // 'PublicTransportation'!G16 - 0/1/2/3/4/5 - Default 0
let bus_passes_child = 0;   // 'PublicTransportation'!K16 - 0/1/2/3/4/5/6/7/8 - Default

function get_user_inputs_from_local_storage(){
    if (localStorage.getItem("num_adults")){
        num_adults = parseInt(localStorage.getItem("num_adults"));
        num_infants = parseInt(localStorage.getItem("num_infants"));
        num_preschoolers = parseInt(localStorage.getItem("num_preschoolers"));
        num_schoolagers = parseInt(localStorage.getItem("num_schoolagers"));
        num_teenagers = parseInt(localStorage.getItem("num_teenagers"));
        estimated_baby_sitting_annual = parseFloat(localStorage.getItem("estimated_baby_sitting_annual"));
        use_childcare = localStorage.getItem("use_childcare");
        use_family_care = localStorage.getItem("use_family_care");
        rooms = parseInt(localStorage.getItem("rooms"));
        // if (rooms === "Standard"){
        //     let children = numKids();
        //     let adults = numAdults();
        //     rooms = Math.ceil(adults / 2) + Math.ceil(children / 2);
        // }
        marketplace_healthcare = localStorage.getItem("marketplace_healthcare");
        cars = parseInt(localStorage.getItem("cars"));
        bus_passes_adult = parseInt(localStorage.getItem("bus_passes_adult"));
        bus_passes_child = parseInt(localStorage.getItem("bus_passes_child"));
    }
    else{
        console.log("Form not filled out. Please return to the form page to fill it out.")
    }
}