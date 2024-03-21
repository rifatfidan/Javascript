<input oninput="islem()" type="text" id="sec" placeholder="Bir tuşa basınız...">
<div id="sonuc"></div>

function islem(){
    var x = document.getElementById("sec").value;
    document.getElementById("sonuc").innerHTML="Yazdıklarınız : " + x;
}
