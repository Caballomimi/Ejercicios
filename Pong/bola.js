window.onload=()=>{
    const bola=document.getElementById("bola");
    const rect1=document.getElementById("rect1");
    const rect2=document.getElementById("rect2");
    const svg=document.querySelector("svg");
    const body=document.querySelector("body")
    const h4=document.querySelector("h4");

    const ancho_rect=25;
    const alto_rect=100;

    const Xrect1=parseInt(rect1.getAttribute("x"))
    const Xrect2=parseInt(rect2.getAttribute("x"))
    var Yrect1=parseInt(rect1.getAttribute("y"))
    var Yrect2=parseInt(rect2.getAttribute("y"))
    
    var r=parseInt(bola.getAttribute("r"))
    var cx=parseInt(bola.getAttribute("cx"));
    var cy=parseInt(bola.getAttribute("cy"));
    const ancho=parseInt(svg.getAttribute("width"))-75;
    const alto=parseInt(svg.getAttribute("height"));

    var puntos=[];
    var velocidad=15;
    var velocidadRect=10;
    
    var direccionX=direccionRandom();
    var direccionY=direccionRandom;
    var direccionRect1=true;
    var direccionRect2=true;
    var puntos1=0;
    var puntos2=0;

    body.addEventListener("keydown",(e)=>{
        if (e.key==="w" || e.key==="W") {direccionRect1=false;}
        if (e.key==="S" || e.key==="s") {direccionRect1=true;}
        if(e.key==="ArrowUp"){direccionRect2=false}
        if(e.key==="ArrowDown"){direccionRect2=true}
    });
    
    rectangulos=setInterval(()=>{
        actualizarRect(Yrect1,rect1,alto,direccionRect1);
        if ((Yrect1<=alto-120 && direccionRect1) || (Yrect1>20 && !direccionRect1)) {
            if (direccionRect1) {Yrect1+=velocidadRect;}else{Yrect1-=velocidadRect;}
        }
        actualizarRect(Yrect2,rect2,alto,direccionRect2);
        if ((Yrect2<=alto-120 && direccionRect2) || (Yrect2>20 && !direccionRect2)) {
            if (direccionRect2) {Yrect2+=velocidadRect;}else{Yrect2-=velocidadRect;}
        }
        direccionX=comprobarRectangulo(Yrect1,Yrect2,Xrect1,Xrect2,ancho_rect,alto_rect,direccionX,puntos);
    },50)

    velocidades=setInterval(()=>{
        velocidad+=1
        velocidadRect+=1
    },1000)

    
    circunferencia=setInterval(()=>{
        direccion=comprobarPared(direccionX,direccionY,alto,ancho,puntos);
        direccionX=direccion[0];
        direccionY=direccion[1];
        if (direccion[3]) {
            puntos1++;
        }
        if (direccion[4]) {
            puntos2++;
        }
        if (!direccion[2]) {
            h4.innerHTML=puntos1+" - "+puntos2 ;  
            cx=650;
            cy=200;
            direccionX=direccionRandom()[0]
            direccionX=direccionRandom()[1]
            velocidad=15
            velocidadRect=10
        }
        if (direccionX) {cx+=velocidad;}else{cx-=velocidad;}
        if (direccionY) {cy+=velocidad;}else{cy-=velocidad;}
        puntos=actualizarBola(cx,cy,bola,r);
    },100);
}

function comprobarPared(direccionX,direccionY,alto,ancho,puntos) {
    terminar=true;
    puntos1=false;
    puntos2=false;
    for (let i = 0; i < puntos.length; i++) {
        if (puntos[i][0]<=0) {
            direccionX=true
            terminar=false;
            puntos1=true;
        }else if(puntos[i][0]>=ancho){
            direccionX=false
            terminar=false;
            puntos2=true;
        }
        if (puntos[i][1]<=5) {
            direccionY=true
        }else if(puntos[i][1]>=alto-5){
            direccionY=false
        }
    }
    return [direccionX,direccionY,terminar,puntos1,puntos2]
}
function comprobarRectangulo(Yrect1,Yrect2,Xrect1,Xrect2,ancho_rect,alto_rect, direccionX,puntos) {
    for (let i = 0; i < puntos.length; i++) {
        if ((puntos[i][0]>Xrect2-5 && puntos[i][0]<Xrect2+ancho_rect+5) || (puntos[i][0]<Xrect1+ancho_rect+5 && puntos[i][0]>Xrect1-5)) {
            if ((puntos[i][1]<Yrect1+alto_rect && puntos[i][1]>Yrect1+5) || (puntos[i][1]<Yrect2+alto_rect && puntos[i][1]>Yrect2+5) ) {
                if (puntos[i][0]<600) {
                    direccionX=true    
                }else{
                    direccionX=false;    
                }
            }
        }
    }
    return direccionX;
}
function actualizarBola(cx,cy,bola,r) {
    puntos=[
        [cx,cy-r],// arriba
        [cx+r,cy-r],// arriba derecha
        [cx+r,cy],// derecha
        [cx-r,cy+r],// abajo derecha
        [cx,cy+r],// abajo
        [cx-r,cy+r],// abajo izquierda
        [cx-r,cy],// izquierda
        [cx-r,cy-r]// arriba izquierda
    ]
    bola.setAttribute("cx",cx)
    bola.setAttribute("cy",cy)
    return puntos;
}
function actualizarRect(Yrect,rect) {
    rect.setAttribute("y",Yrect)
}
function direccionRandom() {
    numero=Math.floor(Math.random() * 2)

    if (numero==1) {direccion=true}else{direccion=false}

    return [direccion]
}