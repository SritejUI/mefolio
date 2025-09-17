function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Dark mode toggle
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Form submit handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.elements[0].value;
  const email = this.elements[1].value;
  const message = this.elements[2].value;

  const msg = document.getElementById("formMessage");
  msg.classList.remove("fade-out");
  msg.textContent = "Sending...";

  emailjs.send("your_service_id", "your_template_id", {
    name: name,
    email: email,
    message: message,
  })
  .then(() => {
    msg.textContent = "✅ Message sent successfully!";
    this.reset();

    setTimeout(() => {
      msg.classList.add("fade-out");
    }, 1500);
    setTimeout(() => {
      msg.textContent = "";
      msg.classList.remove("fade-out");
    }, 2500);
  })
  .catch((error) => {
    console.error("EmailJS Error:", error);
    msg.textContent = "❌ Error sending message. Check console.";
  });
});

// Go to top button logic
const goTopBtn = document.getElementById("goTopBtn");

window.addEventListener("scroll", () => {
  goTopBtn.style.display = window.scrollY > 100 ? "block" : "none";
});

goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Typed.js animation
document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-text", {
    strings: [
      "CS Enthusiast",
      "Problem Solver",
      "Tech Explorer"
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
  });
});

// Hamburger menu
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("show");
  });
});
