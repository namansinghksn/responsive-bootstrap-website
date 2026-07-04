console.log("Website Loaded Successfully");

// ================= PRELOADER =================
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(function() {
        preloader.classList.add('hide');
    }, 500);
});

// ================= COUNTER ANIMATION =================
const counters = document.querySelectorAll(".counter-value");

// Use Intersection Observer for better performance
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            startCounter(counter);
            counterObserver.unobserve(counter);
        }
    });
}, observerOptions);

counters.forEach(counter => {
    counterObserver.observe(counter);
});

function startCounter(counter) {
    const target = Number(counter.getAttribute("data-target"));
    const duration = 2000; // milliseconds
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * target);
        
        counter.innerText = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// ================= BACK TO TOP BUTTON =================
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

topBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ================= NAVBAR ACTIVE LINK =================
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// ================= SMOOTH SCROLL FOR NAV LINKS =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ================= CONTACT FORM HANDLING =================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[placeholder="Your Name"]').value;
        const email = this.querySelector('input[placeholder="Email Address"]').value;
        const subject = this.querySelector('input[placeholder="Subject"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// ================= NEWSLETTER FORM HANDLING =================
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (!email) {
            alert('Please enter your email address.');
            return;
        }
        
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// ================= TESTIMONIAL AUTO-PLAY =================
const testimonialCarousel = document.getElementById('testimonialCarousel');
if (testimonialCarousel) {
    const carousel = new bootstrap.Carousel(testimonialCarousel, {
        interval: 5000,
        wrap: true,
        pause: 'hover'
    });
}

// ================= SCROLL ANIMATION FOR ELEMENTS =================
const animatedElements = document.querySelectorAll('.service-card, .feature-box, .portfolio-card, .team-card');

const animateObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    animateObserver.observe(el);
});

// ================= STICKY NAVBAR SHADOW =================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});

console.log("All features loaded successfully!");