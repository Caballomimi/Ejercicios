window.onload=()=>{
    const submit= document.getElementById("submit")
    var botonesEditar = document.querySelectorAll(".editar");
    var botonesEliminar = document.querySelectorAll(".eliminar");
    var lista = document.getElementById("listaElementos");
    var eliminarTodo = document.getElementById("eliminarTodo");

    submit.addEventListener("click",()=>{
        var nuevoElemento = document.getElementById("nuevoElemento").value;
        if (nuevoElemento !== "") {
            
            var nuevoItem = document.createElement("li");

            var bElemento = document.createElement("b");
            bElemento.textContent = nuevoElemento;

            var botonEditar = document.createElement("button");
            botonEditar.textContent = "Editar";
            botonEditar.classList.add("editar");

            var botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.classList.add("eliminar");

            nuevoItem.appendChild(bElemento);
            nuevoItem.appendChild(botonEditar);
            nuevoItem.appendChild(botonEliminar);

            lista.appendChild(nuevoItem);
            document.getElementById("nuevoElemento").value = "";

        }
    });
    botonesEditar.forEach(element=> {
      element.addEventListener("click", (e)=>{
        var liElemento = e.target.parentNode;
        var bElemento = liElemento.firstChild; 
    
        var inputElemento = document.createElement("input");
        inputElemento.value = bElemento.textContent;
        bElemento.replaceWith(inputElemento);
    
        inputElemento.addEventListener("keyup", (e)=> {
            if (e.key === "Enter") {
                var nuevoTexto = inputElemento.value;
                if (nuevoTexto !== "") {
                    bElemento.textContent = nuevoTexto;
                    inputElemento.replaceWith(bElemento);
                }
            } 
        });

      });
    });

    botonesEliminar.forEach(element => {
      element.addEventListener("click", (e)=>{
        e.target.parentNode.remove();
      });
    });

    eliminarTodo.addEventListener("click", () => {
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
    });
    
}


