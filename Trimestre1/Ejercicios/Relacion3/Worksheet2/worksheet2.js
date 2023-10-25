
// Ejercicio 4
function estudianteAleatorio(estudiantes) {
    var indice=Math.floor(Math.random()*estudiantes.length)
    return estudiantes[indice];
}
// Ejercicio 7
function funcionDiezACero() {
    var arr=[];
    for (let i = 0; i < 10; i++) {
        arr[i]=0;
    }
    return arr;
}
// Ejercicio 9

/*
// Ejercicio 5
function paresImpares() {
    var numeros = [];
    for (let i = 0; i < 100; i++) {
        numeros.push(Math.floor(Math.random() * 1000) + 1);
    }

    console.log("Contenido Original:");
    console.log(numeros);

    var pares = numeros.filter(num => num % 2 === 0);
    var impares = numeros.filter(num => num % 2 !== 0);

    var organizados = pares.concat(impares);

    console.log("\nContenido Organizado:");
    console.log(organizados);
    return organizados;
}

paresImpares();
*/