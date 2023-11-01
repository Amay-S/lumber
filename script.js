// drop down

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

// contact us 

document.querySelector('form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('http://localhost:3000/sendmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.status === 200) {
            alert('Email sent successfully');
        } else {
            alert('Error sending email');
        }
    } catch (error) {
        alert('Error sending email');
    }
});
