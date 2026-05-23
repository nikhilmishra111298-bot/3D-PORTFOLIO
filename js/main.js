/* MAIN JS - CLEAN WORKING VERSION */

/* Typing Animation */
const typingText = document.querySelector("#typing");

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Python Developer",
  "AI Project Builder",
  "Creative 3D Web Designer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typingText) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex--);
  } else {
    typingText.textContent = currentRole.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentRole.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();

/* Project Modal */
function openModal(title, description) {
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const projectModal = document.getElementById("projectModal");

  if (modalTitle && modalDesc && projectModal) {
    modalTitle.textContent = title;
    modalDesc.textContent = description;
    projectModal.style.display = "flex";
  }
}

function closeModal() {
  const projectModal = document.getElementById("projectModal");

  if (projectModal) {
    projectModal.style.display = "none";
  }
}

window.openModal = openModal;
window.closeModal = closeModal;

/* Theme Toggle */
const themeToggle = document.querySelector("#themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      themeToggle.textContent = "☀️";
    } else {
      themeToggle.textContent = "🌙";
    }
  });
}

/* Mobile Menu */
const menuBtn = document.querySelector("#menuBtn");
const navbar = document.querySelector("#navbar");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  document.querySelectorAll("#navbar a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
}

/* Chatbot */
function toggleChat() {
  const chatbox = document.getElementById("chatbox");

  if (!chatbox) return;

  if (chatbox.style.display === "block") {
    chatbox.style.display = "none";
  } else {
    chatbox.style.display = "block";
  }
}

function sendChat() {
  const input = document.getElementById("chatInput");
  const reply = document.getElementById("chatReply");

  if (!input || !reply) return;

  const question = input.value.toLowerCase();

  if (question.includes("skill")) {
    reply.textContent =
      "Nikhil knows HTML, CSS, JavaScript, Python, React, Node.js, SQL, MongoDB and AI tools.";
  } else if (question.includes("project")) {
    reply.textContent =
      "Nikhil has worked on Credex AI Spend Audit, Content Broadcasting System, and Cinema Booking System.";
  } else if (question.includes("contact") || question.includes("email")) {
    reply.textContent =
      "You can contact Nikhil at nikhil.mishra.111298@gmail.com.";
  } else {
    reply.textContent =
      "I can answer about Nikhil's skills, projects, and contact details.";
  }

  input.value = "";
}

window.toggleChat = toggleChat;
window.sendChat = sendChat;

/* Stop project buttons from opening modal */
document.querySelectorAll(".project-links a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

/* Counter Animation */
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = Number(counter.getAttribute("data-target"));
    const current = Number(counter.innerText);
    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

/* Cursor Glow */
const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {
  document.addEventListener("mousemove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}

/* AOS Animation */
if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 1000,
    once: true,
  });
}

/* Progress Bar */
const progressBar = document.getElementById("progressBar");

if (progressBar) {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    progressBar.style.width = `${progress}%`;
  });
}

/* Back To Top */
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {

    const answer = question.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }

  });
});
window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  if(loader){

    setTimeout(() => {
      loader.classList.add("hide");
    }, 1200);

  }

});
const mouseTrail = document.querySelector(".mouse-trail");

if(mouseTrail){

  document.addEventListener("mousemove", (e) => {

    mouseTrail.style.left = e.clientX + "px";
    mouseTrail.style.top = e.clientY + "px";

  });

}
const hoverElements = document.querySelectorAll(
  "a, button, .project-card, .tech-card"
);

hoverElements.forEach((element) => {

  element.addEventListener("mouseenter", () => {

    if(mouseTrail){
      mouseTrail.style.transform = "translate(-50%, -50%) scale(2)";
    }

  });

  element.addEventListener("mouseleave", () => {

    if(mouseTrail){
      mouseTrail.style.transform = "translate(-50%, -50%) scale(1)";
    }

  });

});
function openModal(title, desc, image, techs){

  const modal = document.getElementById("projectModal");

  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modalImage").src = image;

  const techContainer = document.getElementById("modalTech");

  techContainer.innerHTML = "";

  techs.forEach((tech) => {

    const span = document.createElement("span");

    span.innerText = tech;

    techContainer.appendChild(span);

  });

  modal.style.display = "flex";
}

function closeModal(){

  document.getElementById("projectModal").style.display = "none";

}
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(
  "nav a, .mobile-bottom-nav a"
);

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if(window.scrollY >= sectionTop){
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if(link.getAttribute("href") === `#${current}`){
      link.classList.add("active");
    }

  });

});
const reveals = document.querySelectorAll(".reveal");

function revealSections(){

  reveals.forEach((section) => {

    const windowHeight = window.innerHeight;

    const revealTop = section.getBoundingClientRect().top;

    const revealPoint = 120;

    if(revealTop < windowHeight - revealPoint){

      section.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealSections);

revealSections();