document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    function checkScroll() {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const cardBottom = card.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            // Adjust thresholds for earlier fade (e.g., 90% from top, 10% from bottom)
            if (cardTop < windowHeight * 0.9 && cardBottom > windowHeight * 0.1) {
                card.classList.add("active");
                card.classList.remove("fade-out");
            } else {
                card.classList.remove("active");
                card.classList.add("fade-out");
            }
        });
    }

    // Initial check
    checkScroll();

    // Check on scroll with debouncing for performance
    let scrollTimeout;
    window.addEventListener("scroll", function () {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(checkScroll, 100); // Debounce scroll event
    });
});

