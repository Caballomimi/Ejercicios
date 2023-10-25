/*
// Ejercicio 1
console.log(Math.random(1));
console.log(Math.random()*(200-100)+100);

var num1= prompt("Introduce un numero");
var num2= prompt("Introduce otro numero");

if(num1>num2){
    document.write(Math.random()*(num1-num2)+num2);

}else if(num2>num1){
    document.write(Math.random()*(num2-num1)+num1);

}else{
    document.write("No")
}

// Ejercicio 5
var a=prompt("__x2");
var b=prompt("__x");
var c=prompt("__");

console.log((-b+Math.sqrt((b*b)-(4*a*c)))/(2*a));
console.log(((-b)-Math.sqrt((b*b)-(4*a*c)))/(2*a));

// Ejercicio 7 
const numeros=5;
var array=[];
var contador=0;
var a;
document.write("<table border='2px solid black'><tbody><tr>")
for(let i=0;i<numeros;i++){
    a=Math.floor(Math.random() * 100);
    document.write("<td>"+a+"</td>")
    array[contador]=a;
    contador++;
}
document.write("</tr><tr>")
for(let i=0;i<numeros;i++){
    document.write("<td>"+ Math.sin(array[i]) +"</td>")
}
document.write("</tr></tbody></table>")

// Ejercicio 8
var a=Math.floor(Math.random() * 3);
switch(a){
    case 0:
        document.write("<img  src='./IMG/no.png'>")
        break;
    case 1:
        document.write("<img src='./IMG/si.png'>")
        break;
    case 2:
        document.write("<img src='./IMG/puede.png'>")
        break;
    default:
        console.log("ERROR")
        break;

}
*/