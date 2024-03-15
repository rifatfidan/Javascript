var kurslar
kurslar = new Array("Php","Javascript","C#","Python","Java");

for (i=0; i<kurslar.length;i++){
    document.write(kurslar[i]+"<br>");
}

for (key in kurslar){
    document.write(kurslar[key]+"<br>");
}
