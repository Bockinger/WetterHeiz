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

    let data1 = data["ENERGY"]["GUI_HOUSE_POW"];

    console.log("Data1", data1);

    console.log("Daten ", convertFlToDecimal(data1));

    //console.log()

  } catch (error) {
    console.log("Fehler:", error);
  }

}


function convertFlToDecimal(flString) {
  // Prüfen, ob das Präfix "fl_" vorhanden ist
  if (!flString.startsWith("fl_")) {
    console.error("Ungültiges Format! Erwartet wird ein String mit 'fl_'.");
    return null;
  }
  // Präfix entfernen, um die Hexadezimalzahl zu erhalten
  const hexValue = flString.replace("fl_", "");
  // Hexadezimal in Dezimal umwandeln
  let decimalValue = parseInt(hexValue, 16);
  // Falls der Wert eine 32-Bit signed Integer-Zahl ist, umwandeln
  if (decimalValue > 0x7FFFFFFF) {
    decimalValue = decimalValue - 0x100000000; // 2er-Komplement für negative Werte
  }
  return decimalValue;
}
