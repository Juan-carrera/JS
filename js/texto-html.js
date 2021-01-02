
const $whatisDOM = document.getElementById("que-es");

let text = `

<p> DOM es una abreviatura de Document Objet Model. En español podríamos traducirlo por Modelo de Objeto de Documento, aunque en DesarrolloWeb.com nos hemos referido al DOM habitualmente con el nombre de jerarquía de objetos del navegador, porque realmente es una estructura jerárquica donde existen varios objetos y unos dependen de otros.</p>

<p> Los objetos del DOM modelizan tanto la ventana del navegador como el historial, el documento o página web, y todos los elementos que pueda tener dentro la propia página, como párrafos, divisiones, tablas, formularios y sus campos, etc. A través del DOM se puede acceder, por medio de Javascript, a cualquiera de estos elementos, es decir a sus correspondientes objetos para alterar sus propiedades o invocar a sus métodos. Con todo, a través del DOM, queda disponible para los programadores de Javascript, cualquier elemento de la página, para modificarlos, suprimirlos, crear nuevos elementos y colocarlos en la página, etc.</p>

`;

$whatisDOM.innerText = text;

$whatisDOM.textContent = text;

$whatisDOM.innerHTML = text;
$whatisDOM.outerHTML = text;

//