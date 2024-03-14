/*
Mantıksal Operatörler
&& => ve => şartlardan ikiside gerçekleşmiş olmalı
=> ALT Tuşuna Basılı tutarken 124 tuşlayın.
|| => şartlardan biri gerçekleşmiş olmalı
*/
var a=10;
var b=20;
var c=30;
var d=40;

if (a<b && c<d) {
console.log("Doğru");
}
if (a<b || d<c) {
console.log("Biri eşleşmiyor");
}
