const $cards = document.querySelector(".cards");


const $template = document.getElementById("template-card").content;
      
const $fragment = document.createDocumentFragment();

const cardContent = [

{
    title:"tecnologia",
    img: "https://placeimg.com/200/200/tech"
},

{
    title:"animales",
    img: "https://placeimg.com/200/200/animals"
},

{
    title:"arquitectura",
    img: "https://placeimg.com/200/200/arch"
},

{
    title:"gente",
    img: "https://placeimg.com/200/200/people"
}


];


cardContent.forEach(el => {

    $template.querySelector("img").setAttribute("src",el.img);

    $template.querySelector("img").setAttribute("alt",el.title);

    $template.querySelector("figcaption").textContent = el.title;

    let $cloneTemplate = document.importNode($template,true);

    $fragment.appendChild($cloneTemplate);
});

$cards.appendChild($fragment);
