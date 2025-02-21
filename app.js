// Initialisation de ParticleJS avec l'option "repulse" au survol et sans animation au clic
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
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
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 100,
        "duration": 0.4
      }
    }
  },
  "retina_detect": true
});

// Gestion du clic sur les headers pour ouvrir/fermer les sections
document.addEventListener("DOMContentLoaded", function(){
  const headers = document.querySelectorAll(".section-header");
  headers.forEach(header => {
    header.addEventListener("click", function(){
      const targetId = this.getAttribute("data-target");
      const content = document.getElementById(targetId);
      if(content.style.display === "block"){
        // Fermeture avec animation
        content.style.display = "none";
      } else {
        // Ouverture
        content.style.display = "block";
      }
    });
  });
});
