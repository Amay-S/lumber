document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            var navbarToggler = document.querySelector('.navbar-toggler');
            if(!navbarToggler.classList.contains('collapsed')) {
                navbarToggler.click();
            }
        });
    });
});

