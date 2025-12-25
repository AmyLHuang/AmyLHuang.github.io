// Get the hamburger icon and sidebar elements
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('sidebar-close-btn');

// Add event listener for the hamburger icon to open the sidebar
hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');  // Add 'active' class to open sidebar
});

// Add event listener for the close button to close the sidebar
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');  // Remove 'active' class to close sidebar
});

// Close sidebar when clicking outside
 document.addEventListener("pointerdown", (e) => {
    if (
        !sidebar.contains(e.target) && 
        !hamburger.contains(e.target)
    ) {
        sidebar.classList.remove("active");
    }
});



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
        }, 1000);
    }, 10);
});