// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Add dark mode toggle button in header
    const header = document.querySelector('header');

    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'dark-mode-toggle';
    toggleBtn.textContent = 'Toggle Dark Mode';
    header.appendChild(toggleBtn);

    // Check for saved preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Smooth scrolling for nav links (optional enhancement)
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
