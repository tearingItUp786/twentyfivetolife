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
window.addEventListener('hashchange', function(e) {
    console.log('this view\'s id is ', location.hash.substr(1));
    var current_view = document.querySelector("a[href='" + location.hash + "']");
    removeNavActive();
    current_view.classList.add("active");
});

var removeNavActive = function() {
    var nav_ul = document.querySelector('.nav-ul');
    for (var i = 0; i < nav_ul.children.length; i++) {
        if (nav_ul.children[i].firstChild.classList.contains('active')) {
            nav_ul.children[i].firstChild.classList.remove('active');
        }
    }
};
