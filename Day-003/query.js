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
    <button onclick="query()">Query Css</button>

function query(){
    document.querySelector("h1").style.backgroundColor="#336699";
    document.querySelector("h1").style.color="#FFF";
}
