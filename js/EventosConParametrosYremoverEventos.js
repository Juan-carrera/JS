
function saludar (nombre ="desconocido"){
    alert(`hola ${nombre}`);
    console.log(event);
}


const $eventoMultiple = document.getElementById("evento-multiple");

//$eventoMultiple.addEventListener("click",HolaMundo);

$eventoMultiple.addEventListener("click",(e) =>{
    alert("manejador de eventos multiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});


$eventoMultiple.addEventListener("click",() => {
    
    saludar();
    saludar("juan antonio carrera");

});










//eliminar eventos

const $removerEventos = document.getElementById("evento-remover");



const removerdoble = (e) => {

    alert(`removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $removerEventos.removeEventListener("dblclick",removerdoble);

    $removerEventos.disabled = true;
}


$removerEventos.addEventListener("dblclick",removerdoble);

