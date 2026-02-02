// Main JavaScript for Leo Club Website

// API Configuration
const API_BASE_URL = window.location.origin; // Automatically uses current server origin
const API_ENDPOINTS = {
    membership: `${API_BASE_URL}/api/membership`,
    contact: `${API_BASE_URL}/api/contact`
};

// Ensure body has top padding equal to navbar height (fixes gap under navbar)
document.addEventListener('DOMContentLoaded', function setBodyPaddingForNavbar() {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    function applyPadding() {
        const h = nav.offsetHeight || 0;
        document.body.style.paddingTop = h + 'px';
    }
    applyPadding();
    window.addEventListener('resize', applyPadding);
});

// Form Submission Handlers
document.addEventListener('DOMContentLoaded', function() {
    // Membership Form Handler
    const membershipForm = document.getElementById('membershipForm');
    if (membershipForm) {
        membershipForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                fullName: document.getElementById('fullName').value,
                dob: document.getElementById('dob').value,
                gender: document.getElementById('gender').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                school: document.getElementById('school').value,
                level: document.getElementById('level').value,
                year: document.getElementById('year').value,
                reason: document.getElementById('reason').value
            };

            try {
                const response = await fetch(API_ENDPOINTS.membership, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                
                if (response.ok) {
                    showAlert('success', 'Thank you! Your membership application has been submitted successfully.');
                    membershipForm.reset();
                } else {
                    showAlert('danger', result.message || 'An error occurred. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                showAlert('danger', 'Network error. Please check your connection and try again.');
            }
        });
    }

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('contactName').value,
                email: document.getElementById('contactEmail').value,
                message: document.getElementById('contactMessage').value
            };

            try {
                const response = await fetch(API_ENDPOINTS.contact, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                
                if (response.ok) {
                    showAlert('success', 'Thank you! Your message has been sent successfully.');
                    contactForm.reset();
                } else {
                    showAlert('danger', result.message || 'An error occurred. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                showAlert('danger', 'Network error. Please check your connection and try again.');
            }
        });
    }
});

// Show Alert Function - displays message at bottom of screen (toast style)
function showAlert(type, message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show alert-bottom`;
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    document.body.appendChild(alertDiv);

    // Auto dismiss after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) alertDiv.remove();
    }, 5000);
}

// Smooth Scroll for Anchor Links
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

// Navbar Active State
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Initialize Carousel
const carouselElement = document.querySelector('#heroCarousel');
if (carouselElement) {
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 5000,
        wrap: true
    });
}

// Gallery Image Modal (if needed)
function openImageModal(imageSrc) {
    // This can be enhanced with Bootstrap modal
    console.log('Opening image:', imageSrc);
}

// Form Validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('is-invalid');
        } else {
            field.classList.remove('is-invalid');
        }
    });
    
    return isValid;
}

// Remove invalid class on input
document.addEventListener('input', function(e) {
    if (e.target.hasAttribute('required')) {
        e.target.classList.remove('is-invalid');
    }
});

// --- Additional UI enhancements: counters, back-to-top, newsletter, reveal ---

// Animate counters when they enter the viewport
function animateCount(el, duration = 1500) {
    const target = parseInt(el.getAttribute('data-target') || el.textContent.replace(/\D/g, '')) || 0;
    let start = 0;
    const startTime = performance.now();

    function tick(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(progress * (target - start) + start);
        el.textContent = value;
        if (progress < 1) {
            requestAnimationFrame(tick);
        } else {
            el.textContent = target;
        }
    }

    requestAnimationFrame(tick);
}

// Observe counters
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.count');
    if ('IntersectionObserver' in window && counters.length) {
        const obs = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.4});

        counters.forEach(c => obs.observe(c));
    } else {
        // Fallback: animate all immediately
        counters.forEach(c => animateCount(c));
    }

    // Reveal animations for sections
    const reveals = document.querySelectorAll('section');
    if ('IntersectionObserver' in window && reveals.length) {
        const ro = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.12});

        reveals.forEach(r => r.classList.add('reveal')),
        reveals.forEach(r => ro.observe(r));
    } else {
        reveals.forEach(r => r.classList.add('reveal-visible'));
    }

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.style.display = 'flex';
            } else {
                backToTop.style.display = 'none';
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Newsletter form handler (simple local UX)
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail');
            if (!email || !email.value) {
                showAlert('danger', 'Please enter a valid email address.');
                return;
            }
            // Simulate subscription success
            showAlert('success', 'Thanks! You have been subscribed.');
            newsletterForm.reset();
        });
    }
});

