//Menu de navegacion plegable (responsive)
const MenuNavegacion = document.querySelector(".Menu_Navegacion")
const MenuMovil = document.querySelector(".Menu_Movil")

MenuMovil.addEventListener('click', () => {
    const visible = MenuNavegacion.getAttribute("data-visible");
    if (visible === "false"){
        MenuNavegacion.setAttribute("data-visible", true);
        MenuMovil.setAttribute("aria-expanded", true);
    }
    else {
        MenuNavegacion.setAttribute("data-visible", false);
        MenuMovil.setAttribute("aria-expanded", false);
    }
});

//Galeria - Galeria Principal
const ImagenesContenedor = document.querySelectorAll(".Contenedor_Imagenes_GaleriaPrincipal img");

const Delay = 5000;
let ContadorImagen = 0; // setting a variable to keep track of the current image (slide)
ImagenesContenedor[ContadorImagen].style.opacity = 1;
setInterval(ImagenSiguiente_GP, Delay);

function ImagenSiguiente_GP() {
    ImagenesContenedor[ContadorImagen].style.opacity = 0;
    ContadorImagen = (ContadorImagen+1) % ImagenesContenedor.length;
ImagenesContenedor[ContadorImagen].style.opacity = 1;
}

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