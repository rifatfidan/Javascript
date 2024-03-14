//try catch
var a=10;
try {
    document.write(a+b);//sadece a ise hata vermez.
} catch (err) {
    document.write("Hata verdi : "+err);
    //Hata verdi : ReferenceError: b is not defined
}

//throw özelleştirilmiş hata oluşturmaya yarar
var c=20;
var d=30;
try {
    if(c<d){
        throw "buyuk";
    }
    if(c==d){
        throw "esit";
    }
    
} catch (err) {
    document.write("<br><br>"+ err+"<br>");
    if(err=="buyuk"){
        document.write("d sayısı c den büyük<br>");
    }
    if(err=="esit"){
        document.write("c ve d eşit sayılar");
    }
    
}

//try catch finally hata oluşsa bile çalışabilecek kodları gösterir.
var e=50;
//var f=100;
try {
    document.write(e+f);
} catch (err) {
    document.write("<br>"+err);
} finally{
    document.write("<br>Hata olsa olmasada çalışan alan");
}
