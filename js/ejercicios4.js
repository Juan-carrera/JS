
/*
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

*/


/*EJERCICIO 12 */

/*
const numeroPrimo = function (numero = 0) {

    if(!numero )
    {
        return console.warn("ingresa un numero valido");
    } else if (typeof numero !== "number"){
        return console.warn (`el dato ingresado ${numero} no es valido.`);
    } else if (Math.sign(numero) === -1){
        return console.error("no existen numero primos negativos");
    } else {
    
       
    }

}
numeroPrimo(4);
*/

const numeroPrimo = (numero = undefined) => {

    if(numero === undefined) return console.warn("no ingresaste un numero");

    if(typeof numero !== "number") return console.error(`El valor ingresado ${numerof},No es un numero`);

    if(numero === 0) return console.warn("El numero no puede ser 0");

    if(numero === 1) return console.warn("El numero no puede ser 0");

    if(Math.sign(numero) === -1) return console.warn("el numero no puede ser negativo");


    let divisible = false;

    for (let i = 2;i < numero;i++)
    {
        if((numero % i) === 0)
        {
            divisible = true;
            break;
        }
    }

    return(divisible) ? console.log(`El numero ${numero},NO es primo`) : console.log(`El numero ${numero},SI es primo`);

}

numeroPrimo(13);



/*EJERCICIO 13 */
/*
const numeroImpar = function(nume) {

 if(nume % 2 === 0 )
 {
     console.log(`El numero ${nume} es par`);
 }else{
     console.log(`El numero ${nume} es impar`);
 }

}
*/


const numeroParImpar = (nume = undefined) => {

    if(nume === undefined) return console.warn("ingresa un numero valido");
    if (typeof nume !== "number") return console.warn("ingresa un numero entero valido");

    return ((nume % 2) === 0)
    ?console.info(`el numero ${nume} es par`)
    :console.info(`el numero ${nume} es impar`);
}
numeroParImpar(8);


/*
const convertidor = function(gradosC,tipoGrado ="") {

    if(tipoGrado === "C")
    {
        let f = (gradosC * 1.8) + 32;
    
         return console.log(`${f}°F`);
    } else if(tipoGrado === "F")
    {
        let c = (gradosC - 32) / 1.8;
        return console.info(`${Math.round(c)}°C`)
    }
}

*/



/*EJERCICIO 14 */
/*
const covertGrados = (grados,tipoG = "") => {

    if(grados === undefined) {
        return console.warn("ingresa un numero valido");
    } else if(tipoG === "") {
        return console.warn("ingresa un tipo de grado correcto");
    }else if(Math.sign(tipoG) === 1){
        return console.warn("ingresa un grado centigrado correcto")
    } else{
        
        tipoG =  tipoG.toLowerCase();

        if(tipoG === "c"){
            let FtoC = (grados * (9/5)) + 32;
            return console.info(`${FtoC}°F`);
        } else if(tipoG === "f");
        {
            let CtoF = (grados - 32) / (5/9);

            return console.info(`${CtoF}°C`);
        }
    }
}
*/

const convertirGrados = (grados,unidad) => {

    if(grados === undefined) return console.warn("ingresa un numero valido");

    if(typeof grados !== "number") return console.error("el valor ingresado no es un numero");

    if(unidad === undefined) return console.error("ingresa un grado valido");

    //if(typeof unidad !== "string") console.warn("el /////tipo de grado agregado no es un texto");

    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("valor de unidad no reconocido");

    if(unidad === "C")
    {
        return console.info(`${grados}°C = ${Math.round((grados * (9/5)) + 32)}°F`)
    } else if(unidad === "F"){
        return console.info(`${grados}°F = ${Math.round(((grados - 32) * (5/9)))}°C`)
    }else{
        return console.error("El tipo de grado a convertir no es valido");
    }


}

convertirGrados();
convertirGrados("234");
convertirGrados(2);
convertirGrados(123,"hola");
convertirGrados(12,true);
convertirGrados(100,"F");
convertirGrados(100,"C");