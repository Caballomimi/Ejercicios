window.onload= ()=>{
    const dibs=  document.querySelectorAll("div");
    const respuestaCorrecta="NEGRO";
    const section=document.querySelectorAll("section")
    var numeroLetras= respuestaCorrecta.split("")
    for (let i = 0; i < numeroLetras.length; i++) {
        nuevo=document.createElement("article")
        section[1].appendChild(nuevo);
        console.log(numeroLetras[i])
    }
    const articles=document.querySelectorAll("article");
    const h4=document.querySelector("h4")
    const p=document.querySelector("p")
    var salir=false;
    var vidas=10;
    dibs.forEach(element => {
        element.addEventListener("click",(e)=>{
            for (let i = 0; i < numeroLetras.length; i++) {
                if (e.target.innerHTML.toUpperCase()==numeroLetras[i]) {
                    articles[i].innerHTML=e.target.innerHTML.toUpperCase();
                    salir=true;
                }                
            }
            if (!salir && vidas!=0) {
                vidas--;
                salir=false;
                h4.innerHTML="You have "+vidas+" lives"
            }else if (vidas==0) {
                p.innerHTML="DERROTA"
            }
        })
    });
}