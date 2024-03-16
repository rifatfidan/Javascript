//recursive fonksiyon
var i=0;
function tekrarla(parametre) {
    if(i<parametre){
        i++;
        document.write(i+"<br>");
        tekrarla(parametre);
    }
}
tekrarla(5);
document.write("<br>");



var i=0;
toplam=0;
function tekraret(parametre) {
    if(i<parametre){
        i++;
        toplam+=i;
        tekraret(parametre);
        }
}
tekraret(5);
document.write(toplam +"<br>");
