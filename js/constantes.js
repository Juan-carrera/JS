export const PI = Math.PI;


export let usuario = "juan";
let password = "12345";


//solo podemos usar una expoertacion por default
export default function saludo (){
    console.log("hola mudulos ES6");
}

export class Saludo {

    constructor(){
        console.log("hola desde la clase +ES6");
    }
}

//carga la funcion por defecto
