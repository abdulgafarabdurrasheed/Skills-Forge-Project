const themeToggle = document.getElementById('theme-toggle');
const themeToggleText = document.querySelector('.theme-toggle-text');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggleText.textContent = '☀️ Light';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggleText.textContent = '☀️ Light';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleText.textContent = '🌙 Dark';
        localStorage.setItem('theme', 'light');
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

document.querySelectorAll('.project-card').forEach((card, index) => {
    if (index === 1) card.classList.add('fade-in-delay-1');
    if (index === 2) card.classList.add('fade-in-delay-2');
    observer.observe(card);
});

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.main-nav');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('nav-active');
    });
}

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (hamburger) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('nav-active');
    }
}));
