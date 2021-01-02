export default function draw(btn,selector){

    const getWinner = (selector) =>{
        const $players = document.querySelectorAll(selector);
        const random =Math.floor(Math.random() * $players.length)
        const winner = $players[random];

        return `El ganador es: ${winner.textContent}`;
    }

    document.addEventListener("click",e =>{
        if(e.target.matches(btn)){
            let resultado = getWinner(selector);
            alert(resultado);
        }
    })

}