const meinAuto = {
    marke: 'Ford',
    modell: 'F150',
    baujahr: '2017',
    kilometer:'110000',
    motor: 'Benziner'
};

meinAuto.baujahr= '2019';
meinAuto.kilometer='30000';
meinAuto.motor = 'Diesel';


console.log(meinAuto);


// Zusatzaufgabe


const chuck = {
    bankkonto: 'DE012345674566522222',
    bankleitzahl:'ADCDEFGH123',
    bank: 'Sparkase Berlin Ost',
    kontostand: 1000 ,
    dispo: 500
};

chuck.bank = 'Sparkasse Berlin West';
chuck.kontostand = chuck.dispo + 100;
chuck.dispo = chuck.dispo +50 ;

console.log(chuck);

