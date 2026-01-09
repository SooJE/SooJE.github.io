// --- Dark Mode Toggle ---
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved user preference in local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️'; // Change icon to sun
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    let theme = 'light';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark';
        themeToggleBtn.textContent = '☀️';
    } else {
        themeToggleBtn.textContent = '🌙';
    }
    
    // Save preference to local storage
    localStorage.setItem('theme', theme);
});

// --- Project Carousel Logic ---
const track = document.querySelector('.carousel-track');
const cards = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

function updateCarousel() {
    // Check if cards exist to prevent errors
    if(cards.length > 0) {
        const cardWidth = cards[0].getBoundingClientRect().width;
        // Move the track to the left by the width of the card * index
        track.style.transform = 'translateX(-' + (cardWidth * currentIndex) + 'px)';
    }
}

// Function called by the HTML onclick buttons
function moveSlide(direction) {
    currentIndex += direction;

    // Loop back to start if at the end
    if (currentIndex >= cards.length) {
        currentIndex = 0;
    } 
    // Loop to end if at the start and going back
    else if (currentIndex < 0) {
        currentIndex = cards.length - 1;
    }

    updateCarousel();
}

// Handle window resize to adjust carousel width automatically
window.addEventListener('resize', updateCarousel);
