//atributos-etiquetas html

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));


console.log(document.querySelector(".link-dom").href);

console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);


const $linkDOM = document.querySelector(".link-dom");

//todas las variables donde almacenemos elementos del DOM
//se declare con signo dolar

$linkDOM.setAttribute("target","_blank");

$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://youtube.com");


console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));



//data attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);


$linkDOM.setAttribute("data-description","modelo de objeto del documento");
console.log($linkDOM.dataset.description);

$linkDOM.dataset.description = "suscribete a mi canal y comparte";
console.log($linkDOM.dataset.description);
