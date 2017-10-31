$(document).ready(function() {

    $('.nav-toggle').click(function(e) {
        e.preventDefault();
        toggleNavbar();
    });

    $('.nav-ul').on('click', 'li', function(e) {
        toggleNavbar();
    });

    $('#nav-events').addClass('active');

    // $(".rslides").responsiveSlides({
    //   speed: 1000,
    //   nav: true,
    //   navContainer: ".rslides_container"
    // });


    $(".owl-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        loop: true,
        lazyLoad: true,
        autoheight: true,
        autoplay: true,
        nav: false,
        dots: true,
        dotsEach: true
    });

});

var toggleNavbar = function() {
    if ($('.nav').hasClass('open')) {
        $('.nav').removeClass('open');
        $('.mobile-nav-toggle').removeClass('active-nav-button');
    } else {
        $('.nav').addClass('open');
        $('.mobile-nav-toggle').addClass('active-nav-button');
    }
};
