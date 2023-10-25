window.onload = ()=>{

    const holas=document.querySelectorAll("td");
    const btn=document.querySelector("body");
    btn.addEventListener("click",primero);
    btn.addEventListener("mousemove",segundo);
    holas.forEach(function(hola) {
        hola.addEventListener('mouseover', cuarto);
    });
    
}

function cuarto(e) {
    if (e.ctrlKey==true) {
        e.target.style.backgroundColor ="red";
    } else if (e.shiftKey) {
        e.target.style.backgroundColor ="blue";
    }else{
        e.target.style.backgroundColor ="white";
    }
}
function primero(e) {
    alert('Ejercicio 1')
}
function segundo(e) {
    console.log(e.clientY+" "+e.clientX);
}
