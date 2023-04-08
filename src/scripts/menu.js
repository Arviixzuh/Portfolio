/* Menu Hamburguesa (Iconos) */
const burgerMenus = document.getElementById("menu-hamburguesa");
const burgerIcon = document.getElementById("menu-hamburguesa-icon");
const mainMenu = document.querySelector(".menu-main");
/* Secciones */
const botonSection1 = document.getElementById("proyectosBtn");
const botonSection2 = document.getElementById("habilidadesBtn");
const botonSection3 = document.getElementById("contactoBtn");
/* Menu de Configuracion */
const navBar = document.getElementById("menu-config");
const menuBtns = document.querySelectorAll(".bxs-cog");
const overlay = document.querySelector(".overlay");
const navBar1 = document.getElementById("config-icon-1");
/* Menu de Idioma */
const volverBtn = document.getElementById('volver-btn');
const idiomaBtn = document.getElementById('idiomaBtn');
const navBarIdioma = document.getElementById("sidebar-idioma");
/* Overlay */
const overlaySection = document.getElementById("overlay-section");

/* Menu principal */
burgerMenus.addEventListener("click", () => {
    if (mainMenu.classList.contains('menu-main')) {
        mainMenu.classList.remove('menu-main');
        mainMenu.classList.add('menu-open');
    } else {
        mainMenu.classList.remove('menu-open');
        mainMenu.classList.add('menu-main');
    }

    burgerIcon.classList.toggle("bx-x");
});

const sectionOvr = "overlay";
const sectionShow = "overlay-show";

function animarSection() {
    if (overlaySection.classList.contains(sectionOvr)) {
        overlaySection.classList.remove(sectionOvr);
        overlaySection.classList.add(sectionShow);
    } else {
        overlaySection.classList.remove(sectionShow);
        overlaySection.classList.add(sectionOvr);
    }
}

document.getElementById("config-icon").onclick = function () {
    animarSection();
}

navBar1.onclick = function () {
    animarSection();
}

overlaySection.onclick = function () {
    animarSection();
}

menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    });
});


idiomaBtn.addEventListener("click", () => {
    navBarIdioma.classList.toggle("open-idioma");
});

overlay.addEventListener("click", () => {
    navBar.classList.remove("open");
    if (navBarIdioma.classList.contains("open-idioma")) {
        navBarIdioma.classList.remove("open-idioma");
    }
});

navBar1.addEventListener("click", () => {
    navBar.classList.remove("open");
});

volverBtn.addEventListener("click", () => {
    navBarIdioma.classList.remove("open-idioma");
})

function sectionBtn() {
    if (mainMenu.classList.contains('menu-main')) {
        mainMenu.classList.remove('menu-main');
        mainMenu.classList.add('menu-open');
    } else {
        mainMenu.classList.remove('menu-open');
        mainMenu.classList.add('menu-main');
    }
    burgerIcon.classList.toggle("bx-x");
}

botonSection1.addEventListener("click", () => {
    let ancho = window.innerWidth;
    if (ancho < 800) {
        sectionBtn();
    } else {
        return;
    }
});

botonSection2.addEventListener("click", () => {
    let ancho = window.innerWidth;
    if (ancho < 800) {
        sectionBtn();
    } else {
        return;
    }
});

botonSection3.addEventListener("click", () => {
    let ancho = window.innerWidth;
    if (ancho < 800) {
        sectionBtn();
    } else {
        return;
    }
});