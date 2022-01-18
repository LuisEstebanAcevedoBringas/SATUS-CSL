//Galeria - Proyecto
let Imagen_Actual = 0; // current slide
let Total_Imagenes = 4; // total slides

function ImagenSiguiente_Proyecto(){
    document.getElementById("Content" + (Imagen_Actual+1)).classList.remove("ImagenActiva");
    Imagen_Actual = ( Total_Imagenes + Imagen_Actual + 1) % Total_Imagenes;
    document.getElementById("Content" + (Imagen_Actual+1)).classList.add("ImagenActiva");
    indicator( Imagen_Actual + 1 );
}

function ImagenAnterior_Proyecto(){
    document.getElementById("Content" + (Imagen_Actual+1)).classList.remove("ImagenActiva");
    Imagen_Actual = (Total_Imagenes + Imagen_Actual - 1) %Total_Imagenes;
    document.getElementById("Content" + (Imagen_Actual+1)).classList.add("ImagenActiva");
    indicator (Imagen_Actual + 1 );
}