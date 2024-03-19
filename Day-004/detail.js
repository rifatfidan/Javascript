  <button onclick="islem()">Tıklasana</button>
  <div id="sonuc"></div>

//detail mouse ile kac defa tıkladı
function islem(){
    document.getElementById("sonuc").innerHTML= "Tıkladığınız tuş sayısı "+ event.detail;
}
