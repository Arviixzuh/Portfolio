$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $('.scroll.up').fadeIn();
        
        } else {
            $('.scroll.up').fadeOut();
        }
    })
})