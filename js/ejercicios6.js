/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

//ESTUDIAR EXPRESIONES REGULARES
/* EJERCICIO 18*/
/*
const vocalesConsonantes = (cadena = "") => {

if(cadena === "") return console.warn("Ingresa un texto valido");
if(typeof cadena !== "string" || !/([a-z])/.test(cadena)) return console.error("NO ingresaste un texto valido");

//cadena a minisculas
cadena = cadena.toLowerCase();
//quitamos los espacios de la cadena
cadena = cadena.replace(/ /g,"");
//convertimos la cadena en array
cadena = cadena.split("");

let vocal = 0;
let consonantes = 0;

for (let i =1;i<= cadena.length;i++)
{
    if(cadena[i] === "a" || cadena[i] === "e" || cadena[i] === "i" || cadena[i] === "o" || cadena[i] === "u")
    {
        vocal ++;
    }
    else{
        consonantes ++;
    }

}

return console.info(`El texto tiene ${vocal} vocales y ${consonantes} consonantes`);
}

vocalesConsonantes("hola mundo");

*/

/*

const contarLetras = (cadena = "") => {


    if(cadena ==="") return console.warn("No ingresaste una cadena de texto");

    if(typeof cadena !== "string") return console.error(`El valor ingresado ${cadena}, NO es una cadena de texto.`);

    //if(/[0-9]/.test(cadena)) return console.info(`El texto ingresado ${cadena} es invalido`);
    
    let vocales= 0;
    let consonantes=0;
    cadena = cadena.toLowerCase();
    
    for (let letra of cadena) {

        if(/[aeiouáéíóúü]/.test(letra)){
            vocales++;
        }
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)){

            consonantes++;
        }
        
    }

    return console.info({

        cadena,
        vocales,
        consonantes
    })
}

contarLetras();
contarLetras(3);
contarLetras("1e2r3tg4h5h");
contarLetras("Hola Mundo Juan");
*/
/* EJERCICIO 19*/
/*
const validarNombre = (nombre ="") => {

    if(nombre ==="") return console.warn("No ingresaste un Nombre valido");

    if(typeof nombre !== "string") return console.error(`El nombre ingresado ${nombre}, NO es un nombre valido`);


    let expresionRegular = /^[A-Za-zÑñáéíóúÁÉÍÓÚüÜ\s]+$/g.test(nombre);

    return (expresionRegular)
    ?console.info(`${nombre},es un nombre valido`)
    :console.warn(`${nombre}, NO es un nombre valido`);


}

validarNombre();
validarNombre(2345);
validarNombre("Juan Antonio Carrera Contreras");
*/
/*EJERCICIO 20 */

const validarCorreo = (email ="") => {

    if(!email) return console.warn("No ingresaste un correo valido");

    if(typeof email !== "string") return console.error(`El Correo ingresado: ${email}, NO es un correo valido`);

    /*
    let expRegular = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email);
    */
    let exp = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (exp)
    ?console.info(`${email},es un Correo valido`)
    :console.warn(`${email}, NO es un Correo valido`);
}
/*
validarCorreo();
validarCorreo(90);
validarCorreo("jon,mir,cha@gmail.com");
validarCorreo("jacc_1297@hotmail.com");
*/
//expresion regular email
/*

/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i. 

/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

*/

/*FUSION EJERCICIO 19 Y 20 */


const validarPatron = (cadena ="",patron=undefined) => {

    if(!cadena) return console.warn("No ingresaste un cadena de texto a evaluar");

    if(typeof cadena !== "string") return console.error(`La cadena ingresado: ${cadena}, NO es una cadena`);

    if(patron === undefined) return console.warn("No ingresaste un patron a evaluar");

    if(!(patron instanceof RegExp)) return console.error(`La valor ingresado: ${patron}, NO es una expresion regular`);

    let expr = patron.test(cadena);

    return (expr)
    ?console.info(`${cadena},cumple con el patron ingresado`)
    :console.warn(`${cadena},NO cumple con el patron ingresado`);
}

validarPatron();
validarPatron({});
validarPatron("hola");
validarPatron("hola","juan");
validarPatron("juan antonio",/^[A-Za-zÑñáéíóúÁÉÍÓÚüÜ\s]+$/g);

validarPatron("jacc_1297@hotmailcom",new RegExp(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,"i"));

validarPatron("jacc_129@hotmail.com",/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);
