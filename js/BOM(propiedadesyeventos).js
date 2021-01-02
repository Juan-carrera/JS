

window.addEventListener("resize",(e) =>{
    console.clear();
    console.log("**Evento resize**");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});


window.addEventListener("scroll",e => {
    console.clear();
    console.log("**Evento scroll**");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});


window.addEventListener("load",e => {
    
    console.log("**Evento load**");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);

});


window.addEventListener("DOMContentLoaded",e => {
    
    console.log("**Evento DOMload**");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);

});
