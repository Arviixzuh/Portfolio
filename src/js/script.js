/* Boton Play/Pause (Musica) */
const play = 'bx-music';
const pause = 'bx-pause-circle'

var aud = document.getElementById("play-piano").children[0];
var isPlaying = false;
aud.pause();

function playPause() {
    if (isPlaying) {
        aud.pause();
        document.getElementById("music-icon").classList.remove(pause)
        document.getElementById("music-icon").classList.add(play)
    } else {
        aud.play();
        document.getElementById("music-icon").classList.remove(play)
        document.getElementById("music-icon").classList.add(pause)
    }
    isPlaying = !isPlaying;
}

document.getElementById("play-piano").onclick = function () {
    playPause()
}

/* Menu Hamburguesa (Iconos) */
const burgerMenus = document.getElementById("menu-hamburguesa")
const burgerIcon = document.getElementById("menu-hamburguesa-icon");

burgerMenus.addEventListener("click", () => {
    burgerIcon.classList.toggle("bx-x");
});

/* Menu de Configuracion */
const navBar = document.getElementById("menu-config"),
    menuBtns = document.querySelectorAll(".bxs-cog"),
    overlay = document.querySelector(".overlay"),
    navBar1 = document.getElementById("config-icon-1")

const sectionOvr = "overlay"
const sectionShow = "overlay-show"

function animarSection() {
    if (document.getElementById("overlay-section").classList.contains(sectionOvr)) {
        document.getElementById("overlay-section").classList.remove(sectionOvr)
        document.getElementById("overlay-section").classList.add(sectionShow)
    } else {
        document.getElementById("overlay-section").classList.remove(sectionShow)
        document.getElementById("overlay-section").classList.add(sectionOvr)
    }
}

document.getElementById("config-icon").onclick = function () {
    animarSection()
}

document.getElementById("config-icon-1").onclick = function () {
    animarSection()
}

document.getElementById("overlay-section").onclick = function () {
    animarSection()
}

menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    });
});

/* Menu de Idioma */
const volverBtn = document.getElementById('volver-btn');
const idiomaBtn = document.getElementById('idiomaBtn');
const navBarIdioma = document.getElementById("sidebar-idioma");
idiomaBtn.addEventListener("click", () => {
    navBarIdioma.classList.toggle("open-idioma")
});

overlay.addEventListener("click", () => {
    navBar.classList.remove("open");
    if (navBarIdioma.classList.contains("open-idioma")) {
        navBarIdioma.classList.remove("open-idioma")
    }
});

navBar1.addEventListener("click", () => {
    navBar.classList.remove("open");
});

volverBtn.addEventListener("click", () => {
    navBarIdioma.classList.remove("open-idioma")
})


/* Footer Animation (Redes) */
ScrollReveal().reveal('.redes-1', { delay: 1200, origin: 'top', distance: '20px', reset: false });
ScrollReveal().reveal('.redes-2', { delay: 1400, origin: 'top', distance: '20px', reset: false });
ScrollReveal().reveal('.redes-3', { delay: 1600, origin: 'top', distance: '20px', reset: false });
ScrollReveal().reveal('.redes-4', { delay: 1800, origin: 'top', distance: '20px', reset: false });
ScrollReveal().reveal('.redes-5', { delay: 2000, origin: 'top', distance: '20px', reset: false });

/* Footer Animation (Text) */
ScrollReveal().reveal('.footer-1', { delay: 300, origin: 'top', distance: '20px', reset: false });
ScrollReveal().reveal('.footer-2', { delay: 400, origin: 'top', distance: '20px', reset: false });
ScrollReveal().reveal('.footer-3', { delay: 500, origin: 'top', distance: '20px', reset: false });
ScrollReveal().reveal('.footer-4', { delay: 600, origin: 'top', distance: '20px', reset: false });
ScrollReveal().reveal('.footer-5', { delay: 700, origin: 'top', distance: '20px', reset: false });

/* Habilidades */
/* ScrollReveal().reveal('.habilidades-1', { delay: 300, origin: 'top', distance: '20px', reset: false });
ScrollReveal().reveal('.habilidades-2', { delay: 400, origin: 'top', distance: '20px', reset: false });
ScrollReveal().reveal('.habilidades-3', { delay: 500, origin: 'top', distance: '20px', reset: false });
ScrollReveal().reveal('.habilidades-4', { delay: 600, origin: 'top', distance: '20px', reset: false });
ScrollReveal().reveal('.habilidades-5', { delay: 800, origin: 'top', distance: '20px', reset: false });
ScrollReveal().reveal('.habilidades-6', { delay: 900, origin: 'top', distance: '20px', reset: false }); */

/* Main Animation */
ScrollReveal().reveal('.titulo-1', { delay: 300, origin: 'right', distance: '-200px' });
ScrollReveal().reveal('.titulo-2', { delay: 600, origin: 'right', distance: '-200px' });
ScrollReveal().reveal('.descripcion-1', { delay: 900, origin: 'right', distance: '-200px' });
ScrollReveal().reveal('.boton-inicial', { delay: 1200, origin: 'top', distance: '-200px' });