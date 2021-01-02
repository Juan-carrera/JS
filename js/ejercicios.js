/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */


/*primer ejercicio */


const NumeroCaracteres = function (cadena = ""){
    
    if(!cadena)
    {
        console.warn("no ingresaste una cadena");
    }

    else{
        console.log(`la cadena ${cadena} tiene ${cadena.length} caracteres`)
    }

}

NumeroCaracteres("Juan Antonio Carrera Contreras");




/*segundo ejercicio */

/*
const cadena = function (cadena = "",caracter= undefined)
{

    if(!cadena)
    {
        console.warn("no ingresaste cadena");
    } else if(caracter === undefined){
        console.warn("no agregaste una longitud");
    }
    else{
        console.log(cadena.slice(0,caracter));
    }
  return cadena;

}
*/

const cadena = (cadena = "",caracter=undefined) => 
(!cadena)

?console.warn("no ingresaste una cadena")

:(caracter=== undefined)

?console.warn("no agregaste una longitud")

:console.log(cadena.slice(0,caracter))


cadena("juan antonio carrera contreras",6);



/* tercer ejercicio */

/*
const textArr = function(cadenaDividir = "",separador= undefined){

    if(!cadenaDividir)
    {
        console.warn("agrega una cadena");
    }
    else{
        console.info(cadenaDividir.split(separador));
    }



return cadenaDividir;

}
*/

//operador ternario
const cadenaArreglo = (cadena2 = "",separador = undefined) => 
(!cadena) 
? console.warn("ingresa una cadena valida")
:(separador === undefined)
?console.warn("no ingresaste el separador")
: console.info(cadena2.split(separador))

//textArr("hola mundo a mi", " ");

cadenaArreglo("hola mundo a mi"," ");

/////////////////////////////////////////////////////////////////////


/*cuarto ejercicio */


const textRepetir = function (cadena3 = "",veces= undefined){

    if(!cadena3)
    {
        return console.warn("ingresa un texto");
    }
    else if(veces === undefined)
    {
        console.warn("no ingresaste el numero de veces a repetir");
    } else if(veces === 0) 
    {
        console.error("el numero de veces no puede ser 0");
    } else if (Math.sign(veces) === -1)
    {
        console.error("el numero de veces no puede ser negativo");
    }

    else{

        for (let i =1;i<=veces;i++) console.info(`${cadena3},${i}`);
        //console.log(cadena3.repeat(reNumero));
    }
    

}

textRepetir("juan antonio",5);
textRepetir("juan antonio");
textRepetir("juan antonio",0);
textRepetir("juan antonio",-20);
textRepetir("",9);



/*

const repetirTexto = (texto= "",veces= undefined ) => {

if(!texto) return console.warn("no ingresaste un texto");

if(veces === undefined) return console.warn("no ingresaste el numero de veces");

if (veces === 0) return console.error("el numero de veces no puede ser 0");

if (Math.sign(veces) === -1) return console.error("el numero de veces no puede ser negativo");

for (let i =1;i<=veces;i++) console.info(`${texto},${i}`);

}

repetirTexto("juan antonio",5);
repetirTexto("juan antonio");
repetirTexto("juan antonio",0);
repetirTexto("juan antonio",-20);
repetirTexto("",9);

*/