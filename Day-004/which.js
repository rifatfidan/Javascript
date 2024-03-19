  <button onmousedown="islem()">Mouse a tıkla</button>
   <div id="sonuc"></div>


/*
which klavye tuslarını yakalamaya yarar.
1 dönerse mouse sol
2 dönerse orta
3 dönerse sağ olur
*/

function islem(){
    document.getElementById("sonuc").innerHTML= "Tıkladığınız tuş "+ event.which;
}
