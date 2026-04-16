// Simple script for interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log('%cJAC Gallery loaded successfully! ✨', 'color: #ff6b6b; font-size: 16px;');
    
    // Add active class to current nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#ff6b6b';
        }
    });
});