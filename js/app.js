$(document).ready(function() {
    var navbar = document.querySelector('.nav-ul');
    var content = document.querySelector('.main');

    navbar.addEventListener('click', function(e) {

        if (e.target !== e.currentTarget) {
            e.preventDefault();
            var aLink = e.target.getAttribute('href');
            var data = aLink.replace(".html", "");
            data = data.replace("/", "");

            history.pushState(data, null, aLink);
            requestContent(aLink);
        }
        e.stopPropagation();
    }, false);

    window.addEventListener('popstate', function(e) {
        var page = e.state;
        if (page !== null) {
            requestContent(page + ".html");
        }
    });
});

var requestContent = function(file) {
    $.get(file, function(data) {
        $('.main').html(data);
    });
};
