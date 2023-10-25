/*
// 1º Función
function isOdd(x) {
    var resultado=false;
    if (x%2==1) {
        resultado=true;
    }
    return resultado;
}

//2º Función
function inRange(x,min,max) {
    var resultado=false;
    if (x<max && x>min) {
        resultado=true;
    }
    return resultado;
}

//3º Función
function getBiggestNumber(...numbers) {
    var resultado=0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]>resultado) {
            resultado=numbers[i];
        }
        
    }
    return resultado;
}

//4º Función
function getPercentage(number,percentage) {
    return (number*percentage)/100;
}

//5º Función
function getRandomColorSequence(colors,length) {
    var resultado=[];
    for (let i = 0; i < length; i++) {
        resultado.push(colors[Math.floor(Math.random()*colors.length)]);
    }
    return resultado;
}

//6º Función
function getRockPaperScissor() {
    var resultado;
    switch (Math.floor(Math.random()*3)) {
        case 0:
            resultado='Piedra';
            break;
        case 1:
            resultado='Papel';
            break;
        case 2:
            resultado='Tijeras';
            break;
        
        default:
            resultado='Error';
            break;
    }
    return resultado;
}

//7º Función
function getRockPaperScissorRandomSequence(length) {
    var resultado=[];
    for (let i = 0; i < length; i++) {
        switch (Math.floor(Math.random()*3)) {
            case 0:
                resultado[i]='Piedra';
                break;
            case 1:
                resultado[i]='Papel';
                break;
            case 2:
                resultado[i]='Tijeras';
                break;
            
            default:
                resultado[i]='Error';
                break;
        }    
    }
    return resultado;
}

//8º Función
function filterNumbersGreaterThan(numbers,filter) {
    var resultado=[];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]<filter) {
            resultado.push(numbers[i]);
        }
    }
    return resultado;
}
console.log(filterNumbersGreaterThan([3,2,6,1,4],4));

//9º Función
function getFactorial(x) {
    if (x==0) {
        return 1;
    }
    return x * factorialRecursivo(x-1);
}

//10º Función
function areArraysEqual(a,b) {
    var resultado=true;
    if (a.length==b.length) {
        for (let i = 0; i < a.length; i++) {
            if (a[i]!=b[i]) {
                resultado=false;
            }
        }
    }else{
        resultado=false;
    }
    return resultado;
}

//11º Función
function toHackerSpeak(text) {
        var dividido=text.split("");
        var resultado="";
        for (let i = 0; i < dividido.length; i++) {
            switch (dividido[i]) {
                case "a":
                    resultado+="4";
                    break;
                case "e":
                    resultado+="3";
                    break;
                case "o":
                    resultado+="0";
                    break;
                case "s":
                    resultado+="5";
                    break;
                default:
                    resultado+=dividido[i];
                    break;   
            }
        }
        return resultado;
}

//12º Función
function getFileExtension(file) {
    var resultado=file.split(".");
    return resultado[1];
}

//13º Función
function flatArray(arr) {
    var resultado=[];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            resultado.push(arr[i][j]);
        }
    }
    return resultado;
}
console.log(flatArray([[1, 5, 4], [3, 10], [2, 5]]));

//14º Función
function removeDuplicates(arr) {
    var resultado=[];
    for (let i = 0; i < arr.length; i++) {
        if (!resultado.includes(arr[i])) {
            resultado.push(arr[i]);
        }
    }
    return resultado;
}

//15º Función
function countLetter(letter,text) {
    var dividido=text.split("");
    var resultado=0;
    for (let i = 0; i < dividido.length; i++) {
        if (dividido[i]==letter) {
            resultado++;
        }
    }
    return resultado;
}

//16º Función
function canPlay(hand,face) {
    var resultado=false;
    var dividirHand;
    var dividirFace=face.split(" ");
    for (let i = 0; i < hand.length && !resultado; i++) {
        dividirHand=hand[i].split(" ");
        if (dividirFace[0]==dividirHand[0] && dividirFace[1]==dividirHand[1]) {
            resultado=true;
        }
    }
    return resultado;
}

//17º Función
function removeWords(str,words) {
    var resultado="";
    var dividido=str.split(" ");
    for (let i = 0; i < dividido.length; i++) {
        if (dividido[i]!=str) {
            resultado+=dividido[i]+" ";
        }
    }
    return resultado;
}

//18º Función
function getRange(a,b,inclusive=true) {
    var resultado=[];
    
    if (a>b) {
        if (!inclusive) {
            b++;
            a++;
        }
        for (let i = b; i < a+1; i++) {
            resultado.push(i);
        }
    }else{
        if (!inclusive) {
            b++;
            a++;
        }
        for (let i = a; i < b+1; i++) {
            resultado.push(i);
        }
    }
    return resultado;
}
*/