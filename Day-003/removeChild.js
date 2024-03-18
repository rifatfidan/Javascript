    <ul id="frontend">
        <li>Html</li>
        <li>Javascript</li>
        <li>Css</li>
        <li>Jquery</li>
    </ul>

    <button onclick="islem()">Sil</button>

function islem(){
var list = document.getElementById("frontend");
list.removeChild(list.childNodes[0]);//0. indexi siler.
}
