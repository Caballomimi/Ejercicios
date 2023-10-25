/*
// Ejercicio 1
var ano =new Date().getFullYear();
var mes= new Date().getMonth();
var dia= new Date().getDate();
var hora= new Date().getHours();
var minuto= new Date().getMinutes();
var segundo= new Date().getSeconds();
document.write("<h2>Año: "+ ano+"</h2>");
document.write("<h2>Mes: "+ mes+"</h2>");
document.write("<h2>Dia: "+ dia+"</h2>");
document.write("<h2>Hora: "+ hora+"</h2>");
document.write("<h2>Minuto: "+ minuto+"</h2>");
document.write("<h2>Segundos: "+ segundo+"</h2>");

// Ejercicio 2
var fechahoy= new Date(Date.now());
console.log(fechahoy);

var fechahoy85= new Date();
fechahoy85.setDate(fechahoy.getDate()+85);
console.log(fechahoy85)

var fechahoy187= new Date();
fechahoy187.setDate(fechahoy.getDate()-187);

fechahoy85.getFullYear(fechahoy.getFullYear()+2)
console.log(fechahoy85)

fechahoy187.setHours(fechahoy.getHours()+24)
console.log(fechahoy187)

console.log("puto")
var fechaResto= fechahoy85-fechahoy187;
console.log(Date(fechaResto))

// Ejercicio 3
var temporizador= setInterval(reloj,1000);
var contador=60;
temporizador();
function reloj(){
    document.getElementById("contador").innerHTML = contador;
    contador--;
    if(contador==-1){
        clearInterval(temporizador);
    }
}

// Ejercicio 5

var temporizador= setInterval(reloj,1000);
temporizador();
function reloj(){
    
    var fechaActual= new Date(Date.now());
    var hora= fechaActual.getHours();
    var minuto=fechaActual.getMinutes();
    var segundos=fechaActual.getSeconds();
    document.getElementById("contador").innerHTML = hora+" : "+minuto+" : "+segundos;
}
*/