<p id="sonuc">Merhaba Javscript</p>
<button id="butonAd" onclick="butonAd()">Buton</button>


var a = document.getElementById("sonuc").innerHTML;
//document.write(a);

function butonAd(){
    document.getElementById("butonAd").innerHTML=a;
}
