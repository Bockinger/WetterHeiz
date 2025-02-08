let arrayWeatherDay = [];


const APIPfadDay = "https://api.open-meteo.com/v1/forecast?latitude=47.6409&longitude=11.7448&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,pressure_msl,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,wind_speed_10m,uv_index&forecast_days=1";
const APIPfadForecast = "https://api.open-meteo.com/v1/forecast?latitude=47.6409&longitude=11.7448&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,pressure_msl,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,wind_speed_10m,uv_index&forecast_days=2"

function init() {
  console.log("Card schreiben")
  readAPIDataDay();
  setInterval(readAPIDataDay, 20 * 60 * 1000);
  readDataSenec();
}

async function readAPIDataDay() {
  console.log("Start abfrage");
  try {

    response = fetch(APIPfadForecast);
    let data = await Promise.all([response]);
    let data1 = await data[0].json();
    document.getElementById('sectionCard').innerHTML = "";
    await dataRead(data1, "aktuell");
    await dataRead(data1, "morgen");

  } catch {
    console.error("Keine Daten");
  }
}


async function dataRead(data, day) {
  arrayWeatherDay = [];
  let indexTime = indexTimeHourly(data, day);
  let indexHourly = indexSerach(data);
  for (let i = 0; i < indexHourly; i++) {
    let entry = data.hourly[KeysRead(data, i)][indexTime];
    arrayWeatherDay.push(entry);
  }

  RenderCard(day);
}



function indexTimeHourly(data, day) {
  let timeLenght = Object.keys(data.hourly.time).length;
  console.log("TimeLänge ", timeLenght);
  let start = 0;
  if (day == "morgen") {
    console.log("Morgen ");
    start = 24;
  }

  for (let i = start; i <= timeLenght; i++) {
    if ((data.hourly.time[i]).includes(getTime())) {
      console.log(i);
      return i;
    }
  }
}


function indexSerach(data) {
  return hourlyLenght = Object.keys(data.hourly).length;
}


function getTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  return `${hours}:00`;
}


function KeysRead(data, i) {
  let eintrag = Object.keys(data.hourly)[i];
  return eintrag;
}


function RenderCard(day) {

  if (day == "aktuell") {
    document.getElementById('sectionCard').innerHTML += templateCardCurrent(day);
  } else {
    document.getElementById('sectionCard').innerHTML += templateCardCurrent(day);
  }


}




function formatData(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day}.${month}.${year} ${hours}:${minutes} Uhr`;
}
