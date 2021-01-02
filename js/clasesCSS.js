const $card = document.querySelector(".card");


console.log($card);
console.log($card.className);
console.log($card.classList);

console.log($card.classList.contains("rotate-45"));

$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);

//add,remove,toggle,replace

$card.classList.add("opacity-80","sepia");

const $card2 = document.querySelectorAll(".card");

$card2.forEach(el => el.classList.add("rotate-45"));
$card2.forEach(el => el.classList.add("opacity-80", "sepia"));
