//nesneler
var araba = {
    marka:"honda",
    renk: "beyaz",
    yil:2007,
    km:245000
};
console.log(araba);
document.write(araba.marka+"<br>");
document.write(araba.renk+"<br>");
document.write(araba.yil+"<br>");
document.write(araba.km+"<br>");

document.write("<hr>");

function arabam(marka,renk,yil,km) {
    this.markasi=marka;
    this.rengi=renk;
    this.yili=yil;
    this.kmsi=km;
}

var araba1 = new arabam("Toyota","kırmızı",2011,135000);
var araba2 = new arabam("Seat","füme",2020,72000);

console.log(araba1);
console.log(araba2);
document.write(araba1.markasi+"<br>");
document.write(araba1.rengi+"<br>");
document.write(araba1.yili+"<br>");
document.write(araba1.kmsi+"<br>");
document.write("<hr>");

var turgay = new Object();
turgay.tc = "123456";
turgay.boy = 170 ;
turgay.yas= 42 ;

console.log(turgay);
document.write(turgay.tc);
document.write("<br>");
document.write(turgay.boy);
document.write("<br>");
document.write(turgay.yas);
document.write("<hr>");

var arabalar=[
    {
    marka:"honda",
    renk: "beyaz",
    yil:2007,
    km:245000
    },
    {
    marka:"kia",
    renk: "siyah",
    yil:2021,
    km:165000
    },
    {
    marka:"hyundai",
    renk: "kırmızı",
    yil:2023,
    km:11000
    }

];

for(arabaListele in arabalar){
    console.log(arabalar[arabaListele]);
}

for (let araba of arabalar) {
    for (let ozellik in araba) {
        document.write(ozellik + ": " + araba[ozellik] + "<br>");
    }
    document.write("------<br>");
}
document.write("<hr>");

var Ogrenci={
    ad:"Zübeyir",
    soyad:"Fidan",
    yas:42,
    adSoyad: function(){
        return this.ad + " " + this.soyad;
    },
    yasHesap: function(){
        return (2024-this.yas);
    } 
};

document.write(Ogrenci.adSoyad()+"<br>");
document.write(Ogrenci.yasHesap());

function car(brand,model,color){
    this.brand=brand;
    this.model=model;
    this.color=color;
}

car.prototype.fiat=250000;

var car1= new car("Ferrari","Kırmızı",2022);
console.log(car1);
document.write("<hr>");
document.write(car1.fiat);
