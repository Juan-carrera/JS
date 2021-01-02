
/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

/* EJERCICIO 15

15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.


*/

const binarioToDecimal = (valor,base) => {

if(valor === undefined) return console.warn("NO ingresaste un numero a convertir");

if(typeof valor !== "number") return console.error(`El valor ingresado ${valor} no es valido`);

/*if(Math.sign(valor) === -1) return console.warn(`${valor} no puede ser negativo`);
*/

if(base === 0) return console.warn("ingresa una base correcta");

if (typeof base !== "number") return console.warn(`la base ingresada ${base} no es valido`);
/*
if(Math.sign(base) === -1) return console.warn(`La base ${base} no puede ser negativo`);
*/
if(base === 2){
    return console.info(`${valor}, base ${base} = ${parseInt(valor,base)} base 10`);
} else if (base === 10){
    return console.info(`${valor}, base ${base} = ${valor.toString(2)} base 2`);
} else {
    return console.error("El tipo de base a convertir no es valido");
}
//let binaTodeci = parseInt(valor,base);

//console.log(binaTodeci);

//return (num === 0) ? "zero" : (num > 0 ) ? "positive" : "negative";

//var num = 125;

//alert( num.toString(2) ); // "1111101"

}

binarioToDecimal(25,10);



/* Ejercicio 16

16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.


*/

const descuento = (monto = undefined,descuento = 0) => {

if(monto === undefined) return console.warn("NO ingresaste el monto");

if(monto === 0) return console.warn("No ingresaste una cantidad valida");

if (typeof monto !== "number") return console.warn(`El monto ingresado ${monto} no es una cantidad valida`);

if (Math.sign(monto) === -1) return console.warn("No se puede ingresar un monto negativo");

/*
if(descuento === 0) return console.warn("Ingresa un descuento valido");
*/
if(typeof descuento !== "number") return console.warn(`El descuento ingresado ${descuento} no es valido`);

if(Math.sign(descuento) === -1) return console.warn(`No se puede aplicar el descuento de ${descuento}`);

let operacionDescuento = (descuento * monto) / 100;

return console.info(`Total a pagar ${monto},se le aplico el ${descuento}% de descuento,el monto final es ${monto - operacionDescuento}`);

}

descuento(1000,25);

/* EJERCICIO 17

17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

*/

const calcularAnios = (fecha=undefined) => {

    if(fecha === undefined) return console.warn("No ingresaste la fecha");

    if(!(fecha instanceof Date)) return console.error("la fecha que ingresaste no es valida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();

    let anioEnMS = 1000 * 60 * 60 * 24 * 365;

    let aniosHumanos = Math.floor(hoyMenosFecha / anioEnMS);

    return (Math.sign(aniosHumanos) === -1)
    ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
    :(Math.sign(aniosHumanos) === 1)
    ?console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
    :console.info(`Estamos en el año actual ${fecha.getFullYear()}.`);
    //1000 = 1segundo

}

calcularAnios();
calcularAnios({});
calcularAnios(true);
calcularAnios(new Date());
calcularAnios(new Date(1997,10,12));


