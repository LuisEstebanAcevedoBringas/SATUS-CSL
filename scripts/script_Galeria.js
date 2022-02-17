//Galeria - Galeria Principal
const ImagenesContenedorGaleria = document.querySelectorAll(".Contenedor_Imagenes_Galeria img");

const DelayG = 5000;
let ContadorImagenG = 0; // setting a variable to keep track of the current image (slide)
ImagenesContenedorGaleria[ContadorImagenG].style.opacity = 1;
setInterval(ImagenSiguiente_G, DelayG);

function ImagenSiguiente_G() {
    ImagenesContenedorGaleria[ContadorImagenG].style.opacity = 0;
    ContadorImagenG = (ContadorImagenG+1) % ImagenesContenedorGaleria.length;
    ImagenesContenedorGaleria[ContadorImagenG].style.opacity = 1;
}