// ===================================
// FUTURISTIC PORTFOLIO - JAVASCRIPT
// Interactive Animations & Effects
// ===================================

// ===== CODE PROTECTION - BLOCK VIEW SOURCE =====
(function () {
    // Block right-click context menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });

    // Block keyboard shortcuts for viewing source
    document.addEventListener('keydown', function (e) {
        // Block Ctrl+U (View Source)
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
            e.preventDefault();
            return false;
        }
        // Block Ctrl+S (Save Page)
        if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
            e.preventDefault();
            return false;
        }
        // Block Ctrl+Shift+I (Developer Tools)
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
            e.preventDefault();
            return false;
        }
        // Block Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
            e.preventDefault();
            return false;
        }
        // Block Ctrl+Shift+C (Inspect Element)
        if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
            e.preventDefault();
            return false;
        }
        // Block F12 (Developer Tools)
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
    });

    // Clear console and show warning
    function showConsoleWarning() {
        console.clear();
        console.log('%c⛔ STOP!', 'color: red; font-size: 50px; font-weight: bold;');
        console.log('%cThis is a browser feature intended for developers.', 'font-size: 18px;');
        console.log('%cIf someone told you to copy-paste something here, it is a scam.', 'font-size: 18px; color: red;');
        console.log('%c© Sarjan - All Rights Reserved', 'font-size: 14px; color: cyan;');
    }

    // Show warning initially and periodically
    showConsoleWarning();
    setInterval(showConsoleWarning, 2000);

    // DevTools detection - detects window size difference
    (function detectDevTools() {
        const threshold = 160;
        setInterval(function () {
            const widthDiff = window.outerWidth - window.innerWidth > threshold;
            const heightDiff = window.outerHeight - window.innerHeight > threshold;
            if (widthDiff || heightDiff) {
                document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#0a0e27;color:#ff0000;font-size:1.5rem;text-align:center;font-family:sans-serif;padding:20px;"><div><h1>⛔ Developer Tools Detected</h1><p>Please close developer tools to view this website.</p><p style="color:#00f3ff;margin-top:20px;">© Sarjan - All Rights Reserved</p></div></div>';
            }
        }, 500);
    })();
})();

// ===== DOCUMENT READY =====
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initScrollProgress();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initStatCounters();
    initFormValidation();
    initShowMoreProjects();
});

// ===== SHOW MORE PROJECTS =====
function initShowMoreProjects() {
    const showMoreBtn = document.getElementById('show-more-projects');
    const portfolioGrid = document.querySelector('.portfolio-grid');

    if (!showMoreBtn || !portfolioGrid) return;

    showMoreBtn.addEventListener('click', () => {
        portfolioGrid.classList.toggle('expanded');
        showMoreBtn.classList.toggle('expanded');

        if (portfolioGrid.classList.contains('expanded')) {
            showMoreBtn.querySelector('span').textContent = 'Show Less Projects';
        } else {
            showMoreBtn.querySelector('span').textContent = 'Show More Projects';
        }
    });
}

// ===== PARTICLE SYSTEM =====
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    // Reduce particles on mobile for performance
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 30 : 60;
    const codeSymbols = ['{', '}', '<', '>', '/', '(', ')', '[', ']', ';', '=', '+', '-'];

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.symbol = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
            this.isSymbol = Math.random() > 0.7;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(0, 243, 255, ${this.opacity})`;

            if (this.isSymbol) {
                ctx.font = `${this.size * 8}px monospace`;
                ctx.fillText(this.symbol, this.x, this.y);
            } else {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Animation loop
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Connect nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.strokeStyle = `rgba(0, 243, 255, ${0.1 * (1 - distance / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===== SCROLL PROGRESS INDICATOR =====
function initScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;

        scrollProgress.style.height = progress + '%';
    });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger?.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    const hireBtn = document.getElementById('hire-me-btn');
    const contactBtn = document.getElementById('contact-me-btn');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Hero buttons
    hireBtn?.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });

    contactBtn?.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.aosDelay || 0;

                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ===== STAT COUNTERS =====
function initStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;

                statNumbers.forEach(stat => {
                    const target = parseInt(stat.dataset.target);
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            stat.textContent = Math.floor(current) + '+';
                            requestAnimationFrame(updateCounter);
                        } else {
                            stat.textContent = target + '+';
                        }
                    };

                    updateCounter();
                });
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// ===== FORM VALIDATION & WEB3FORMS SUBMISSION =====
function initFormValidation() {
    const contactForm = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');
    const submitBtn = contactForm?.querySelector('button[type="submit"]');

    contactForm?.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (!name || !email || !subject || !message) {
            showFormError('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormError('Please enter a valid email');
            return;
        }

        // Hide previous messages
        successMsg.style.display = 'none';
        errorMsg.style.display = 'none';

        // Show loading state
        const originalBtnText = submitBtn.querySelector('span').textContent;
        submitBtn.querySelector('span').textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            // Submit to Web3Forms
            const formData = new FormData(contactForm);

            // Debug: Log form data
            console.log('Submitting form to Web3Forms...');
            for (let pair of formData.entries()) {
                console.log(pair[0] + ': ' + pair[1]);
            }

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            // Debug: Log response
            console.log('Web3Forms Response:', data);

            if (data.success) {
                // Show success message
                successMsg.style.display = 'block';
                contactForm.reset();
                console.log('✅ Form submitted successfully!');

                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);
            } else {
                console.error('❌ Web3Forms returned error:', data);
                showFormError('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('❌ Network error:', error);
            showFormError('Network error. Please check your connection and try again.');
        } finally {
            // Reset button
            submitBtn.querySelector('span').textContent = originalBtnText;
            submitBtn.disabled = false;
        }
    });

    function showFormError(message) {
        errorMsg.textContent = '❌ ' + message;
        errorMsg.style.display = 'block';
        setTimeout(() => {
            errorMsg.style.display = 'none';
        }, 5000);
    }
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #00f3ff, #8b5cf6)' : 'linear-gradient(135deg, #ff0055, #ff00ff)'};
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== DOWNLOAD CV BUTTON =====
document.getElementById('download-cv')?.addEventListener('click', () => {
    showNotification('CV download started! ✓', 'success');
    // In production, trigger actual download
    // window.location.href = 'path/to/cv.pdf';
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// ===== ACTIVE NAV LINK HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('active');
        }
    });
});

// ===== CURSOR GLOW EFFECT REMOVED =====
// Custom cursor glow effect has been disabled

// ===== SKILL CARD PARTICLE BURST =====
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        createParticleBurst(card);
    });
});

function createParticleBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        const angle = (Math.PI * 2 * i) / 8;
        const velocity = 50;

        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #00f3ff;
            border-radius: 50%;
            pointer-events: none;
            left: ${centerX}px;
            top: ${centerY}px;
            z-index: 9999;
            box-shadow: 0 0 10px #00f3ff;
        `;

        document.body.appendChild(particle);

        const moveX = Math.cos(angle) * velocity;
        const moveY = Math.sin(angle) * velocity;

        let opacity = 1;
        const animation = setInterval(() => {
            const currentLeft = parseFloat(particle.style.left);
            const currentTop = parseFloat(particle.style.top);

            particle.style.left = currentLeft + moveX / 10 + 'px';
            particle.style.top = currentTop + moveY / 10 + 'px';
            opacity -= 0.05;
            particle.style.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(animation);
                particle.remove();
            }
        }, 30);
    }
}

// ===== CONSOLE GREETING =====
console.log('%c🚀 Welcome to Chandni\'s Portfolio!', 'color: #00f3ff; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with passion and futuristic design 💎', 'color: #ff00ff; font-size: 14px;');

// ===== ANIMATION KEYFRAMES (Added via JS for notification) =====
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        color: #00f3ff !important;
    }
`;
document.head.appendChild(style);
// Certificate data array with image paths
const certificates = [
    { title: "AWS Certified Developer", image: "cert_aws_developer_1764908577159.png" },
    { title: "Google Cloud Professional", image: "cert_google_cloud_1764908594999.png" },
    { title: "React Advanced Certification", image: "cert_react_advanced_1764908610941.png" },
    { title: "NodeJS Expert", image: "cert_nodejs_expert_1764908628110.png" },
    { title: "MongoDB Professional", image: "cert_mongodb_1764908644285.png" },
    { title: "Python Developer", image: "cert_python_1764908661394.png" },
    { title: "Docker & Kubernetes", image: "cert_docker_1764908678988.png" },
    { title: "UI/UX Design Master", image: "cert_uiux_1764908695947.png" },
    { title: "GraphQL Specialist", image: "cert_graphql_1764908727874.png" },
    { title: "Vue.js Certified", image: "cert_vuejs_1764908746228.png" },
    { title: "TypeScript Advanced", image: "cert_typescript_1764908761801.png" },
    { title: "Cyber Security Basics", image: "cert_cybersecurity_1764908779530.png" },
    { title: "DevOps Engineer", image: "cert_aws_developer_1764908577159.png" },
    { title: "Agile Scrum Master", image: "cert_google_cloud_1764908594999.png" },
    { title: "Firebase Developer", image: "cert_react_advanced_1764908610941.png" },
    { title: "Full-Stack Web Developer", image: "cert_nodejs_expert_1764908628110.png" }
];

// Certificate modal functionality
let currentCertIndex = 0;

// Initialize certificate modal on page load
document.addEventListener('DOMContentLoaded', () => {
    initCertificateModal();
});

function initCertificateModal() {
    const certCards = document.querySelectorAll('.cert-card');
    const certModal = document.getElementById('cert-modal');
    const certModalImage = document.getElementById('cert-modal-image');
    const certModalTitle = document.getElementById('cert-modal-title');
    const certModalClose = document.getElementById('cert-modal-close');
    const certPrev = document.getElementById('cert-prev');
    const certNext = document.getElementById('cert-next');

    if (!certModal) return;

    // Add click handlers to certificate cards
    certCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            currentCertIndex = index;
            showCertificate(index);
            certModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    certModalClose?.addEventListener('click', closeCertModal);
    certModal.addEventListener('click', (e) => {
        if (e.target === certModal) {
            closeCertModal();
        }
    });

    // Navigation buttons
    certPrev?.addEventListener('click', (e) => {
        e.stopPropagation();
        currentCertIndex = (currentCertIndex - 1 + certificates.length) % certificates.length;
        showCertificate(currentCertIndex);
    });

    certNext?.addEventListener('click', (e) => {
        e.stopPropagation();
        currentCertIndex = (currentCertIndex + 1) % certificates.length;
        showCertificate(currentCertIndex);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (certModal.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                currentCertIndex = (currentCertIndex - 1 + certificates.length) % certificates.length;
                showCertificate(currentCertIndex);
            } else if (e.key === 'ArrowRight') {
                currentCertIndex = (currentCertIndex + 1) % certificates.length;
                showCertificate(currentCertIndex);
            } else if (e.key === 'Escape') {
                closeCertModal();
            }
        }
    });

    function showCertificate(index) {
        const cert = certificates[index];
        certModalImage.src = cert.image;
        certModalImage.alt = cert.title;
        certModalTitle.textContent = cert.title;
    }

    function closeCertModal() {
        certModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ===== EMAILJS CONTACT FORM =====
(function () {
    // Initialize EmailJS - Replace with your public key from EmailJS dashboard
    emailjs.init('wrPvV8YlHoJU7FbV3');

    document.addEventListener('DOMContentLoaded', function () {
        const contactForm = document.getElementById('contact-form');
        const successMsg = document.getElementById('form-success');
        const errorMsg = document.getElementById('form-error');

        if (!contactForm) return;

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;

            successMsg.style.display = 'none';
            errorMsg.style.display = 'none';

            // Send email - Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
            emailjs.sendForm('service_p9nr88q', 'template_x1fnbto', this)
                .then(function () {
                    successMsg.style.display = 'block';
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, function (error) {
                    console.error('EmailJS Error:', error);
                    errorMsg.style.display = 'block';
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
        });
    });
})();
