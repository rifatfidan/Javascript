<input onfocus="islem(this)" onfocusout="islem2(this)" type="text" id="sec" placeholder="Bir tuşa basınız...">
<div id="sonuc"></div>


function islem(x){
    x.style.background="yellowgreen";
    x.style.color="white";
}

function islem2(y){
    y.style.background="blue";
    y.style.color="black";
    y.value=y.value.toUpperCase();
}
