let arrayWeatherDay = [];


const APIPfadDay = "https://api.open-meteo.com/v1/forecast?latitude=47.6409&longitude=11.7448&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,pressure_msl,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,wind_speed_10m,uv_index&forecast_days=1";
const APIPfadForecast = "https://api.open-meteo.com/v1/forecast?latitude=47.6409&longitude=11.7448&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,pressure_msl,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,wind_speed_10m,uv_index&forecast_days=3"

function init() {
  console.log("Card schreiben")
  readAPIDataDay();
}


async function readAPIDataDay() {
  console.log("Start abfrage");
  try {
    response1 = fetch(APIPfadDay);
    response2 = fetch(APIPfadForecast);
    let data = await Promise.all([response1, response2]);
    let data1 = await data[0].json();
    let data2 = await data[1].json();
    await dataRead(data1);
  } catch {
    console.error("Keine Daten");
  }
}


function KeysRead(data, i) {
  let eintrag = Object.keys(data.hourly)[i];

  return eintrag;
}


async function dataRead(data) {
  KeysRead(data, 1);
  let indexTime = indexTimeHourly(data);
  let indexHourly = indexSerach(data);
  for (let i = 0; i < indexHourly; i++) {
    let entry = data.hourly[KeysRead(data, i)][indexTime];
    console.log("Eintragentzry ", entry);
  }

  console.log("indexTime ", indexTime);
  console.log("indexHourly ", indexHourly);
  RenderCard(0, data);
}


function indexTimeHourly(data) {
  let timeLenght = Object.keys(data.hourly.time).length;
  for (let i = 0; i <= timeLenght; i++) {
    if ((data.hourly.time[i]).includes(getTime())) {
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

function RenderCard(art, array) {
  if (art == 0) {
    formatDate(array)
    document.getElementById('sectionCard').innerHTML += templateCardCurrent(array);
  } else {
    document.getElementById('sectionCard').innerHTML += templateCardForecast(array);
  }
}



function formatDate(array) {
  let data = array.hourly.time[1];

  for (i = 0; i > 10; i++) {
    console.log("Nummer ", i)
  }
  console.log(data)

}
