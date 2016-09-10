$(document).ready(function() {
    addActiveClassToNav();
    if (location.hash === "" || location.hash === "#home") {
        $('.home').addClass('open');
    } else if (location.hash === "#about") {
        $('.about').addClass('open');
    } else if (location.hash === "#history") {
        $('.history').addClass('open');
    } else if (location.hash === '#sponsors') {
        $('.sponsors').addClass('open');
    }
    $('.nav-ul li').on('click', 'a', function(e) {
        e.preventDefault();
        removeOpenFromSection();
        history.pushState(null, null, $(this).attr('href'));
        if (location.hash === "" || location.hash === "#home") {
            $('.home').addClass('open');
        } else if (location.hash === "#about") {
            $('.about').addClass('open');
        } else if (location.hash === "#history") {
            $('.history').addClass('open');
        } else if (location.hash === '#sponsors') {
            $('.sponsors').addClass('open');
        }
        addActiveClassToNav();
    });

    var removeOpenFromSection = function() {
        $('.main div').each(function() {
            $(this).removeClass('open');
        });
    };

    window.addEventListener('popstate', function(e) {
        console.log("popped");
        removeOpenFromSection();
        if (location.hash === "" || location.hash === "#home") {
            $('.home').addClass('open');
        } else if (location.hash === "#about") {
            $('.about').addClass('open');
        } else if (location.hash === "#history") {
            $('.history').addClass('open');
        } else if (location.hash === '#sponsors') {
            $('.sponsors').addClass('open');
        }
    });

    $('.nav-toggle').click(function(e) {
        e.preventDefault();
        toggleNavbar();
    });

    $('.nav-ul').on('click', 'li', function(e) {
        toggleNavbar();
    });
});

// $(document).ready(function() {
//     addActiveClassToNav();
//     $('.nav-toggle').click(function(e) {
//         e.preventDefault();
//         toggleNavbar();
//     });
//
//     $('.nav-ul').on('click', 'li', function(e) {
//       toggleNavbar();
//     });
// });
//
// window.addEventListener('hashchange', function() {
//     addActiveClassToNav();
// });
//
var removeNavActive = function() {
    $('.nav-ul li').each(function(e) {
        $(this).removeClass('active');
    })
};

var addActiveClassToNav = function() {
    if (location.hash !== null) {
        removeNavActive();
        if (location.hash === "#about") {
            $('#nav-about').addClass('active');
        } else if (location.hash === "#history") {
            $('#nav-history').addClass('active');
        } else if (location.hash === '#sponsors') {
            $('#nav-sponsors').addClass('active');
        } else if (location.hash === '#events') {
            $('#nav-events').addClass('active');
        }
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
