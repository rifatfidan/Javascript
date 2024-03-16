//join toString gibi davranır ama ayıracı belirler.
var kurslar = ["Php","Javascript","C#","Python","Java"];
document.write("Join ile aralara - eklendi : <br>"+kurslar.join("-"));
document.write("<br>");
document.write("<br>");

//pop dizinin son öğresini kaldırır.
kurslar.pop();
document.write("Pop ile son öğe kaldırıldı :<br> "+kurslar);
document.write("<br>");
document.write("<br>");

//push dizinin sonuna ekleme yapar
kurslar.push("Yeni Java");
document.write("Push ile sonuna eleman ekler : <br>"+kurslar);
document.write("<br>");
document.write("<br>");

//shift dizinin ilk öğesini kaldırır.
kurslar.shift();
document.write("shift ile ilk elemanı kaldırır : <br>"+kurslar+"<br>");
document.write("<br>");

//unshift dizinin ilk öğesine ekleme yapar.
kurslar.unshift("Yeni Php");
document.write("unshift ilk öğeye eleman ekler : <br>"+kurslar+"<br>");
document.write("<br>");

//splice diziye yeni eleman eklemeye yarar, yerlerini belirtmeye yarar ve bazı elemanları da kaldırmaya yarar
document.write("splice komutu ile araya eleman ekleme : <br>");
kurslar.splice(2,0,"yeni1","yeni2"); //Yeni Php,Javascript,yeni1,yeni2,C#,Python,Yeni Java
//kurslar.splice(2,1,"yeni1","yeni2"); // Yeni Php,Javascript,yeni1,yeni2,Python,Yeni Java  sadece 1 adet alır
//kurslar.splice(2,2,"yeni1","yeni2"); // C# ve Python gider  Yeni Php,Javascript,yeni1,yeni2,Yeni Java
//kurslar.splice(2,2); // hic veri eklemeden 2 den sonra 2 adet indisi kaldırır. Yeni Php,Javascript,Yeni Java
document.write(kurslar); 
document.write("<br>");
document.write("<br>");

//concat  dizileri birleştirir
var kurs1=new Array("Php","Asp.Net");
var kurs2=new Array("Mysql","MsSql");
var kurslarimiz = kurs1.concat(kurs2);//birden fazla varsa virgül ile eklenebilir. kurs2,kurs3 gibi
document.write("concat ile iki dizi birleştirildi : <br>"+kurslarimiz);
document.write("<br>");
document.write("<br>");

//slice  belirli indisten sonra ayırma sağlar.
document.write(kurslar+"<br>");
var yeniKurs = kurslar.slice(2); // 2 indisi dahil sonrasını yeni dizin olarak böler.
document.write("slice ile son hali : "+ yeniKurs);
document.write("<br>");
var slice2 = kurslar.slice(1,4);//aralık verebiliriz.1. indisten 3 e kadar 3 dahil değil.
document.write(slice2);  //Javascript,yeni1,yeni2
document.write("<br>");
document.write("<br>");

//length dizilerin eleman sayısını verir.
document.write("Kurslar dizisinin eleman sayısı : "+kurslar.length);
document.write("<br>");

//reverse dizi elemanlarını tersine çevirir
kurslar.reverse();
document.write("Kursların ters hali : "+kurslar);
document.write("<br>");

//sort dizi elemanlarını alfabetik sıralar. ascii ye göre sıralar. o sebep rakam ya da büyük küçük harfe göre değişir.
kurslar.sort();
document.write("Kursların sıralı hali : "+kurslar);
document.write("<br>");
document.write("<br>");

//indexOf dizideki aranan elemanın konumunu veriyor
var eleman = kurslar.indexOf("Python");
document.write(eleman+". indexte Python yer almaktadır.");
document.write("<br>");
document.write("<br>");

//some dizi elemaların belirtilen şartlara uyup uymadığına bakar.
var yas1 = new Array(5,8,16,32,40,58,83);
var yas2 = new Array(5,6,8,13,16);
function yasKontrol(events) {
    return events>=18;
}
document.write(yas1.some(yasKontrol));//true
document.write("<br>");
document.write(yas2.some(yasKontrol));//false
//true verir some ile içinde buyuk ya da eşit 18 varmı diye sorduk
//eğer içinde 18 yoksa false verir
