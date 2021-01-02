//window.alert();
//window.confirm();
//window.prompt();


const $abrirVentana = 
document.getElementById("abrir-ventana");


const $cerrarVentana = 
document.getElementById("cerrar-ventana");


const $imprimirVentana = 
document.getElementById("imprimir-ventana");

let ventana;

$abrirVentana.addEventListener("click",e => {
 
 ventana = window.open("https://youtube.com");
});

$cerrarVentana.addEventListener("click",e => {
ventana.close();
});

$imprimirVentana.addEventListener("click",e => {

    window.print();

});