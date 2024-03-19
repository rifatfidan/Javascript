 <h1>JAVASCRIPT Dersleri </h1>
    <ul id="frontend">
        <li>Html</li>
        <li>Javascript</li>
        <li>Css</li>
        <li>Jquery</li>
    </ul>

    <button onclick="islem()">Sil</button>
    <button onclick="ekle()">Ekle</button>
    <button onclick="degistir()">Değiştir</button>



function degistir(){
    var t= document.createTextNode("SASS");
    var ekles = document.getElementById("frontend").childNodes[1];
    ekles.replaceChild(t,ekles.childNodes[0]);
}
