document.addEventListener("DOMContentLoaded", () => {
  // Animations d'entrée plus rapides pour la section Hero
  gsap.from(".hero h2", { opacity: 0, y: -50, duration: 0.7 });
  gsap.from(".hero p", { opacity: 0, y: 50, duration: 0.7, delay: 0.3 });
  gsap.from(".btn", { opacity: 0, scale: 0.5, duration: 0.7, delay: 0.5 });

  // Défilement fluide pour tous les liens du menu
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute("href"));
      gsap.to(window, { duration: 0.7, scrollTo: target });
    });
  });

  // Effet de survol sur les onglets
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, { scale: 1.1, duration: 0.2 });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(link, { scale: 1, duration: 0.2 });
    });
  });

  // Mise à jour de l'onglet actif avec ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray(".content").forEach(section => {
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

  // Animation des sections au scroll
  gsap.utils.toArray(".content").forEach(section => {
    gsap.to(section, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });
});

// Configuration Particles.js avec mode "bubble" pour interagir avec le curseur
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#ff0000" },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ff0000",
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
      "onhover": { "enable": true, "mode": "bubble" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 250,
        "size": 4,
        "duration": 2,
        "opacity": 1,
        "speed": 3
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});
