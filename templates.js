function templateCardCurrent(data) {
  return `
   <div id="card" class="card">
      <div class="card_Header">
        <p1>aktuell</p1>
        <p2>Mittwoch 05.02.2025 21:57</p2>
      </div>
      <div id="cardDetail" class="card_Detail">
        <table>
          <tr>
            <td>Temperatur</td>
            <td>10 C°</td>
            <td>
              <img src="./assets/icons/temp.svg">
            </td>
          </tr>

          <tr>
            <td>Temp gefühlt</td>
            <td>11 C°</td>
            <td>
              <img src="./assets/icons/temp.svg">
            </td>
          </tr>

          <tr>
            <td>Luftfeuchte</td>
            <td>40 %</td>
            <td>
              <img src="./assets/icons/humidity.svg">
            </td>
          </tr>

          <tr>
            <td>Luftdruck</td>
            <td>10 pa</td>
            <td>
              <img src=" ./assets/icons/pressure.svg">
            </td>
          </tr>
        </table>
        <hr>

        <table>
          <tr>
            <td>Wolkenbedeckung</td>
            <td>90 %</td>
            <td>
              <img src="./assets/icons/cloud.svg">
            </td>
          </tr>

          <tr>
            <td>Niederschlag %</td>
            <td>10 ml</td>
            <td>
              <img src="./assets/icons/rainy.svg">
            </td>
          </tr>

          <tr>
            <td>Regen</td>
            <td>10 %</td>
            <td>
              <img src="./assets/icons/rainy.svg">
            </td>
          </tr>
        </table>
        <hr>

        <table>
          <tr>
            <td>UV-Index</td>
            <td>
              <img src="./assets/icons/sunny.svg">
            </td>
          </tr>

          <tr>
            <td>Sonnenschein</td>
            <td>
              <img src="./assets/icons/sunny.svg">
            </td>
          </tr>

        </table>
      </div>

    </div>
  `
}



function templateCardForecast() {
  return `
   <div id="card" class="card">
      <div class="card_Header">
        <p1>morgen</p1>
        <p2>Donnerstag 06.02.2025 </p2>
      </div>
      <div id="cardDetail" class="card_Detail">
        <table>
          <tr>
            <td>Temperatur</td>
            <td>10 C°</td>
            <td>
              <img src="./assets/icons/temp.svg">
            </td>
          </tr>

          <tr>
            <td>Temp gefühlt</td>
            <td>11 C°</td>
            <td>
              <img src="./assets/icons/temp.svg">
            </td>
          </tr>

          <tr>
            <td>Luftfeuchte</td>
            <td>40 %</td>
            <td>
              <img src="./assets/icons/humidity.svg">
            </td>
          </tr>

          <tr>
            <td>Luftdruck</td>
            <td>10 pa</td>
            <td>
              <img src=" ./assets/icons/pressure.svg">
            </td>
          </tr>
        </table>
        <hr>

        <table>
          <tr>
            <td>Wolkenbedeckung</td>
            <td>90 %</td>
            <td>
              <img src="./assets/icons/cloud.svg">
            </td>
          </tr>

          <tr>
            <td>Niederschlag %</td>
            <td>10 ml</td>
            <td>
              <img src="./assets/icons/rainy.svg">
            </td>
          </tr>

          <tr>
            <td>Regen</td>
            <td>10 %</td>
            <td>
              <img src="./assets/icons/rainy.svg">
            </td>
          </tr>
        </table>
        <hr>

        <table>
          <tr>
            <td>UV-Index</td>
            <td>
              <img src="./assets/icons/sunny.svg">
            </td>
          </tr>

          <tr>
            <td>Sonnenschein</td>
            <td>
              <img src="./assets/icons/sunny.svg">
            </td>
          </tr>

        </table>
      </div>

    </div>
  `
}
