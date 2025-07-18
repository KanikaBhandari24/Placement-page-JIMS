let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + step + totalSlides) % totalSlides;

    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 5 seconds
function autoSlide() {
    setInterval(() => {
        moveSlide(1);
    }, 2000); // Change 5000 to a different value (ms) if you want it faster/slower
}

// Start auto-slide when DOM is ready
document.addEventListener('DOMContentLoaded', autoSlide);
