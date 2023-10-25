/*
// Ejercicio 2
function tirarDado() {
    return Math.floor(Math.random()*(7-1)+1);
}

// Ejercicio 3
var array=[0,0,0,0,0,0];
var arraux=[];
for (let i = 0; i < 6000; i++) {
    let resultado=tirarDado();
    arraux[i]=resultado;
    switch(resultado){
        case 1:
            array[0]++;
            break;
        case 2:
            array[1]++;
            break;
        case 3:
            array[2]++;
            break;
        case 4:
            array[3]++;
            break;
        case 5:
            array[4]++;
            break;
        case 6:
            array[5]++;
            break;
    }
}

console.log(array)
console.log(arraux)
*/

// Ejercicio 6
function potenciasRecursiva(base,exp) {
    if (exp==0) {
        return 1;
    }
    return base*potenciasRecursiva(base,exp-1);
}
console.log(potenciasRecursiva(2,5));

// Ejercicio 7
function factorialRecursivo(num) {
    if (num==0) {
        return 1;
    }
    return num * factorialRecursivo(num-1);
}
console.log(factorialRecursivo(5));
