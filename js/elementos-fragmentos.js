//crear elementos dinamicamente a traves de js

const $figure = document.createElement("figure");
const $image = document.createElement("img");
const $figcaption = document.createElement("figcaption");
const $figcaptionText = document.createTextNode("Animals");

const $cards = document.querySelector(".cards");

$image.setAttribute("src","https://placeimg.com/200/200/animals");
$image.setAttribute("alt","Animals");
$figure.classList.add("card");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($image);
$figure.appendChild($figcaption);
$cards.appendChild($figure);//agregamos la etiqueta figure al arbol del dom




/////////

const $figure2 = document.createElement("figure");
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/animals" alt="">
<figcaption>Animals</figcaption>

`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

//////////////////7

document.write("<h3>ESTACIONES DEL AÑO</h3>");
const estaciones = ["primavera","verano","otoño"];

const $ul = document.createElement("ul");

document.body.appendChild($ul);

estaciones.forEach(el => {
const $li = document.createElement("li");
$li.textContent = el;
$ul.appendChild($li);

});

document.write("<h3>CONTINENTES DEL MUNDO</h3>");

const continentes = ["america","africa","asia","europa","oceania"];
const $ul2 = document.createElement("ul");
document.body.appendChild($ul2);
$ul2.innerHTML="";
continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`);

//fragmentos dinamicos

const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre"];
const $ul3 =  document.createElement("ul");
const $fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3> meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);