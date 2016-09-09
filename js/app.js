$(document).ready(function() {
    addActiveClassToNav();
    $('.nav-toggle').click(function(e) {
        e.preventDefault();
        toggleNavbar();
    });

    $('.nav-ul').on('click', 'li', function(e) {
      toggleNavbar();
    });
});

window.addEventListener('hashchange', function() {
    addActiveClassToNav();
});

var removeNavActive = function() {
    var nav_ul = document.querySelector('.nav-ul');
    for (var i = 0; i < nav_ul.children.length; i++) {
        if (nav_ul.children[i].firstChild.classList.contains('active')) {
            nav_ul.children[i].firstChild.classList.remove('active');
        }
        if (nav_ul.children[i].classList.contains('active')) {
            nav_ul.children[i].classList.remove('active');
        }
    }
};

var addActiveClassToNav = function() {
    if (location.hash !== "") {
        var current_view = document.querySelector("a[href='" + location.hash + "']").parentElement;
        removeNavActive();
        current_view.classList.add("active");
    }
};

var toggleNavbar = function() {
    if ($('.nav').hasClass('open')) {
        $('.nav').removeClass('open');
        $('.mobile-nav-toggle').removeClass('active-nav-button');
    } else {
        $('.nav').addClass('open');
        $('.mobile-nav-toggle').addClass('active-nav-button');
    }
};
