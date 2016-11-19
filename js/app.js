// sroll here on window page open.
(function($) {
    window.scrollTo(0, 0);
    window.EVT = new EventEmitter2();

    var NavBar = (function ModuleFactory() {

        function removeNavActive() {
            $nav_bar_ul.children().each(function(e) {
                $(this).removeClass("active");
            });
        }

        function defaultNavBarHighlight() {
            if (location.hash === "") {
                $nav_home_id.addClass("active");
            }
        }

        function addActiveClassToNav() {
            if (location.hash !== null) {
                removeNavActive();
                var myLocation = location.hash.slice(1);
                nav_ids.forEach(function(e) {
                    var matcher = e.replace("#nav-", "");

                    if (matcher === myLocation) {
                        $(e).addClass("active");
                    }
                });
            }
        }

        function handleClick(evt) {
            evt.preventDefault();
            var HASH = $(this).attr('href');

            history.pushState(null, null, HASH);

            EVT.emit("hash-change", HASH);
            addActiveClassToNav();
        }

        function mobileNavClick(evt) {
            console.log("In mobile");
            if ($nav.hasClass('open')) {
                $nav.removeClass('open');
                $mobile_nav.removeClass('active-nav-button');
            } else {
                $nav.addClass('open');
                $mobile_nav.addClass('active-nav-button');
            }
        }

        function init(opts) {
            $nav_bar_ul = $(opts.nav_bar_ul);
            $nav_toggle = $(opts.nav_toggle);
            $nav_home_id = $(opts.nav_home_id);
            nav_ids = opts.nav_ids;

            $mobile_nav = $(opts.mobile_nav);
            $nav = $(opts.nav);
            defaultNavBarHighlight();

            $nav_bar_ul.on('click', 'a', handleClick);
            $nav_bar_ul.on('click', 'li', mobileNavClick);
            $mobile_nav.on('click', mobileNavClick);
        }

        var
            $nav_bar_ul,
            $nav_toggle,
            $nav_home_id,
            nav_ids,
            $mobile_nav,
            $nav;

        var publicAPI = {
            init: init
        };

        return publicAPI;
    })();

    var Sections = (function() {

        function closeSections() {
            $(active_section).removeClass("open");
        }

        function openApropriateSection(hash) {
            if (checkIfValidHash(hash)) {
                closeSections();
                active_section = "." + hash.slice(1);
                $(active_section).addClass("open");

                if (active_section === ".about") {
                    EVT.emit("about-open");
                }

                if (active_section === '.events') {
                    EVT.emit("events-open");
                }
            } else {
                active_hash = "#home";
                openApropriateSection(active_hash);
            }
        }

        function checkIfValidHash(hash) {
            var exists = false;
            valid_hashes.forEach(function(e) {
                if (hash === e) {
                    exists = true;
                }
            });
            return exists;
        }

        function init(opts) {
            active_section = opts.active_section;
            sections = opts.sections;
            valid_hashes = opts.valid_hashes;
            active_hash = opts.active_hash;

            openApropriateSection(active_section);
            EVT.on("hash-change", openApropriateSection);
        }


        var active_section, sections, valid_hashes, active_hash;

        var publicAPI = {
            init: init,
        };

        return publicAPI;

    })();

    var Graphs = (function() {
        function init(opts) {
            size = opts.size;
            fill = opts.fill;
            thickness = opts.thickness;
            graphs = opts.graphs;

            graphs.forEach(function(e) {
                $(e.name).circleProgress({
                    value: e.value,
                    size: size,
                    fill: {
                        color: fill
                    },
                    animation: {
                        duration: 1500
                    },
                    thickness: (thickness * size)
                }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(e.html);
                });
            });
        }

        var graphs, size, fill, thickness;

        var publicAPI = {
            init: init
        };

        return publicAPI;
    })();

    var Events = (function() {
        function doSomething() {
            displayHex();
            ticking = true;
        }

        function checkVisible(elm) {
            var rect = elm.getBoundingClientRect();
            var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
            return !(rect.bottom < 0 || rect.top - viewHeight >= 40);
        }

        function displayHex() {
            var li = $(element),
                random = Math.floor(Math.random() * li.length),
                elementHasClass = li.eq(random).hasClass('hex-see'),
                visibileHex = li.filter('.hex-see').length;

            li.eq(random).addClass('hex-see');

            if (visibileHex < li.length) setTimeout(displayHex, elementHasClass ? 0 : 300);
        }

        var initDisplay = _.once(doSomething);

        function fadeThemIn() {
            console.log("In it");
            if (checkVisible(evStart)) {
                initDisplay();
            }
        }

        function emptyClickHandle(evt) {
            evt.preventDefault();
        }

        var container, element, class_to_add, lastWindowY, evStart, ticking, $empty;

        function init(opts) {
            container = opts.container;
            element = opts.element;
            class_to_add = opts.class_to_add;
            ticking = false;
            lastWindowY = 0;
            evStart = document.querySelector(container);
            $empty = $(opts.empty);

            fadeThemIn();
            $empty.on('click', emptyClickHandle);
            EVT.on('window-scroll', fadeThemIn);
            EVT.on("events-open", fadeThemIn);
        }

        var publicAPI = {
            init: init,
        };

        return publicAPI;

    })();

    var moneyRaised = 15000,
        totalToRaise = 30000,
        numberOfEventsCompleted = 2,
        numberOfEvents = 7,
        firstDate = new Date('2016-09-12 12:00:00'),
        endDate = new Date('2016-12-05 12:00:00'),
        today = new Date(),
        oneDay = 24 * 60 * 60 * 1000, // hours*minutes*seconds*milliseconds,
        diffBetweenDays = Math.round(Math.abs((firstDate.getTime() - endDate.getTime()) / (oneDay))),
        diffBetweenToday = Math.round(Math.abs((today.getTime() - endDate.getTime()) / (oneDay))),
        ratioBetweenDays = diffBetweenToday / diffBetweenDays;


    $(document).ready(function() {

        NavBar.init({
            nav_bar_ul: ".nav-ul",
            nav_toggle: ".nav-toggle",
            nav_home_id: "#nav-home",
            nav_ids: ["#nav-home", "#nav-about", "#nav-history", "#nav-sponsors", "#nav-events"],
            mobile_nav: ".mobile-nav-toggle",
            nav: ".nav"
        });

        Sections.init({
            active_section: ".home",
            active_hash: location.hash,
            sections: [".home", ".about", ".history", ".sponsors", ".events"],
            valid_hashes: ["#home", "#about", "#history", "#sponsors", "#events"]
        });

        Graphs.init({
            graphs: [{
                name: ".money-raised-graph",
                value: moneyRaised / totalToRaise,
                html: "$" + moneyRaised
            }, {
                name: ".number-of-events-graph",
                value: numberOfEventsCompleted / numberOfEvents,
                html: numberOfEventsCompleted + "/" + numberOfEvents
            }, {
                name: ".days-left",
                value: 1 - ratioBetweenDays,
                html: diffBetweenToday
            }],
            size: 100,
            fill: "#0079c2",
            thickness: (1 / 20)
        });

        Events.init({
            container: ".events-section",
            element: ".hex",
            class_to_add: ".hex-see",
            empty: ".no-click"
        });
    });

    window.addEventListener('scroll', function() {
        EVT.emit('window-scroll');
    });

})(jQuery);
