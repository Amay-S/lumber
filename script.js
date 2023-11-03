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

    setInterval(() => moveCarousel('next'), 15000); // Move carousel every 15 seconds

    prevButton.addEventListener('click', () => moveCarousel('prev'));
    nextButton.addEventListener('click', () => moveCarousel('next'));
});


// JavaScript function to toggle images
function toggleImages() {
    const extraImages = document.querySelectorAll('.image-extra');
    const button = document.getElementById('toggleImages');
    const isShowingMore = button.textContent.includes('Less');

    // Toggle the display of the extra images
    extraImages.forEach((image, index) => {
        if (!isShowingMore) { // If we are showing less, show all images
            image.style.display = 'block';
        } else { // If we are showing more, hide all but the first three images
            image.style.display = 'none';
        }
    });

    // Update button text
    button.textContent = isShowingMore ? 'View More' : 'View Less';
}

// Initial state setup, hide extra images
document.addEventListener('DOMContentLoaded', (event) => {
    const extraImages = document.querySelectorAll('.image-extra');
    // Hide all but the first three images
    extraImages.forEach((image, index) => {
        if (index >= 3) { // Hide images after the first 3
            image.style.display = 'none';
        }
    });
});


