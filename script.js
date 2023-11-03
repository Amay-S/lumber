// drop down

document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            var navbarToggler = document.querySelector('.navbar-toggler');
            if (!navbarToggler.classList.contains('collapsed')) {
                navbarToggler.click();
            }
        });
    });
});


// video section 

document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const videoWrappers = document.querySelectorAll('.carousel-container .video-wrapper');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    const prevButton = document.querySelector('.carousel-btn-prev');
    const nextButton = document.querySelector('.carousel-btn-next');
    
    function moveCarousel(direction = 'next') {
        videoWrappers[index].classList.remove('active');
        indicators[index].classList.remove('active');

        if (direction === 'next') {
            index = (index + 1) % videoWrappers.length; // Move to the next video
        } else if (direction === 'prev') {
            index = (index - 1 + videoWrappers.length) % videoWrappers.length; // Move to the previous video
        }

        videoWrappers[index].classList.add('active');
        indicators[index].classList.add('active');
    }
    
    setInterval(() => moveCarousel('next'), 10000); // Move carousel every 5 seconds

    prevButton.addEventListener('click', () => moveCarousel('prev'));
    nextButton.addEventListener('click', () => moveCarousel('next'));
});



// // contact us 

// document.querySelector('form').addEventListener('submit', async function (e) {
//     e.preventDefault();

//     const data = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         subject: document.getElementById('subject').value,
//         message: document.getElementById('message').value
//     };

//     // Check if any field is empty
//     if (!data.name || !data.email || !data.subject || !data.message) {
//         alert('Please fill in all fields');
//         return;
//     }

//     try {
//         const response = await fetch('http://localhost:3000/sendmail', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });

//         const responseData = await response.json();
//         alert(responseData.message);
//     } catch (error) {
//         alert('Error sending email');
//     }
// });
