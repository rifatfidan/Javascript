   <button onclick="islem()">Göster</button>
   <br><br>
   <div id="sonuc"></div>

function islem(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("sonuc").innerHTML= "Width : "+ w + " ve  Height : "+h + " dir.";
}
