const meinAuto = {
  marke: "Ford",
  modell: "F150",
  baujahr: 2017,
  kilometer: 110000,
  motor: "Benziner",
};

console.log("Objekt am Anfang:", meinAuto);

meinAuto.baujahr = 2019;
meinAuto.kilometer = 30000;
meinAuto.motor = "Diesel";

console.log("Objekt nach Änderung:", meinAuto);
