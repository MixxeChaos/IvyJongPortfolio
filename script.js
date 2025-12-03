// Project Data
// Stores all project information: title, description, technologies, features
// Used dynamically in the project modal

const projectsData = {
    1: {
        title: "PKS Visitor Management System",
        description: "A system built on top of android platform and a website platform for user interaction. The visitor is able to make an appointment through the website or mobile phone browser by filling in their personal details and the purpose of visiting Politeknik Kuching Sarawak (PKS). The visitor will be notified by receiving an email to know whether their appointment status is approved or denied.",
        tech: ["HTML", "CSS", "JavaScript", "Java Server Page", "PHP", "Bootstrap", "Java (Android)", "MySQL"],
        features: [
            "Web and mobile platform support",
            "Appointment scheduling system",
            "Automated email notification system",
            "Admin approval workflow",
            "Improved UI using Bootstrap framework"
        ]
    },
    2: {
        title: "ZoomRental Car Rental Management System",
        description: "A complete web-based database application designed for car rental business operations. The system is able to store all relevant data and support adding, updating, and deleting records such as rental booking, customer details, vehicle and so on. Features a responsive interface built with Bootstrap for seamless user experience across devices.",
        tech: ["PHP", "Bootstrap", "JavaScript", "MySQL"],
        features: [
            "Rental booking management",
            "Customer database with full CRUD operations",
            "Vehicle inventory tracking",
            "Responsive design with Bootstrap",
            "Real-time data updates"
        ]
    },
    3: {
        title: "ART Mobile App Prototype",
        description: "A comprehensive UX/UI project for an Autonomous Rapid Transit (ART) mobile application. The project involved conducting user interviews with the Kuching/Samarahan community, creating affinity diagrams from the findings, developing detailed user personas, and designing a high-fidelity Figma prototype. The app features an intelligent map module that highlights ART stations and nearby points of interest including tourist attractions, schools, malls, and religious sites. Includes smart route suggestions and accessibility features for visually impaired users.",
        tech: ["Figma", "UI/UX Design", "Human & Computer Interaction", "User Research", "Prototyping"],
        features: [
            "User interview and research methodology",
            "Affinity diagram analysis",
            "User persona development",
            "Interactive map with ART stations",
            "Points of interest integration",
            "Intelligent route planning",
            "Location search functionality",
            "Accessibility features for visually impaired",
            "Think-aloud usability testing"
        ]
    },
    4: {
        title: "2D Environmental Conservation Game",
        description: "A retro-styled 2D video game developed using C++ and the OpenGL graphics library. The game draws inspiration from the visual aesthetics of 1970s and 1980s arcade games while focusing on modern themes of environmental conservation. Players will engage with environmental challenges through classic 2D gameplay mechanics.",
        tech: ["C++", "OpenGL", "Computer Graphics"],
        features: [
            "Retro 1970s-80s visual style",
            "Environmental conservation theme",
            "Custom 2D graphics rendering",
            "OpenGL graphics pipeline",
            "Game physics and collision detection",
            "Interactive gameplay mechanics"
        ]
    },
    5: {
        title: "Environmental Awareness Application",
        description: "An object-oriented Java desktop application focused on raising awareness. The application includes educational content, quizzes, and gamification elements to encourage learning and engagement. The application features a Graphical User Interface (GUI) designed to fit within a smartphone display resolution but is intended to be run on a desktop.",
        tech: ["Java", "Java Swing/AWT", "Object-Oriented Programming"],
        features: [
            "Educational content modules",
            "Interactive quiz system",
            "Gamification elements for engagement",
            "Smartphone-style GUI",
            "Score tracking and progress monitoring",
            "User-friendly navigation"
        ]
    }
};

// Mobile Navigation Toggle (JavaSFeature)
// Handles hamburger menu click for mobile devices
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Show/hide menu
    navToggle.classList.toggle('active'); // Animate hamburger icon
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar Scroll Effect (JavaSFeature)
// Adds shadow or style changes when scrolling
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth Scrolling for Navigation Links (JavaSFeature)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Adjust for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Project Filtering System (JavaSFeature)
// Filter project cards based on category buttons
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (filterValue === 'all') {
                card.classList.remove('hidden');
                // Add animation
                card.style.animation = 'fadeInUp 0.5s ease';
            } else if (cardCategory.includes(filterValue)) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeInUp 0.5s ease';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Project Modal with Dynamic Content (JavaSFeature)
// Opens modal and dynamically injects project data
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const viewBtns = document.querySelectorAll('.btn-view');

viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-project');
        const project = projectsData[projectId];
        
        // Generate modal content
        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            
            <div class="modal-tech">
                <h3>Technologies Used</h3>
                <div class="skill-tags">
                    ${project.tech.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-tech">
                <h3>Key Features</h3>
                <ul class="soft-skills-list">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
});

// Close modal functionality
modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Contact Form Validation and Submission (JavaSFeature)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate form
    if (!name || !email || !message) {
        showFormStatus('Please fill in all fields.', 'error');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormStatus('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission (in production, this would send to a server)
    showFormStatus('Thank you for your message! I will get back to you soon.', 'success');
    contactForm.reset();
    
    // Log to console for demonstration
    console.log('Form submitted:', { name, email, message });
});

function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
}

// Back to Top Button (JavaSFeature)
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Active Navigation Link Highlighting (JavaSFeature)
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active-link');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active-link');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Download Resume Button with Tracking (JavaSFeature)
const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', (e) => {
    // Track download event (in production, this could send analytics)
    console.log('Resume downloaded at:', new Date().toISOString());
    
    // Show confirmation message
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = '<span>✓</span> Downloaded!';
    downloadBtn.style.backgroundColor = '#4CAF50';
    
    setTimeout(() => {
        downloadBtn.innerHTML = originalText;
        downloadBtn.style.backgroundColor = '';
    }, 2000);
});

// Scroll Animation Observer (JavaSFeature)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.querySelectorAll('.project-card, .skills-box, .edu-item').forEach(el => {
    observer.observe(el);
});

// Dynamic Year in Footer (JavaSFeature)
const footerYear = document.querySelector('.footer p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = `&copy; ${currentYear} Ivy Jong Zi Eng. All rights reserved.`;
}

// Keyboard Navigation Enhancement (JavaSFeature)
// Enhance keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    // Tab key navigation enhancement for project cards
    if (e.key === 'Tab' && !e.shiftKey) {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('btn-view')) {
            const projectCard = focusedElement.closest('.project-card');
            if (projectCard) {
                projectCard.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    projectCard.style.transform = '';
                }, 300);
            }
        }
    }
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully');
    
    // Set focus to first navigation item for accessibility
    const firstNavLink = document.querySelector('.nav-link');
    if (firstNavLink) {
        firstNavLink.setAttribute('tabindex', '0');
    }
    
    // Add loading animation complete class
    document.body.classList.add('loaded');
});

// Handle image loading errors gracefully
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('error', function() {
        this.style.backgroundColor = '#2C2C2C';
        this.alt = 'Image not available';
        console.warn('Image failed to load:', this.src);
    });
});

// Log performance metrics
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page fully loaded in ${loadTime.toFixed(2)}ms`);
});

// Background particle canvas effect (JavaSFeature)
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Create particles
const particles = [];
const particleCount = 80;

for (let i = 0; i < particleCount; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.9)";

    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });

    // Connect lines
    ctx.strokeStyle = "rgba(255,255,255,0.05)";
    particles.forEach((p1, i) => {
        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 130) {
                ctx.lineWidth = 0.3;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }
    });

    requestAnimationFrame(animateParticles);
}

animateParticles();
