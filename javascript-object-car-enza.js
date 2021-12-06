//Aufgabenstellung - Teil 1
const meinAuto = {
    marke: "Ford" , 
    modell: "F"+150 , 
    baujahr: 2017 , 
    kilometer: 110000 , 
    motor: "Benziner" ,
}

console.log(meinAuto);
console.log("-------------");

//Aufgabenstellung - Teil 2

meinAuto.baujahr = meinAuto.baujahr + 2;
meinAuto.kilometer = meinAuto.kilometer - 80000;
meinAuto.motor = "Diesel";

console.log(meinAuto);




