/* Create particle effect */

const particlesContainer = document.getElementById('particles-container');

document.addEventListener('mousemove', (e) => {
    // Create particles at mouse position
    const mouseX = (e.clientX / window.innerWidth) * 100;
    const mouseY = (e.clientY / window.innerHeight) * 100;
    
    // Create temporary particle
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Small size
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Position at mouse
    particle.style.left = `${mouseX}%`;
    particle.style.top = `${mouseY}%`;
    particle.style.opacity = '0.6';
    
    particlesContainer.appendChild(particle);
    
    // Animate outward
    setTimeout(() => {
        particle.style.transition = 'all 2s ease-out';
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = '0';
        
        // Remove after animation
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }, 10);
});


/* For dropdown menu */

const dropdown = document.getElementById("dropdown");
const hamburger = document.getElementById("hamburger");
const links = document.querySelectorAll(".nav-left a, .dropdown a");

function toggleMenu() {
    dropdown.classList.toggle("show");
    hamburger.classList.toggle("active");
}

// Close menu when a link is clicked
links.forEach(link => {
    link.addEventListener("click", () => {
        dropdown.classList.remove("show");
        hamburger.classList.remove("active");
    });
});

// Close menu when screen is resized wider than 900px
window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        dropdown.classList.remove("show");
        hamburger.classList.remove("active");
    }
});

// Close menu when clicking outside
 document.addEventListener("click", (e) => {
    if (
        !dropdown.contains(e.target) && 
        !hamburger.contains(e.target)
    ) {
        dropdown.classList.remove("show");
        hamburger.classList.remove("active");
    }
});


/* Dark / Light Mode Toggle */

const modeButtons = document.querySelectorAll(".mode-toggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

const initialIcon = document.body.classList.contains("dark") ? "🌙" : "☀️";
modeButtons.forEach(btn => btn.textContent = initialIcon);

function toggleMode() {
    document.body.classList.toggle("dark");
    
    // Update icon
    const icon = document.body.classList.contains("dark") ? "🌙" : "☀️";
    modeButtons.forEach(btn => btn.textContent = icon);
    
    // Save preference
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

modeButtons.forEach(btn => btn.addEventListener("click", toggleMode));

