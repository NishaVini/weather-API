
let displaycityName = document.getElementById("city_name");
let time = document.querySelector(".time")
let clouds= document.querySelector(".clouds")
let Icon = document.querySelector(".image");
let temperature = document.querySelector(".degree");
let minTem = document.querySelector(".min");
let maxTem = document.querySelector(".max");

let feels = document.getElementById("feels");
let winds = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");

// second to change week month day ...........convert function...
const getDateTime = (dt)=>{
    const curdate = new Date(dt*1000); //convert second to miliseconds
      const options = {
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric",
        hour:"numeric",
        minute:"numeric",
    };
    const formater = new Intl.DateTimeFormat("en-US",options); 
    return formater.format(curdate);
}

// document.addEventListener("DOMContentLoaded", function () {
// function get weather information to country.......
const weatherData = async () => {
  let location = document.getElementById("locationInput");
      let cityName = location.value;
      location.value="";
     
     let apiKey = '3be3654a2c25422988b7a216d76da5ff'
     let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const { weather, main, wind, dt, sys, name } = data;
        // country obj
        let countryNames = {
            "AF": "Afghanistan",
            "AL": "Albania",
            "DZ": "Algeria",
            "AD": "Andorra",
            "AO": "Angola",
            "AG": "Antigua and Barbuda",
            "AR": "Argentina",
            "AM": "Armenia",
            "AU": "Australia",
            "AT": "Austria",
            "AZ": "Azerbaijan",
            "BS": "Bahamas",
            "BH": "Bahrain",
            "BD": "Bangladesh",
            "BB": "Barbados",
            "BY": "Belarus",
            "BE": "Belgium",
            "BZ": "Belize",
            "BJ": "Benin",
            "BT": "Bhutan",
            "BO": "Bolivia",
            "BA": "Bosnia and Herzegovina",
            "BW": "Botswana",
            "BR": "Brazil",
            "BN": "Brunei Darussalam",
            "BG": "Bulgaria",
            "BF": "Burkina Faso",
            "BI": "Burundi",
            "CV": "Cabo Verde",
            "KH": "Cambodia",
            "CM": "Cameroon",
            "CA": "Canada",
            "CF": "Central African Republic",
            "TD": "Chad",
            "CL": "Chile",
            "CN": "China",
            "CO": "Colombia",
            "KM": "Comoros",
            "CG": "Congo (Congo-Brazzaville)",
            "CD": "Congo, Democratic Republic of the",
            "CR": "Costa Rica",
            "HR": "Croatia",
            "CU": "Cuba",
            "CY": "Cyprus",
            "CZ": "Czechia (Czech Republic)",
            "DK": "Denmark",
            "DJ": "Djibouti",
            "DM": "Dominica",
            "DO": "Dominican Republic",
            "EC": "Ecuador",
            "EG": "Egypt",
            "SV": "El Salvador",
            "GQ": "Equatorial Guinea",
            "ER": "Eritrea",
            "EE": "Estonia",
            "SZ": "Eswatini",
            "ET": "Ethiopia",
            "FJ": "Fiji",
            "FI": "Finland",
            "FR": "France",
            "GA": "Gabon",
            "GM": "Gambia",
            "GE": "Georgia",
            "DE": "Germany",
            "GH": "Ghana",
            "GR": "Greece",
            "GD": "Grenada",
            "GT": "Guatemala",
            "GN": "Guinea",
            "GW": "Guinea-Bissau",
            "GY": "Guyana",
            "HT": "Haiti",
            "HN": "Honduras",
            "HU": "Hungary",
            "IS": "Iceland",
            "IN": "India",
            "ID": "Indonesia",
            "IR": "Iran",
            "IQ": "Iraq",
            "IE": "Ireland",
            "IL": "Israel",
            "IT": "Italy",
            "JM": "Jamaica",
            "JP": "Japan",
            "JO": "Jordan",
            "KZ": "Kazakhstan",
            "KE": "Kenya",
            "KI": "Kiribati",
            "KP": "North Korea",
            "KR": "South Korea",
            "KW": "Kuwait",
            "KG": "Kyrgyzstan",
            "LA": "Laos",
            "LV": "Latvia",
            "LB": "Lebanon",
            "LS": "Lesotho",
            "LR": "Liberia",
            "LY": "Libya",
            "LI": "Liechtenstein",
            "LT": "Lithuania",
            "LU": "Luxembourg",
            "MG": "Madagascar",
            "MW": "Malawi",
            "MY": "Malaysia",
            "MV": "Maldives",
            "ML": "Mali",
            "MT": "Malta",
            "MH": "Marshall Islands",
            "MR": "Mauritania",
            "MU": "Mauritius",
            "MX": "Mexico",
            "FM": "Micronesia",
            "MD": "Moldova",
            "MC": "Monaco",
            "MN": "Mongolia",
            "ME": "Montenegro",
            "MA": "Morocco",
            "MZ": "Mozambique",
            "MM": "Myanmar",
            "NA": "Namibia",
            "NR": "Nauru",
            "NP": "Nepal",
            "NL": "Netherlands",
            "NZ": "New Zealand",
            "NI": "Nicaragua",
            "NE": "Niger",
            "NG": "Nigeria",
            "MK": "North Macedonia",
            "NO": "Norway",
            "OM": "Oman",
            "PK": "Pakistan",
            "PW": "Palau",
            "PA": "Panama",
            "PG": "Papua New Guinea",
            "PY": "Paraguay",
            "PE": "Peru",
            "PH": "Philippines",
            "PL": "Poland",
            "PT": "Portugal",
            "QA": "Qatar",
            "RO": "Romania",
            "RU": "Russia",
            "RW": "Rwanda",
            "KN": "Saint Kitts and Nevis",
            "LC": "Saint Lucia",
            "VC": "Saint Vincent and the Grenadines",
            "WS": "Samoa",
            "SM": "San Marino",
            "ST": "Sao Tome and Principe",
            "SA": "Saudi Arabia",
            "SN": "Senegal",
            "RS": "Serbia",
            "SC": "Seychelles",
            "SL": "Sierra Leone",
            "SG": "Singapore",
            "SK": "Slovakia",
            "SI": "Slovenia",
            "SB": "Solomon Islands",
            "SO": "Somalia",
            "ZA": "South Africa",
            "SS": "South Sudan",
            "ES": "Spain",
            "LK": "Sri Lanka",
            "SD": "Sudan",
            "SR": "Suriname",
            "SE": "Sweden",
            "CH": "Switzerland",
            "SY": "Syria",
            "TW": "Taiwan",
            "TJ": "Tajikistan",
            "TZ": "Tanzania",
            "TH": "Thailand",
            "TL": "Timor-Leste",
            "TG": "Togo",
            "TO": "Tonga",
            "TT": "Trinidad and Tobago",
            "TN": "Tunisia",
            "TR": "Turkey",
            "TM": "Turkmenistan",
        }
                
        // Assuming `name` is the city name and `sys.country` is the country code
        displaycityName.innerHTML = `${name}, ${countryNames[sys.country] || sys.country}`; // Ensure cityName is defined as a DOM element elsewhere in your code

        time.innerHTML = getDateTime(dt);
        clouds.innerHTML=weather[0].main;
        //Icon.innerHTML = weather[0].icon;
         Icon.innerHTML =`<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png"/>`;
        temperature.innerHTML=`${main.temp}&#176`;
        minTem.innerHTML=`Min :${main.temp_min.toFixed()}&#176`;
        maxTem.innerHTML=`Max :${main.temp_max.toFixed()}&#176`;

        feels.innerHTML=`${main.feels_like.toFixed(2)}&#176`;
        humidity.innerHTML=`${main.humidity}%`;
        winds.innerHTML=`${wind.speed} m/s`;
        pressure.innerHTML=`${main.pressure} hpa`;  

    } catch (error) {
        console.log("Error fetching weather:", error.message);
    }
        
  }
    /* // Add event listener to button to trigger weatherData function */
    
    document.getElementById("getWeatherButton").addEventListener("click", weatherData);
    
// // when window loaded already function colled
// cityName="kanpur"
// window.addEventListener("load",weatherData());


