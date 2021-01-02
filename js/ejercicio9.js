
/*

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

*/


class pelicula {

  constructor ({id,titulo,director,estreno,pais,generos,calificacion}){

    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros(){
    return ["Action", "Adult", "Adventure", "Animation","Biography","Comedy","Crime", "Documentary","Drama","Family","Fantasy","Film Noir","Game-Show","History","Horror","Musical", "Music","Mystery","News","Reality-TV","Romance","Sci-Fi","Short","Sport","Talk-Show","Thriller","War","Western."];
  }


  static generosAceptados(){
    return console.info(`Los generos aceptados son: ${pelicula.listaGeneros.join(", ")}`);
  }
validarCadena(propiedad,valor){

  if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

  if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, No es una cadena de texto`);

  return true;
}

validarNumero(propiedad,valor){
  if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

  if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado, No es un numero`);

  return true;
}


validarArreglo(propiedad,valor){

  
  if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

  if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado,NO es un arreglo`);
  
  if(valor.length === 0) return console.warn(`${propiedad} "${valor}" no tiene datos`);

  for (let cadena of valor) {
  
      if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado,NO es una cadena de texto`);
  }


  return true;

}


validarlongitudCadena(propiedad,valor,longitud){

if(valor.length > longitud) console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud})`);


return true;

}

validarIMDB(id){

if(this.validarCadena("IMBD Id",id)){

  if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
    return console.error(`IMDB ID "${id}" no es valido,deber tener 9 caracteres,los dos primeros letras minusculas y los 7 restantes son numeros`);
  }
 }
}


validarTitulo(titulo){

  if(this.validarCadena("Titulo",titulo)){

    this.validarlongitudCadena("Titulo",titulo,100);
  }
}



validarDirector(director){

  if(this.validarCadena("Director",director)){

    this.validarlongitudCadena("Director",director,50);
  }
}



validarEstreno(estreno){

  if(this.validarNumero("Año Estreno",estreno)){
  
    if(!(/^([0-9]){4}$/.test(estreno))){
      return console.error(`Año de Estreno" ${estreno}" no es valido,debe ser un numero de 4 digitos`);
    }
   }
}


validarPais(pais){

  this.validarArreglo("Pais",pais);
}


validarGeneros(generos){

  if(this.validarArreglo("Generos",generos)){
    for (const genero of generos) {
      //console.log(genero,pelicula.listaGeneros.includes(genero));

      if(!pelicula.listaGeneros.includes(genero)){
        console.error(`Genero(s) incorrectos "${generos.join(",")}"`);
        pelicula.generosAceptados();
      }
    }
  }
}



validarCalificacion(calificacion){

  if(this.validarNumero("Calificacion",calificacion))
  return (calificacion <0 || calificacion > 10)
  ?console.error(`La calificacion tiene que estar en un rango de 0 a 10`)
  :this.calificacion = calificacion.toFixed(1);
   
}

fichaTecnica(){
  console.info(`Ficha tecnica:\nTitulo:"${this.titulo}"\nDirector:"${this.director}"\nAño:"${this.estreno}"\nPais:"${this.pais.join("-")}"\nGeneros:"${this.generos.join(",")}"\nCalificacion:"${this.calificacion}"\nIMDB ID:"${this.id}"`);

}







}
/*
//pelicula.generosAceptados();
const peli = new pelicula({

  id: "tt9876531",
  titulo: "joker",
  director: "director peli",
  estreno: 2020,
  pais: ["mexico","francia"],
  generos: ["Comedy"],
  calificacion: 9.9
});

peli.fichaTecnica();

*/

const misPeliculas = [
  {
  id: "tt9876531",
  titulo: "joker",
  director: "director peli",
  estreno: 2020,
  pais: ["mexico","francia"],
  generos: ["Comedy"],
  calificacion: 9.9
  },
  {
    id: "tt9876532",
    titulo: "Seños de los anillos:Comunidad del anillo",
    director: "director peli",
    estreno: 2020,
    pais: ["mexico","francia"],
    generos: ["Comedy"],
    calificacion: 9.9
  },
  {
    id: "tt9876533",
    titulo: "joker",
    director: "director peli",
    estreno: 2020,
    pais: ["USA"],
    generos: ["Comedy"],
    calificacion: 9.9
  }
];

misPeliculas.forEach(el => new pelicula(el).fichaTecnica());

