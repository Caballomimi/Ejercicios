class BookList{
    constructor(){
        this.numeroLibrosLeidos=0;
        this.numeroLibrosNoLeidos=0;
        this.libroActual=-1;
        this.libroSiguiente=0;
        this.libroAnterior=-1;
        this.arrayLibros=[];
    }

    addBook(libro){
        if(libro.leer==true){
            this.numeroLibrosLeidos++;
        }else{
            this.numeroLibrosNoLeidos++;
            
        }
        this.arrayLibros.push(libro);
        if (this.libroActual==-1) {
            this.libroActual++;
        }
    }

    finishCurrentBook(){
        this.arrayLibros[this.libroActual].leer=true;
        this.arrayLibros[this.libroActual].fecha=Date.now();
        this.numeroLibrosLeidos++;
        this.numeroLibrosNoLeidos--;
        if(this.libroSiguiente==0){
            for (let i = this.libroSiguiente; i < this.arrayLibros.length && salir; i++) {
                if (this.arrayLibros[i].leer==false) {
                    salir=false;
                    this.libroSiguiente=i;
                }
            }
            this.libroActual=this.libroSiguiente;
            for (let i = this.libroSiguiente; i < this.arrayLibros.length && salir; i++) {
                if (this.arrayLibros[i].leer==false) {
                    salir=false;
                    this.libroSiguiente=i;
                }
            }
        }else{
            this.libroAnterior=this.libroActual;
            this.libroActual=this.libroSiguiente;
            var salir=true;
            for (let i = this.libroSiguiente; i < this.arrayLibros.length && salir; i++) {
                if (this.arrayLibros[i].leer==false) {
                    salir=false;
                    this.libroSiguiente=i;
                }
            }
        }

    }

}


class Book{
    constructor (titulo,genero,autor,leer){
        this.titulo=titulo;
        this.genero=genero;
        this.autor=autor
        this.leer=leer;
        this.fecha=null;
    }
}