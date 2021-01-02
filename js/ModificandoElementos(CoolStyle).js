/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/


const $cards = document.querySelector(".cards");


const $newCard = document.createElement("figure");


let $contentCard = `

<img src="https://placeimg.com/200/200/any" alt="any">
<figcaption></figcaption>

`;


$newCard.classList.add("card");

$newCard.insertAdjacentHTML("afterbegin",$contentCard);

$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","ANY");

$cards.insertAdjacentElement("afterbegin",$newCard);


//metodos parecidos a los de jquery

/* prepend
    append
    before
    after

*/