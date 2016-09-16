$(document).ready(function() {
    addActiveClassToNav();
    openAppropriateDiv(location.hash);

    $('.nav-ul li').on('click', 'a', function(e) {
        e.preventDefault();
        removeOpenFromSection();
        history.pushState(null, null, $(this).attr('href'));
        openAppropriateDiv(location.hash);
        addActiveClassToNav();
    });

    window.addEventListener('popstate', function(e) {
        console.log("popped");
        removeOpenFromSection();
        openAppropriateDiv(location.hash);
    });

    $('.nav-toggle').click(function(e) {
        e.preventDefault();
        toggleNavbar();
    });

    $('.nav-ul').on('click', 'li', function(e) {
        toggleNavbar();
    });
});

var removeNavActive = function() {
    $('.nav-ul li').each(function(e) {
        $(this).removeClass('active');
    });
};

var addActiveClassToNav = function() {
    if (location.hash !== null) {
        removeNavActive();
        if (location.hash === "" || location.hash === "#home") {
            $('#nav-home').addClass('active');
        } else if (location.hash === "#about") {
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

var openAppropriateDiv = function(hashValue) {
    switch (hashValue) {
        case "#home":
            $('.home').addClass('open');
            break;

        case "#about":
            $('.about').addClass('open');
            break;

        case "#history":
            $('.history').addClass('open');
            break;

        case "#sponsors":
            $('.sponsors').addClass('open');
            break;

        case "#events":
            $('.events').addClass('open');
            break;

        default:
            $('.home').addClass('open');
    }
};

var removeOpenFromSection = function() {
    $('.main div').each(function() {
        $(this).removeClass('open');
    });
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
