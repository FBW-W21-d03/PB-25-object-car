
const BMW = {
    Marke:"BMW",
    Modell: "B150",
    Baujahr: 2017,
    Kilometer: 110.000,
    Motor: "Benziner",

};
console.log(BMW);
console.log(BMW.Marke);
console.log(BMW.Modell);
console.log(BMW.Baujahr);
console.log(BMW.Kilometer);
console.log(BMW.Motor);


BMW.Baujahr=2019;
BMW.Kilometer=30.000;
BMW.Motor= "Diesel";

console.log(BMW);
console.log(BMW.Marke);
console.log(BMW.Modell);
console.log(BMW.Baujahr);
console.log(BMW.Kilometer);
console.log(BMW.Motor);