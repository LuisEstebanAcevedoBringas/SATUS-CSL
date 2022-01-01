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

//Galeria - Proyecto
let i = 0; // current slide
let j = 4; // total slides

const images = document.querySelectorAll(".Contenedor_Imagenes_Proyecto img");

function Next_Image(){
    document.getElementById("Content" + (i+1)).classList.remove("ImagenActiva");
    i = ( j + i + 1) % j;
    document.getElementById("Content" + (i+1)).classList.add("ImagenActiva");
    indicator( i + 1 );
}

function Prev_Image(){
    document.getElementById("Content" + (i+1)).classList.remove("ImagenActiva");
    i = (j + i - 1) % j;
    document.getElementById("Content" + (i+1)).classList.add("ImagenActiva");
    indicator (i + 1 );
}