/* Scroll Animation */
const cards = document.querySelectorAll(".project-card, .card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

cards.forEach((card) => {
  observer.observe(card);
});

/* Contact Form */
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    contactForm.reset();
  });
}

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

if (typingText) {
  typeEffect();
}
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1500);
});
function openModal(title, description) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalDesc").textContent = description;
  document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}
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
function toggleChat() {
  const chatbox = document.getElementById("chatbox");

  if (chatbox.style.display === "block") {
    chatbox.style.display = "none";
  } else {
    chatbox.style.display = "block";
  }
}

function sendChat() {
  const input = document.getElementById("chatInput");
  const reply = document.getElementById("chatReply");

  const question = input.value.toLowerCase();

  if (question.includes("skill")) {
    reply.textContent = "Nikhil knows HTML, CSS, JavaScript, Python, React, Node.js, SQL, MongoDB and AI tools.";
  } else if (question.includes("project")) {
    reply.textContent = "Nikhil has worked on Credex AI Spend Audit, Content Broadcasting System, and Cinema Booking System.";
  } else if (question.includes("contact") || question.includes("email")) {
    reply.textContent = "You can contact Nikhil at nikhil.mishra.111298@gmail.com.";
  } else {
    reply.textContent = "I can answer about Nikhil's skills, projects, and contact details.";
  }

  input.value = "";
}