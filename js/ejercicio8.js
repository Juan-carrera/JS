
/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

*/


/* EJERCICIO 24*/


const ascendenteDescendente = (arreglo1 = undefined) => {


    if(arreglo1 === undefined) return console.warn("no ingresaste un arreglo de numeros");

    if(!(arreglo1 instanceof Array)) return console.error("el valor que ingresaste no es un array");
    
    if(arreglo1.length === 0) return console.warn("El arreglo esta vacio");

    for (let numero of arreglo1) {
    
        if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado,NO es un numero`);
    }

    return console.info({
    
    arreglo1,
    ascendente: arreglo1.map(el => el).sort(),
    descendente : arreglo1.map(el => el).sort().reverse()

      /* 
        por cada elemento devuelva ese elemento
    asc: arr.map(e => e).sort((a, b) => a - b),
    desc: arr.map(e => e).sort((a, b) => a - b).reverse()

    el método sort() por defecto ordena según el valor Unicode. Deberías pasarle una función de comparación sort((a,b)=>a-b) para que ordene asc o desc..
        */

    });

}

ascendenteDescendente([7,5,7,8,6]);



/*EJERCICIO 25*/



const elementosDuplicados = (arreglo2 = undefined) => {


    if(arreglo2 === undefined) return console.warn("no ingresaste un arreglo de numeros");

    if(!(arreglo2 instanceof Array)) return console.error("el valor que ingresaste no es un array");
    
    if(arreglo2.length === 0) return console.warn("El arreglo esta vacio");

    if(arreglo2.length === 1) return console.warn("El arreglo necesita mas elementos");

const arraySinDuplicados = arreglo2.filter((ele,index)=> arreglo2.indexOf(ele) === index)

/* arreglo2.filter(value,index,self) => self.indexOf(value) === index)*/

/* tipo de dato Set

desc: [... new Set (array)]
*/

return console.info(`Arreglo original: ${arreglo2}, Arreglo sin duplicados ${arraySinDuplicados}`);

}

elementosDuplicados(["x", 10, "x", 2, "10", 10, true, true]);
/*----------------------------------------------*/



/* EJERCICIO 26*/

const promedio = (arreglo) => {

    if(arreglo === undefined) return console.warn("no ingresaste un arreglo de numeros");

    if(!(arreglo instanceof Array)) return console.error("el valor que ingresaste no es un array");
    
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio");

    for (let numero of arreglo) {
    
        if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado,NO es un numero`);
    }

    let sumaArray =0;
    let promedioArray=0;

    for (let iterador of arreglo) {
        
        sumaArray +=iterador;
        promedioArray = sumaArray / arreglo.length;

    }

    return console.info(`Arreglo:${arreglo},la suma del arreglo es:${sumaArray} y su promedio es:${promedioArray}`);

}

promedio([10,9,8,7,6,5,4,3,2,1,0]);