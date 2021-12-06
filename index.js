const meinAuto = {
marke: "Ford",
modell: "F150",  
baujahr: 2017,
kilometer: 110000,
motor: "Benziener"
};
console.log(meinAuto);
meinAuto.baujahr = 2019;
meinAuto.kilometer = 30000;
meinAuto.motor = "Diesel";


console.log(meinAuto);
console.log("Das Baujahr ist:",meinAuto.baujahr);
console.log("Kilometerstand",meinAuto.kilometer);
console.log("Was trinkt er:",meinAuto.motor);


