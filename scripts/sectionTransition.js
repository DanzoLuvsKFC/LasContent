document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main > div"); // Select all sections inside main
    const options = {
        root: null, // Use the viewport as the root
        threshold: 0.2, // Trigger when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add("fade-out"); // Initial state
        observer.observe(section);
    });
});