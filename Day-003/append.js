 <h1>JAVASCRIPT Dersleri </h1>
    <ul id="frontend">
        <li>Html</li>
        <li>Javascript</li>
        <li>Css</li>
        <li>Jquery</li>
    </ul>

    <button onclick="islem()">Sil</button>
    <button onclick="ekle()">Ekle</button>


function ekle(){
    var e = document.createElement("li");
    var x = document.createTextNode("Wordpress");
    e.appendChild(x);
    document.getElementById("frontend").appendChild(e);
}
