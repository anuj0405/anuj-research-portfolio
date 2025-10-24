// Main JavaScript file for Research Portfolio
// Handles all interactive functionality and animations

document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeTypedText();
    initializeResearchRadar();
    initializeSkillsRadar();
    initializeProjectFilters();
    initializePublicationFilters();
    initializeScrollAnimations();
    initializeMobileMenu();
});

// Initialize page animations
function initializeAnimations() {
    // Hero section animations
    if (document.getElementById('hero-title')) {
        anime.timeline({
            easing: 'easeOutExpo',
            duration: 1000
        })
        .add({
            targets: '#hero-title',
            opacity: [0, 1],
            translateY: [50, 0],
            delay: 500
        })
        .add({
            targets: '#hero-subtitle',
            opacity: [0, 1],
            translateY: [30, 0],
            delay: 200
        }, '-=800')
        .add({
            targets: '#hero-description',
            opacity: [0, 1],
            translateY: [20, 0],
            delay: 300
        }, '-=600')
        .add({
            targets: '#hero-buttons',
            opacity: [0, 1],
            translateY: [20, 0],
            delay: 400
        }, '-=400');
    }

    // Animate cards on scroll
    const cards = document.querySelectorAll('.research-card, .project-card, .journey-card, .contact-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
    });
}

// Initialize typed text effect for hero section
function initializeTypedText() {
    const typedElement = document.getElementById('typed-research');
    if (typedElement) {
        new Typed('#typed-research', {
            strings: [
                'Large Language Models',
                'Neuro-symbolic AI',
                'Natural Language Processing',
                'Explainable AI',
                'Machine Learning Research'
            ],
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
}

// Initialize research radar chart
function initializeResearchRadar() {
    const radarElement = document.getElementById('research-radar');
    if (radarElement) {
        const chart = echarts.init(radarElement);
        
        const option = {
            title: {
                text: 'Research Expertise Areas',
                left: 'center',
                textStyle: {
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#2c3e50'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            radar: {
                indicator: [
                    { name: 'Large Language\nModels', max: 100 },
                    { name: 'Neuro-symbolic\nAI', max: 100 },
                    { name: 'Natural Language\nProcessing', max: 100 },
                    { name: 'Explainable\nAI', max: 100 },
                    { name: 'Computer\nVision', max: 100 },
                    { name: 'Machine\nLearning', max: 100 }
                ],
                shape: 'polygon',
                splitNumber: 4,
                axisName: {
                    color: '#2c3e50',
                    fontSize: 12,
                    fontWeight: 'bold'
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(184, 134, 11, 0.3)'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: [
                            'rgba(184, 134, 11, 0.1)',
                            'rgba(184, 134, 11, 0.05)'
                        ]
                    }
                }
            },
            series: [{
                name: 'Research Expertise',
                type: 'radar',
                data: [{
                    value: [90, 85, 95, 88, 75, 92],
                    name: 'Current Expertise',
                    areaStyle: {
                        color: 'rgba(184, 134, 11, 0.3)'
                    },
                    lineStyle: {
                        color: '#b8860b',
                        width: 3
                    },
                    itemStyle: {
                        color: '#b8860b',
                        borderColor: '#fff',
                        borderWidth: 2
                    }
                }],
                animationDuration: 2000,
                animationEasing: 'cubicOut'
            }]
        };
        
        chart.setOption(option);
        
        // Make chart responsive
        window.addEventListener('resize', function() {
            chart.resize();
        });
    }
}

// Initialize skills radar chart for about page
function initializeSkillsRadar() {
    const radarElement = document.getElementById('skills-radar');
    if (radarElement) {
        const chart = echarts.init(radarElement);
        
        const option = {
            tooltip: {
                trigger: 'item'
            },
            radar: {
                indicator: [
                    { name: 'Research\nMethodology', max: 100 },
                    { name: 'Technical\nImplementation', max: 100 },
                    { name: 'Academic\nWriting', max: 100 },
                    { name: 'Collaboration\n& Networking', max: 100 },
                    { name: 'Problem\nSolving', max: 100 },
                    { name: 'Innovation\n& Creativity', max: 100 }
                ],
                shape: 'polygon',
                splitNumber: 4,
                axisName: {
                    color: '#2c3e50',
                    fontSize: 11,
                    fontWeight: 'bold'
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(184, 134, 11, 0.3)'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: [
                            'rgba(156, 175, 136, 0.1)',
                            'rgba(156, 175, 136, 0.05)'
                        ]
                    }
                }
            },
            series: [{
                name: 'Skills Assessment',
                type: 'radar',
                data: [{
                    value: [95, 90, 88, 85, 92, 87],
                    name: 'Professional Skills',
                    areaStyle: {
                        color: 'rgba(156, 175, 136, 0.3)'
                    },
                    lineStyle: {
                        color: '#9caf88',
                        width: 3
                    },
                    itemStyle: {
                        color: '#9caf88',
                        borderColor: '#fff',
                        borderWidth: 2
                    }
                }],
                animationDuration: 2000,
                animationEasing: 'cubicOut'
            }]
        };
        
        chart.setOption(option);
        
        // Make chart responsive
        window.addEventListener('resize', function() {
            chart.resize();
        });
    }
}

// Initialize project filters
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category');
                
                if (filter === 'all' || (categories && categories.includes(filter))) {
                    card.style.display = 'block';
                    anime({
                        targets: card,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 500,
                        easing: 'easeOutQuart'
                    });
                } else {
                    anime({
                        targets: card,
                        opacity: [1, 0],
                        translateY: [0, -30],
                        duration: 300,
                        easing: 'easeInQuart',
                        complete: function() {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
}

// Initialize publication filters
function initializePublicationFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter publications
            timelineItems.forEach(item => {
                const categories = item.getAttribute('data-category');
                
                if (filter === 'all' || (categories && categories.includes(filter))) {
                    item.style.display = 'block';
                    anime({
                        targets: item,
                        opacity: [0, 1],
                        translateY: [50, 0],
                        duration: 600,
                        easing: 'easeOutQuart'
                    });
                } else {
                    anime({
                        targets: item,
                        opacity: [1, 0],
                        translateY: [0, -50],
                        duration: 400,
                        easing: 'easeInQuart',
                        complete: function() {
                            item.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
}

// Initialize scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                if (element.classList.contains('research-card') || 
                    element.classList.contains('project-card') || 
                    element.classList.contains('journey-card') || 
                    element.classList.contains('contact-card')) {
                    
                    anime({
                        targets: element,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 600,
                        easing: 'easeOutQuart',
                        delay: Math.random() * 200
                    });
                }
                
                if (element.classList.contains('timeline-item')) {
                    element.classList.add('animate');
                }
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(
        '.research-card, .project-card, .journey-card, .contact-card, .timeline-item'
    );
    
    animatableElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize mobile menu
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // Mobile menu functionality can be added here
            alert('Mobile menu functionality - Coming soon!');
        });
    }
}

// Smooth scrolling for anchor links
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

// Add particle background effect (simplified version)
function createParticleBackground() {
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            particlesContainer.appendChild(particle);
        }
        
        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(180deg); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize particle background
createParticleBackground();

// Add hover effects for interactive elements
document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('research-card') || 
        e.target.classList.contains('project-card') || 
        e.target.classList.contains('journey-card')) {
        
        anime({
            targets: e.target,
            scale: 1.02,
            duration: 300,
            easing: 'easeOutQuart'
        });
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.classList.contains('research-card') || 
        e.target.classList.contains('project-card') || 
        e.target.classList.contains('journey-card')) {
        
        anime({
            targets: e.target,
            scale: 1,
            duration: 300,
            easing: 'easeOutQuart'
        });
    }
});

// Console welcome message
console.log(`
🎓 Welcome to Anuj Kumar's Research Portfolio!

🔬 Research Areas:
   • Large Language Models
   • Neuro-symbolic AI
   • Natural Language Processing
   • Explainable AI
   • Computer Vision

📧 Contact: anuj@iitjammu.ac.in
🎓 PhD Scholar @ IIT Jammu

Built with modern web technologies and love for research! ❤️
`);