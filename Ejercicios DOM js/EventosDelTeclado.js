const d = document;
let x = 0;
let y =0;

export function shortCuts(e) {

    /*console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e.shiftKey);
    console.log(e);
*/
    if(e.key === "a" && e.altKey){
        alert("haz lanzado una alerta con el teclado");
    
    }

    if(e.key === "c" && e.altKey){
        confirm("haz lanzado una confirmacion con el teclado");
    
    }

    if(e.key === "p" && e.altKey){
        prompt("haz lanzado un aviso con el teclado");
    
    }
}

export function moveBall (e,ball,stage){

    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    const limitBall = $ball.getBoundingClientRect();
    const limitStage = $stage.getBoundingClientRect();
    //const move = (direccion) => { };

    switch (e.keyCode) {
        case 37:
            //move("left");
            if(limitBall.left > limitStage.left) 
            {
                e.preventDefault();
                x--;
            }
        break;
        
        case 38:
            //move("up");
            if(limitBall.top > limitStage.top)
            {
                e.preventDefault();
                y--;
            } 
                
        break;
        
        case 39:
        //move("right");
        if(limitBall.right < limitStage.right) 
        {
            e.preventDefault();
            x++;
        } 
        break;
        
        case 40:
            //move("down");
            if(limitBall.bottom < limitStage.bottom)
            {
                e.preventDefault();
                y++;
            }
        break;

        default:
            break;
    }
    
    $ball.style.transform = `translate(${x*10}px,${y*10}px)`;

}