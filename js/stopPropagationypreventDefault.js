const $divs = document.querySelectorAll(".eventos-flujos div");

const $link = document.querySelector(".eventos-flujos a");

function flujoEventos(e){

    console.log(`HOLA te saluda ${this.className},el click lo origino ${e.target.className}`);
    e.stopPropagation();
}

console.log($divs);


$divs.forEach((div) => {
    //fase de burbuja
    div.addEventListener("click",flujoEventos);
    //div.addEventListener("click",flujoEventos,false);

    //fase captura
    //div.addEventListener("click",flujoEventos,true);

})

$link.addEventListener("click", e => {
    alert("hola soy juan antonio carrera");
    e.preventDefault();
    e.stopPropagation();
})