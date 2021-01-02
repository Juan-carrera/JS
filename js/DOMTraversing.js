//DOM Traversing: Recorriendo el DOM 
//propiedades que da el API del dom para recorrer los elementos


const $cards = document.querySelector(".cards");

console.log($cards.children);

console.log($cards.children[1]);

console.log($cards.parentElement);

console.log($cards.firstElementChild);

console.log($cards.lastElementChild);

console.log($cards.previousElementSibling);

console.log($cards.nextElementSibling);

console.log($cards.closest("body"));

console.log($cards.children[2].closest("section"));