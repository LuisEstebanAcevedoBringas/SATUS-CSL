//Galeria - Amenidades
const ImagenesContenedor = document.querySelectorAll(".Contenedor_Imagenes_Amenidades img");

const Delay = 5000;
let ContadorImagen = 0; // setting a variable to keep track of the current image (slide)
ImagenesContenedor[ContadorImagen].style.opacity = 1;
setInterval(ImagenSiguiente_GP, Delay);

function ImagenSiguiente_GP() {
    ImagenesContenedor[ContadorImagen].style.opacity = 0;
    ContadorImagen = (ContadorImagen+1) % ImagenesContenedor.length;
    ImagenesContenedor[ContadorImagen].style.opacity = 1;
}