document.addEventListener('DOMContentLoaded', () => {
    // Navigation scroll effect
    const navBar = document.querySelector('.nav-bar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navBar.style.backgroundColor = 'rgba(249, 247, 242, 0.95)';
            navBar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
        } else {
            navBar.style.backgroundColor = 'transparent';
            navBar.style.boxShadow = 'none';
        }
    });

    // Reveal animations on scroll
    const reveals = document.querySelectorAll('section, .product-card, .container > div');
    
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(el => {
        el.classList.add('reveal');
        revealOnScroll.observe(el);
    });
});
