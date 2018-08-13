// animales
window.addEventListener('load', function () {
    console.log('el contenido ha cargado');

    let imagenes = [];

    imagenes[0] = 'img/img1.jpg';
    imagenes[1] = 'img/img2.jpg';
    imagenes[2] = 'img/img3.jpg';
    imagenes[3] = 'img/img4.jpg';

    let indiceImagenes = 0;
    let tiempo = 2000;

    function cambiarImagenes() {

        document.galeria.src = imagenes[indiceImagenes];

        if (indiceImagenes < 3) {
            indiceImagenes++;
        } else {
            indiceImagenes = 0;
        }
    }

    setInterval(cambiarImagenes, tiempo);
});

// Monumentos
window.addEventListener('load', function () {
    console.log('el contenido ha cargado');

    let imagenes2 = [];

    imagenes2[0] = 'img/m1.jpg';
    imagenes2[1] = 'img/m2.jpg';
    imagenes2[2] = 'img/m3.jpg';
    imagenes2[3] = 'img/m4.jpg';

    let indiceImagenes2 = 0;
    let tiempo2 = 2000;

    function cambiarImagenes2() {

        document.galeria2.src = imagenes2[indiceImagenes2];

        if (indiceImagenes2 < 3) {
            indiceImagenes2++;
        } else {
            indiceImagenes2 = 0;
        }
    }

    setInterval(cambiarImagenes2, tiempo2);
});
// blanco y negro
window.addEventListener('load', function () {
    console.log('el contenido ha cargado');

    let imagenes3 = [];


    imagenes3[0] = 'img/bn1.jpg';
    imagenes3[1] = 'img/bn2.jpg';
    imagenes3[2] = 'img/bn3.jpg';
    imagenes3[3] = 'img/bn4.jpg';

    let indiceImagenes3 = 0;
    let tiempo3 = 2000;

    function cambiarImagenes3() {

        document.galeria3.src = imagenes3[indiceImagenes3];

        if (indiceImagenes3 < 3) {
            indiceImagenes3++;
        } else {
            indiceImagenes3 = 0;
        }
    }

    setInterval(cambiarImagenes3, tiempo3);
});

// Flores
window.addEventListener('load', function () {
    console.log('el contenido ha cargado');

    let imagenes4 = [];


    imagenes4[0] = 'img/flores-1.jpg';
    imagenes4[1] = 'img/flores-2.jpg';
    imagenes4[2] = 'img/flores-3.jpg';
    imagenes4[3] = 'img/flores-4.jpg';

    let indiceImagenes4 = 0;
    let tiempo4 = 2000;

    function cambiarImagenes4() {

        document.galeria4.src = imagenes4[indiceImagenes4];

        if (indiceImagenes4 < 3) {
            indiceImagenes4++;
        } else {
            indiceImagenes4 = 0;
        }
    }

    setInterval(cambiarImagenes4, tiempo4);
});

// Macro
window.addEventListener('load', function () {
    console.log('el contenido ha cargado');

    let imagenes5 = [];


    imagenes5[0] = 'img/macro-1.jpg';
    imagenes5[1] = 'img/macro-2.jpg';
    imagenes5[2] = 'img/macro-3.jpg';
    imagenes5[3] = 'img/macro-4.jpg';

    let indiceImagenes5 = 0;
    let tiempo5 = 2000;

    function cambiarImagenes5() {

        document.galeria5.src = imagenes5[indiceImagenes5];

        if (indiceImagenes5 < 3) {
            indiceImagenes5++;
        } else {
            indiceImagenes5 = 0;
        }
    }

    setInterval(cambiarImagenes5, tiempo5);
});

// Planetas
window.addEventListener('load', function () {
    console.log('el contenido ha cargado');

    let imagenes6 = [];


    imagenes6[0] = 'img/planetas-1.jpg';
    imagenes6[1] = 'img/planetas-2.jpg';
    imagenes6[2] = 'img/planetas-3.jpg';
    imagenes6[3] = 'img/planetas-4.jpg';

    let indiceImagenes6 = 0;
    let tiempo6 = 2000;

    function cambiarImagenes6() {

        document.galeria6.src = imagenes6[indiceImagenes6];

        if (indiceImagenes6 < 3) {
            indiceImagenes6++;
        } else {
            indiceImagenes6 = 0;
        }
    }

    setInterval(cambiarImagenes6, tiempo6);
});

/*BOTONES*/
