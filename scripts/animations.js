document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    // Select only child elements within each section
    const elementsToAnimate = document.querySelectorAll(
        ".firstsection > *, .secondsection > *, .thirdsection > *"
    );
    elementsToAnimate.forEach(element => {
        element.classList.add('hidden'); // Start as hidden
        observer.observe(element);
    });
});