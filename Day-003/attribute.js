<a id="sonuc">Javascript Dünyasına Hoşgeldiniz</a>
<br>
<button onclick="islem()">Attribute Ekle</button>
<button onclick="targetEkle()">Target Ekle</button>

//attribute ile etiketlere eklemeler yaparız
function islem(){
    document.getElementById("sonuc").setAttribute("href","https://www.orlonmedia.com");
    var a= document.getElementById("sonuc").attributes;
    console.log(a);
}
function targetEkle(){
    document.getElementById("sonuc").setAttribute("target","_blank");//attribute target ekledik
    var b = document.getElementById("sonuc");
    console.log(b);
    console.log(b.hasAttribute("target"));//attribute de target var mı?
    //mesela if ile bu özellik yoksa ekletebiliriz.
    if(!b.hasAttribute("target")){
        console.log("Target Ekleyelim ");
        document.getElementById("sonuc").setAttribute("target","_blank");//attribute target ekledik
    }else
    console.log("Zaten Ekli");
    
}
