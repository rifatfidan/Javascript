    <h1 onclick="icerikDegistir(this)">JAVASCRIPT Dersleri </h1>
  
    <button onclick="tarihSaat()">Tarih ve Saati Göster</button>
    
    <p id="tarihsaat"></p>
    <b id="sonuc">Sonuç</b><br>

    <input id="sayi1" type="text" placeholder="1. sayı ..."><br>
    <input id="sayi2" type="text" placeholder="2. sayı ..."><br>
    <button id="hesap" onclick="hesapla()">Hesapla</button>

function icerikDegistir(icerik){
    icerik.innerHTML = "Jquery Derslerine Hoşgeldiniz";
}

function tarihSaat(){
    document.getElementById("tarihsaat").innerHTML=Date();
}

function hesapla(){
    var sayi1 = parseInt(document.getElementById("sayi1").value); 
    var sayi2 = parseInt(document.getElementById("sayi2").value); 
    var sonuc= sayi1+sayi2;
    document.getElementById("sonuc").innerHTML=sonuc;
}
