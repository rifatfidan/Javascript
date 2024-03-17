//sqrt 
document.write("Sqrt 49 sayısının karekökü : "+Math.sqrt(49));
document.write("<br>");
document.write("Pi sayısı : "+Math.PI);
document.write("<br>");

//ceil yukarı yuvarlar
var a=0.40;
document.write("Ceil : ");
document.write(Math.ceil(a));//1 e yani yukarı yuvarlar.
document.write("<br>");

//floor aşağı yuvarlar
var b= 18.7;
document.write("Floor : ");
document.write(Math.floor(b)); //18 e yani aşağı yuvarlar.
document.write("<br>");

//round kendine en yakına yuvarlar.
var c= 18.7;
var d= 13.2;
document.write("Round : ");
document.write(Math.round(c)); //19 e yani en yakına yuvarlar.
document.write("<br>");
document.write(Math.round(d)); //13 e yani en yakına yuvarlar.
document.write("<br>");

//min ve max
var sayi1 = Math.min(5,0,13,4,57,19,30);
var sayi2 = Math.max(5,0,13,4,57,19,30);
document.write("<br>");
document.write("Minimum sayı : "+sayi1);
document.write("<br>");
document.write("Maksimum sayı : "+sayi2);

//random  0-1 arası sayı üretir.
document.write("<br> Random : ");
var sayi3 = Math.round(Math.random()*10);
document.write(sayi3+"<br>");
