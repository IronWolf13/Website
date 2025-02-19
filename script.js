document.addEventListener("DOMContentLoaded", () => {
  // Animation d'entrée pour la section Hero
  gsap.from(".hero h2", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
  gsap.from(".btn", { opacity: 0, scale: 0.5, duration: 1, delay: 1 });

  // Défilement fluide lors du clic sur les onglets
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute("href"));
      gsap.to(window, { duration: 1, scrollTo: target });
    });
  });

  // Effets de survol sur les onglets
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, { scale: 1.1, duration: 0.3 });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(link, { scale: 1, duration: 0.3 });
    });
  });

  // Utilisation de ScrollTrigger pour mettre à jour l'onglet actif
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
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });
});

// Configuration de Particles.js avec interactivité suivant le curseur
particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" }
    },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "attract" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      attract: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
