   <input type="search" id="sec" onsearch="islem()">
   <div id="sonuc"></div>

function islem(){
   var x= document.getElementById("sec");
   document.getElementById("sonuc").innerHTML="Aranan Kelime : "+x.value;
}
