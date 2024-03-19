  <img id="kaybol" onclick="islem(event)" src="https://placehold.co/400x200">
  <div id="sonuc"></div>

function islem(event){
        x= event.detail;
        if(x==1){
        document.getElementById("kaybol").style.display="none";
        document.getElementById("sonuc").innerHTML="Buton yok oldu";
    }
}
