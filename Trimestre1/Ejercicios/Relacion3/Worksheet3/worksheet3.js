/*
// Ejercicio 1
function numeroMasGrande(a,b) {
    if (a>b) {
        return a
    }else{
        return b;
    }
}
function cadenaMasLarga(a,b) {    
    if(a.length>b.length){
        return a;
    }else{
        return b;
    }
    
}
function encontrarNumerosPares(a) {
    var resultado=true;
    if (a%2!=0) {
        resultado=false;
    }
    return resultado;
}
function encontrarNumerosImpares(a) {
    var resultado=true;
    if (a%2==0) {
        resultado=false;
    }
    return resultado;
}
function palabraEs(a) {
    var resultado=false;
    if (/es/g.test(a)) {
        resultado=true;
    }
    return resultado;
}
function sonDivisiblesPorTres(a) {
    var resultado=false;
    if (a%3===0) {
        resultado=true
    }
    return resultado;
}
function ordenarDeMenorAMayor(a,b) {
    if (a>b) {
        return 1
    }else if(b>a){
        return -1;
    }
    return 0;
}
var arr=[1,4,2,7,3,6];
var arr1=["hola","esgilipolla","adios","si","buenas","juan","jose","jordi"]
console.log(arr.reduce(numeroMasGrande,0));
console.log(arr1.reduce(cadenaMasLarga,""));
console.log(arr.filter(encontrarNumerosPares));
console.log(arr.filter(encontrarNumerosImpares));
console.log(arr1.filter(palabraEs));
console.log(arr.filter(sonDivisiblesPorTres)); 
console.log(arr.sort(ordenarDeMenorAMayor));
console.log(arr.shift());
console.log(arr.unshift(1));

// Ejercicio 2
var nombres = arr1.filter(nombre => {if(nombre.startsWith('j')){ return true}else{return false}});
console.log(nombres.sort())
*/
// Ejercicio 3
