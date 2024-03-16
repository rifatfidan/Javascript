//fonksiyonlar
//parametresiz
function topla() {
    var a =10,b=20;
    return a+b;
}
document.write(topla());//30
document.write("<br>");
//parametreli
function toplama(s1,s2) {
    document.write(s1+s2);
}

toplama(50,70);
document.write("<br>");

function proje1(dYili) {
    var yil = new Date();
    var simdi= yil.getFullYear();
    document.write("Yaşınız : "+ (simdi - dYili));
}
proje1(1981);
document.write("<br>");

function proje2(ad,dogYil) {
    var sene = new Date();
    var busene= sene.getFullYear();
    var yas = busene - dogYil;
    var sonuc= ad+" yaşı : "+ yas;
    return sonuc;
}
//proje2("Turgay",1980);  returnsuz
var sonuc = proje2("Turgay",1978); // returnlu
document.write(sonuc);

document.write("<br>");

function carp(a,b) {
    return sonuc=a*b;
}
document.write(carp(5,6));
