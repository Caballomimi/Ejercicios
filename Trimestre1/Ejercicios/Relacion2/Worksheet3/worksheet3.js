/*
// Ejercicio 1

function invierteCadena(cad_arg){
    var array = cad_arg.split("");
    var texto="";
    for(let i=array.length-1;i>=0;i--){
        texto+=array[i];
    }
    // cad_arg.split("").reverse().join();
    return texto;
}
console.log(invierteCadena("hola"));

function inviertePalabra(cad_arg){
    var array=cad_arg.split(" ");
    var texto="";
    for(let i=array.length-1;i>=0;i--){
        texto=texto+" "+array[i];
    }
    return texto;
}
console.log(inviertePalabra("hola muy buenas"));

function encuentraPalabraMasLarga(cad_arg){
    var array=cad_arg.split(" ");
    var contador=0;
    for(let i=array.length-1;i>=0;i--){
        var aux=array+contador;
        var aux=
    }
    return texto;
}

// Ejercicio 2

// Ejercicio 4
function vocales(cadena){
    var array=cadena.split("");
    var cont1=0;
    var cont2=0;
    var array1=[];
    var array2=[];
    var texto1="";
    var texto2="";
    for(let i=0;i<array.length;i++){
        switch(array[i]){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                array1[cont1]=array[i];
                cont1++;
                break;
            default:
                if(array[i]!=" "){
                    array2[cont2]=array[i];
                    cont2++;
                }
                break;
        }  
    }
    for (let i = 0; i < array1.length; i++) {
        texto1 += array1[i];
    }
    for (let i = 0; i < array2.length; i++) {
        texto2 += array2[i];
    }
    return texto1+texto2;
}
console.log(vocales("Hola buenas tardes"))

//Ejercicio 5
function eliminarRepetidos(cadena){
    cadena=cadena.toLowerCase();
    var array=cadena.split("");
    var arrayaux=[];
    var contador=0;
    var texto="";
    
    for (let i = 0; i < array.length; i++) {
        var salir=false;
        for (let j = 0; j < arrayaux.length && salir==false; j++) {
            if(array[i]==arrayaux[j]){
                salir=true;
            }
        }
        if(salir==false){
            arrayaux[contador]=array[i];
            texto+=arrayaux[contador];
            contador++;
        }
        
    }
    return texto;

}

console.log(eliminarRepetidos("HHola buenas tardes"))

// Ejercicio 6

function esSubCadena(cadena1,cadena2){
    var array1=cadena1.split(" ");
    var array2=cadena2.split(" ");
    var salir=false;
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length && salir==false; j++) {
            if (array1[i]==array2[j]) {
                salir=true;
            }
        }
    }
    return salir;
}
console.log(esSubCadena("Hola buenas tardes","buenas adios"))

// Ejercicio 7



function palindromo(cadena){
    var array=cadena.split("");
    var salir=true;
    for (let i = 0; i < array.length && salir==true; i++) {
        if (array[i]!=array[array.length-(i+1)]) {
            salir=false
        }
    }
    return salir;
}
console.log(palindromo("holaaloh"))

// Ejercicio 8

function numeroPalabras(cadena){
    var array=cadena.split(" ");
    var arrayaux=[];
    var contador=0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]!="") {
            arrayaux[contador++]=array[i];
        }
    }
    return arrayaux.length;
}
console.log(numeroPalabras("hola muy buenas"))

// Ejercicio 9
var cadena="HOLA"
var array=cadena.split("")
document.write("<table border='2px solid black' width='100px'height='100px'><tbody>")
for (let i = 0; i < array.length; i++) {
    document.write("<tr>")
    if(i==0){
        for (let j = 0; j < array.length; j++) {
            document.write("<td>"+array[j]+"</td>")
        }
    }else if (i==array.length-1) {
        for (let j = array.length-1; j >=0; j--) {
            document.write("<td>"+array[j]+"</td>")
        }
    }else{
        for (let j = 0; j < array.length; j++) {
            if (j==0) {
                document.write("<td>"+array[i]+"</td>")
            } else if (j==array.length-1) {
                document.write("<td>"+array[array.length-(i+1)]+"</td>")
            } else{
                document.write("<td></td>");
            }
        }
    }
    document.write("</tr>")
    
}

document.write("</tbody></table>")
*/