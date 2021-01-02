
/*
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

*/

/*EJERCICIO 21 */

const numeroCuadrado = (arr= undefined) => {

if(arr === undefined) return console.warn("no ingresaste un arreglo de numeros");

if(!(arr instanceof Array)) return console.error("el valor que ingresaste no es un array");

if(arr.length === 0) return console.warn("El arreglo esta vacio");

for (let numero of arr) {

    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado,NO es un numero`);
}

//.map

const newArr = arr.map(el => el * el);

return console.info(`Arreglo original: ${arr}, Arreglo elevado al cuadrado ${newArr}`);

}
/*
numeroCuadrado();
numeroCuadrado(true);
numeroCuadrado({});
numeroCuadrado([]);
numeroCuadrado([1,"3","3"]);
numeroCuadrado([2,4,5]);
*/

/*
const numerosElevadosCuadrado = (arreglo = undefined) => {

if(arreglo===undefined)return console.warn("no ingresaste un arreglo");
if(!(arreglo instanceof Array)) return console.error("Debes ingresar un arreglo");
for (let i = 0; i < arreglo.length; i++) {
if(typeof arreglo[i] !== "number") {
    return console.error(`El arreglo "[${arreglo}]" debe contener numeros`)
}
}
let arregloAlCuadrado = [];

    for (let nume of arreglo) {
        arregloAlCuadrado.push(Math.pow(nume,2));
    }

    return console.log(arregloAlCuadrado);
}


numerosElevadosCuadrado([""]);

*/


/*----------------------------------------------------*/



/*EJERCICIO 22*/

const numeroMayorMenor = (arreglo = undefined) => {


    if(arreglo === undefined) return console.warn("no ingresaste un arreglo de numeros");

    if(!(arreglo instanceof Array)) return console.error("el valor que ingresaste no es un array");
    
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio");


    for (let numero of arreglo) {
    
        if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado,NO es un numero`);
    }

    return console.info(`Arreglo original:${arreglo}\nValor mayor:${Math.max(...arreglo)}\nValor menor:${Math.min(...arreglo)}`);
//uso de spread operator
}

//numeroMayorMenor([1,5,6,7,-60]);



/*
const numeroMasMenos = (nume) => {

let arregloMayorMenor = [];
 arregloMayorMenor.push(Math.max(...nume));
arregloMayorMenor.push(Math.min(...nume));

return console.info(arregloMayorMenor);
}

numeroMasMenos([1,5,6,9,0,-60]);
*/

/*-----------------------------------------------------------------*/




/*EJERCICIO 23 */


const parImpar = (arre = undefined) => {

    
    if(arre === undefined) return console.warn("no ingresaste un arreglo de numeros");

    if(!(arre instanceof Array)) return console.error("el valor que ingresaste no es un array");
    
    if(arre.length === 0) return console.warn("El arreglo esta vacio");


    for (let numero of arre) {
    
        if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado,NO es un numero`);
    }

    // filter 

    return console.info({

        par: arre.filter(num => num % 2 ===0),
        impar: arre.filter(num => num%2 ===1)

    });

}

parImpar([1,2,3,4,5,6,7,8,9]);



/*
const parImpar = (numeros) => {

let par = [];
let impar = [];
    for(let nume of numeros)
    {
        if(nume % 2 === 0)
        {
        par.push(nume);
        } else{
        impar.push(nume);
        }
    }

    return console.info({
        par,
        impar
    });

}

parImpar([1,2,3,4,5,6,7,8,9]);

*/




/*--------------------------------------------------------------------------------*/


