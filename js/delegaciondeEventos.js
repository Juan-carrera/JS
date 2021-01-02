

//se evita la propagacion

/*
const $divs = document.querySelectorAll(".eventos-flujos div");

const $link = document.querySelector(".eventos-flujos a");
*/
function flujoEventos(e){

    console.log(`HOLA te saluda ${this.className},el click lo origino ${e.target.className}`);
}


document.addEventListener("click",(e) => {

    console.log("click en",e.target);


    if(e.target.matches("eventos-flujos div"))
    {
        flujoEventos(e);
    }



    if(e.target.matches(".eventos-flujos a"))
    {
        alert("hola soy juan antonio carrera");
        e.preventDefault();
    }


});

/*
$divs.forEach((div) => {
    div.addEventListener("click",flujoEventos);

})

$link.addEventListener("click", e => {
    
    e.stopPropagation();
})

*/