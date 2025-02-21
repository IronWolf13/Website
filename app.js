// Initialisation de ParticleJS via CDN ou fichier local
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
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
      "speed": 6,
      "direction": "none",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": false },
      "resize": true
    },
    "modes": {
      "repulse": { "distance": 100, "duration": 0.4 }
    }
  },
  "retina_detect": true
});

// Gestion des sections repliables (pour Réglements et Protocoles)
document.addEventListener("DOMContentLoaded", function(){
  const headers = document.querySelectorAll(".section-header");
  headers.forEach(header => {
    header.addEventListener("click", function(){
      const targetId = this.getAttribute("data-target");
      const content = document.getElementById(targetId);
      const container = this.parentElement;
      if (container.classList.contains('active')) {
        container.classList.remove('active');
        content.style.maxHeight = 0;
      } else {
        container.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
