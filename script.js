document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Close mobile menu when a link is clicked
  const links = menu.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });

  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});
document
  .getElementById("inquiryForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    const whatsappMessage =
      `New Customer Inquiry\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Service: ${service}\n` +
      `Message: ${message || "Not provided"}`;

    const whatsappURL =
      "https://wa.me/923403443297?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
  });
