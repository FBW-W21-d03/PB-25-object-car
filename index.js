const meinAuto = {
    Marke: "Ford",
    Modell: "F150",
    Baujahr: 2017,
    Kilometer: 110000,
    Motor: "Benziner"
}
console.log("Ver1: ", meinAuto);

meinAuto.Baujahr = 2019;
meinAuto.Kilometer = 30000;
meinAuto.Motor = "Diesel";

console.log("Ver2: ", meinAuto); 