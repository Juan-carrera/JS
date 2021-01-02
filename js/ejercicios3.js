
/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n)
,pe. miFuncion(5) devolverá 120.

*/


/* EJERCICIO 9*/
function getRandom() {

 return console.info(Math.floor(Math.random()*(600-501+1)+501));

}
getRandom();

/* solucion video*/

const aleatorio = () =>console.info(Math.round((Math.random() * 100) + 500));

aleatorio();

/*EJERCICIO 10*/
const capicua = (numero = 0) => {

if(!numero) return console.info("ingresa un numero valido");

//si numero es diferente de number
if (typeof numero !== "number") return console.error(`El valor ${numero} ingresado,no es un numero`);

numero = numero.toString();

let numeroAlreves = numero.split("").reverse().join("");

return (numero === numeroAlreves) 
?console.info(`Si es CAPICUA,el numero original es ${numero},el numero alreves es ${numeroAlreves}`)
:console.info(`No es CAPICUA,el numero original es ${numero},el numero al reves es ${numeroAlreves}`);

}

capicua (1221);

const capicua2 = function (numero2 = 0) {

    if(!numero2)
    {
        console.info("ingresa un numero valido");
    } else if(typeof numero2 !== "number"){
        console.error("no ingresaste un numero")
    }
    else{

        let numeroIvertido = "";
        
        numero2 = numero2.toString();
        for (let i = numero2.length -1; i >= 0;i--) {
            numeroIvertido += numero2[i];
        }

        if (numero2 === numeroIvertido){
            console.info(`es capicua,el numero original es ${numero2},el numero alreves es ${numeroIvertido}.`);
        }
        else {
            console.info(`no es capicua,el numero original es ${numero2},el numero alreves es ${numeroIvertido}.`);
        }

    }

}

capicua2(1222);

/* EJERCICIO 11*/

/*
const factorial = function (nume = undefined) {

    if(nume === undefined) {
        return console.warn("no ingresaste un numero");
    } else if (typeof nume !== "number" ){
        return console.warn(` el valor ${nume} no es un numero`);
    } else if (Math.sign(nume) === -1){
        return console.error("no hay factoriales de numero negativos");
    }
    else{
        let i = nume;
        let facto = 1;

        while (i > 0)
        {
            facto *= i;
            i--;
        }

        return console.info(`el factorial de ${nume} es ${facto}`);
    }

}

factorial(5);
*/
//solucion video

const Facto = (numerof = undefined) => {
    if(numerof === undefined) return console.warn("no ingresaste un numero");

    if(typeof numerof !== "number") return console.error(`El valor ingresado ${numerof},No es un numero`);

    if(numerof === 0) return console.warn("El numero no puede ser 0");

    if(Math.sign(numerof) === -1) return console.warn("el numero no puede ser negativo");

                   //5
    let factori  = 1;

           //5                //5
    for( let i = numerof;i>1;i--)
    {           //5
        factori *= i;
    }

    return console.info(`El factorial de ${numerof} es ${factori}`);
}

Facto();
Facto("5");
Facto([1,2,3]);
Facto(-5);
Facto(0);
Facto(5);
Facto (8);





