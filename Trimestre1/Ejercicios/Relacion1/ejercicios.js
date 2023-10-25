/*
// Worksheet 1

// Ejercicio 4
var num1=4;
var num2=8;
var suma=num1+num2;

document.write("El valor de la primera variable es "+num1+" y "+num2+"<br>La suma es: "+suma);
document.write("<br>");
document.write("<br>");

// Worksheet 2

// Ejercicio 3

var radio=5;
var pi=3.14;
var perimetro=radio*pi;
var area=pi*(radio*radio);

document.write("El perimetro de la circunferencia es:" + perimetro);
document.write("El area es: "+area);
document.write("<br>");
document.write("<br>");

// Ejercicio 4

var celsiusvar=43;
var fahrenheit=celsiusvar+32;
document.write(celsiusvar+"º es "+fahrenheit+"ºF")
document.write("<br>");
var fahrenheitvar=43;
var celsius=fahrenheitvar-32;
document.write(fahrenheitvar+"ºF es "+celsius+"º")
document.write("<br>");
document.write("<br>");

// Worksheet 5

// Condicionales o if
// Ejercicio 1
document.write("<h3>Ejercicio 1</h3><br>")
var numeroString= prompt("(Ejercicio 1)Introduce un número");
if (parseInt(numeroString)%2==0){
    document.write("es par");
    document.write("<br>");
}else{
    document.write("no es par");
    document.write("<br>");
}
// Ejercicio 2
document.write("<h3>Ejercicio 2</h3><br>")
var edad=prompt("(Ejercicio 2)Introduzca tu edad");
if(parseInt(edad)>=18){
    document.write("Es mayor de edad");
    document.write("<br>");
}else{
    document.write("no es mayor de edad");
    document.write("<br>");
}
// Ejercicio 3
document.write("<h3>Ejercicio 3</h3><br>")
var edadusuario=prompt("(Ejercicio3)Introduzca su edad");
var localidad=prompt("(Ejercicio3)Introduzca su localidad de nacimiento");
if(edadusuario>=25 && localidad.toUpperCase()=="MADRID"){
    document.write("Enhorabuena");
    document.write("<br>");
}else{
    document.write("No");
    document.write("<br>");
}
// Ejercicio 4
document.write("<h3>Ejercicio 4</h3><br>")
var numeroEjer4=prompt("(Ejercicio4)Introduzca un número");
if(parseInt(numeroEjer4)>100){
    let descuento=(numeroEjer4*15)/100;
    document.write(descuento+"<br>");
    
}
// Ejercicio 5 
document.write("<h3>Ejercicio 5</h3><br>")
var nombre=prompt("(Ejercicio5)Introduzca su nombre");
if (nombre=="Pablo" || nombre=="Eduardo"){
    document.write("Bienvenido")
    document.write("<br>");
}else{
    document.write("Bienvenida")
    document.write("<br>");
}
// Ejercicio 6
document.write("<h3>Ejercicio 6</h3><br>")
var localodadEjer6=prompt("(Ejercicio6)Introduzca su localidad");
var edadEjer6=prompt("(Ejercicio6)Introduzca su edad");
if(localodadEjer6==Madrid && (edadEjer6>18 && edadEjer6<32)){
    document.write("Si");
    document.write("<br>");
}

// IF o ELSE
document.write("<h2>IF o Else</h2>")
//Ejercicio 1
document.write("<h3>Ejercicio 1</h3><br>")
var nombreIFELSEEjer1=prompt("[IF o Else](Ejercicio1)Introduzca so nombre");
var apellidoIFELSEEjer1=prompt("[IF o Else](Ejercicio1)Introduzca so apellido");
if (nombreIFELSEEjer1=="Ricardo"){
    document.write(apellidoIFELSEEjer1);
    document.write("<br>");
}else{
    document.write("No es Ricardo")
    document.write("<br>");
}
// Ejercicio 2
document.write("<h3>Ejercicio 2</h3><br>")
var edadIFELSEEjer1 = prompt("[IF o Else](Ejercicio2)Introduzca su edad");
if (edadIFELSEEjer1>=67){
    document.write("Si se puede jubilar");
    
}else{
    document.write("No se puede jubilar");
    
}
document.write("<br>");
// Ejercicio 3
document.write("<h3>Ejercicio 3</h3><br>")
var edadIFELSEEjer3 =prompt("[IF o Else](Ejercicio3)Introduzca su edad");
if (edadIFELSEEjer3<=5){
    document.write("Infancia")
}else if (edadIFELSEEjer3>5 && edadIFELSEEjer3<=11){
    document.write("Primaria")
}else if (edadIFELSEEjer3>12 && edadIFELSEEjer3<=16){
    document.write("ESO")
}else if (edadIFELSEEjer3>17 && edadIFELSEEjer3<=21){
    document.write("Bachillerato o Ciclos")
}else if (edadIFELSEEjer3>21){
    document.write("Universidad")
}
document.write("<br>");
// Ejercicio 4 
document.write("<h3>Ejercicio 4</h3><br>");
var hermanos =prompt("[IF o Else](Ejercicio4)Numero de hermanos ")
if (hermanos>=3){
    document.write("15%")
}else if (hermanos==2){
    document.write("5%")
}else{
    document.write("Sin descuento")
}
document.write("<br>")
// Ejercicio 5
document.write("<h3>Ejercicio 5</h3><br>");
var examen1=parseInt(prompt("[IF o Else](Ejercicio5)Nota examen 1"))
var examen2=parseInt(prompt("[IF o Else](Ejercicio5)Nota examen 2"))
var trabajo1=parseInt(prompt("[IF o Else](Ejercicio5)Nota trabajo 1"))
var trabajo2=parseInt(prompt("[IF o Else](Ejercicio5)Nota trabajo 2"))

var mediaExamen=((examen1+examen2)/2)*0.75
var mediaTrabajos=((trabajo1+trabajo2)/2)*0.25
if (((examen1+examen2)/2)>=4.5 && ((trabajo1+trabajo2)/2)>=4.5 && (mediaExamen+mediaTrabajos)>=5){
    document.write("Aprobado")
}else{
    document.write("No aprobado")
}
document.write("<br>")
// SWITCH
// Ejercicio1
var mes=prompt("Introduzca un mes")
switch(mes){
    case "enero":
        document.write("31 dias<br>")
        break;
    case "febrero":
        document.write("28 dias<br>")
        break;
    case "marzo":
        document.write("31 dias<br>")
        break;
    case "abril":
        document.write("30 dias<br>")
        break;
    case "mayo":
        document.write("31 dias<br>")
        break;
    case "junio":
        document.write("30 dias<br>")
        break;
    case "julio":
        document.write("31 dias<br>")
        break;
    case "agosto":
        document.write("31 dias<br>")
        break;
    case "septiembre":
        document.write("30 dias<br>")
        break;
    case "octubre":
        document.write("31 dias<br>")
        break;
    case "noviembre":
        document.write("30 dias<br>")
        break;
    case "diciembre":
        document.write("31 dias<br>")
        break;
    default: 
        document.write("Usted no a introducido un mes<br>")
}
// Ejercicio 3
var num1=parseInt(prompt("Introduzca un numero"))
var num2=parseInt(prompt("Introduzca otro numero"))
var operacion=prompt("Introduzca un simbolo(+-*o/)")
switch (operacion){
    case "+":
        var suma=num1+num2;
        document.write(suma)
        break;
    case "-":
        var resta=num1-num2;
        document.write(resta)
        break;
    case "*":
        var multiplicacion=num1*num2;
        document.write(multiplicacion)
        break;
    case"/":
        var division=num1/num2;
        document.write(division)
        break;
}


// Bucles
// Ejercicio 1
for(let i=1;i<11;i++){
    document.write(i);
    document.write("<hr>");
}
// Ejercicio 2
var numero=parseInt(prompt("Introduzca un numero"))
for(let i=numero;i<=100;i++){
    document.write(i)
    document.write(" ")
}
// Ejercicio 3
do{
    var numero=parseInt(prompt("Introduzca un numero"))
}while(numero!=0)
// Ejercicio 4
do{
    var palabra=prompt("Introduzca una palabra")
    document.write(palabra)
}while(palabra!="salir")
// Ejercicio 5
var suma=0;
for(i=0;i<10;i++){
    var numero=parseInt(prompt("Introduzca un numero"))
    suma=suma+numero
}
document.write(suma)
// Ejercicio 6
var numero=parseInt(prompt("Introduzca un numero"))
for(let i=0;i<10;i++){
    var calculo=i*numero
    document.write(calculo)
    document.write("<br>")
}
// Ejercicio 7
var numero1=parseInt(prompt("Introduzca el numero a adivinar"))
var numero2=0;
do{
    if (numero2==0){
        numero2=parseInt(prompt("Introduzca un numero que no sea 0"))
    }else {
        if(numero2<numero1){
        numero2=parseInt(prompt("Introduzca un numero mayor al introducido anterirormente"))
        } else if(numero2>numero1){
            numero2=parseInt(prompt("Introduzca un numero menor al introducido anterirormente"))
        }else{
            document.write("Acertaste")
        }
    }
}while(numero2!=numero1)


// Worksheet 6
// Ejercicio 4.10
document.write("<h1>PRACTICA DE BUCLE FOR</h1>")
for (let i=1;i<7;i++){
    document.write("<h"+i+">Cabecera h"+i+"</h"+i+">")
}
// Ejercicio 4.11*/
