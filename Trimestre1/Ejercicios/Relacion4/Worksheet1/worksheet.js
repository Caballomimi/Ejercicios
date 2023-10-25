window.onload = () => {
    let moverImagen = false;

    const imagen = document.querySelectorAll("img")
    var imagenActual;
    imagen.forEach(element => {
        element.addEventListener("click", () => {
            moverImagen = !moverImagen;
            imagenActual=element;
        });
    });
    
    document.addEventListener("mousemove", (e) => {
        console.log(e.clientY + " " + e.clientX);
        if (moverImagen) {
            imagenActual.style.left = e.clientX -20+ "px";
            imagenActual.style.top = e.clientY -20+ "px";
        }
    });
}

