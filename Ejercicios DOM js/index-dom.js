import hamburguerMenu from "./menu-hamburguer.js";

import {digitalClock,alarm} from "./reloj.js";

import {moveBall, shortCuts} from "./EventosDelTeclado.js";

import countDown from "./CuentaRegresiva.js";

import botonScroll from "./BotonScroll.js";

import { themeDOM } from "./dark-lightMode.js";

import responsiveMedia from "./responsiveJS.js";

import responsiveTester from "./responsiveTester.js";

import userDivice from "./deteccion_dispositivos.js";

import networkStatus from "./deteccion_estado_red.js";

import webCam from "./web_cam.js";

import getGeolocation from "./geolocalizacion.js";

import searchFilters from "./Filtros_Busqueda.js";

import draw from "./sorteo_digital.js";

import slider from "./responsive_slider.js";

import scrollSpy from "./ScrollSpy.js";

import smartVideo from "./video_inteligente.js";

import contactForm from "./validaciones_formulario.js";

import speechReader from "./narrador.js";





const d = document;

d.addEventListener("DOMContentLoaded" ,(e) => {
    
    hamburguerMenu(".panel-btn",".panel",".menu a");
    
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    
    alarm("assets/audio.mp3","#activar-alarma","#desactivar-alarma");
    
    countDown("countdown","Sep 28,2020 19:38:20","Feliz Cumpleaños");

    botonScroll(".scroll-top-btn");

    responsiveMedia("youtube","(min-width:1024px)",`<a href="https://www.youtube.com/watch?v=gBGe6GIm52A" target="_blank">VER VIDEO </a>`,


    `<iframe width="560" height="315" src="https://www.youtube.com/embed/ET_mhUjV3js" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);



    responsiveMedia("gmaps","(min-width:1024px)",`<a href="https://goo.gl/maps/cPn3eCxWe9VvZneT6" target="_blank">VER MAPA </a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241378.06889576427!2d-98.33305369663034!3d19.040318955930967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0bd5ebc7a3b%3A0x48a6461de494ad95!2sPuebla%2C%20Pue.!5e0!3m2!1ses-419!2smx!4v1601603995018!5m2!1ses-419!2smx" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`);

    responsiveTester("responsive-tester");

    userDivice("user-divice");

    webCam("webcam");

    getGeolocation("geolocation");

    searchFilters(".card-filter",".card");

    draw("#winner-btn",".player");
    
    slider();

    scrollSpy();

    smartVideo();

    contactForm();
});



d.addEventListener("keydown",e =>{
    shortCuts(e);
    moveBall(e,".ball",".stage");
})

//keyword al momento de dar enter a la tecla
//keyup despues de soltar la tecla
//keypress mientras tengas presionada la tecla

themeDOM(".dark-theme-btn","dark-mode");

networkStatus();

speechReader();