// Toggle visibility of additional publications
document.getElementById('read-more-btn').addEventListener('click', function() {
    var additionalPublications = document.querySelector('.additional-publications');
    additionalPublications.style.display = additionalPublications.style.display === 'none' || additionalPublications.style.display === '' ? 'block' : 'none';
    this.textContent = this.textContent === 'Read More' ? 'Show Less' : 'Read More';
});
// Add hover effect to images
document.querySelectorAll('.additional-publication img').forEach(function(image) {
    image.addEventListener('mouseenter', function() {
        this.classList.add('enlarge');
    });
    image.addEventListener('mouseleave', function() {
        this.classList.remove('enlarge');
    });
});