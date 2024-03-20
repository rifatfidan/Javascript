   <input id="sec" type="text" placeholder="Bir tuşa basınız..."onkeydown="islem()">
   <div id="sonuc"></div>
   <input id="sec" type="text" placeholder="Bir tuşa basınız..."onkeydown="islem2()">
   <div id="sonuc"></div>

function islem(){
    var x=event.which;//keyCode da olur
    document.getElementById("sonuc").innerHTML= "Unicode :"+x; 
}

function islem2(){
    var x=event.key;//keyCode da olur
    document.getElementById("sonuc").innerHTML= "Unicode :"+x; 
}
