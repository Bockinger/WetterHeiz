const senecIp = "https://192.168.0.151/lala.cgi"

console.log("SENEC");

async function readDataSenec() {
  console.log("Starte Senec Anfrage");

  try {
    let response = await fetch(senecIp, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify({ "ENERGY": {} })

    });

    if (!response.ok) {
      throw new Error(`Fehler beim Abrufen der Daten: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("senec-daten ", data);
    let data1 = hexFloatToDecimal(data["ENERGY"]["GUI_HOUSE_POW"]);
    let data2 = hexFloatToDecimal(data["ENERGY"]["GUI_GRID_POW"]);
    let data3 = hexFloatToDecimal(data["ENERGY"]["GUI_INVERTER_POWER"]);
    arraySenecData = [data1, data2, data3];
    document.getElementById('sectionCard').innerHTML += templateCardSenec("SENEC", 3);
  } catch (error) {
    console.log("Fehler:", error);
  }

}


function hexFloatToDecimal(hexString) {
  // Präfix "fl_" entfernen, falls vorhanden
  hexString = hexString.replace("fl_", "");

  // Hexadezimal in eine Ganzzahl umwandeln
  let intVal = parseInt(hexString, 16);

  // ArrayBuffer für IEEE 754 Umwandlung (32-bit Float)
  let buffer = new ArrayBuffer(4);
  let intView = new DataView(buffer);

  // Setze den 32-bit Integer-Wert
  intView.setUint32(0, intVal, false); // false = Big-Endian

  // Als 32-bit Float lesen
  //return intView.getFloat32(0, false);

  return (intView.getFloat32(0, false) / 1000).toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
