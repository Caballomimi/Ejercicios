/*
// Ejercicio 1
function suma(...array){
    var total=0;
    for(let i=0;i<array.length;i++){
        total=total+array[i];

    }
    return total;
}
console.log(suma(3,5,8,2,5,2,6,5));

// Ejercicio 2
function suma(...array){
    var total=0;
    for(let i=0;i<array.length;i++){
        if(isNaN(array[i])!= true){
            total=total+array[i];
        }
    }
    return total;
}
console.log(suma(3,5,"si",4));

// Ejercicio 3
function countTheArgs (...array){
    return array.length;

}
console.log(countTheArgs("vdsn","vdvfd","vsvsd"))

// Ejercicio 4
function combineTwoArrays(array1,array2){
    var arraytotal=[...array1,...array2];
    return arraytotal;
}
arr1=[1,2,4,5];
arr2=["vdsv","sdvsdv","vsdvsd"]

console.log(combineTwoArrays(arr1,arr2))

// Ejercicio 5
function sumEveryOther (...arraay){
    var total=0;
    for(let i=1;i<arraay.length;i=i+2){
        total=total+arraay[i];

    }
    return total;
}
console.log(sumEveryOther(1,4,6,2,3,5));

//Ejercicio 6
function onlyUniques (...array){
    var array1=[];
    var h=0;
    
    for(let i=0;i<array.length;i++){
        var salir=false;
        for(let j=0;j<array1.length && salir!=true;j++){
            if(array[i]==array1[j]){
                salir=true;
            }
        }
        if(salir==false){
            array1[h]=array[i];
            h++;
        }
        
    }
    return array1;
}
console.log(onlyUniques(1, 4, 7, 1, 2, 7, 4));
*/