import saludo,{Saludo,PI,usuario} from "./constantes.js";

//alias
import {arit as cal} from "./aritmetica.js";


console.log("modulos");

console.log(PI,usuario);

console.log(cal.sumar(12,7));
console.log(cal.resta(34,8));

saludo();

let salu = new Saludo();
saludo;