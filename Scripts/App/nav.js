//Nav
// ----------------------------------------------------------------------------------
$('#navToggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.mobile-nav__inner__links').toggleClass('open');
    $('.mobile-nav').toggleClass('open');
});

var scroll = $(window).scrollTop();

if (scroll >= 200) {
    $(".nav").addClass("white-nav");
    $(".mobile-nav").addClass("white-nav");
} else {
    $(".nav").removeClass("white-nav");
    $(".mobile-nav").removeClass("white-nav");
}

$(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".nav").addClass("white-nav");
        $(".mobile-nav").addClass("white-nav");
    } else {
        $(".nav").removeClass("white-nav");
        $(".mobile-nav").removeClass("white-nav");
    }

});



