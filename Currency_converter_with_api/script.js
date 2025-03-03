const countryList = {
    "PAK": "Pakistan",
    "USD": "United Stats",
    "AFG": "Afghanistan",
    "ALB": "Albania",
    "ALG": "Algeria",
    "AND": "Andorra",
    "ANG": "Angola",
    "ARG": "Argentina",
    "ARM": "Armenia",
    "AUS": "Australia",
    "AUT": "Austria",
    "AZE": "Azerbaijan",
    "BAH": "Bahamas",
    "BHR": "Bahrain",
    "BAN": "Bangladesh",
    "BAR": "Barbados",
    "BEL": "Belgium",
    "BEN": "Benin",
    "BHU": "Bhutan",
    "BOL": "Bolivia",
    "BOS": "Bosnia and Herzegovina",
    "BOT": "Botswana",
    "BRA": "Brazil",
    "BRU": "Brunei",
    "BUL": "Bulgaria",
    "BUR": "Burkina Faso",
    "CAM": "Cambodia",
    "CAN": "Canada",
    "CAP": "Cape Verde",
    "CHA": "Chad",
    "CHI": "Chile",
    "CHN": "China",
    "COL": "Colombia",
    "COM": "Comoros",
    "CON": "Congo",
    "COS": "Costa Rica",
    "CRO": "Croatia",
    "CUB": "Cuba",
    "CYP": "Cyprus",
    "CZE": "Czech Republic",
    "DEN": "Denmark",
    "DJI": "Djibouti",
    "DOM": "Dominican Republic",
    "ECU": "Ecuador",
    "EGY": "Egypt",
    "ELS": "El Salvador",
    "ERI": "Eritrea",
    "EST": "Estonia",
    "ETH": "Ethiopia",
    "FIJ": "Fiji",
    "FIN": "Finland",
    "FRA": "France",
    "GAB": "Gabon",
    "GAM": "Gambia",
    "GEO": "Georgia",
    "GER": "Germany",
    "GHA": "Ghana",
    "GRE": "Greece",
    "GUA": "Guatemala",
    "GUI": "Guinea",
    "GUY": "Guyana",
    "HAI": "Haiti",
    "HON": "Honduras",
    "HUN": "Hungary",
    "ICE": "Iceland",
    "IND": "India",
    "INS": "Indonesia",
    "IRA": "Iran",
    "IRQ": "Iraq",
    "IRE": "Ireland",
    "ISR": "Israel",
    "ITA": "Italy",
    "JAM": "Jamaica",
    "JAP": "Japan",
    "JOR": "Jordan",
    "KAZ": "Kazakhstan",
    "KEN": "Kenya",
    "KIR": "Kiribati",
    "KUW": "Kuwait",
    "KYR": "Kyrgyzstan",
    "LAO": "Laos",
    "LAT": "Latvia",
    "LEB": "Lebanon",
    "LES": "Lesotho",
    "LIB": "Liberia",
    "LIT": "Lithuania",
    "LUX": "Luxembourg",
    "MAD": "Madagascar",
    "MAL": "Malaysia",
    "MAL": "Malawi",
    "MEX": "Mexico",
    "MOL": "Moldova",
    "MON": "Mongolia",
    "MOR": "Morocco",
    "MOZ": "Mozambique",
    "MYA": "Myanmar",
    "NAM": "Namibia",
    "NEP": "Nepal",
    "NED": "Netherlands",
    "NZL": "New Zealand",
    "NIC": "Nicaragua",
    "NIG": "Niger",
    "NIG": "Nigeria",
    "NOR": "Norway",
    "OMA": "Oman",
    "PAL": "Palau"
  };

let i = 0;
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";
const dropdown = document.querySelectorAll('.dropdown select');
// for (let select of dropdown){
//     for(let currCode in countryList){
//         let newOption = document.createElement("option");
//         newOption.innerText = currCode ;
//         newOption.value = currCode;
//         select.append(newOption);

//         if (select.name === "from" && currCode === "USD"){
//             newOption.selected = "selected";
//         }else if(select.name === "to" && currCode === "PKR"){
//             newOption.selected = "selected";
//         }   
//         select.addEventListener('change',(evt)=>{
//             updateFlag(evt.target);
//         })
//    } 
// }

// const updateFlag = (element) => {
//     console.log(element);
// }



for (let select of dropdown) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);

        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "PKR") {
            newOption.selected = "selected";
        }
    }

    select.addEventListener('change', (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    console.log(element);  
};
