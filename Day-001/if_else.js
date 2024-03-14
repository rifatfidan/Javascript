//if koşulu

var a=10;
var b = 20;

if (a==b) {
    console.log("a ve b eşit");
} else if (a>b){
    console.log("a  b den büyük");
}else if (a<b){
    console.log("a  b den küçük");
}else{
    console.log("Bu işde başka bir iş var :))");
}

var kAdi="admin";
var kSifre="123456";

var girisad="admin";
var girisSifre="12345678";

if (kAdi==girisad && kSifre==girisSifre) {
    console.log("Başarı ile giriş yaptınız");
} else {
    console.log("Şifre ya da parola hatalı tekrar deneyiniz.");
    
}


var sayi1=10;
var sayi2=20;
var sayi3=30;
if (sayi1>sayi2 && sayi1>sayi3) {
    console.log("En büyük sayı : "+sayi1 );
} else if (sayi2>sayi1 && sayi2>sayi3) {
    console.log("En büyük sayı : "+sayi2 );
}
else{
    console.log("En büyük sayı : "+sayi3);
}
