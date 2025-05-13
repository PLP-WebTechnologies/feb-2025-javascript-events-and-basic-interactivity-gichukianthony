// Button Click
document.getElementById("magicBtn").addEventListener("click", function () {
  this.textContent = "You clicked me!";
  this.style.backgroundColor = "#4caf50";
  this.style.color = "white";
});

// Keypress Detection
document.addEventListener("keydown", function (e) {
  document.getElementById("keyDisplay").textContent = `You pressed: ${e.key}`;
});

// Secret Double Click
document.getElementById("secretBtn").addEventListener("dblclick", function () {
  alert("🎉 Secret unlocked! You double-clicked me!");
});

// Image Gallery
const images = [
  "https://picsum.photos/200?random=1",
  "https://picsum.photos/200?random=2",
  "https://picsum.photos/200?random=3",
  "https://picsum.photos/200?random=4",
];
let index = 0;

const galleryImage = document.getElementById("galleryImage");

document.getElementById("nextBtn").addEventListener("click", () => {
  index = (index + 1) % images.length;
  galleryImage.src = images[index];
});

document.getElementById("prevBtn").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  galleryImage.src = images[index];
});

// Tabs
const tabButtons = document.querySelectorAll(".tabBtn");
const tabContents = document.querySelectorAll(".tabContent");

tabButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    tabContents.forEach((content) => {
      content.style.display = content.id === target ? "block" : "none";
    });
  })
);

// Form Validation with Real-Time Feedback
const form = document.getElementById("signupForm");
const passwordInput = document.getElementById("password");
const feedback = document.getElementById("passwordFeedback");

passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;
  if (value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters";
    feedback.classList.remove("success");
  } else {
    feedback.textContent = "Password looks good!";
    feedback.classList.add("success");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = passwordInput.value;

  if (!username || !email || password.length < 8) {
    alert("Please fill out all fields correctly.");
    return;
  }

  alert("✅ Form submitted successfully!");
});
