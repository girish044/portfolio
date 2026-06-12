// Typing Effect

const roles = [
    "Java Developer",
    "Spring Boot Learner",
    "Full Stack Enthusiast",
    "Software Engineer Aspirant"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector(".hero-text h2");

function typeEffect() {

    if (!typingElement) return;

    let currentRole = roles[roleIndex];

    typingElement.textContent =
        currentRole.substring(0, charIndex);

    charIndex++;

    if (charIndex > currentRole.length) {

        setTimeout(() => {

            charIndex = 0;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }, 1200);

    }

}

setInterval(typeEffect, 120);


// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Simple Scroll Reveal

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .timeline-item, .gallery-item, .achievement-card"
    );

function revealOnScroll() {

    revealElements.forEach((item) => {

        const itemTop =
            item.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (itemTop < windowHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach((item) => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition =
        "all 0.6s ease";

});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// Active Navbar Link

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});