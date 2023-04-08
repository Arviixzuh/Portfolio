const preloader = document.querySelector(".preloader")
window.addEventListener("load", () => {
    /* Main Animation */
    ScrollReveal().reveal('.titulo-1', { delay: 300, origin: 'right', distance: '-200px' });
    ScrollReveal().reveal('.titulo-2', { delay: 600, origin: 'right', distance: '-200px' });
    ScrollReveal().reveal('.descripcion-1', { delay: 900, origin: 'right', distance: '-200px' });
    ScrollReveal().reveal('.boton-inicial', { delay: 1200, origin: 'top', distance: '-200px' });

    /* Redes animation */
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

    preloader.style.opacity = '0'
    setTimeout(() => {
        preloader.style.display = 'none'
    }, 3000)
})


