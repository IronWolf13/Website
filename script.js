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
});
