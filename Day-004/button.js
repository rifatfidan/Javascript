  <button onmousedown="islem()">Mouse a tıkla</button>
   <div id="sonuc"></div>

/*
buton olursa 
0  sol
1  orta
2  sağ tuş
*/

function islem(){
    document.getElementById("sonuc").innerHTML= "Tıkladığınız tuş "+ event.button;
}
