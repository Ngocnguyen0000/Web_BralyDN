// // ===== MAIN JAVASCRIPT FILE =====

// class BralyWebsite {
//   constructor() {
//     this.init()
//   }

//   init() {
//     this.setupEventListeners()
//     this.initializeComponents()
//     this.setupIntersectionObserver()
//     this.optimizeImages()
//   }

//   // ===== EVENT LISTENERS =====
//   setupEventListeners() {
//     // Back to top button
//     this.setupBackToTop()

//     // Smooth scrolling for anchor links
//     this.setupSmoothScrolling()

//     // Form submissions
//     this.setupForms()

//     // Navbar scroll effect
//     this.setupNavbarScroll()

//     // Mobile menu
//     this.setupMobileMenu()
//   }

//   // ===== BACK TO TOP FUNCTIONALITY =====
//   setupBackToTop() {
//     const backToTopBtn = document.getElementById("backToTop")
//     if (!backToTopBtn) return

//     const toggleBackToTop = () => {
//       const scrolled = window.pageYOffset
//       const coords = document.documentElement.clientHeight

//       if (scrolled > coords) {
//         backToTopBtn.classList.add("show")
//       } else {
//         backToTopBtn.classList.remove("show")
//       }
//     }

//     // Throttled scroll event
//     let ticking = false
//     const handleScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           toggleBackToTop()
//           ticking = false
//         })
//         ticking = true
//       }
//     }

//     window.addEventListener("scroll", handleScroll, { passive: true })

//     backToTopBtn.addEventListener("click", (e) => {
//       e.preventDefault()
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       })
//     })
//   }

//   // ===== SMOOTH SCROLLING =====
//   setupSmoothScrolling() {
//     document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//       anchor.addEventListener("click", (e) => {
//         e.preventDefault()
//         const target = document.querySelector(anchor.getAttribute("href"))
//         if (target) {
//           const headerOffset = 80
//           const elementPosition = target.getBoundingClientRect().top
//           const offsetPosition = elementPosition + window.pageYOffset - headerOffset

//           window.scrollTo({
//             top: offsetPosition,
//             behavior: "smooth",
//           })
//         }
//       })
//     })
//   }

//   // ===== FORM HANDLING =====
//   setupForms() {
//     // Contact form
//     const contactForm = document.getElementById("contactForm")
//     if (contactForm) {
//       contactForm.addEventListener("submit", this.handleContactForm.bind(this))
//     }

//     // Newsletter form
//     const newsletterForms = document.querySelectorAll(".newsletter-form")
//     newsletterForms.forEach((form) => {
//       form.addEventListener("submit", this.handleNewsletterForm.bind(this))
//     })
//   }

//   handleContactForm(e) {
//     e.preventDefault()
//     const form = e.target
//     const formData = new FormData(form)

//     // Show loading state
//     const submitBtn = form.querySelector('button[type="submit"]')
//     const originalText = submitBtn.innerHTML
//     submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Đang gửi...'
//     submitBtn.disabled = true

//     // Simulate form submission (replace with actual API call)
//     setTimeout(() => {
//       this.showNotification("Tin nhắn đã được gửi thành công!", "success")
//       form.reset()
//       submitBtn.innerHTML = originalText
//       submitBtn.disabled = false
//     }, 2000)
//   }

//   handleNewsletterForm(e) {
//     e.preventDefault()
//     const form = e.target
//     const email = form.querySelector('input[type="email"]').value

//     if (this.validateEmail(email)) {
//       this.showNotification("Đăng ký thành công!", "success")
//       form.reset()
//     } else {
//       this.showNotification("Email không hợp lệ!", "error")
//     }
//   }

//   // ===== NAVBAR SCROLL EFFECT =====
//   setupNavbarScroll() {
//     const navbar = document.querySelector(".navbar")
//     if (!navbar) return

//     let lastScrollTop = 0
//     const handleNavbarScroll = () => {
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop

//       if (scrollTop > 100) {
//         navbar.classList.add("navbar-scrolled")
//       } else {
//         navbar.classList.remove("navbar-scrolled")
//       }

//       // Hide/show navbar on scroll
//       if (scrollTop > lastScrollTop && scrollTop > 200) {
//         navbar.style.transform = "translateY(-100%)"
//       } else {
//         navbar.style.transform = "translateY(0)"
//       }

//       lastScrollTop = scrollTop
//     }

//     let ticking = false
//     window.addEventListener(
//       "scroll",
//       () => {
//         if (!ticking) {
//           requestAnimationFrame(() => {
//             handleNavbarScroll()
//             ticking = false
//           })
//           ticking = true
//         }
//       },
//       { passive: true },
//     )
//   }

//   // ===== MOBILE MENU =====
//   setupMobileMenu() {
//     const navbarToggler = document.querySelector(".navbar-toggler")
//     const navbarCollapse = document.querySelector(".navbar-collapse")

//     if (navbarToggler && navbarCollapse) {
//       // Close mobile menu when clicking on links
//       navbarCollapse.querySelectorAll(".nav-link").forEach((link) => {
//         link.addEventListener("click", () => {
//           if (window.innerWidth < 992) {
//             navbarCollapse.classList.remove("show")
//           }
//         })
//       })
//     }
//   }

//   // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
//   setupIntersectionObserver() {
//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: "0px 0px -50px 0px",
//     }

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("fade-in")
//           observer.unobserve(entry.target)
//         }
//       })
//     }, observerOptions)

//     // Observe elements for animation
//     document.querySelectorAll(".card, .value-item, .timeline-item").forEach((el) => {
//       observer.observe(el)
//     })
//   }

//   // ===== IMAGE OPTIMIZATION =====
//   optimizeImages() {
//     // Lazy loading for images
//     if ("IntersectionObserver" in window) {
//       const imageObserver = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const img = entry.target
//             img.src = img.dataset.src
//             img.classList.remove("lazy")
//             imageObserver.unobserve(img)
//           }
//         })
//       })

//       document.querySelectorAll("img[data-src]").forEach((img) => {
//         imageObserver.observe(img)
//       })
//     }
//   }

//   // ===== UTILITY FUNCTIONS =====
//   validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     return re.test(email)
//   }

//   showNotification(message, type = "info") {
//     // Create notification element
//     const notification = document.createElement("div")
//     notification.className = `notification notification-${type}`
//     notification.innerHTML = `
//       <div class="notification-content">
//         <i class="fas fa-${type === "success" ? "check-circle" : "exclamation-circle"} mr-2"></i>
//         ${message}
//       </div>
//     `

//     // Add to DOM
//     document.body.appendChild(notification)

//     // Show notification
//     setTimeout(() => notification.classList.add("show"), 100)

//     // Remove notification
//     setTimeout(() => {
//       notification.classList.remove("show")
//       setTimeout(() => notification.remove(), 300)
//     }, 3000)
//   }

//   // ===== COMPONENT INITIALIZATION =====
//   initializeComponents() {
//     // Initialize tooltips if Bootstrap is available
//     if (typeof bootstrap !== "undefined") {
//       const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
//       tooltipTriggerList.map((tooltipTriggerEl) => {
//         if (typeof bootstrap.Tooltip === "function") {
//           return new bootstrap.Tooltip(tooltipTriggerEl)
//         }
//         return null
//       })
//     }

//     // Initialize counters for stats
//     this.initCounters()
//   }

//   initCounters() {
//     const counters = document.querySelectorAll(".stat-number")
//     const speed = 200

//     const countUp = (counter) => {
//       const target = Number.parseInt(counter.getAttribute("data-target") || counter.textContent.replace(/\D/g, ""))
//       const count = Number.parseInt(counter.textContent.replace(/\D/g, "")) || 0
//       const inc = target / speed

//       if (count < target) {
//         counter.textContent = Math.ceil(count + inc) + (counter.textContent.includes("+") ? "+" : "")
//         setTimeout(() => countUp(counter), 1)
//       } else {
//         counter.textContent = target + (counter.textContent.includes("+") ? "+" : "")
//       }
//     }

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           countUp(entry.target)
//           observer.unobserve(entry.target)
//         }
//       })
//     })

//     counters.forEach((counter) => {
//       observer.observe(counter)
//     })
//   }
// }

// // ===== PERFORMANCE OPTIMIZATION =====
// class PerformanceOptimizer {
//   static init() {
//     // Preload critical resources
//     this.preloadCriticalResources()

//     // Optimize third-party scripts
//     this.optimizeThirdPartyScripts()

//     // Setup service worker if supported
//     this.setupServiceWorker()
//   }

//   static preloadCriticalResources() {
//     const criticalResources = ["assets/css/style.css", "assets/images/braly-logo.png"]

//     criticalResources.forEach((resource) => {
//       const link = document.createElement("link")
//       link.rel = "preload"
//       link.href = resource
//       link.as = resource.endsWith(".css") ? "style" : "image"
//       document.head.appendChild(link)
//     })
//   }

//   static optimizeThirdPartyScripts() {
//     // Defer non-critical scripts
//     const scripts = document.querySelectorAll("script[src]")
//     scripts.forEach((script) => {
//       if (!script.hasAttribute("async") && !script.hasAttribute("defer")) {
//         script.defer = true
//       }
//     })
//   }

//   static setupServiceWorker() {
//     if ("serviceWorker" in navigator) {
//       window.addEventListener("load", () => {
//         navigator.serviceWorker
//           .register("/sw.js")
//           .then((registration) => console.log("SW registered"))
//           .catch((registrationError) => console.log("SW registration failed"))
//       })
//     }
//   }
// }

// // ===== INITIALIZATION =====
// document.addEventListener("DOMContentLoaded", () => {
//   // Initialize main website functionality
//   new BralyWebsite()

//   // Initialize performance optimizations
//   PerformanceOptimizer.init()
// })

// // ===== ERROR HANDLING =====
// window.addEventListener("error", (e) => {
//   console.error("JavaScript error:", e.error)
//   // You can send error reports to your analytics service here
// })

// // ===== EXPORT FOR MODULE USAGE =====
// if (typeof module !== "undefined" && module.exports) {
//   module.exports = { BralyWebsite, PerformanceOptimizer }
// }
