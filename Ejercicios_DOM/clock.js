window.onload =()=>{
    const start=document.getElementById("start")
    const reset=document.getElementById("reset")
    const stop=document.getElementById("stop")
    const p=document.querySelector("p")
    var temporizador=null;
    var segundos=0;
    var minutos=0;
    start.addEventListener("click",()=>{
        if(temporizador==null) {
            temporizador=setInterval(()=>{
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
                
                p.innerHTML= resultado;
            },1000);   
        } 
             
    })
    stop.addEventListener("click",()=>{
        clearInterval(temporizador)
        temporizador=null;            
    })
    reset.addEventListener("click",()=>{
        segundos=0;
        minutos=0;
        p.innerHTML="00:00"
    })
    
}