   <input id="sec" type="text" placeholder="Bir tuşa basınız..."onkeydown="islem()">
   <div id="sonuc"></div>

function islem(){
    var x=document.getElementById("sonuc");
    if(event.altKey){
        x.innerHTML="ALT tuşuna basıldı";
    }else if(event.shiftKey){
        x.innerHTML="SHIFT tuşuna basıldı";
    }else if(event.ctrlKey){
        x.innerHTML="CTRL tuşuna basıldı";
    }
}
