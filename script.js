document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (btn && menu) {
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
  }

  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        navbar.classList.add("scrolled", "glass-nav");
        navbar.classList.remove("bg-navy");
      } else {
        navbar.classList.remove("scrolled", "glass-nav");
        navbar.classList.add("bg-navy");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }

  // Animated Counter for Stats
  const counters = document.querySelectorAll(".counter-value");
  if (counters.length > 0) {
    let animated = false;
    const animateCounters = () => {
      const firstCounter = counters[0];
      const rect = firstCounter.getBoundingClientRect();
      if (rect.top <= window.innerHeight && !animated) {
        animated = true;
        counters.forEach((counter) => {
          const target = parseInt(counter.getAttribute("data-target"), 10);
          const suffix = counter.getAttribute("data-suffix") || "";
          const duration = 1800; // ms
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.innerText = target + suffix;
              clearInterval(timer);
            } else {
              counter.innerText = Math.floor(current) + suffix;
            }
          }, stepTime);
        });
      }
    };

    window.addEventListener("scroll", animateCounters);
    animateCounters(); // Run check on load in case it's in view
  }

  // Safe inquiryForm submit handler (only binds if form exists)
  const inquiryForm = document.getElementById("inquiryForm");
  if (inquiryForm) {
    inquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const nameEl = document.getElementById("name");
      const phoneEl = document.getElementById("phone");
      const serviceEl = document.getElementById("service");
      const messageEl = document.getElementById("message");

      const name = nameEl ? nameEl.value.trim() : "";
      const phone = phoneEl ? phoneEl.value.trim() : "";
      const service = serviceEl ? serviceEl.value : "General Inquiry";
      const message = messageEl ? messageEl.value.trim() : "";

      const whatsappMessage =
        `*New Customer Inquiry - ANMOL Marble & Tile Works*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `🛠️ *Service:* ${service}\n` +
        `📝 *Message:* ${message || "Interested in consultation & estimate"}`;

      const whatsappURL =
        "https://wa.me/923403443297?text=" + encodeURIComponent(whatsappMessage);

      window.open(whatsappURL, "_blank");
    });
  }
});
