   <button onclick="olustur()">Session Oluştur</button>
   <button onclick="yaz()">Session Oku Yaz</button>
   <button onclick="sil()">Session Sil</button>
   <button onclick="hepsiniSil()">Bütün Sessionları Sil</button>
   <div id="sonuc"></div>


function olustur(){
    sessionStorage.setItem("ad","zubeyir");
    sessionStorage.setItem("soyad","fidan");
}
function yaz(){
    document.getElementById("sonuc").innerHTML=sessionStorage.getItem("ad") +" " + sessionStorage.getItem("soyad");
}
function sil(){
    document.getElementById("sonuc").innerHTML=sessionStorage.removeItem("ad");
    document.getElementById("sonuc").innerHTML="";
}
function hepsiniSil(){
    sessionStorage.clear();
}
