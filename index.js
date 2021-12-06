
//Deklarieren
const meinAuto = {
    Marke: "Ford",
    Modell: "F150",
    Baujahr: "2017",
    Kilometer: "110000",
    Motor: "Benziner"
};

console.log("Alte Werte: ", meinAuto);

//aktualisirung der daten
meinAuto.Baujahr = "2019";
meinAuto.Kilometer = "30000";
meinAuto.Motor = "Diesel";

//Ausgabe
console.log("Neue Werte: ", meinAuto);
