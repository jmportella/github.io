// Toggle visibility of additional publications
document.getElementById('read-more-btn').addEventListener('click', function() {
    var additionalPublications = document.querySelector('.additional-publications');
    additionalPublications.style.display = additionalPublications.style.display === 'none' || additionalPublications.style.display === '' ? 'block' : 'none';
    this.textContent = this.textContent === 'Read More' ? 'Show Less' : 'Read More';
});

// Carousel functionality
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    currentSlide += direction;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

// Automatically move the slide every 5 seconds
setInterval(function() {
    moveSlide(1);
}, 5000);

// Initialize the additional publications to be hidden
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.additional-publications').style.display = 'none';
});