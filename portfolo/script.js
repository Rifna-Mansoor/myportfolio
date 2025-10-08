/* ==================================================================== */
/* 1. Toggle Navbar Icon & Menu on Mobile */
/* ==================================================================== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Changes the icon from 'menu' to 'x'
    navbar.classList.toggle('active'); // Toggles the 'active' class to show/hide the menu
};


/* ==================================================================== */
/* 2. Scroll Spy (Active Link Highlight) */
/* ==================================================================== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Adjust offset for better timing
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Remove 'active' from all links
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            // Add 'active' class to the corresponding navigation link
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    /* Sticky Header */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar when click links (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/* ==================================================================== */
/* 3. Scroll Reveal (Fade-in Animations) */
/* ==================================================================== */

// Note: To make the elements actually animate, you must define the CSS keyframes
// for the "show-animate" class in your style.css, as instructed in the video.

ScrollReveal({
    // reset: true, // Uncomment if you want elements to animate every time you scroll past them
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Animate elements in the Home section
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .projects-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/* ==================================================================== */
/* 4. Typed.js (Typing Animation) */
/* ==================================================================== */

// NOTE: You must include the Typed.js library in your HTML for this to work.
// Add this line inside your <head> or before the closing </body> tag:
// <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>

const typed = new Typed('.text-animation span', {
    strings: ['UI/UX Engineer Trainee', 'Web Developer', 'Front-End Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});