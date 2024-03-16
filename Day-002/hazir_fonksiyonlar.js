//endoceURI ve decodeURI
var url=" my test.html?ad=zubeyir&soyad=MöpçTğq ş";
document.write(url);
document.write("<br>");

document.write("Encode Hali : ");
document.write(encodeURI(url));
document.write("<br>");
document.write("Decode Hali : ");
document.write(decodeURI(url));
document.write("<br>");

//eval  string değerlerden dinamik js değerler üretir
var a=10,b=20;
var c= "a+b";
document.write("Evalsiz hali : "+c);
document.write("<br>");
document.write("Eval ile olan hali : "+eval(c));
document.write("<br>");

//isFinite bir numaranın kullanılabilir olmadığına bakar.
document.write("isFinite örnekleri<br>");
var a= isFinite(123);
document.write(a);
document.write("<br>");

var a= isFinite("123");
document.write(a);
document.write("<br>");

var a= isFinite("deneme");
document.write(a);
document.write("<br>");

var a= isFinite("-456");
document.write(a);
document.write("<br>");

var a= isFinite(-456);
document.write(a);
document.write("<br>");

//isNAN 
let result =
"Is 123 NaN? " + isNaN(123) + "<br>" +
"Is -1.23 NaN? " + isNaN(-1.23) + "<br>" +
"Is 5-2 NaN? " + isNaN(5-2) + "<br>" +
"Is 'Hello' NaN? " + isNaN('Hello') + "<br>" +
"Is '2005/12/12' NaN? " + isNaN('2005/12/12');
document.write(result);
document.write("<br>");

//number  değerleri rakamlara çevirir.
var e="123";
document.write(typeof(e)+ " : "+e+"<br>");
document.write(typeof Number(e)+ " : "+e);

document.write("<br>");
var tarih= new Date();
yil=tarih.getFullYear();
document.write(Number(yil)-1980+"<br>");//number ile tarihleride sayıya çevirebiliriz.

//parseFloat float değişkenine çevirir.
//parseInt  integer yani sayıya çevirir.
var d= "10 araba ";
document.write(d + typeof(d)+"<br>");
var d = parseFloat("10 araba");
document.write(d +" "+ typeof(d)+"<br>");

var e="12345 alper";
document.write(parseInt(e));//number yapar
document.write("<br>");
document.writeln(parseInt("21",3));//3 lük sistemde karşılığını verir.
document.writeln(parseInt("13",10));
document.writeln(parseInt("23",4));

