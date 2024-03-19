   <button onmousemove="dolas()">Üzerinde Dolaş</button>
   <div id="sonuc"></div>
     
function dolas() {
    let x = event.clientX;
    let y = event.clientY;
    var top = "X koordinatı " + x + " Y koordinatı " + y;
    document.getElementById("sonuc").innerHTML = top;
}
