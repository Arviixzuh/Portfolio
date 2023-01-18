$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scroll').fadeIn();

        } else {
            $('.scroll').fadeOut();
        }
    })
})

window.addEventListener("scroll", function () {
    var header = document.querySelector("nav ul");
    header.classList.toggle("abajo", window.scrollY > 30);
})
