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
// SKILL CARDS ANIMATION
// ===========================
const skillCategoryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                
                // Animate list items
                const listItems = entry.target.querySelectorAll('.skill-list li');
                listItems.forEach((item, itemIndex) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, itemIndex * 80);
                });
            }, index * 150);
            skillCategoryObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.skill-category-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px) scale(0.95)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    // Set initial state for list items
    card.querySelectorAll('.skill-list li').forEach(li => {
        li.style.opacity = '0';
        li.style.transform = 'translateX(-20px)';
        li.style.transition = 'opacity 0.4s ease, transform 0.4s ease, color 0.3s ease, padding-left 0.3s ease, background 0.3s ease';
    });
    
    skillCategoryObserver.observe(card);
});

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
// EXPERIENCE CARDS ANIMATION
// ===========================
const experienceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                
                // Animate responsibilities
                const responsibilities = entry.target.querySelectorAll('.responsibilities li');
                responsibilities.forEach((item, itemIndex) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, itemIndex * 100);
                });
                
                // Animate tech badges
                const badges = entry.target.querySelectorAll('.tech-badge');
                badges.forEach((badge, badgeIndex) => {
                    setTimeout(() => {
                        badge.style.opacity = '1';
                        badge.style.transform = 'scale(1)';
                    }, 400 + (badgeIndex * 50));
                });
            }, index * 200);
            experienceObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.experience-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px) scale(0.95)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    // Set initial state for responsibilities
    card.querySelectorAll('.responsibilities li').forEach(li => {
        li.style.opacity = '0';
        li.style.transform = 'translateX(-30px)';
        li.style.transition = 'opacity 0.5s ease, transform 0.5s ease, background 0.3s ease, border-left-color 0.3s ease';
    });
    
    // Set initial state for tech badges
    card.querySelectorAll('.tech-badge').forEach(badge => {
        badge.style.opacity = '0';
        badge.style.transform = 'scale(0.8)';
        badge.style.transition = 'opacity 0.4s ease, transform 0.4s ease, box-shadow 0.3s ease';
    });
    
    experienceObserver.observe(card);
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
                entry.target.style.transform = 'translateY(0) scale(1)';
                
                // Animate highlights
                const highlights = entry.target.querySelectorAll('.project-highlights li');
                highlights.forEach((item, itemIndex) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, itemIndex * 100);
                });
                
                // Animate tech pills
                const pills = entry.target.querySelectorAll('.tech-pill');
                pills.forEach((pill, pillIndex) => {
                    setTimeout(() => {
                        pill.style.opacity = '1';
                        pill.style.transform = 'scale(1)';
                    }, 400 + (pillIndex * 60));
                });
                
                // Animate impact
                const impact = entry.target.querySelector('.impact-value');
                if (impact) {
                    setTimeout(() => {
                        impact.style.opacity = '1';
                        impact.style.transform = 'scale(1)';
                    }, 600);
                }
            }, index * 150);
            projectObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px) scale(0.95)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.4s ease, border-color 0.4s ease';
    
    // Set initial state for highlights
    card.querySelectorAll('.project-highlights li').forEach(li => {
        li.style.opacity = '0';
        li.style.transform = 'translateX(-20px)';
        li.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
    
    // Set initial state for tech pills
    card.querySelectorAll('.tech-pill').forEach(pill => {
        pill.style.opacity = '0';
        pill.style.transform = 'scale(0.8)';
        pill.style.transition = 'opacity 0.4s ease, transform 0.4s ease, background 0.3s ease, color 0.3s ease, box-shadow 0.3s ease';
    });
    
    // Set initial state for impact
    const impact = card.querySelector('.impact-value');
    if (impact) {
        impact.style.opacity = '0';
        impact.style.transform = 'scale(0.8)';
        impact.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    }
    
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
