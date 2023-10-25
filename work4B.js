window.onload = ()=>{
    
    const dibs =document.querySelectorAll("div");
    const h3=document.querySelector("h3");
    const empezar=document.querySelector("p");
    const facil=document.getElementById("facil");
    const dificil=document.getElementById("dificilito");
    const dibsFicil=document.getElementsByClassName("dificil");

    var dificultad=true;

    var array=colocarColoresArray();
    var correcto=colorCorrecto(array,dificultad);
    h3.innerHTML=correcto;
    for (let i = 0; i < dibs.length; i++) {
        dibs[i].style.backgroundColor=array[i];
    }

    
    empezar.addEventListener("click",()=>{
        array=colocarColoresArray();
        correcto=colorCorrecto(array,dificultad);
        h3.innerHTML=correcto;
        for (let i = 0; i < dibs.length; i++) {
            if (dificultad) {
                dibs[i].style.visibility="visible";
            }
            dibs[i].style.backgroundColor=array[i];
        }
    })
    dificil.addEventListener("click",()=>{
        dificultad=false;
        array=colocarColoresArray();
        correcto=colorCorrecto(array,dificultad);
        h3.innerHTML=correcto;
        for (let i = 0; i < dibs.length; i++) {
            dibs[i].style.backgroundColor=array[i];
            if (i>2) {
                dibs[i].style.visibility="hidden";
            }
        }
    })
    
    facil.addEventListener("click",()=>{
        dificultad=true;
        array=colocarColoresArray();
        correcto=colorCorrecto(array,dificultad);
        h3.innerHTML=correcto;
        for (let i = 0; i < dibs.length; i++) { 
            dibs[i].style.visibility="visible";          
            dibs[i].style.backgroundColor=array[i];
        }
    })

    
    for (let i = 0, salir=false; i < dibs.length && !salir; i++) {
        dibs[i].addEventListener("click",(e)=>{
            console.log(e.target.style.backgroundColor)
            if (e.target.style.backgroundColor!=correcto) {
                e.target.style.visibility="hidden";
            }else{
                salir=true;
                let num=0;
                if (!dificultad) {
                    num=3
                }
                for (let i = 0; i < dibs.length-num; i++) {
                    dibs[i].style.visibility="visible";
                    dibs[i].style.backgroundColor=correcto;
                }                
            }
        });
    }

}


function colorRandom() {
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);

    return "rgb("+r+", "+g+", "+b+")";
}

function colocarColoresArray() {
    let arrayColores= [];
   
    for (let i = 0; i < 6; i++) {
        let otroColor=colorRandom();
        if(arrayColores[i]==null){
            arrayColores[i]=otroColor;
        }
    }
    return arrayColores;
}
function colorCorrecto(arrayColores,dificultad) {
    let numRandom
    if (dificultad) {
        numRandom=Math.floor(Math.random()*6);
    }else{
        numRandom=Math.floor(Math.random()*3);
    }
    
    return arrayColores[numRandom];
}