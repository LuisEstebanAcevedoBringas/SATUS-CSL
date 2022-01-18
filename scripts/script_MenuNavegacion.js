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