function templateCardCurrent(name) {
  return `
   <div id="card" class="card">
      <div class="card_Header">
        <p1>${name}</p1>
        <p2>${formatData(arrayWeatherDay[0])}</p2>
      </div>
      <div id="cardDetail" class="card_Detail">
        <table>
          <tr>
            <td>Temperatur</td>
            <td>${arrayWeatherDay[1]} C°</td>
            <td>
              <img src="./assets/icons/temp.svg">
            </td>
          </tr>

          <tr>
            <td>Temp gefühlt</td>
            <td>${arrayWeatherDay[3]} C°</td>
            <td>
              <img src="./assets/icons/temp.svg">
            </td>
          </tr>

          <tr>
            <td>Luftfeuchte</td>
            <td>${arrayWeatherDay[2]} %</td>
            <td>
              <img src="./assets/icons/humidity.svg">
            </td>
          </tr>

          <tr>
            <td>Luftdruck</td>
            <td>${arrayWeatherDay[9]} hPa</td>
            <td>
              <img src=" ./assets/icons/pressure.svg">
            </td>
          </tr>
        </table>
        <hr>

        <table>
          <tr>
            <td>Wolkenbedeckung</td>
            <td>${arrayWeatherDay[10]} %</td>
            <td>
              <img src="./assets/icons/cloud.svg">
            </td>
          </tr>

          <tr>
            <td>Niederschlag </td>
            <td>${arrayWeatherDay[5]} mm</td>
            <td>
              <img src="./assets/icons/rainy.svg">
            </td>
          </tr>

          <tr>
            <td>Regen</td>
            <td>${arrayWeatherDay[6]} mm</td>
            <td>
              <img src="./assets/icons/rainy.svg">
            </td>
          </tr>
        </table>
        <hr>

        <table>
          <tr>
            <td>UV-Index</td>
                  <td>${arrayWeatherDay[15]} </td>
            <td>
              <img src="./assets/icons/sunny.svg">
            </td>
          </tr>

          <tr>
            <td>Wind</td>
                  <td>${arrayWeatherDay[14]} km/h</td>
            <td>
              <img src="./assets/icons/air.svg">
            </td>
          </tr>

        </table>
      </div>

    </div>
  `
}
