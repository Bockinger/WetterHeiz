let arrayWeatherDay = [];
let arraySenecData = [];


const APIPfadDay = "https://api.open-meteo.com/v1/forecast?latitude=47.6409&longitude=11.7448&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,pressure_msl,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,wind_speed_10m,uv_index&forecast_days=1";
const APIPfadForecast = "https://api.open-meteo.com/v1/forecast?latitude=47.6409&longitude=11.7448&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,pressure_msl,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,wind_speed_10m,uv_index&forecast_days=2"

function init() {
  console.log("Card schreiben")
  readAPIDataDay();
  readDataSenec();
  spinningLoader(false);
}



function dataRead() {
  //document.getElementById('sectionCard').innerHTML = "";
}



async function readAPIDataDay() {
  console.log("Start abfrage");
  try {
    response = fetch(APIPfadForecast);
    let data = await Promise.all([response]);
    let data1 = await data[0].json();
    document.getElementById('sectionCard').innerHTML = "";
    await dataRead(data1, "aktuell", 1);
    await dataRead(data1, "morgen", 2);
  } catch {
    console.error("Keine Daten");
  }
}


async function dataRead(data, day, index) {
  arrayWeatherDay = [];
  let indexTime = indexTimeHourly(data, day);
  let indexHourly = indexSerach(data);
  for (let i = 0; i < indexHourly; i++) {
    let entry = data.hourly[KeysRead(data, i)][indexTime];
    arrayWeatherDay.push(entry);
  }
  RenderCard(day, index);
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


function RenderCard(day, index) {
  if (day == "aktuell") {
    document.getElementById('sectionCard').innerHTML += templateCardCurrent(day, index);
  } else {
    document.getElementById('sectionCard').innerHTML += templateCardCurrent(day, index);
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




function cardShrink(index) {
  let element = document.getElementById('cardDetail' + index);
  let elementPic = document.getElementById('cardPic' + index);
  if (elementPic.src.includes("close.svg")) {
    elementPic.src = "./assets/icons/open.svg";
  } else {
    elementPic.src = "./assets/icons/close.svg";
  }
  element.hidden = !element.hidden;
  document.getElementById('card' + index).classList.toggle('card_Shrink');
}




function spinningLoader(state) {
  let element = document.getElementById('loader');
  if (state) {
    element.classList.toggle("hidden");
  } else {
    element.classList.toggle("hidden");
  }
}




function colorAdd(IDName) {
  let element = document.getElementById(IDName);
  element.classList.toggle('colorAdd')
}
