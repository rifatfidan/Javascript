<select  id="kurslar" onchange="islem()">
<option>Kurs Seçiniz</option>
<option>Javascript</option>
<option>Php</option>
<option>Asp</option>
<option>C#</option>
</select>
<div id="sonuc"></div>


function islem(){
    var x= document.getElementById("kurslar").value;
    document.getElementById("sonuc").innerHTML="Seçtiğiniz kurs : "+x;
}
