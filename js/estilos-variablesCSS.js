const $linkDOM = document.querySelector(".link-dom");


console.log($linkDOM.style);

console.log($linkDOM.style.color);

console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration","none");

$linkDOM.style.setProperty("display","block");

$linkDOM.style.textAlign = "center";

$linkDOM.style.margin = "10%";

$linkDOM.style.padding = "1rem";

$linkDOM.style.borderRadius = "5px";


console.log($linkDOM.getAttribute("style"));


//variables css-custom properties

const $html = document.documentElement;
const $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;




$html.style.setProperty("--dark-color","blue");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.backgroundColor = varDarkColor;

