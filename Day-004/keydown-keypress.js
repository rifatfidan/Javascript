  <input onkeydown="islem()" type="text" placeholder="Bir tuşa basınız">
   <br><br>
   <textarea name="" id="metinalani" cols="30" rows="10" onkeypress="islem()"></textarea>
   <div id="sonuc"></div>

i=0;
function islem(){
    i+=1;
    document.getElementById("sonuc").innerHTML=i;
    if(i==160){
        document.getElementById("sonuc").innerHTML="160 karakter oldunuz";
        document.getElementById("metinalani").disabled=true;
    }
    }
