//length string uzunluğunu verir
var yazi="Merhaba Dünya";
document.write("String Uzunluğu : ");
document.write(yazi.length);
document.write("<br>");

//lastIndexOf  dizideki aranan kelime birden fazla ise en sondan bulur ve konumunu verir. indexOf ise baştan bulur ve konumu verir.
var yazi2 = "Bu yazı bir denemedir. Sizde yazı gönderin bakalım";
document.write("lastIndexOf : ");
document.write(yazi2.lastIndexOf("yazı"));
document.write("<br>");

//search  indexOf gibidir 
var yazi2 = "Bu yazı bir denemedir. Sizde yazı gönderin bakalım";
document.write("Search : ");
document.write(yazi2.search("yazı"));
document.write("<br>");

//substr  belli metinleri kesmek için kullanılır
var yazi2 = "Bu yazı bir denemedir. Sizde yazı gönderin bakalım";
document.write("Substr : ");
document.write(yazi2.substr(8));// 8 den sonra başlatır.  bir denemedir ....
document.write("<br>");
document.write(yazi2.substr(8,14));// 8 den 14 e kadar bir denemedir.
document.write("<br>");

//replace değişim yapar
document.write("Replace <br>");
document.write(yazi2.replace("bakalım","inceleyelim"));
document.write("<br>");
//eğer birden fazla var ise değiştirmek için
document.write(yazi2.replace(/yazı/g,"......"));//eğer g nin yanına i yazarsak harf duyarlılığı da olmaz  /yazı/gi
document.write("<br>");

//toLowerCase toUpperCase
document.write("toLowerCase ve toUpperCase<br>")
var yazi3="BU BİR DENEMEDİR";
document.write(yazi3.toLowerCase());
document.write("<br>");
var yazi4="bu bir denemedir";
document.write(yazi4.toUpperCase());
document.write("<br>");

//split stringi diziye çevirir.
var dizi= yazi3.split(" ");//boşluklara göre ayırıp dizi yapar. isterseniz başka karakterde olabilir.
document.write(dizi);

