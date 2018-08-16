// Declaracion de variables.

// Declaracion de arreglos.
let imagenes = [];
let imagenes2 = [];
let imagenes3 = [];
let imagenes4 = [];
let imagenes5 = [];
let imagenes6 = [];

// Fotos de animales.
imagenes[0] = 'img/img2.jpg';
imagenes[1] = 'img/img3.jpg';
imagenes[2] = 'img/img4.jpg';
imagenes[3] = 'img/img1.jpg';

// Fotos de monumentos 
imagenes2[0] = 'img/m2.jpg';
imagenes2[1] = 'img/m3.jpg';
imagenes2[2] = 'img/m4.jpg';
imagenes2[3] = 'img/m1.jpg';

// Fotos en blanco y negro.
imagenes3[0] = 'img/bn2.jpg';
imagenes3[1] = 'img/bn3.jpg';
imagenes3[2] = 'img/bn4.jpg';
imagenes3[3] = 'img/bn1.jpg';

// Fotos de flores. 
imagenes4[0] = 'img/flores-2.jpg';
imagenes4[1] = 'img/flores-3.jpg';
imagenes4[2] = 'img/flores-4.jpg';
imagenes4[3] = 'img/flores-1.jpg';

// Fotos macro.
imagenes5[0] = 'img/macro-2.jpg';
imagenes5[1] = 'img/macro-3.jpg';
imagenes5[2] = 'img/macro-4.jpg';
imagenes5[3] = 'img/macro-1.jpg';

// Fotos de planetas.
imagenes6[0] = 'img/planetas-2.jpg';
imagenes6[1] = 'img/planetas-3.jpg';
imagenes6[2] = 'img/planetas-4.jpg';
imagenes6[3] = 'img/planetas-1.jpg';

// Declaramos variables de tiempo y indice de inicio
let indiceImagenes = 0;
let tiempo = 2000;

// Creacion de funcion para que se vean las imagnes en la pagina y solo puedan cambiar en el total de las que hay.
function cambiarImagenes() {

    document.galeria.src = imagenes[indiceImagenes];
    document.galeria2.src = imagenes2[indiceImagenes];
    document.galeria3.src = imagenes3[indiceImagenes];
    document.galeria4.src = imagenes4[indiceImagenes];
    document.galeria5.src = imagenes5[indiceImagenes];
    document.galeria6.src = imagenes6[indiceImagenes];

    if (indiceImagenes < 3) {
        indiceImagenes++;
    } else {
        indiceImagenes = 0;
    }
}

let carrousel = setInterval(cambiarImagenes, tiempo);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function siguiente() {
    
    if (indiceImagenes > 3) {
        indiceImagenes = 0;
    }
    document.galeria.src = imagenes[indiceImagenes];
    document.galeria2.src = imagenes2[indiceImagenes];
    document.galeria3.src = imagenes3[indiceImagenes];
    document.galeria4.src = imagenes4[indiceImagenes];
    document.galeria5.src = imagenes5[indiceImagenes];
    document.galeria6.src = imagenes6[indiceImagenes];
    indiceImagenes++;
}
function anterior() {
    
    if (indiceImagenes < 0) {
        indiceImagenes = 3;
    }
    document.galeria.src = imagenes[indiceImagenes];
    document.galeria2.src = imagenes2[indiceImagenes];
    document.galeria3.src = imagenes3[indiceImagenes];
    document.galeria4.src = imagenes4[indiceImagenes];
    document.galeria5.src = imagenes5[indiceImagenes];
    document.galeria6.src = imagenes6[indiceImagenes];
    indiceImagenes--;
}

// Funcion para que el boton de pause funcione. 
function playpause() {
    let boton = document.getElementById("btn");
    if (carrousel == null) {
        boton.src = "http://www.reciclay.com.ve/gio/pause.png";
        carrousel = setInterval(cambiarImagenes, tiempo);
    } else {
        clearInterval(carrousel);
        carrousel = null;
        boton.src = "http://www.reciclay.com.ve/gio/play.png";
    }
}