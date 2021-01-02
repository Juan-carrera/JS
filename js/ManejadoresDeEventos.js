//controlar acciones del usuario
//interaccion
//definir comportamientos del documento que secuden en cierto momento o cuando se cumplan ciertas condiciones

//https://developer.mozilla.org/es/docs/Web/Events
// 3 maneras de definir eventos en js

function HolaMundo(){
    alert("hola mundo");
    console.log(event);
}

///////////////////
const $butonSemantico = document.getElementById("evento-semantico");

$butonSemantico.onclick = HolaMundo;

$butonSemantico.onclick = function (e){

    alert("hola mundo manejador de eventos semantico");

    console.log(e);
    console.log(event);
};


////////////////
const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click",HolaMundo);

$eventoMultiple.addEventListener("click",(e) =>{
    alert("manejador de eventos multiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});