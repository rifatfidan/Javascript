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
    <p>Php</p>
    <p>Javascript</p>
    <p>JQuery</p>

    <ul>
        <li>Samsun</li>
        <li>Ankara</li>
        <li>İstanbul</li>
        <li>Bursa</li>
    </ul>
    <button id="diller" onclick="tagBul()">TagBul</button>
    <button onclick="sayLi()">Li leri say</button>
<script>
  
function tagBul(){
    //var a=document.getElementsByTagName(("p")[0]);
    //document.write(document.getElementsByTagName(("p")[0]));
    console.log(document.getElementsByTagName("p")[0]);
    console.log(document.getElementsByTagName("p")[1]);
    console.log(document.getElementsByTagName("p")[2]);
}

function sayLi(){
    document.write(document.getElementsByTagName("li").length + " adet li elemanı vardır");
}

</script>
</body>
</html>
