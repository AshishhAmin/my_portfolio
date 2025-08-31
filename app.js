// Application data
const portfolioData = {
  personalInfo: {
    name: "Ashish K Amin",
    title: "Data Enthusiast & Web Developer",
    roles: ["Data Analyst", "Django Developer"],
    description: "Passionate data analyst and web developer with expertise in data preprocessing, statistical analysis, and modern web technologies. Skilled in transforming complex data into actionable insights and building robust web applications.",
    email: "ashuamin480@gmail.com",
    phone: "+91 9663908464",
    location: "Mangalore, Karnataka, India",
    socialLinks: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      email: "mailto:ashuamin480@gmail.com"
    }
  },
  skills: {
    dataAnalytics: [
      {name: "Python", level: 90},
      {name: "Pandas", level: 95},
      {name: "NumPy", level: 85},
      {name: "Matplotlib", level: 80},
      {name: "Seaborn", level: 80},
      {name: "SQL", level: 85},
      {name: "Excel", level: 75},
      {name: "Power BI", level: 70},
      {name: "Tableau", level: 70}
    ],
    webDevelopment: [
      {name: "HTML", level: 95},
      {name: "CSS", level: 90},
      {name: "JavaScript", level: 65},
      {name: "React", level: 50},
      {name: "Django", level: 85},
      {name: "Bootstrap", level: 65},
     
    ],
    tools: [
      {name: "Git", level: 80},
      {name: "VS Code", level: 90},
      {name: "Jupyter Notebook", level: 85},
      {name: "PostgreSQL", level: 75},
      {name: "MySQL", level: 75}
    ]
  },
  projects: {
    dataAnalytics: [
      {
        id: 1,
        title: "Bellabeat Case Study",
        description: "Google Data Analytics capstone project analyzing smart device usage patterns to provide insights for marketing strategy.",
        technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
        category: "data-analytics",
        image: "projects/fitbit.jpeg",
        liveDemo: "#",
        github: "https://github.com/AshishhAmin/Bellabeat_Case_Study",
        featured: true
      },
      {
        id: 3,
        title: "Netflix EDA",
        description: "Machine learning clustering analysis to identify customer segments and improve marketing targeting.",
        technologies: ["Python", "Numpy", "Pandas", "Seaborn","Matplotlib"],
        category: "data-analytics",
        image: "projects/Netflix.jpeg",
        liveDemo: "#",
        github: "https://github.com/AshishhAmin/Netflix_EDA",
        featured: false
      },
      {
        id: 8,
        title: "Sales Analysis",
        description: "This visualization provides an insightful analysis, highlighting key trends and helping businesses make informed decisions about their pizza offerings.",
        technologies: ["Tableau", "Excel", "Data Visualization"],
        category: "data-analytics",
        image: "projects/pizza.png",
        liveDemo: "https://public.tableau.com/app/profile/ashish.k.amin/viz/pizzasales_17352059034370/Dashboard1",
        github: "#",
        featured: false
      },

      
    ],
    django: [
      {
        id: 6,
        title: "Inventory Management System",
        description: "An efficient inventory management solution developed for Embtron INDIA, an electronics-based company.",
        technologies: ["Django", "Python", "SQLite", "HTML", "CSS"],
        category: "django",
        image: "projects/inventory.jpg",
        liveDemo: "#",
        github: "https://github.com/AshishhAmin/Embtron-India-Inventory",
        featured: true
      },
      {
        id: 7,
        title: "Blog Application",
        description: "This Multi user blog website allows users to read, write, edit, and delete blog posts.",
        technologies: ["Django", "Python", "sqlite", "HTML", "CSS"],
        category: "django",
        image: "projects/blog.png",
        liveDemo: "https://shlokhshetty.pythonanywhere.com/",
        github: "https://github.com/AshishhAmin/Blog-website",
        featured: false
      },
     
    ],
    dataScience: [
      {
        id: 2,
        title: "Marketing Targets for Bank",
        description: "his project deploys a machine learning model for predicting bank marketing campaign success using Streamlit. The model predicts whether a customer will subscribe to a term deposit based on demographic and campaign data.",
        technologies: ["Python", "Pandas", "Plotly", "Streamlit", "MLlib","Scikit-learn"],
        category: "data-science",
        image: "projects/bank.jpg" ,
        liveDemo: "https://bank-marketing-campaign-predictor.streamlit.app/",
        github: "https://github.com/AshishhAmin/Bank-Marketing-Campaign-Predictor",
        featured: true
      },
      {
        id: 4,
        title: "Vegetable Classification",
        description: "A simple machine learning project for classifying different vegetable classes based on image data.",
        technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Keras"],
        category: "data-science",
        image: "projects/classification.jpeg",
        liveDemo: "#",
        github: "https://github.com/AshishhAmin/Vegetable_Classification",
        featured: false
      }
    ]
  },
  stats: [
    {label: "Projects Completed", value: 6},
    {label: "Years Experience", value: 1},
    {label: "Technologies", value: 13}
  ]
};

// DOM elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const typingText = document.getElementById('typing-text');
const particlesContainer = document.getElementById('particles');
const backToTop = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// Navigation functionality
class Navigation {
  constructor() {
    this.init();
  }

  init() {
    this.handleScroll();
    this.handleMobileMenu();
    this.handleSmoothScroll();
    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    const scrolled = window.scrollY > 50;
    navbar.style.background = scrolled 
      ? 'rgba(38, 40, 40, 0.95)' 
      : 'rgba(38, 40, 40, 0.8)';

    // Update active nav link
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });

    // Back to top button
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  handleMobileMenu() {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  handleSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
          const offsetTop = target.offsetTop - 70; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// Theme toggle functionality
class ThemeToggle {
  constructor() {
    this.currentTheme = 'dark';
    this.init();
  }

  init() {
    // Set initial theme
    this.setTheme('dark');
    
    themeToggle.addEventListener('click', () => {
      this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
      this.setTheme(this.currentTheme);
    });
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-color-scheme', theme);
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    this.currentTheme = theme;
  }
}

// Typing animation
class TypingAnimation {
  constructor() {
    this.roles = portfolioData.personalInfo.roles;
    this.currentRoleIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
    this.init();
  }

  init() {
    this.type();
  }

  type() {
    const currentRole = this.roles[this.currentRoleIndex];
    
    if (this.isDeleting) {
      typingText.textContent = currentRole.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      typingText.textContent = currentRole.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    let typeSpeed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.currentCharIndex === currentRole.length) {
      typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Floating particles
class FloatingParticles {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (this.container) this.init();
  }

  init() {
    this.createParticles();
  }

  createParticles() {
    for (let i = 0; i < 50; i++) {
      setTimeout(() => this.createParticle(), i * 200);
    }
    setInterval(() => this.createParticle(), 300);
  }

  createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    this.container.appendChild(particle);
    setTimeout(() => particle.remove(), 6000);
  }
}


// Stats counter animation
class StatsCounter {
  constructor() {
    this.counters = document.querySelectorAll('.stat-number');
    this.animated = false;
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    const aboutSection = document.getElementById('about');
    const rect = aboutSection.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom >= 0 && !this.animated) {
      this.animated = true;
      this.animateCounters();
    }
  }

  animateCounters() {
    this.counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const increment = target / 200;
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
    });
  }
}

// Skills rendering and animation
class SkillsManager {
  constructor() {
    this.init();
  }

  init() {
    this.renderSkills();
    this.handleSkillsAnimation();
  }

  renderSkills() {
    this.renderSkillCategory('data-analytics-skills', portfolioData.skills.dataAnalytics);
    this.renderSkillCategory('web-development-skills', portfolioData.skills.webDevelopment);
    this.renderSkillCategory('tools-skills', portfolioData.skills.tools);
  }

  renderSkillCategory(containerId, skills) {
    const container = document.getElementById(containerId);
    container.innerHTML = skills.map(skill => `
      <div class="skill-item">
        <div class="skill-name">
          <span>${skill.name}</span>
          <span class="skill-percentage">${skill.level}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-progress" data-width="${skill.level}"></div>
        </div>
      </div>
    `).join('');
  }

  handleSkillsAnimation() {
    const skillsSection = document.getElementById('skills');
    let animated = false;

    const animateSkills = () => {
      const rect = skillsSection.getBoundingClientRect();
      
      if (rect.top < window.innerHeight && rect.bottom >= 0 && !animated) {
        animated = true;
        const progressBars = document.querySelectorAll('.skill-progress');
        
        progressBars.forEach((bar, index) => {
          setTimeout(() => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
          }, index * 100);
        });
      }
    };

    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Check on initial load
  }
}

// Projects manager
class ProjectsManager {
  constructor() {
    this.allProjects = [...portfolioData.projects.dataAnalytics, ...portfolioData.projects.dataScience, ...portfolioData.projects.django];
    this.currentFilter = 'all';
    this.init();
  }

  init() {
    this.renderProjects();
    this.handleFiltering();
  }

  renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = this.allProjects.map(project => `
    <div class="project-card" data-category="${project.category}">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" />
        <div class="project-overlay">
          ${
            // Show external link only if it exists and is not "#"
            project.liveDemo && project.liveDemo !== '#'
              ? `<a href="${project.liveDemo}" class="project-link" target="_blank">
                  <i class="fas fa-external-link-alt"></i>
                </a>`
              : `<span class="no-live-link-message">Live Demo not available</span>`
          }
          <a href="${project.github}" class="project-link" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}


  handleFiltering() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active filter button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        this.currentFilter = filter;

        // Filter projects
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          
          if (filter === 'all' || category === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  }
}

// Contact form handler
class ContactForm {
  constructor() {
    this.init();
  }

  init() {
    contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(contactForm);

    // Show loading message
    this.showMessage('Sending message...', 'info');

    fetch(contactForm.action, {
      method: contactForm.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        this.showMessage('Message sent successfully! Thank you for reaching out.', 'success');
        contactForm.reset();
      } else {
        this.showMessage('There was a problem sending your message.', 'error');
      }
    })
    .catch(() => {
      this.showMessage('Could not connect. Please try again later.', 'error');
    });
  }

  showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.classList.remove('hidden');

    if (type === 'success' || type === 'error') {
      setTimeout(() => {
        formMessage.classList.add('hidden');
      }, 5000);
    }
  }
}


// Scroll animations
class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    this.createObserver();
  }

  createObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('fade-in');
      observer.observe(section);
    });

    // Observe cards and other elements
    document.querySelectorAll('.card, .skill-item, .project-card, .timeline-item').forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }
}

// Initialize application
class PortfolioApp {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
    } else {
      this.initializeComponents();
    }
  }

  initializeComponents() {
    // Initialize all components
    new Navigation();
    new ThemeToggle();
    new TypingAnimation();
    new FloatingParticles();
    new FloatingParticles('particles-home');
    new FloatingParticles('particles-about');
    new FloatingParticles('particles-skills');
    new FloatingParticles('particles-projects');
    new FloatingParticles('particles-experience');
    new FloatingParticles('particles-contact');
    new StatsCounter();
    new SkillsManager();
    new ProjectsManager();
    new ContactForm();
    new ScrollAnimations();

    // Back to top button
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    console.log('Portfolio app initialized successfully');
  }
}

// Start the application
new PortfolioApp();
