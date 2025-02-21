document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".hero h2", { opacity: 0, y: -50, duration: 0.5 });
  gsap.from(".hero p", { opacity: 0, y: 50, duration: 0.5, delay: 0.2 });
  gsap.from(".btn", { opacity: 0, scale: 0.5, duration: 0.5, delay: 0.3 });

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute("href"));
      gsap.to(window, { duration: 0.5, scrollTo: target });
    });
  });

  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, { scale: 1.1, duration: 0.2 });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(link, { scale: 1, duration: 0.2 });
    });
  });

  gsap.registerPlugin(ScrollTrigger);
  const sections = gsap.utils.toArray(".content");
  sections.forEach(section => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => setActiveLink(section.id),
      onEnterBack: () => setActiveLink(section.id)
    });
  });
  function setActiveLink(sectionId) {
    navLinks.forEach(link => link.classList.remove("active"));
    const activeLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
    if (activeLink) activeLink.classList.add("active");
  }

  gsap.utils.toArray(".content").forEach(section => {
    gsap.to(section, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });
});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 3, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "push" },
      "onclick": { "enable": false, "mode": "push" },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 250,
        "size": 4,
        "duration": 0.5,
        "opacity": 1,
        "speed": 3
      },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});

