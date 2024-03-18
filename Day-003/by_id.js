<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Javascript Kursu</title>
<link rel="stylesheet" href="style.css" type="text/css">
<style>
    #renkid {
        color:brown;
        font-weight: bold;
    }
</style>
</head>
<body>
    <div id="sonuc">Deneme Yazısı</div>
    <br>
    <input id="adgir" type="text" placeholder="Ad giriniz..">
    <br><br>
    <input id="sec" type="checkbox">Seçim Yap 
    <br><br>
    <button id="islem" onclick="renklendir()">Renklendir</button>
    <button id="pholder" onclick="pholder()">Place Holder Değiştir</button>
    <button id="secim" onclick="secimYap()" ondblclick="secimBirak()">Seçim Yap/Bırak</button>

<script type="text/javascript">
  function renklendir(){
    document.getElementById("sonuc").id="renkid";
}

function pholder(){
    document.getElementById("adgir").placeholder = "İsim Giriniz";
}

function secimYap(){
    document.getElementById("sec").checked = true;
}
function secimBirak(){
    document.getElementById("sec").checked = false;
}
</script>
</body>
</html>
