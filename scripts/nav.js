// Define navigation items
const navItems = [
    { name: "home", href: "#firstsection" },
    { name: "portfolio", href: "#secondsection" },
    { name: "about", href: "#thirdsection" },
];

// Create and append navigation items dynamically
const createNavLinks = () => {
    const nav = document.querySelector('.bottom-left-nav');
    const ul = document.createElement('ul');
    

    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.textContent = item.name;
        a.href = item.href;
        a.style.opacity = 0.5; // Default opacity for links

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
};

// Function to update active link and nav bar color
const updateActiveLink = () => {
    const sections = navItems.map(item => document.querySelector(item.href));
    const links = document.querySelectorAll('.bottom-left-nav a');

    let activeSection = null;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            activeSection = index; // Determine which section is active
        }
    });

    // Update link styles
    links.forEach((link, index) => {
        if (activeSection === 2) {
            // In the third section
            if (index === activeSection) {
                // Highlight the active link with full opacity and white color
                link.style.opacity = 1;
                link.style.color = "aliceblue"; // White color for the active link
            } else {
                // Dim inactive links but keep them white
                link.style.opacity = 0.5;
                link.style.color = "aliceblue"; // Dimmed white color
            }
        } else {
            // In the first or second section
            if (index === activeSection) {
                // Highlight the active link with full opacity and blue color
                link.style.opacity = 1;
                link.style.color = "#022ddc"; // Blue color for the active link
            } else {
                // Dim inactive links but keep them blue
                link.style.opacity = 0.5;
                link.style.color = "#022ddc"; // Dimmed blue color
            }
        }
    });

    // Change nav bar background color based on the active section
    const nav = document.querySelector('.bottom-left-nav a');
    if (activeSection === 0) {
        nav.style.color = "#022ddc"; // Color for section 1
    } else if (activeSection === 1) {
        nav.style.color = "022ddc"; // Color for section 2
    } else if (activeSection === 2) {
        nav.style.color = "aliceblue"; // Color for section 3
    }
};

// Initialize navigation and set up scroll event listener
document.addEventListener('DOMContentLoaded', () => {
    createNavLinks();
    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink); // Update on scroll
});

