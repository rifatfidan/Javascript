    <button onclick="kontrol()">Kontrol Et</button>
    <div id="sonuc"></div>

function kontrol(){
    var a= confirm("Onaylıyor musunuz?");
    if(a==true){
        document.getElementById("sonuc").innerHTML="Onaylandı";
    }else{
        document.getElementById("sonuc").innerHTML="Onaylamadiniz";
    }
}
