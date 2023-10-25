window.onload = () => {
    const formulario= document.querySelector("button")
    var resultados;
    formulario.addEventListener("click",()=>{
        function obtenerDatos(){
            nombre= document.getElementById("nombre_libro")
            genero= document.getElementById("genero")
            edad= document.getElementById("edad")
            leer= document.getElementById("leer")

            var r = [nombre,genero,edad,leer];
            return r;
        }
        resultados = obtenerDatos();
        console.log(resultados);
    })
}