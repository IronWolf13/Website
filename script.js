document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".hero h2", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".btn", { opacity: 0, scale: 0.5, duration: 1, delay: 1 });

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute("href"));
            gsap.to(window, { duration: 1, scrollTo: target });
        });
    });

    let links = document.querySelectorAll("nav ul li a");
    let index = 0;
    setInterval(() => {
        links.forEach(link => link.style.color = "white");
        links[index].style.color = "#ff9800";
        index = (index + 1) % links.length;
    }, 2000);
});

particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        }
    }
});
