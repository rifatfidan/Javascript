   <input type="search" id="sec" onselect="islem()">
   <div id="sonuc"></div>

function islem(){
   var x= document.getElementById("sec");
   document.getElementById("sonuc").innerHTML="Seçim yaptınız : "+x.value;
}
