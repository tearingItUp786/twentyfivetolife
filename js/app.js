// var container = document.querySelector('.testy');
// var bro = document.querySelector('.bro');
//
// container.addEventListener('click', function(e) {
//     if (e.target !== e.currentTarget) {
//         e.preventDefault();
//         var aLink = e.target.getAttribute('href');
//         history.pushState(null, null, aLink);
//
//         $.ajax({
//             url: aLink,
//             success: function(data) {
//                 console.log(data);
//                 bro.innerHTML = data;
//             },
//             error: function(jqXHR, textStatus, errorThrown) {
//                 console.log(textStatus, errorThrown);
//                 alert('Failed');
//             }
//         });
//     }
//     e.stopPropagation();
// }, false);
window.onload = function() {
    addActiveClassToNav();
};

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
