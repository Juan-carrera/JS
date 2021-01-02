/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

*/


/* QUINTO EJERCICIO */

/*
const invertirPalabra = function (cadena = "")
{
    if(!cadena)
    {
        console.warn("ingresa una cadena valida");
    }

    else{

        let inv = "";

        for(let i = cadena.length -1;i >= 0;i--)
        {
            inv += cadena[i];

        }
         
        console.info(inv);
    }

}

invertirPalabra("hola mundo");
*/

//solucion video
const invertirCdena = (cadena ="") => 
(!cadena)
?console.warn("no ingresaste una cadena de texto")
:console.info(cadena.split("").reverse().join(""));

invertirCdena();
invertirCdena("hola mundo");
invertirCdena("js es el mejor lenguaje de programacion");






/*SEXTO EJERCICIO */

/*
const repetirPalabra = function (cadena = "",palabra = "")
{

    if (!cadena){
        console.warn("ingresa un texto valido");
    } else if(!palabra){
        console.warn("ingresa una palabra valida");
    } else if (Math.sign(cadena) === -1){
        console.error("no se pueden ingresar numeros negativos");
    } else{
        
        let i = 0,contador = 0;
        while( i !== -1)
        {   
            i = cadena.indexOf(palabra,i);
            if(i !== -1){
                i++;
                contador++;
            }

        }
        
        return console.info(`la palabra ${palabra} se repite ${contador} veces`);
    }
}

repetirPalabra("hola mundo mundo,como estas mundo te quiero mucho mundo","mundo");

repetirPalabra(-1);

*/


const textoCdena = (cade ="",texto = "") => {


    if(!cade) return console.warn("no ingresaste el texto");

    if(!texto) return console.warn("no ingresaste la palabra a evaluar");

    let i =0, 
    contador = 0;


    while (i !== -1)
    {
        i=cade.indexOf(texto,i);

        if(i !== -1)
        {
            i++;
            contador++;
        }
    }
    return console.info(`la palabra ${cade}, se repite ${contador} veces`);
}

textoCdena("hola mundo como estas mundo mundo querido mundo","mundo");







/* SEPTIMO EJERCICIO */

/*

const palindromo = function(cadena1){

    if(cadena1 === "")
    {
        console.warn("ingresa una palabra valida");
    } 
    else{

        let invertida = "";
        cadena1 = cadena1.toLowerCase();

        for(let i = cadena1.length -1;i >= 0;i--)
        {
            invertida += cadena1[i];

        }

        if(cadena1 === invertida)
        {
            console.log(`si es palindromo,palabra original ${cadena1},palabra al reves ${invertida}`);
        }
        else{
            console.log(`No es palíndromo, Palabra original ${cadena1}, palabra al revés ${invertida}`);
        }

    }

}

palindromo("salas");

*/

const palindromo = (palabra="") => {
    
    if(!palabra) return console.warn("no ingresaste una palabra");

    palabra = palabra.toLowerCase();

    let alReves = palabra.split("").reverse().join("");


    return (palabra === alReves)
    ?console.info(`si es palindromo,palabra original ${palabra},palabra al reves ${alReves}`)
    :console.info(`NO es palindromo,palabra original ${palabra},palabra al reves ${alReves}`);

}

palindromo();
palindromo("hola mundo");
palindromo("Salas");


/*OCTAVO VIDEO */


const eliminarCaracteres = (texto="",patron="") => 
(!texto)
?console.warn("ingresa un texto")
:(!patron)
?console.warn("ingresa un patron de caracteres")
:console.info(texto.replace(new RegExp(patron,"ig"),""));


eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz");
