var programlama = {k1:"Php",k2:"Javascript",k3:"Jquery",k4:"Css"}
var gunler=Array("pazartesi","salı","çarşamba","perşembe","cuma");
for (sabit in programlama) {
       document.write(programlama[sabit] + "<br>");
    }

for (key in gunler){
    document.write(gunler[key]+"<br>");
}
