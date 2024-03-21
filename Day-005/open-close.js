   <button onclick="islem()">Yeni Pencere</button>
   <button onclick="kapat()">Kapat</button>
   <br><br>
   <div id="sonuc"></div>



var yeniPencere; 


function islem(){
    yeniPencere = window.open("","yeniPencere","width=300,height=400");
    yeniPencere.document.write("<h1>Deneme 1 2 3</h1>");
}
function kapat(){
    if(yeniPencere && !yeniPencere.closed){
        yeniPencere.close();
        document.getElementById("sonuc").innerHTML="Pencere kapatıldı";
    }
    else {
        document.getElementById("sonuc").innerHTML="Pencere zaten kapalı";
    }
}
