class Note{
    constructor(titulo, texto){
        this.titulo=titulo;
        this.texto=texto;
        this.fecha=obtenerFechaHora();
        this.id=null;
        this.posicionX=0;
        this.posicionY=0;

    }


    getTitulo(){
        return this.titulo
    }
    setTitulo(titulo){
        this.titulo=titulo;
    }
    getFecha(){
        return this.fecha;
    }
    setFecha(fecha){
        this.fecha=fecha;
    }
    getTexto(){
        return this.texto
    }
    setTexto(texto){
        this.texto=texto;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id=id;
    }
    getPosicionX(){
        return this.posicionX;
    }
    setPosicionX(posicionX){
        this.posicionX=posicionX;
    }
    getPosicionY(){
        return this.posicionY;
    }
    setPosicionY(posicionY){
        this.posicionY=posicionY;
    }

}
class arrayNotas{
    constructor(){
        this.numeroDeNotas=0;
        this.array=[];
    }
    getArray(){
        return this.array;
    }
    setArray(array){
        this.array=array;
    }
    getNumeroDeNotas(){
        return this.numeroDeNotas;
    }
    setNumeroDeNotas(numeroDeNotas){
        this.numeroDeNotas=numeroDeNotas;
    }
    cargar(){
        for (let i = 0; i < this.array.length; i++) {
            console.log(this.array[i].titulo)
            console.log(this.array)
            
            nuevoElemento =new Note(this.array[i].titulo,this.array[i].texto);
            nuevoElemento.setFecha(this.array[i].fecha);
            nuevoElemento.setId(this.numeroDeNotas++)
            nuevoElemento.setPosicionX(this.array[i].posicionX)
            nuevoElemento.setPosicionY(this.array[i].posicionY)
            this.array[i]=nuevoElemento;
        }
    }
    eliminarNota(nota){
        this.array.splice(nota.getId(),1)
        for (let i = nota.getId(); i < this.array.length; i++) {
            this.array[i].setId(i);
        }
        this.numeroDeNotas--;
    }
    añadirNota(nuevaNota){
        
        this.array.push(nuevaNota);

        nuevaNota.setId(this.numeroDeNotas++)
    }
    editarNota(nota){
        this.array[nota.getId()]=nota;
    }
}