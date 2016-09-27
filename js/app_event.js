$(document).ready(function() {

    $('.nav-toggle').click(function(e) {
        e.preventDefault();
        toggleNavbar();
    });

    $('.nav-ul').on('click', 'li', function(e) {
        toggleNavbar();
    });

    $('#nav-events').addClass('active');

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

var wallopEl = document.querySelector('.Wallop');
var slider = new Wallop(wallopEl);
var carousel = window.setInterval(function() {
    slider.next();
}, 6000);

var button = document.getElementsByTagName('button');
console.log(button);
for (var i = 0; i < button.length; i++) {
    (function(currentI) {
        console.log(button[currentI]);
        button[currentI].addEventListener('click', function() {
            clearInterval(carousel);
            carousel = window.setInterval(function() {
                slider.next();
            }, 6000);
        });
    })(i);

}
