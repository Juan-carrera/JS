/* 
como es que js interpreta y trabaja con los eventos


*/

const $divs = document.querySelectorAll(".eventos-flujos div");


function flujoEventos(e){

    console.log(`HOLA te saluda ${this.className},el click lo origino ${e.target.className}`);

}

console.log($divs);


$divs.forEach((div) => {
    //fase de burbuja
    //div.addEventListener("click",flujoEventos);
    //div.addEventListener("click",flujoEventos,false);

    //fase captura
    //div.addEventListener("click",flujoEventos,true);

    div.addEventListener("click",flujoEventos,{
        
        capture:false,
        once: true,
    });
})