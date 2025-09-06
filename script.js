// ============================================
// R CODES PORTFOLIO - ULTRA-ADVANCED JAVASCRIPT
// 1500+ Lines of Production-Ready Code
// Modern, Robust, and Feature-Complete
// ============================================

'use strict';

/**
 * Main Portfolio Class - Handles all functionality
 */
class RCodesPortfolio {
  constructor() {
    // Initialize state management
    this.state = {
      isLoading: true,
      isMenuOpen: false,
      currentSection: 'home',
      scrollProgress: 0,
      theme: localStorage.getItem('theme') || 'dark',
      isMobile: window.innerWidth <= 768,
      isTablet: window.innerWidth <= 1024,
      animationsEnabled: !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      lastScrollTop: 0,
      scrollDirection: 'down',
      ticking: false,
      currentYear: new Date().getFullYear(),
      loadingProgress: 0,
      contentLoaded: false,
      observers: {},
      timers: {},
      eventListeners: [],
      moduleInstances: {}
    };

    // Configuration object
    this.config = {
      animationDuration: 300,
      scrollThreshold: 100,
      throttleDelay: 16,
      debounceDelay: 250,
      intersectionThreshold: 0.1,
      loadingMinDuration: 1000,
      typingSpeed: 100,
      counterAnimationSpeed: 50,
      notificationDuration: 5000
    };

    // Project data with working images
    this.projects = [
      {
        id: 1,
        title: "WanderLust",
        description: "Full-stack hotel and home renting system built with MERN stack. Features user authentication, booking management, payment integration, and responsive design for seamless user experience.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Stripe"],
        category: "fullstack",
        githubUrl: "https://github.com/rishabh1721/WanderLust",
        demoUrl: null,
        featured: true,
        status: "completed",
        year: "2024"
      },
      {
        id: 2,
        title: "AI Problem Solver",
        description: "Machine learning application that analyzes competitive programming problems and suggests optimal approaches using natural language processing and algorithm classification.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
        tags: ["Python", "TensorFlow", "NLP", "Flask", "scikit-learn"],
        category: "ai",
        githubUrl: "https://github.com/rishabh1721/ai-problem-solver",
        demoUrl: null,
        featured: true,
        status: "in-progress",
        year: "2024"
      },
      {
        id: 3,
        title: "DSA Visualizer",
        description: "Interactive web application for visualizing data structures and algorithms. Built with React and D3.js to help students understand complex algorithms through animations.",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop",
        tags: ["React", "D3.js", "JavaScript", "CSS3", "Algorithms"],
        category: "frontend",
        demoUrl: "https://dsa-visualizer.netlify.app",
        githubUrl: "https://github.com/rishabh1721/dsa-visualizer",
        featured: true,
        status: "completed",
        year: "2023"
      },
      {
        id: 4,
        title: "Task Management System",
        description: "Full-featured task management application with team collaboration, real-time updates, and project tracking. Built for productivity and seamless workflow management.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop",
        tags: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redux"],
        category: "fullstack",
        demoUrl: "https://task-manager-pro.vercel.app",
        githubUrl: "https://github.com/rishabh1721/task-manager",
        featured: false,
        status: "completed",
        year: "2024"
      }
    ];

    // Skills data
    this.skillCategories = [
      {
        title: "Programming Languages",
        icon: "💻",
        skills: [
          { name: "C++", level: 85, experience: "2 years", description: "Data Structures & Algorithms" },
          { name: "Python", level: 80, experience: "2 years", description: "AI/ML & Backend Development" },
          { name: "JavaScript", level: 88, experience: "2.5 years", description: "Full-Stack Development" },
          { name: "Java", level: 75, experience: "1.5 years", description: "Object-Oriented Programming" }
        ]
      },
      {
        title: "Web Development",
        icon: "🌐",
        skills: [
          { name: "React.js", level: 85, experience: "2 years", description: "Modern Frontend Framework" },
          { name: "Node.js", level: 80, experience: "2 years", description: "Backend Runtime Environment" },
          { name: "HTML/CSS", level: 90, experience: "3 years", description: "Modern Web Standards" },
          { name: "Express.js", level: 78, experience: "1.5 years", description: "Web Application Framework" }
        ]
      },
      {
        title: "Database & Tools",
        icon: "🛠️",
        skills: [
          { name: "MongoDB", level: 82, experience: "2 years", description: "NoSQL Database" },
          { name: "Git & GitHub", level: 88, experience: "2.5 years", description: "Version Control" },
          { name: "VS Code", level: 95, experience: "3 years", description: "Code Editor" },
          { name: "Postman", level: 80, experience: "1.5 years", description: "API Testing" }
        ]
      },
      {
        title: "AI & Machine Learning",
        icon: "🤖",
        skills: [
          { name: "TensorFlow", level: 70, experience: "1 year", description: "Deep Learning Framework" },
          { name: "scikit-learn", level: 75, experience: "1.5 years", description: "Machine Learning Library" },
          { name: "Data Analysis", level: 72, experience: "1 year", description: "Data Processing & Insights" },
          { name: "NLP", level: 68, experience: "8 months", description: "Natural Language Processing" }
        ]
      }
    ];

    // Experience data
    this.experiences = [
      {
        title: "MCA GenAI Student",
        company: "SRM Institute of Science and Technology",
        period: "2024 - Present",
        description: "Pursuing Master of Computer Applications with specialization in Generative AI. Focus on advanced algorithms, machine learning, and full-stack development.",
        technologies: ["Python", "AI/ML", "Data Structures", "Web Development", "Research"],
        type: "education",
        current: true,
        location: "Chennai, India"
      },
      {
        title: "Full-Stack Developer",
        company: "Personal Projects",
        period: "2023 - Present",
        description: "Building innovative web applications using MERN stack. Developed projects like WanderLust (hotel booking system) and various AI-powered applications.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
        type: "project",
        current: true,
        location: "Remote"
      },
      {
        title: "Competitive Programming",
        company: "LeetCode & Online Platforms",
        period: "2022 - Present",
        description: "Actively solving algorithmic problems and improving problem-solving skills. Focused on data structures, algorithms, and optimization techniques.",
        technologies: ["C++", "Python", "Algorithms", "Data Structures", "Problem Solving"],
        type: "skill",
        current: true,
        location: "Online"
      }
    ];

    // Initialize portfolio
    this.init();
  }

  /**
   * Main initialization method
   */
  async init() {
    try {
      console.log('🚀 Initializing R CODES Portfolio...');
      
      // Wait for DOM to be ready
      await this.domReady();
      
      // Cache all DOM elements
      this.cacheElements();
      
      // Initialize core systems
      this.initErrorHandling();
      this.initThemeSystem();
      this.initLoadingSystem();
      this.initNavigationSystem();
      this.initScrollSystem();
      this.initAnimationSystem();
      this.initInteractionSystem();
      
      // Load all content
      await this.loadAllContent();
      
      // Initialize advanced features
      this.initAdvancedFeatures();
      
      // Bind all event listeners
      this.bindEventListeners();
      
      // Start main application loop
      this.startMainLoop();
      
      // Hide loading screen
      setTimeout(() => this.hideLoadingScreen(), this.config.loadingMinDuration);
      
      console.log('✅ R CODES Portfolio initialized successfully!');
      
    } catch (error) {
      console.error('❌ Portfolio initialization failed:', error);
      this.handleInitializationError(error);
    }
  }

  /**
   * Wait for DOM to be ready
   */
  domReady() {
    return new Promise(resolve => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', resolve);
      } else {
        resolve();
      }
    });
  }

  /**
   * Cache all DOM elements for performance
   */
  cacheElements() {
    // Loading elements
    this.elements = {
      loadingScreen: document.getElementById('loadingScreen'),
      loadingBar: document.querySelector('.loading-bar'),
      
      // Navigation elements
      navbar: document.getElementById('siteHeader'),
      navToggle: document.getElementById('navToggle'),
      navMenu: document.getElementById('mainNav'),
      navLinks: document.querySelectorAll('.nav-link'),
      brandLink: document.getElementById('brandLink'),
      magicLine: document.getElementById('magicLine'),
      
      // Progress and UI elements
      scrollProgress: document.getElementById('scrollProgress'),
      backToTop: document.getElementById('backToTopBtn'),
      themeToggle: document.getElementById('themeToggle'),
      scrollIndicator: document.getElementById('scrollIndicator'),
      
      // Content containers
      projectsGrid: document.getElementById('projectsGrid'),
      skillsContainer: document.getElementById('skillsContainer'),
      experienceTimeline: document.getElementById('experienceTimeline'),
      
      // Hero elements
      heroCard: document.getElementById('heroCard'),
      typingText: document.getElementById('typingText'),
      typingCursor: document.getElementById('typingCursor'),
      statNumbers: document.querySelectorAll('[data-count]'),
      
      // Form elements
      contactForm: document.getElementById('contactForm'),
      copyEmailBtn: document.getElementById('copyEmailBtn'),
      emailText: document.getElementById('emailText'),
      
      // Filter elements
      filterBtns: document.querySelectorAll('.filter-btn'),
      
      // Notification container
      notificationContainer: document.getElementById('notificationContainer'),
      
      // Cursor elements
      cursor: document.querySelector('.cursor'),
      cursorFollower: document.querySelector('.cursor-follower'),
      
      // Year element
      currentYear: document.getElementById('currentYear')
    };

    // Set current year
    if (this.elements.currentYear) {
      this.elements.currentYear.textContent = this.state.currentYear;
    }
  }

  /**
   * Initialize error handling system
   */
  initErrorHandling() {
    // Global error handler
    window.addEventListener('error', (event) => {
      console.error('JavaScript Error:', event.error);
      this.trackEvent('Error', 'JavaScript Error', event.error?.message);
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled Promise Rejection:', event.reason);
      this.trackEvent('Error', 'Promise Rejection', event.reason);
    });
  }

  /**
   * Initialize theme system
   */
  initThemeSystem() {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', this.state.theme);
    
    // Auto-detect system theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (!localStorage.getItem('theme')) {
      this.state.theme = mediaQuery.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }

    // Theme toggle functionality
    if (this.elements.themeToggle) {
      this.elements.themeToggle.addEventListener('click', () => {
        this.toggleTheme();
      });
    }

    // Listen for system theme changes
    mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme-manual')) {
        this.state.theme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.state.theme);
      }
    });
  }

  /**
   * Toggle theme with smooth transition
   */
  toggleTheme() {
    if (!this.elements.themeToggle) return;

    this.elements.themeToggle.classList.add('switching');
    
    // Add transition for smooth theme change
    document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    setTimeout(() => {
      this.state.theme = this.state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', this.state.theme);
      localStorage.setItem('theme', this.state.theme);
      localStorage.setItem('theme-manual', 'true');
      
      this.elements.themeToggle.classList.remove('switching');
      
      // Remove transition after change
      setTimeout(() => {
        document.documentElement.style.transition = '';
      }, 300);
      
      this.trackEvent('Theme', 'Toggle', this.state.theme);
    }, 150);
  }

  /**
   * Initialize loading system
   */
  initLoadingSystem() {
    if (!this.elements.loadingScreen) return;

    // Animate loading bar
    if (this.elements.loadingBar) {
      let progress = 0;
      const updateProgress = () => {
        progress += Math.random() * 15;
        if (progress > 95) progress = 95;
        
        this.elements.loadingBar.style.transform = `scaleX(${progress / 100})`;
        this.state.loadingProgress = progress;
        
        if (progress < 95) {
          setTimeout(updateProgress, 100 + Math.random() * 200);
        }
      };
      
      updateProgress();
    }
  }

  /**
   * Hide loading screen with animation
   */
  hideLoadingScreen() {
    if (!this.elements.loadingScreen) return;

    // Complete loading bar
    if (this.elements.loadingBar) {
      this.elements.loadingBar.style.transform = 'scaleX(1)';
    }

    setTimeout(() => {
      this.elements.loadingScreen.style.opacity = '0';
      this.elements.loadingScreen.style.visibility = 'hidden';
      
      setTimeout(() => {
        this.elements.loadingScreen.style.display = 'none';
        document.body.style.overflow = 'auto';
        this.state.isLoading = false;
        
        // Start reveal animations
        this.startRevealAnimations();
      }, 500);
    }, 300);
  }

  /**
   * Initialize navigation system
   */
  initNavigationSystem() {
    this.initMobileNavigation();
    this.initSmoothScrolling();
    this.initMagicLine();
  }

  /**
   * Initialize mobile navigation
   */
  initMobileNavigation() {
    if (!this.elements.navToggle || !this.elements.navMenu) return;

    this.elements.navToggle.addEventListener('click', () => {
      this.toggleMobileMenu();
    });

    // Close menu when clicking nav links
    this.elements.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
      if (this.state.isMenuOpen && 
          !this.elements.navMenu.contains(e.target) && 
          !this.elements.navToggle.contains(e.target)) {
        this.closeMobileMenu();
      }
    });
  }

  /**
   * Toggle mobile menu
   */
  toggleMobileMenu() {
    const isOpen = this.elements.navMenu.classList.toggle('nav--open');
    this.elements.navToggle.classList.toggle('is-active');
    this.elements.navToggle.setAttribute('aria-expanded', isOpen);
    
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    this.state.isMenuOpen = isOpen;
    
    this.trackEvent('Navigation', 'Mobile Menu', isOpen ? 'Open' : 'Close');
  }

  /**
   * Close mobile menu
   */
  closeMobileMenu() {
    this.elements.navMenu.classList.remove('nav--open');
    this.elements.navToggle.classList.remove('is-active');
    this.elements.navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = 'auto';
    this.state.isMenuOpen = false;
  }

  /**
   * Initialize smooth scrolling
   */
  initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        
        if (target) {
          const offsetTop = target.offsetTop - (this.elements.navbar?.offsetHeight || 0) - 20;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          
          this.trackEvent('Navigation', 'Smooth Scroll', anchor.getAttribute('href'));
        }
      });
    });
  }

  /**
   * Initialize magic line navigation indicator
   */
  initMagicLine() {
    if (!this.elements.magicLine || !this.elements.navLinks.length || this.state.isMobile) return;

    let activeLink = document.querySelector('.nav-link.active') || this.elements.navLinks[0];
    this.updateMagicLine(activeLink);

    this.elements.navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        this.updateMagicLine(link);
      });
    });

    this.elements.navMenu.addEventListener('mouseleave', () => {
      activeLink = document.querySelector('.nav-link.active') || this.elements.navLinks[0];
      this.updateMagicLine(activeLink);
    });
  }

  /**
   * Update magic line position
   */
  updateMagicLine(link) {
    if (!link || !this.elements.magicLine || !this.elements.navMenu) return;
    
    const linkRect = link.getBoundingClientRect();
    const navRect = this.elements.navMenu.getBoundingClientRect();
    
    this.elements.magicLine.style.width = `${linkRect.width}px`;
    this.elements.magicLine.style.left = `${linkRect.left - navRect.left}px`;
    this.elements.magicLine.classList.add('active');
  }

  /**
   * Initialize scroll system
   */
  initScrollSystem() {
    this.initScrollProgress();
    this.initBackToTop();
    this.initScrollIndicator();
    
    // Main scroll handler
    window.addEventListener('scroll', this.throttle(() => {
      this.handleScroll();
    }, this.config.throttleDelay));
  }

  /**
   * Handle scroll events
   */
  handleScroll() {
    if (this.state.ticking) return;
    
    this.state.ticking = true;
    
    requestAnimationFrame(() => {
      const scrollY = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollY / documentHeight, 1);

      this.state.scrollProgress = scrollProgress;
      this.updateScrollDirection(scrollY);
      
      // Update UI elements
      this.updateScrollProgress(scrollProgress);
      this.updateHeaderState(scrollY);
      this.updateBackToTop(scrollY);
      this.updateScrollIndicator(scrollY);
      this.updateActiveNavLink();
      
      this.state.lastScrollTop = scrollY;
      this.state.ticking = false;
    });
  }

  /**
   * Update scroll direction
   */
  updateScrollDirection(scrollY) {
    if (scrollY > this.state.lastScrollTop) {
      this.state.scrollDirection = 'down';
    } else if (scrollY < this.state.lastScrollTop) {
      this.state.scrollDirection = 'up';
    }
  }

  /**
   * Initialize scroll progress indicator
   */
  initScrollProgress() {
    // Already handled in cacheElements
  }

  /**
   * Update scroll progress bar
   */
  updateScrollProgress(progress) {
    if (!this.elements.scrollProgress) return;
    
    this.elements.scrollProgress.style.transform = `scaleX(${progress})`;
    
    if (progress > 0.05) {
      this.elements.scrollProgress.classList.add('active');
    } else {
      this.elements.scrollProgress.classList.remove('active');
    }
  }

  /**
   * Initialize back to top button
   */
  initBackToTop() {
    if (!this.elements.backToTop) return;
    
    this.elements.backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      this.trackEvent('Navigation', 'Back to Top');
    });
  }

  /**
   * Update back to top button visibility
   */
  updateBackToTop(scrollY) {
    if (!this.elements.backToTop) return;
    
    if (scrollY > 300) {
      this.elements.backToTop.classList.add('visible');
    } else {
      this.elements.backToTop.classList.remove('visible');
    }
  }

  /**
   * Update header state based on scroll
   */
  updateHeaderState(scrollY) {
    if (!this.elements.navbar) return;
    
    if (scrollY > 100) {
      this.elements.navbar.classList.add('scrolled');
    } else {
      this.elements.navbar.classList.remove('scrolled');
    }

    // Auto-hide header on scroll down (except mobile)
    if (!this.state.isMobile && scrollY > 300) {
      if (this.state.scrollDirection === 'down') {
        this.elements.navbar.classList.add('hidden');
      } else {
        this.elements.navbar.classList.remove('hidden');
      }
    }
  }

  /**
   * Initialize scroll indicator
   */
  initScrollIndicator() {
    if (!this.elements.scrollIndicator) return;
    
    this.elements.scrollIndicator.addEventListener('click', () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /**
   * Update scroll indicator visibility
   */
  updateScrollIndicator(scrollY) {
    if (!this.elements.scrollIndicator) return;
    
    if (scrollY > 100) {
      this.elements.scrollIndicator.style.opacity = '0';
      this.elements.scrollIndicator.style.transform = 'translateX(-50%) translateY(20px)';
    } else {
      this.elements.scrollIndicator.style.opacity = '1';
      this.elements.scrollIndicator.style.transform = 'translateX(-50%) translateY(0)';
    }
  }

  /**
   * Update active navigation link based on scroll position
   */
  updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      
      if (window.pageYOffset >= sectionTop && 
          window.pageYOffset < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    if (currentSection !== this.state.currentSection) {
      this.state.currentSection = currentSection;
      
      this.elements.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSection) {
          link.classList.add('active');
        }
      });
      
      // Update magic line
      if (!this.state.isMobile) {
        const activeLink = document.querySelector('.nav-link.active');
        if (activeLink) {
          this.updateMagicLine(activeLink);
        }
      }
      
      this.trackEvent('Navigation', 'Section View', currentSection);
    }
  }

  /**
   * Initialize animation system
   */
  initAnimationSystem() {
    if (!this.state.animationsEnabled) return;
    
    this.initRevealAnimations();
    this.initHeroAnimations();
    this.initCounterAnimations();
    this.initCardEffects();
    this.initTypingEffect();
  }

  /**
   * Initialize reveal animations using Intersection Observer
   */
  initRevealAnimations() {
    if (!('IntersectionObserver' in window)) {
      // Fallback for older browsers
      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('is-visible');
      });
      return;
    }

    const observerOptions = {
      threshold: this.config.intersectionThreshold,
      rootMargin: '0px 0px -50px 0px'
    };

    this.state.observers.reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, index * 100);
          
          this.state.observers.reveal.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      this.state.observers.reveal.observe(el);
    });
  }

  /**
   * Start reveal animations after loading
   */
  startRevealAnimations() {
    const heroElements = document.querySelectorAll('.hero .reveal-on-scroll');
    heroElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('is-visible');
      }, index * 200);
    });
  }

  /**
   * Initialize hero animations
   */
  initHeroAnimations() {
    this.initFloatingElements();
  }

  /**
   * Initialize floating elements animation
   */
  initFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-shape');
    
    floatingElements.forEach((element, index) => {
      const delay = index * 2000;
      const duration = 8000 + Math.random() * 4000;
      
      element.style.animationDelay = `${delay}ms`;
      element.style.animationDuration = `${duration}ms`;
    });
  }

  /**
   * Initialize typing effect
   */
  initTypingEffect() {
    if (!this.elements.typingText || !this.elements.typingCursor) return;

    const text = 'RISHABH KUMAR';
    let index = 0;
    
    this.elements.typingText.textContent = '';
    
    const typeCharacter = () => {
      if (index < text.length) {
        this.elements.typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeCharacter, this.config.typingSpeed);
      } else {
        this.elements.typingCursor.style.animation = 'blink 1.2s infinite';
        
        // Add typing complete effect
        setTimeout(() => {
          this.elements.typingText.style.textShadow = '0 0 10px var(--color-accent)';
          setTimeout(() => {
            this.elements.typingText.style.textShadow = '';
          }, 500);
        }, 500);
      }
    };
    
    setTimeout(typeCharacter, 1000);
  }

  /**
   * Initialize counter animations
   */
  initCounterAnimations() {
    if (!this.elements.statNumbers.length) return;

    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute('data-count'));
      const duration = 2000;
      const startTime = performance.now();
      const suffix = target === 95 ? '%' : '';
      
      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(target * easeOutQuart);
        
        counter.textContent = current + suffix;
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + suffix;
          
          // Add completion effect
          counter.style.transform = 'scale(1.05)';
          setTimeout(() => {
            counter.style.transform = 'scale(1)';
          }, 200);
        }
      };
      
      requestAnimationFrame(updateCounter);
    };

    if ('IntersectionObserver' in window) {
      this.state.observers.counters = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              animateCounter(entry.target);
            }, 300);
            this.state.observers.counters.unobserve(entry.target);
          }
        });
      }, { threshold: 0.7 });

      this.elements.statNumbers.forEach(counter => {
        this.state.observers.counters.observe(counter);
      });
    }
  }

  /**
   * Initialize 3D card effects
   */
  initCardEffects() {
    if (!this.elements.heroCard || this.state.isMobile) return;

    let cardBounds;
    
    const updateCardBounds = () => {
      cardBounds = this.elements.heroCard.getBoundingClientRect();
    };
    
    updateCardBounds();
    window.addEventListener('resize', this.debounce(updateCardBounds, 250));

    this.elements.heroCard.addEventListener('mousemove', (e) => {
      if (!cardBounds) return;
      
      const x = e.clientX - cardBounds.left;
      const y = e.clientY - cardBounds.top;
      const centerX = cardBounds.width / 2;
      const centerY = cardBounds.height / 2;
      
      const rotateX = (y - centerY) / centerY * -10;
      const rotateY = (x - centerX) / centerX * 10;
      
      this.elements.heroCard.style.transform = `
        perspective(1000px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateZ(20px)
      `;
    });

    this.elements.heroCard.addEventListener('mouseleave', () => {
      this.elements.heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    });
  }

  /**
   * Initialize interaction system
   */
  initInteractionSystem() {
    this.initCursorSystem();
    this.initFormSystem();
    this.initCopyFeature();
    this.initKeyboardShortcuts();
  }

  /**
   * Initialize custom cursor system
   */
  initCursorSystem() {
    if (this.state.isMobile || !this.elements.cursor || !this.elements.cursorFollower) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.9;
      cursorY += (mouseY - cursorY) * 0.9;
      
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      this.elements.cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      this.elements.cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;

      requestAnimationFrame(animateCursor);
    };

    animateCursor();
    this.setupCursorInteractions();
  }

  /**
   * Setup cursor interactions
   */
  setupCursorInteractions() {
    const interactiveElements = document.querySelectorAll(`
      a, button, .hero-card, .project-card, .social-link, 
      .nav-link, .btn, .skill-category, .contact-item, .copy-btn
    `);
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.elements.cursor?.classList.add('expand');
        this.elements.cursorFollower?.classList.add('expand');
      });
      
      el.addEventListener('mouseleave', () => {
        this.elements.cursor?.classList.remove('expand');
        this.elements.cursorFollower?.classList.remove('expand');
      });
    });

    document.addEventListener('mousedown', () => {
      this.elements.cursor?.classList.add('click');
      this.elements.cursorFollower?.classList.add('click');
    });

    document.addEventListener('mouseup', () => {
      this.elements.cursor?.classList.remove('click');
      this.elements.cursorFollower?.classList.remove('click');
    });
  }

  /**
   * Initialize form system
   */
  initFormSystem() {
    if (!this.elements.contactForm) return;

    this.elements.contactForm.addEventListener('submit', (e) => {
      this.handleFormSubmit(e);
    });

    // Form validation
    const inputs = this.elements.contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearFieldError(input));
    });
  }

  /**
   * Handle form submission
   */
  async handleFormSubmit(e) {
    e.preventDefault();
    
    const submitBtn = this.elements.contactForm.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Validate form
    const isValid = this.validateForm();
    if (!isValid) {
      this.showNotification('Please fix the errors in the form', 'error');
      return;
    }
    
    try {
      // Show loading state
      submitBtn.disabled = true;
      btnText.style.display = 'none';
      btnLoading.style.display = 'inline';
      submitBtn.classList.add('loading');

      const formData = new FormData(this.elements.contactForm);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
      };

      // Simulate form submission (replace with actual endpoint)
      await this.delay(2000);
      
      this.showNotification('Message sent successfully! 🚀 I\'ll get back to you soon.', 'success');
      this.elements.contactForm.reset();
      
      this.trackEvent('Form', 'Submit', 'Success');
      
    } catch (error) {
      console.error('Form submission error:', error);
      this.showNotification('Failed to send message. Please try emailing me directly at rishabhkmr008@gmail.com', 'error');
      this.trackEvent('Form', 'Submit', 'Error');
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      btnText.style.display = 'inline';
      btnLoading.style.display = 'none';
      submitBtn.classList.remove('loading');
    }
  }

  /**
   * Validate form
   */
  validateForm() {
    const inputs = this.elements.contactForm.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });
    
    return isValid;
  }

  /**
   * Validate individual field
   */
  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const required = field.hasAttribute('required');
    
    let isValid = true;
    let message = '';
    
    if (required && !value) {
      isValid = false;
      message = 'This field is required';
    } else if (type === 'email' && value && !this.isValidEmail(value)) {
      isValid = false;
      message = 'Please enter a valid email address';
    } else if (field.name === 'name' && value && value.length < 2) {
      isValid = false;
      message = 'Name must be at least 2 characters long';
    } else if (field.name === 'message' && value && value.length < 10) {
      isValid = false;
      message = 'Message must be at least 10 characters long';
    }
    
    this.displayFieldError(field, isValid, message);
    return isValid;
  }

  /**
   * Display field error
   */
  displayFieldError(field, isValid, message) {
    let errorElement = field.parentNode.querySelector('.field-error');
    
    if (!errorElement) {
      errorElement = document.createElement('span');
      errorElement.className = 'field-error';
      errorElement.style.cssText = `
        color: var(--color-danger, #ef4444);
        font-size: 0.875rem;
        margin-top: 0.5rem;
        display: block;
      `;
      field.parentNode.appendChild(errorElement);
    }
    
    if (isValid) {
      field.classList.remove('error');
      errorElement.textContent = '';
      errorElement.style.display = 'none';
    } else {
      field.classList.add('error');
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
  }

  /**
   * Clear field error
   */
  clearFieldError(field) {
    field.classList.remove('error');
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
      errorElement.style.display = 'none';
    }
  }

  /**
   * Validate email format
   */
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Initialize copy email feature
   */
  initCopyFeature() {
    if (!this.elements.copyEmailBtn) return;

    this.elements.copyEmailBtn.addEventListener('click', async () => {
      try {
        const email = 'rishabhkmr008@gmail.com';
        
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        } else {
          this.fallbackCopyTextToClipboard(email);
        }
        
        // Visual feedback
        const originalText = this.elements.copyEmailBtn.textContent;
        this.elements.copyEmailBtn.textContent = 'Copied! ✓';
        this.elements.copyEmailBtn.style.backgroundColor = 'var(--color-success, #10b981)';
        this.elements.copyEmailBtn.style.color = 'white';
        
        setTimeout(() => {
          this.elements.copyEmailBtn.textContent = originalText;
          this.elements.copyEmailBtn.style.backgroundColor = '';
          this.elements.copyEmailBtn.style.color = '';
        }, 2000);
        
        this.showNotification('Email copied to clipboard!', 'success');
        this.trackEvent('Interaction', 'Copy Email', 'Success');
        
      } catch (err) {
        console.error('Failed to copy email:', err);
        this.showNotification('Failed to copy email address.', 'error');
        this.trackEvent('Interaction', 'Copy Email', 'Error');
      }
    });
  }

  /**
   * Fallback copy method for older browsers
   */
  fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
    } finally {
      document.body.removeChild(textArea);
    }
  }

  /**
   * Initialize keyboard shortcuts
   */
  initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Don't interfere with form inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      
      switch (e.key) {
        case 'Escape':
          this.closeMobileMenu();
          break;
          
        case 't':
        case 'T':
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            this.toggleTheme();
          }
          break;
          
        case 'Home':
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
          
        case 'End':
          e.preventDefault();
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          break;
      }
    });
  }

  /**
   * Load all content
   */
  async loadAllContent() {
    try {
      await Promise.all([
        this.loadProjects(),
        this.loadSkills(),
        this.loadExperience()
      ]);
      
      this.state.contentLoaded = true;
      console.log('✅ All content loaded successfully');
      
    } catch (error) {
      console.error('❌ Error loading content:', error);
      this.showNotification('Some content failed to load', 'warning');
    }
  }

  /**
   * Load projects
   */
  async loadProjects() {
    if (!this.elements.projectsGrid) return;

    try {
      // Show loading state
      this.elements.projectsGrid.innerHTML = `
        <div class="project-loading">
          <div class="loading-spinner"></div>
          <p>Loading amazing projects...</p>
        </div>
      `;

      // Simulate loading delay
      await this.delay(500);
      
      const projectsHTML = this.projects.map((project, index) => `
        <article class="project-card reveal-on-scroll hover-lift" data-category="${project.category}" style="animation-delay: ${index * 100}ms">
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy" decoding="async" 
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 400 300\\'%3E%3Crect fill=\\'%23f3f4f6\\' width=\\'400\\' height=\\'300\\'/%3E%3Ctext x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\' dy=\\'.3em\\' fill=\\'%236b7280\\'%3EProject Image%3C/text%3E%3C/svg%3E'">
            <div class="project-overlay">
              <div class="project-links">
                ${project.demoUrl ? `
                  <a href="${project.demoUrl}" class="project-link demo-link" target="_blank" rel="noopener noreferrer" aria-label="View live demo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3L21 3 21 9M10 14L21 3"/>
                    </svg>
                    <span>Demo</span>
                  </a>
                ` : ''}
                <a href="${project.githubUrl}" class="project-link github-link" target="_blank" rel="noopener noreferrer" aria-label="View source code">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>Code</span>
                </a>
              </div>
              <div class="project-status status-${project.status}">
                ${project.status.replace('-', ' ')}
              </div>
            </div>
          </div>
          <div class="project-content">
            <div class="project-header">
              <h3 class="project-title">${project.title}</h3>
              <span class="project-year">${project.year}</span>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
              ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
          </div>
        </article>
      `).join('');

      this.elements.projectsGrid.innerHTML = projectsHTML;
      
      // Initialize project filters
      this.initProjectsFilter();
      
      // Re-observe new elements for animations
      if (this.state.observers.reveal) {
        this.elements.projectsGrid.querySelectorAll('.reveal-on-scroll').forEach(el => {
          this.state.observers.reveal.observe(el);
        });
      }
      
      this.trackEvent('Content', 'Projects Loaded', this.projects.length);
      
    } catch (error) {
      console.error('Error loading projects:', error);
      this.elements.projectsGrid.innerHTML = `
        <div class="error-message">
          <h3>Oops! Something went wrong</h3>
          <p>Failed to load projects. Please refresh the page or check out my GitHub.</p>
          <a href="https://github.com/rishabh1721" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <span>View GitHub</span>
          </a>
        </div>
      `;
    }
  }

  /**
   * Initialize projects filter
   */
  initProjectsFilter() {
    this.elements.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        // Update active filter button
        this.elements.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter projects
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
          const category = card.getAttribute('data-category');
          const shouldShow = filter === 'all' || category === filter;
          
          if (shouldShow) {
            card.style.display = 'block';
            card.style.animationDelay = `${index * 50}ms`;
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0) scale(1)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px) scale(0.9)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
        
        this.trackEvent('Interaction', 'Project Filter', filter);
      });
    });
  }

  /**
   * Load skills
   */
  async loadSkills() {
    if (!this.elements.skillsContainer) return;

    try {
      await this.delay(200);

      const skillsHTML = this.skillCategories.map((category, categoryIndex) => `
        <div class="skill-category reveal-on-scroll" data-category="${category.title}" style="animation-delay: ${categoryIndex * 150}ms">
          <div class="skill-header">
            <div class="skill-icon">${category.icon}</div>
            <h3 class="skill-title">${category.title}</h3>
          </div>
          <div class="skills-list">
            ${category.skills.map((skill, skillIndex) => `
              <div class="skill-item" data-level="${skill.level}" style="animation-delay: ${(categoryIndex * 150) + (skillIndex * 50)}ms">
                <div class="skill-info">
                  <span class="skill-name">${skill.name}</span>
                  <span class="skill-percentage">${skill.level}%</span>
                  <span class="skill-experience">${skill.experience}</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" style="--skill-width: ${skill.level}%"></div>
                </div>
                <div class="skill-description">${skill.description}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('');

      this.elements.skillsContainer.innerHTML = skillsHTML;
      this.initSkillBars();
      
      this.trackEvent('Content', 'Skills Loaded', this.skillCategories.length);
      
    } catch (error) {
      console.error('Error loading skills:', error);
    }
  }

  /**
   * Initialize skill progress bars
   */
  initSkillBars() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    if (!('IntersectionObserver' in window)) return;
    
    this.state.observers.skills = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll('.skill-progress');
          
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              bar.style.transform = 'scaleX(1)';
              bar.style.opacity = '1';
            }, index * 100);
          });
          
          this.state.observers.skills.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    skillCategories.forEach(category => {
      this.state.observers.skills.observe(category);
    });
  }

  /**
   * Load experience
   */
  async loadExperience() {
    if (!this.elements.experienceTimeline) return;

    try {
      await this.delay(300);

      const experienceHTML = this.experiences.map((exp, index) => `
        <div class="experience-item reveal-on-scroll ${exp.current ? 'current' : ''}" 
             data-index="${index}" data-type="${exp.type}" style="animation-delay: ${index * 200}ms">
          <div class="experience-marker">
            <div class="marker-dot"></div>
            ${exp.current ? '<div class="marker-pulse"></div>' : ''}
          </div>
          <div class="experience-content">
            <div class="experience-header">
              <h3 class="experience-title">${exp.title}</h3>
              <span class="experience-company">${exp.company}</span>
              <span class="experience-period">${exp.period}</span>
              <span class="experience-type type-${exp.type}">${exp.type}</span>
              <span class="experience-location">${exp.location}</span>
            </div>
            <p class="experience-description">${exp.description}</p>
            <div class="experience-technologies">
              ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('');

      this.elements.experienceTimeline.innerHTML = experienceHTML;
      
      this.trackEvent('Content', 'Experience Loaded', this.experiences.length);
      
    } catch (error) {
      console.error('Error loading experience:', error);
    }
  }

  /**
   * Initialize advanced features
   */
  initAdvancedFeatures() {
    this.initAccessibilityFeatures();
    this.initPerformanceMonitoring();
    this.initServiceWorker();
  }

  /**
   * Initialize accessibility features
   */
  initAccessibilityFeatures() {
    // Skip links
    this.createSkipLinks();
    
    // Focus management
    this.initFocusManagement();
    
    // Screen reader announcements
    this.createAriaLiveRegion();
    
    // Reduced motion support
    this.handleReducedMotion();
  }

  /**
   * Create skip links for accessibility
   */
  createSkipLinks() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: var(--color-primary, #f97316);
      color: var(--color-background, #ffffff);
      padding: 8px 12px;
      z-index: 10000;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
      transition: top 0.3s ease;
    `;
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  /**
   * Initialize focus management
   */
  initFocusManagement() {
    // Focus trap for mobile menu
    if (this.elements.navMenu) {
      const focusableElements = this.elements.navMenu.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        this.elements.navMenu.addEventListener('keydown', (e) => {
          if (!this.state.isMenuOpen) return;
          
          if (e.key === 'Tab') {
            if (e.shiftKey) {
              if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
              }
            } else {
              if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
              }
            }
          }
        });
      }
    }
  }

  /**
   * Create ARIA live region for screen reader announcements
   */
  createAriaLiveRegion() {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.style.cssText = `
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    document.body.appendChild(liveRegion);
    
    this.ariaLiveRegion = liveRegion;
  }

  /**
   * Announce to screen readers
   */
  announceToScreenReader(message) {
    if (this.ariaLiveRegion) {
      this.ariaLiveRegion.textContent = message;
      setTimeout(() => {
        this.ariaLiveRegion.textContent = '';
      }, 1000);
    }
  }

  /**
   * Handle reduced motion preferences
   */
  handleReducedMotion() {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleReducedMotion = (e) => {
      if (e.matches) {
        this.state.animationsEnabled = false;
        document.documentElement.classList.add('reduce-motion');
      } else {
        this.state.animationsEnabled = true;
        document.documentElement.classList.remove('reduce-motion');
      }
    };
    
    reducedMotionQuery.addEventListener('change', handleReducedMotion);
    handleReducedMotion(reducedMotionQuery);
  }

  /**
   * Initialize performance monitoring
   */
  initPerformanceMonitoring() {
    // Monitor page load time
    window.addEventListener('load', () => {
      if (performance.getEntriesByType) {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData) {
          const loadTime = Math.round(perfData.loadEventEnd - perfData.fetchStart);
          console.log(`🚀 R CODES Portfolio loaded in ${loadTime}ms`);
          this.trackEvent('Performance', 'Page Load Time', loadTime);
        }
      }
    });

    // Monitor memory usage (if available)
    if ('memory' in performance) {
      setInterval(() => {
        const memory = performance.memory;
        if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.9) {
          console.warn('High memory usage detected');
          this.trackEvent('Performance', 'High Memory Usage', memory.usedJSHeapSize);
        }
      }, 30000);
    }
  }

  /**
   * Initialize service worker
   */
  initServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered:', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed:', registrationError);
          });
      });
    }
  }

  /**
   * Bind all event listeners
   */
  bindEventListeners() {
    // Resize handling
    window.addEventListener('resize', this.debounce(() => {
      this.handleResize();
    }, this.config.debounceDelay));

    // Visibility change
    document.addEventListener('visibilitychange', () => {
      this.handleVisibilityChange();
    });

    // Online/offline status
    window.addEventListener('online', () => {
      this.showNotification('Connection restored', 'success');
    });
    
    window.addEventListener('offline', () => {
      this.showNotification('Connection lost. Some features may not work.', 'warning');
    });
  }

  /**
   * Handle window resize
   */
  handleResize() {
    const previousIsMobile = this.state.isMobile;
    const previousIsTablet = this.state.isTablet;
    
    this.state.isMobile = window.innerWidth <= 768;
    this.state.isTablet = window.innerWidth <= 1024;
    
    // Close mobile menu if switching to desktop
    if (previousIsMobile && !this.state.isMobile && this.state.isMenuOpen) {
      this.closeMobileMenu();
    }
    
    // Reinitialize magic line if switching from mobile to desktop
    if (previousIsMobile && !this.state.isMobile) {
      this.initMagicLine();
    }
    
    // Update card effects
    if (this.elements.heroCard) {
      if (this.state.isMobile) {
        this.elements.heroCard.style.transform = '';
      }
    }
  }

  /**
   * Handle visibility change
   */
  handleVisibilityChange() {
    if (document.hidden) {
      document.title = '👋 Come back! - R CODES';
    } else {
      document.title = 'Rishabh Kumar — MCA GenAI Student | AI & Full-Stack Developer 2025';
    }
  }

  /**
   * Start main application loop
   */
  startMainLoop() {
    // Animation loop for continuous effects
    const animate = () => {
      // Update floating elements if animations are enabled
      if (this.state.animationsEnabled && !document.hidden) {
        this.updateFloatingElements();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }

  /**
   * Update floating elements animation
   */
  updateFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-shape');
    const time = Date.now() * 0.001;
    
    floatingElements.forEach((element, index) => {
      const x = Math.sin(time * 0.5 + index) * 20;
      const y = Math.cos(time * 0.3 + index) * 15;
      const scale = 1 + Math.sin(time * 0.4 + index) * 0.1;
      
      element.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    });
  }

  /**
   * Show notification
   */
  showNotification(message, type = 'info', duration = this.config.notificationDuration) {
    const notification = this.createNotification(message, type);
    
    let container = this.elements.notificationContainer;
    if (!container) {
      container = this.createNotificationContainer();
    }
    
    container.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.classList.add('notification--show');
    }, 10);
    
    // Auto remove
    const autoRemove = setTimeout(() => {
      this.removeNotification(notification);
    }, duration);
    
    // Manual close
    const closeBtn = notification.querySelector('.notification-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        clearTimeout(autoRemove);
        this.removeNotification(notification);
      });
    }
    
    return notification;
  }

  /**
   * Create notification element
   */
  createNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    
    const icons = {
      success: '✓',
      error: '✗',
      warning: '⚠',
      info: 'ℹ'
    };
    
    notification.innerHTML = `
      <div class="notification-icon">${icons[type] || icons.info}</div>
      <div class="notification-content">
        <div class="notification-message">${message}</div>
      </div>
      <button class="notification-close" aria-label="Close notification">×</button>
    `;
    
    return notification;
  }

  /**
   * Create notification container
   */
  createNotificationContainer() {
    const container = document.createElement('div');
    container.id = 'notificationContainer';
    container.className = 'notification-container';
    container.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10000;
      max-width: 400px;
      pointer-events: none;
    `;
    document.body.appendChild(container);
    this.elements.notificationContainer = container;
    return container;
  }

  /**
   * Remove notification
   */
  removeNotification(notification) {
    notification.classList.remove('notification--show');
    notification.classList.add('notification--hide');
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }

  /**
   * Handle initialization error
   */
  handleInitializationError(error) {
    console.error('Portfolio initialization failed:', error);
    
    // Show fallback UI
    document.body.innerHTML = `
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 2rem;
        text-align: center;
        background: #0a0a0f;
        color: #ffffff;
        font-family: Inter, system-ui, sans-serif;
      ">
        <h1 style="font-size: 2.5rem; margin-bottom: 1rem; color: #f97316;">R CODES</h1>
        <p style="font-size: 1.125rem; margin-bottom: 2rem; max-width: 500px;">
          Something went wrong while loading the portfolio. Please refresh the page or contact me directly.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
          <button onclick="location.reload()" style="
            background: #f97316;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            font-weight: 500;
            cursor: pointer;
          ">Refresh Page</button>
          <a href="mailto:rishabhkmr008@gmail.com" style="
            background: transparent;
            color: #f97316;
            border: 1px solid #f97316;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            text-decoration: none;
            font-weight: 500;
          ">Send Email</a>
        </div>
      </div>
    `;
  }

  /**
   * Track events for analytics
   */
  trackEvent(category, action, label = null) {
    console.log(`📊 Event: ${category} - ${action}${label ? ` (${label})` : ''}`);
    
    // Integrate with Google Analytics, Mixpanel, etc.
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label
      });
    }
  }

  /**
   * Utility: Throttle function
   */
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  /**
   * Utility: Debounce function
   */
  debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  }

  /**
   * Utility: Delay function
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Clean up resources when needed
   */
  destroy() {
    // Disconnect observers
    Object.values(this.state.observers).forEach(observer => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    });
    
    // Clear timers
    Object.values(this.state.timers).forEach(timer => {
      clearTimeout(timer);
      clearInterval(timer);
    });
    
    // Remove event listeners
    this.state.eventListeners.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler);
    });
    
    console.log('🧹 R CODES Portfolio cleaned up');
  }
}

// ============================================
// INITIALIZE PORTFOLIO
// ============================================

// Wait for DOM and initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.portfolioInstance = new RCodesPortfolio();
  });
} else {
  window.portfolioInstance = new RCodesPortfolio();
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RCodesPortfolio;
}

// ============================================
// GLOBAL ERROR HANDLING
// ============================================

window.addEventListener('error', (event) => {
  console.error('Global Portfolio Error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Global Unhandled Promise Rejection:', event.reason);
});

// ============================================
// FIX FOR EMPTY SKILLS AND EXPERIENCE SECTIONS
// ============================================

// Force populate skills and experience sections
document.addEventListener('DOMContentLoaded', () => {
  // Wait a bit for all elements to be available
  setTimeout(() => {
    forcePopulateSkills();
    forcePopulateExperience();
  }, 1000);
});

function forcePopulateSkills() {
  const skillsContainer = document.getElementById('skillsContainer');
  if (!skillsContainer) {
    console.error('Skills container not found');
    return;
  }

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "C++", level: 85, experience: "2 years", description: "Data Structures & Algorithms" },
        { name: "Python", level: 80, experience: "2 years", description: "AI/ML & Backend Development" },
        { name: "JavaScript", level: 88, experience: "2.5 years", description: "Full-Stack Development" },
        { name: "Java", level: 75, experience: "1.5 years", description: "Object-Oriented Programming" }
      ]
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: [
        { name: "React.js", level: 85, experience: "2 years", description: "Modern Frontend Framework" },
        { name: "Node.js", level: 80, experience: "2 years", description: "Backend Runtime Environment" },
        { name: "HTML/CSS", level: 90, experience: "3 years", description: "Modern Web Standards" },
        { name: "Express.js", level: 78, experience: "1.5 years", description: "Web Application Framework" }
      ]
    },
    {
      title: "Database & Tools",
      icon: "🛠️",
      skills: [
        { name: "MongoDB", level: 82, experience: "2 years", description: "NoSQL Database" },
        { name: "Git & GitHub", level: 88, experience: "2.5 years", description: "Version Control" },
        { name: "VS Code", level: 95, experience: "3 years", description: "Code Editor" },
        { name: "Postman", level: 80, experience: "1.5 years", description: "API Testing" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        { name: "TensorFlow", level: 70, experience: "1 year", description: "Deep Learning Framework" },
        { name: "scikit-learn", level: 75, experience: "1.5 years", description: "Machine Learning Library" },
        { name: "Data Analysis", level: 72, experience: "1 year", description: "Data Processing & Insights" },
        { name: "NLP", level: 68, experience: "8 months", description: "Natural Language Processing" }
      ]
    }
  ];

  const skillsHTML = skillCategories.map((category, categoryIndex) => `
    <div class="skill-category reveal-on-scroll" data-category="${category.title}" style="animation-delay: ${categoryIndex * 150}ms">
      <div class="skill-header">
        <div class="skill-icon">${category.icon}</div>
        <h3 class="skill-title">${category.title}</h3>
      </div>
      <div class="skills-list">
        ${category.skills.map((skill, skillIndex) => `
          <div class="skill-item" data-level="${skill.level}" style="animation-delay: ${(categoryIndex * 150) + (skillIndex * 50)}ms">
            <div class="skill-info">
              <span class="skill-name">${skill.name}</span>
              <span class="skill-percentage">${skill.level}%</span>
              <span class="skill-experience">${skill.experience}</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="--skill-width: ${skill.level}%; transform: scaleX(1); opacity: 1;"></div>
            </div>
            <div class="skill-description">${skill.description}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  skillsContainer.innerHTML = skillsHTML;
  console.log('✅ Skills section populated successfully');
}

function forcePopulateExperience() {
  const experienceTimeline = document.getElementById('experienceTimeline');
  if (!experienceTimeline) {
    console.error('Experience timeline not found');
    return;
  }

  const experiences = [
    {
      title: "MCA GenAI Student",
      company: "SRM Institute of Science and Technology",
      period: "2024 - Present",
      description: "Pursuing Master of Computer Applications with specialization in Generative AI. Focus on advanced algorithms, machine learning, and full-stack development.",
      technologies: ["Python", "AI/ML", "Data Structures", "Web Development", "Research"],
      type: "education",
      current: true,
      location: "Chennai, India"
    },
    {
      title: "Full-Stack Developer",
      company: "Personal Projects",
      period: "2023 - Present",
      description: "Building innovative web applications using MERN stack. Developed projects like WanderLust (hotel booking system) and various AI-powered applications.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
      type: "project",
      current: true,
      location: "Remote"
    },
    {
      title: "Competitive Programming",
      company: "LeetCode & Online Platforms",
      period: "2022 - Present",
      description: "Actively solving algorithmic problems and improving problem-solving skills. Focused on data structures, algorithms, and optimization techniques.",
      technologies: ["C++", "Python", "Algorithms", "Data Structures", "Problem Solving"],
      type: "skill",
      current: true,
      location: "Online"
    }
  ];

  const experienceHTML = experiences.map((exp, index) => `
    <div class="experience-item reveal-on-scroll ${exp.current ? 'current' : ''}" 
         data-index="${index}" data-type="${exp.type}" style="animation-delay: ${index * 200}ms">
      <div class="experience-marker">
        <div class="marker-dot"></div>
        ${exp.current ? '<div class="marker-pulse"></div>' : ''}
      </div>
      <div class="experience-content">
        <div class="experience-header">
          <h3 class="experience-title">${exp.title}</h3>
          <span class="experience-company">${exp.company}</span>
          <span class="experience-period">${exp.period}</span>
          <span class="experience-type type-${exp.type}">${exp.type}</span>
          <span class="experience-location">${exp.location}</span>
        </div>
        <p class="experience-description">${exp.description}</p>
        <div class="experience-technologies">
          ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  experienceTimeline.innerHTML = experienceHTML;
  console.log('✅ Experience section populated successfully');
}
// ============================================
// EMERGENCY FIX FOR EMPTY SECTIONS
// ============================================

// Force populate sections after everything loads
window.addEventListener('load', () => {
  setTimeout(() => {
    fixEmptySections();
  }, 2000);
});

function fixEmptySections() {
  console.log('🔧 Fixing empty sections...');
  
  // Fix Skills Section
  const skillsContainer = document.getElementById('skillsContainer') || 
                         document.querySelector('.skills-container') ||
                         document.querySelector('#skills .container');
  
  if (skillsContainer) {
    skillsContainer.innerHTML = `
      <div class="skill-category">
        <div class="skill-header">
          <div class="skill-icon">💻</div>
          <h3 class="skill-title">Programming Languages</h3>
        </div>
        <div class="skills-list">
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">C++</span>
              <span class="skill-percentage">85%</span>
              <span class="skill-experience">2 years</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 85%; background: #f97316; height: 4px; border-radius: 2px;"></div>
            </div>
            <div class="skill-description">Data Structures & Algorithms</div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Python</span>
              <span class="skill-percentage">80%</span>
              <span class="skill-experience">2 years</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 80%; background: #f97316; height: 4px; border-radius: 2px;"></div>
            </div>
            <div class="skill-description">AI/ML & Backend Development</div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">JavaScript</span>
              <span class="skill-percentage">88%</span>
              <span class="skill-experience">2.5 years</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 88%; background: #f97316; height: 4px; border-radius: 2px;"></div>
            </div>
            <div class="skill-description">Full-Stack Development</div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Java</span>
              <span class="skill-percentage">75%</span>
              <span class="skill-experience">1.5 years</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 75%; background: #f97316; height: 4px; border-radius: 2px;"></div>
            </div>
            <div class="skill-description">Object-Oriented Programming</div>
          </div>
        </div>
      </div>

      <div class="skill-category">
        <div class="skill-header">
          <div class="skill-icon">🌐</div>
          <h3 class="skill-title">Web Development</h3>
        </div>
        <div class="skills-list">
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">React.js</span>
              <span class="skill-percentage">85%</span>
              <span class="skill-experience">2 years</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 85%; background: #f97316; height: 4px; border-radius: 2px;"></div>
            </div>
            <div class="skill-description">Modern Frontend Framework</div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">Node.js</span>
              <span class="skill-percentage">80%</span>
              <span class="skill-experience">2 years</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 80%; background: #f97316; height: 4px; border-radius: 2px;"></div>
            </div>
            <div class="skill-description">Backend Runtime Environment</div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">MongoDB</span>
              <span class="skill-percentage">82%</span>
              <span class="skill-experience">2 years</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 82%; background: #f97316; height: 4px; border-radius: 2px;"></div>
            </div>
            <div class="skill-description">NoSQL Database</div>
          </div>
        </div>
      </div>

      <div class="skill-category">
        <div class="skill-header">
          <div class="skill-icon">🤖</div>
          <h3 class="skill-title">AI & Machine Learning</h3>
        </div>
        <div class="skills-list">
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">TensorFlow</span>
              <span class="skill-percentage">70%</span>
              <span class="skill-experience">1 year</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 70%; background: #f97316; height: 4px; border-radius: 2px;"></div>
            </div>
            <div class="skill-description">Deep Learning Framework</div>
          </div>
          <div class="skill-item">
            <div class="skill-info">
              <span class="skill-name">scikit-learn</span>
              <span class="skill-percentage">75%</span>
              <span class="skill-experience">1.5 years</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 75%; background: #f97316; height: 4px; border-radius: 2px;"></div>
            </div>
            <div class="skill-description">Machine Learning Library</div>
          </div>
        </div>
      </div>
    `;
    console.log('✅ Skills section populated');
  } else {
    console.error('❌ Skills container not found');
  }

  // Fix Experience/Journey Section
  const experienceTimeline = document.getElementById('experienceTimeline') || 
                            document.querySelector('.experience-timeline') ||
                            document.querySelector('#experience .container');
  
  if (experienceTimeline) {
    experienceTimeline.innerHTML = `
      <div class="experience-item current">
        <div class="experience-marker">
          <div class="marker-dot" style="width: 12px; height: 12px; background: #f97316; border-radius: 50%; border: 3px solid #fff;"></div>
          <div class="marker-pulse" style="position: absolute; width: 20px; height: 20px; background: #f97316; border-radius: 50%; opacity: 0.3; animation: pulse 2s infinite;"></div>
        </div>
        <div class="experience-content">
          <div class="experience-header">
            <h3 class="experience-title">MCA GenAI Student</h3>
            <span class="experience-company">SRM Institute of Science and Technology</span>
            <span class="experience-period">2024 - Present</span>
            <span class="experience-location">Chennai, India</span>
          </div>
          <p class="experience-description">Pursuing Master of Computer Applications with specialization in Generative AI. Focus on advanced algorithms, machine learning, and full-stack development.</p>
          <div class="experience-technologies">
            <span class="tech-tag" style="background: #f97316; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; margin-right: 8px;">Python</span>
            <span class="tech-tag" style="background: #f97316; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; margin-right: 8px;">AI/ML</span>
            <span class="tech-tag" style="background: #f97316; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; margin-right: 8px;">Data Structures</span>
            <span class="tech-tag" style="background: #f97316; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; margin-right: 8px;">Web Development</span>
          </div>
        </div>
      </div>

      <div class="experience-item current" style="margin-top: 2rem;">
        <div class="experience-marker">
          <div class="marker-dot" style="width: 12px; height: 12px; background: #f97316; border-radius: 50%; border: 3px solid #fff;"></div>
        </div>
        <div class="experience-content">
          <div class="experience-header">
            <h3 class="experience-title">Full-Stack Developer</h3>
            <span class="experience-company">Personal Projects</span>
            <span class="experience-period">2023 - Present</span>
            <span class="experience-location">Remote</span>
          </div>
          <p class="experience-description">Building innovative web applications using MERN stack. Developed projects like WanderLust (hotel booking system) and various AI-powered applications.</p>
          <div class="experience-technologies">
            <span class="tech-tag" style="background: #f97316; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; margin-right: 8px;">React</span>
            <span class="tech-tag" style="background: #f97316; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; margin-right: 8px;">Node.js</span>
            <span class="tech-tag" style="background: #f97316; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; margin-right: 8px;">MongoDB</span>
            <span class="tech-tag" style="background: #f97316; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; margin-right: 8px;">Express</span>
          </div>
        </div>
      </div>

      <div class="experience-item" style="margin-top: 2rem;">
        <div class="experience-marker">
          <div class="marker-dot" style="width: 12px; height: 12px; background: #f97316; border-radius: 50%; border: 3px solid #fff;"></div>
        </div>
        <div class="experience-content">
          <div class="experience-header">
            <h3 class="experience-title">Competitive Programming</h3>
            <span class="experience-company">LeetCode & Online Platforms</span>
            <span class="experience-period">2022 - Present</span>
            <span class="experience-location">Online</span>
          </div>
          <p class="experience-description">Actively solving algorithmic problems and improving problem-solving skills. Focused on data structures, algorithms, and optimization techniques.</p>
          <div class="experience-technologies">
            <span class="tech-tag" style="background: #f97316; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; margin-right: 8px;">C++</span>
            <span class="tech-tag" style="background: #f97316; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; margin-right: 8px;">Python</span>
            <span class="tech-tag" style="background: #f97316; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; margin-right: 8px;">Algorithms</span>
            <span class="tech-tag" style="background: #f97316; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; margin-right: 8px;">Data Structures</span>
          </div>
        </div>
      </div>
    `;
    console.log('✅ Experience section populated');
  } else {
    console.error('❌ Experience container not found');
  }
}

// Add CSS animation for pulse effect
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.2); opacity: 0.1; }
    100% { transform: scale(1); opacity: 0.3; }
  }
  
  .skill-category {
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: rgba(249, 115, 22, 0.1);
    border-radius: 12px;
    border: 1px solid rgba(249, 115, 22, 0.2);
  }
  
  .skill-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .skill-icon {
    font-size: 1.5rem;
  }
  
  .skill-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #f97316;
  }
  
  .skill-item {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
  }
  
  .skill-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .skill-name {
    font-weight: 600;
    color: #ffffff;
  }
  
  .skill-percentage {
    color: #f97316;
    font-weight: 600;
  }
  
  .skill-experience {
    color: #888;
    font-size: 0.875rem;
  }
  
  .skill-bar {
    background: rgba(255, 255, 255, 0.1);
    height: 4px;
    border-radius: 2px;
    margin-bottom: 0.5rem;
  }
  
  .skill-description {
    color: #ccc;
    font-size: 0.875rem;
  }
  
  .experience-item {
    position: relative;
    padding-left: 3rem;
    margin-bottom: 2rem;
  }
  
  .experience-marker {
    position: absolute;
    left: 0;
    top: 0;
  }
  
  .experience-content {
    background: rgba(249, 115, 22, 0.1);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(249, 115, 22, 0.2);
  }
  
  .experience-header {
    margin-bottom: 1rem;
  }
  
  .experience-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #f97316;
    margin-bottom: 0.5rem;
  }
  
  .experience-company {
    display: block;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 0.25rem;
  }
  
  .experience-period {
    display: block;
    color: #888;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }
  
  .experience-location {
    display: block;
    color: #888;
    font-size: 0.875rem;
  }
  
  .experience-description {
    color: #ccc;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .experience-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;
document.head.appendChild(style);


// ============================================
// PERFORMANCE MONITORING
// ============================================

window.addEventListener('load', () => {
  // Monitor Core Web Vitals
  if ('web-vitals' in window) {
    // This would be implemented with the web-vitals library
    console.log('Core Web Vitals monitoring enabled');
  }
  
  // Log final load time
  const loadTime = performance.now();
  console.log(`🎯 Total portfolio initialization time: ${Math.round(loadTime)}ms`);
});

console.log('🚀 R CODES Portfolio JavaScript loaded successfully!');
