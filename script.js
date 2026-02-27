// ===========================
// SMOOTH SCROLLING
// ===========================
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

// ===========================
// SKILL BAR ANIMATION ON SCROLL
// ===========================
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillBarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-progress').forEach(bar => {
                // Trigger animation by setting width
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            // Unobserve after animation triggers
            skillBarObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillBarObserver.observe(skillsSection);
}

// ===========================
// NAVBAR BACKGROUND ON SCROLL
// ===========================
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = '#1a252f';
    } else {
        nav.style.background = '#2c3e50';
    }
});

// ===========================
// FADE IN ANIMATION FOR SECTIONS
// ===========================
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Apply fade-in to all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    fadeInObserver.observe(section);
});

// ===========================
// ACTIVE NAVIGATION HIGHLIGHT
// ===========================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// DYNAMIC YEAR IN FOOTER
// ===========================
const footer = document.querySelector('footer p');
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} Your Name. All rights reserved.`;
}
// ===========================
// PROJECT CARDS ANIMATION
// ===========================
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            projectObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    projectObserver.observe(card);
});
// ===========================
// EDUCATION CARDS ANIMATION
// ===========================
const educationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }, index * 200);
            educationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.education-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px) scale(0.95)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    educationObserver.observe(card);
});

// ===========================
// EDUCATION HIGHLIGHTS ANIMATION
// ===========================
const highlightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('li');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 100);
            });
            highlightObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.education-highlights ul').forEach(ul => {
    ul.querySelectorAll('li').forEach(li => {
        li.style.opacity = '0';
        li.style.transform = 'translateX(-20px)';
        li.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    highlightObserver.observe(ul);
});

// ===========================
// PROJECT LINK VALIDATION
// ===========================
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // If the href is just "#", prevent default and show alert
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            alert('Project details coming soon! Please add your project link.');
        }
    });
});

// ===========================
// MOBILE MENU TOGGLE (Optional Enhancement)
// ===========================
// Uncomment this section if you want to add a hamburger menu for mobile

/*
const createMobileMenu = () => {
    const nav = document.querySelector('nav .container');
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '☰';
    menuToggle.style.display = 'none';
    
    nav.insertBefore(menuToggle, nav.querySelector('ul'));
    
    menuToggle.addEventListener('click', () => {
        const navList = nav.querySelector('ul');
        navList.classList.toggle('show');
    });
    
    // Show/hide toggle button based on screen size
    const checkScreenSize = () => {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
        } else {
            menuToggle.style.display = 'none';
            nav.querySelector('ul').classList.remove('show');
        }
    };
    
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
};

createMobileMenu();
*/
