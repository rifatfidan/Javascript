document.write("Merhaba Dünya<br>");
alert("Bu bir uyarı mesajıdır.");

var say1=prompt("Bir sayı girin : ");
var say2=prompt("Bir sayı girin : ");
toplam = parseInt(say1)+parseInt(say2); //parseInt ile integer yapıyoruz.
document.getElementById("sonuc").innerHTML=toplam;;
//ya da 
document.getElementsByTagName("p")[0].innerHTML=toplam;
