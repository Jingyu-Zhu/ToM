// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const checkbox = this.querySelector('input[type="checkbox"]');
        
        if (!checkbox.checked) {
            alert('Please agree to subscribe to the newsletter.');
            return;
        }
        
        if (email) {
            // Here you would typically send the email to your backend
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        }
    });
}

// Button click handlers
document.querySelectorAll('.btn-action, .btn-info, .btn-step').forEach(button => {
    button.addEventListener('click', function(e) {
        // Add a subtle animation effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Handle different button actions
        if (this.classList.contains('btn-action')) {
            // Scroll to action section
            document.getElementById('action').scrollIntoView({
                behavior: 'smooth'
            });
        } else if (this.classList.contains('btn-info')) {
            // Scroll to info section or show more detailed info
            document.getElementById('info').scrollIntoView({
                behavior: 'smooth'
            });
        } else if (this.classList.contains('btn-step')) {
            if (!this.classList.contains('unavailable')) {
                // Handle step button click
                const stepTitle = this.parentElement.querySelector('h3').textContent;
                alert(`You clicked on "${stepTitle}". This would typically lead to more detailed information about this step.`);
            }
        }
    });
});

// Donate button handler
const donateBtn = document.querySelector('.btn-donate');
if (donateBtn) {
    donateBtn.addEventListener('click', function() {
        // This would typically open a donation modal or redirect to a donation page
        alert('Thank you for your interest in donating! This would typically redirect to a secure donation page.');
    });
}

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.step-card, .info-content, .quote-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Social media link handlers (placeholder)
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const platform = this.getAttribute('aria-label');
        alert(`This would redirect to the Threads of Minds ${platform} page.`);
    });
});

// Add hover effects to cards
document.querySelectorAll('.step-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = '#8B5CF6';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = '#e2e8f0';
    });
});

// Form validation enhancement
const emailInput = document.querySelector('input[type="email"]');
if (emailInput) {
    emailInput.addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
            this.style.borderColor = '#ef4444';
            this.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
        } else {
            this.style.borderColor = '#475569';
            this.style.boxShadow = 'none';
        }
    });
    
    emailInput.addEventListener('input', function() {
        if (this.style.borderColor === 'rgb(239, 68, 68)') {
            this.style.borderColor = '#475569';
            this.style.boxShadow = 'none';
        }
    });
}
