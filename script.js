// Create particle effect
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


//  For side menu

function toggleMenu(event) {
    var sideMenu = document.querySelector('.side-menu');
    var toggleButton = document.querySelector('.hamburger');
    
    // Toggle the 'open' class to show/hide the side menu
    sideMenu.classList.toggle('open');
    
    // Close menu when clicking outside
    if (sideMenu.classList.contains('open')) {
        document.addEventListener('click', function closeOnClickOutside(event) {
            if (!sideMenu.contains(event.target) && !toggleButton.contains(event.target)) {
                sideMenu.classList.remove('open');
                document.removeEventListener('click', closeOnClickOutside); // Remove listener after closing
            }
        });
    } else {
        document.removeEventListener('click', closeOnClickOutside); // Remove listener when menu is closed
    }
}

// For disabled links
document.querySelectorAll('.disabled-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents navigation
    });
});
