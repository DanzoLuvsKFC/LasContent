document.addEventListener('DOMContentLoaded', () => {
    const images = [
        '/LasContent/images/Puddles.png', 
        '/LasContent/images/ZEKEZEKE.png',
        '/LasContent/images/SKATE.png',
        '/LasContent/images/shades.png',
        '/LasContent/images/Handsome.png',
        '/LasContent/images/4BALL.png',
        '/LasContent/images/BeanieBoy.png',
        '/LasContent/images/Crown.png',
    ];

    let currentIndex = 0; // Start with the first image
    const rectangle = document.querySelector('.rectangle'); // Select the image element

    function cycleImages() {
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
        rectangle.src = images[currentIndex]; // Update the image source
    }

    // Cycle images every 3 seconds
    setInterval(cycleImages, 150);
});
