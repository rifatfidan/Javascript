   <input id="sec" type="text" placeholder="Adınız..." onblur="adKontrol()">
   <input id="sec" type="text" placeholder="Soyadınız...">
   <br><br>
   <div id="sonuc"></div>


function adKontrol(){
    var x= document.getElementById("sec").value;
    var say= x.length;
    if(say<6){
        document.getElementById("sonuc").innerHTML="Adınız 6 karakterden az olamaz : "+say+" karaktersiniz.";
    }
}
