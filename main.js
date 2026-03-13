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
// Science of Simple Animation
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('process-track');
    if (!track) return;

    const cards = document.querySelectorAll('.process-card');
    const progressBar = document.getElementById('progress-bar');
    let currentStep = 0;
    let isPaused = false;
    const intervalTime = 1.8; // seconds

    const tl = gsap.timeline({
        repeat: -1,
        onUpdate: () => {
            if (isPaused) {
                tl.pause();
            }
        }
    });

    cards.forEach((card, index) => {
        // Animation for each step
        tl.to(progressBar, {
            width: `${(index + 1) * 25}%`,
            duration: intervalTime,
            ease: "none",
            onStart: () => {
                cards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            }
        });
    });

    // Hover to pause functionality (only if hovering over active card)
    cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            if (card.classList.contains('active')) {
                tl.pause();
            }
        });
        card.addEventListener('mouseleave', () => {
            tl.play();
        });
    });

    // Intersection Observer to start animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tl.play();
            } else {
                tl.pause();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(track);
});
