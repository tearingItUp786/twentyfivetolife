var container = document.querySelector('.testy');
var bro = document.querySelector('.bro');

container.addEventListener('click', function(e) {
    if (e.target !== e.currentTarget) {
        e.preventDefault();
        var aLink = e.target.getAttribute('href');
        history.pushState(null, null, aLink);

        $.ajax({
            url: aLink,
            success: function(data) {
                console.log(data);
                bro.innerHTML = data;
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
                alert("Failed");
            }
        });
    }
    e.stopPropagation();
}, false);
