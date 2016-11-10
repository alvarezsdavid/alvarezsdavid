function muestra(id, time){
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top
    }, time);
}