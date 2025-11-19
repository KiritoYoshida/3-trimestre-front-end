document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel img");

    if (!carousel || slides.length === 0) {
        console.warn("Carrossel não encontrado no HTML.");
        return;
    }

    let index = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    window.nextSlide = function () {
        index = (index + 1) % slides.length;
        updateCarousel();
    };

    window.prevSlide = function () {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    };

    setInterval(() => {
        nextSlide();
    }, 4000);
});

document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
});