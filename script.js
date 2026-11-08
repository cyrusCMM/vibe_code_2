// Select elements from the HTML page
const themeToggle = document.getElementById("themeToggle");
const message = document.getElementById("message");
const productButtons = document.querySelectorAll(".view-button");

// Switch between light and dark mode when the button is clicked
themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "☀️ Light mode" : "🌙 Dark mode";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
});

// Respond when a user clicks a product's View details button
productButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const productName = button.getAttribute("data-product");
    message.textContent = "You selected: " + productName;
  });
});
