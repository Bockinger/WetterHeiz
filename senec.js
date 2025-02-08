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


  } catch (error) {
    console.log("Fehler:", error);
  }

}
