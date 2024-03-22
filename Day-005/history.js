<button onclick="geri()">Geri</button>
<button onclick="ileri()">İleri</button>
<button onclick="gos()">Dene</button>
  

function geri(){
    window.history.back();
}
function ileri(){
    window.history.forward();
}
function gos(){
    window.history.go(-2);//2 sayfa geri gider.
}
