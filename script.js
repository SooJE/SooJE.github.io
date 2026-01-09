/* --- Dark Mode Logic --- */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check if user previously selected dark mode
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        themeToggle.innerText = '☀️';
    }
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    let theme = 'light';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark-mode';
        themeToggle.innerText = '☀️';
    } else {
        themeToggle.innerText = '🌙';
    }
    // Save preference to local storage
    localStorage.setItem('theme', theme);
});

/* --- Carousel Logic --- */
const track = document.querySelector('.carousel-track');
let index = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.project-card');
    const totalSlides = slides.length;

    index += direction;

    // Loop back to start/end
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    const slideWidth = slides[0].clientWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Handle window resize to reset carousel alignment
window.addEventListener('resize', () => {
    const slides = document.querySelectorAll('.project-card');
    if(slides.length > 0) {
        const slideWidth = slides[0].clientWidth;
        track.style.transform = `translateX(-${index * slideWidth}px)`;
    }
});
