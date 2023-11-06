window.onload= ()=>{
    const h3=document.querySelector("h3")
    const section=document.querySelectorAll("section")
    const dibs=document.querySelectorAll("div")
    var arrayColores=colocarColoresArray();
    arrayColores=barajarArray(arrayColores);
    var numeroVolteados=0;
    var colorPrimero=null;
    var segundos=0;
    var minutos=0;
    
    const cronometro=setInterval(()=>{
        segundos++;
        if (segundos==60) {
            minutos++;
            segundos=0;
        }
        if (minutos<10) {
            resultado="0"+minutos+":"
        }else{
            resultado=minutos+":"
        }
        if (segundos<10) {
            resultado+="0"+segundos
        }else{
            resultado+=segundos;
        }
        
        h3.innerHTML= resultado;
    },1000);
    var victoria;
    for (let i = 0; i < dibs.length; i++) {
        dibs[i].addEventListener("click",(e)=>{
            e.target.style.backgroundColor=arrayColores[i]
            if (dibs[i]!=dibs[colorPrimero] || colorPrimero==null ) {
                numeroVolteados++;
                if (numeroVolteados==2) {
                    if (dibs[colorPrimero].style.backgroundColor!=e.target.style.backgroundColor) {
                        colorSegundo=i;
                        setTimeout(()=>{
                            dibs[colorPrimero].style.backgroundColor="rgb(211, 211, 211)";
                            e.target.style.backgroundColor="rgb(211, 211, 211)";
                            numeroVolteados=0;
                        },500)                    
                    }else{
                        numeroVolteados=0;
                        setTimeout(()=>{
                            dibs[colorPrimero].style.visibility="hidden";
                            e.target.style.visibility="hidden";
                            if (!victoria) {
                                victoria=true
                                dibs.forEach(element => {
                                    if (element.style.visibility!="hidden") {
                                        victoria=false;
                                    }
                                });
                                if (victoria) {
                                    clearInterval(cronometro)
                                    setTimeout(()=>{
                                        alert("Ganaste")
                                    },1000)
                                    
                                }
                            }
                        },500)    
                        
                    }
                }else{
                    colorPrimero=i;
                }
            }
            
            
            
        })
        
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
    for (let i = 0; i < 5; i++) {
        let otroColor=colorRandom();
        if(arrayColores[i]==null){
            arrayColores[i]=otroColor;
        }
    }
    var arrayux=arrayColores;
    
    for (let i = 0; i < 5; i++) {
        arrayColores[5+i]=arrayux[i]
    }
    arrayColores=arrayux
    return arrayColores;
}

function barajarArray(array) {
    for (let i = 0; i < array.length; i++) {
        let j =Math.floor(Math.random()*i+1);
        let temp = array[i]
        array[i]=array[j]
        array[j]=temp;
    }
    return array;
}