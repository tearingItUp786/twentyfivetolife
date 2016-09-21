var lastWindowY = 0,
    evStart = document.querySelector('.events-section'),
    ticking = false;

$(document).ready(function() {
    addActiveClassToNav();
    openAppropriateDiv(location.hash);

    $('.nav-ul').on('click', 'a', function(e) {
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
    var moneyRasied = 15000
    $('#circle').circleProgress({
        value: (moneyRasied / 30000),
        fill: {
            color: "#0079c2"
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(parseInt(moneyRasied));
    });

});

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

var removeNavActive = function() {
    $('.nav-ul li').each(function(e) {
        $(this).removeClass('active');
    });

};

var removeOpenFromSection = function() {
    $('.main div').each(function() {
        $(this).removeClass('open');
    });
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

var toggleNavbar = function() {
    if ($('.nav').hasClass('open')) {
        $('.nav').removeClass('open');
        $('.mobile-nav-toggle').removeClass('active-nav-button');
    } else {
        $('.nav').addClass('open');
        $('.mobile-nav-toggle').addClass('active-nav-button');
    }
};

function doSomething() {
    console.log("in do something");
    displayHex();
    ticking = true;
}


function checkVisible(elm) {
    console.log("Checking visble");
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 40);
}

function displayHex() {
    var li = $('.hex'),
        random = Math.floor(Math.random() * li.length),
        elementHasClass = li.eq(random).hasClass('hex-see'),
        visibileHex = li.filter('.hex-see').length;

    li.eq(random).addClass('hex-see');

    if (visibileHex < li.length) setTimeout(displayHex, elementHasClass ? 0 : 300);
}

var initDisplay = _.once(doSomething);

window.addEventListener('scroll', function() {
    if (checkVisible(evStart)) {
        initDisplay();
    }
});
