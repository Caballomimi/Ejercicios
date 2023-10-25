
// PUZLE
class juego{
    constructor (dimension){
        this.dimension=dimension;
        this.tablero=[];
        this.tableroResuelto=[];
        for (let i = 0; i < dimension; i++) {
            this.tablero[i]=new Array();
            this.tableroResuelto[i]=new Array();
        }
        this.posicionNullX=dimension-1;
        this.posicionNullY=dimension-1;
        this.terminarDeBarajar=true;
        this.contadorMovimientos=0;
        this.tiempoDeInicio=Date.now();
    }
    crearTableroRelleno(){
        var contador=0;
        for (let i = 0; i < this.dimension; i++) {
            for (let j = 0; j < this.dimension; j++) {
                if (i==this.dimension-1 && j==this.dimension-1) {
                    this.tablero[i][j]=null;
                    this.tableroResuelto[i][j]=null;
                }else{
                    this.tableroResuelto[i][j]=contador;
                    this.tablero[i][j]=contador++;
                }
            }            
        }
        
        console.log("TableroResuelto");
        console.log(this.tableroResuelto);
        console.log("Tablero");
        console.log(this.tablero);
    }
    pintarTablero(){
        var inicioFin="|";
        for (let i = 0; i < this.dimension; i++) {
            if (i!=this.dimension-1) {
                inicioFin+="---"
            }else{
                inicioFin+="--"
            }
        }
        inicioFin+="|";
        console.log(inicioFin);
        for (let i = 0; i < this.dimension; i++) {
            var linea="|";
            for (let j = 0; j < this.dimension; j++) {
                if (i==this.posicionNullY && j==this.posicionNullX) {
                    linea+="  |";
                }else{
                    if (this.tablero[i][j]<10) {
                        linea+=" "+this.tablero[i][j]+"|";
                    }else{
                        linea+=this.tablero[i][j]+"|";
                    }
                    
                }
                
            }  
            console.log(linea);          
        }
        console.log(inicioFin);
    }
    movimiento(movimiento){
        var resultado=true;

        switch (movimiento) {
            case "arriba":
                if(this.posicionNullY!=0){
                    this.tablero[this.posicionNullY][this.posicionNullX]=this.tablero[this.posicionNullY-1][this.posicionNullX];
                    this.tablero[this.posicionNullY-1][this.posicionNullX]=null;
                    this.posicionNullY--;
                }else{
                    resultado=false;
                }
                break;
            case "abajo":
                if(this.posicionNullY!=this.dimension-1){
                    this.tablero[this.posicionNullY][this.posicionNullX]=this.tablero[this.posicionNullY+1][this.posicionNullX];
                    this.tablero[this.posicionNullY+1][this.posicionNullX]=null;
                    this.posicionNullY++;
                }else{
                    resultado=false;
                }
                break;
            case "izquierda":
                if(this.posicionNullX!=0){
                    this.tablero[this.posicionNullY][this.posicionNullX]=this.tablero[this.posicionNullY][this.posicionNullX-1];
                    this.tablero[this.posicionNullY][this.posicionNullX-1]=null;
                    this.posicionNullX--;
                }else{
                    resultado=false;
                }
                break;
            case "derecha":
                if(this.posicionNullX!=this.dimension-1){
                    this.tablero[this.posicionNullY][this.posicionNullX]=this.tablero[this.posicionNullY][this.posicionNullX+1];
                    this.tablero[this.posicionNullY][this.posicionNullX+1]=null;
                    this.posicionNullX++;
                }else{
                    resultado=false;
                }
                break;
            default:
                console.log("Ese movimiento no existe");
                resultado=false;
                break;
        }
        if(resultado && !this.terminarDeBarajar){
            this.contadorMovimientos++;
        }
        var ganado= puzle.eGanado();
        if (ganado && !this.terminarDeBarajar) {
            console.log("Has ganado");
            this.terminarDeBarajar=true;
            console.log("Numero de movimientos: "+this.contadorMovimientos)
            console.log(Math.round((Date.now()-this.tiempoDeInicio)/ (1000)))
        }
        if (!resultado) {
            console.log("No se puede realizar ese movimiento.")
        }
        return resultado;
    }

    barajar(){
        var numAleatorio;
        for (let i = 0; i < 5; i++) {
            numAleatorio=Math.floor(Math.random()*3);
            switch (numAleatorio){
                case 0:
                    this.movimiento("arriba");
                    break;
                case 1:
                    this.movimiento("abajo");
                    break;
                case 2:
                    this.movimiento("izquierda");
                    break;
                case 3:
                    this.movimiento("derecha");
                    break;
                default:
                    console.log("A habido un error a la hora de barajar")
                    break;
                }            
        }
        this.terminarDeBarajar=false;
    }

    eGanado(){
        var resultado=true;
        for (let i = 0; i < this.dimension && resultado; i++) {
            for (let j = 0; j < this.dimension && resultado; j++) {
                if (this.tablero[i][j]!=this.tableroResuelto[i][j]) {
                    resultado=false;
                }
            }
        }
        return resultado;
    }

}
/*
const puzle=new juego(5);
puzle.crearTableroRelleno();
puzle.pintarTablero();
puzle.barajar();
puzle.pintarTablero();
*/

// TRES EN RAYA

class TresEnRaya{
    constructor(){
        this.tablero=new Array();
        for (let i = 0; i < 3; i++) {
            this.tablero[i]=new Array();
        }
        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.tablero[i][j]=" ";
            }
            
        }
        this.fichaTurnoSiguiente="X"
        this.turno=0;
        this.turnosMaximos=9;
    }
    imprimirTablero(){
        var inicioFin="|";
        for (let i = 0; i < 3; i++) {
            inicioFin+="--";
        }
        inicioFin+="|";
        console.log(inicioFin);
        for (let i = 0; i < 3; i++) {
            var linea="|";
            for (let j = 0; j < 3; j++) {
                linea+=this.tablero[i][j]+"|";
            }
            console.log(linea);
        }
        console.log(inicioFin);
    }
    jugar(X,Y){
        this.turno++;
        if (this.turno<=9) {
            if (this.turno%2==0) {
                this.fichaTurnoSiguiente="X";
                this.introducirFichaTablero(this.fichaTurnoSiguiente,X,Y);
            }else{
                this.fichaTurnoSiguiente="O";
                this.introducirFichaTablero(this.fichaTurnoSiguiente,X,Y);
            }
            if (this.turno==9) {
                console.log("Empate");
            }
        }

    }
    introducirFichaTablero(ficha,X,Y){
        this.tablero[Y][X]=ficha;
    }

}
var raya=new TresEnRaya();
raya.imprimirTablero();