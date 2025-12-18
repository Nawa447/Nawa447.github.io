function openModal(projectId) {
  const modal = document.getElementById("modal-" + projectId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(projectId) {
  const modal = document.getElementById("modal-" + projectId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// Fermer la modal avec la touche Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const activeModal = document.querySelector(".modal-overlay.active");
    if (activeModal) {
      activeModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }
});

const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuClose = document.getElementById("mobile-menu-close");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

// Open mobile menu
if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  });
}

// Close mobile menu
if (mobileMenuClose) {
  mobileMenuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  });
}

// Close mobile menu when clicking on a link
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// Close mobile menu when clicking outside
mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

emailjs.init("YP022HH4S_MIE2f--"); 

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const btnText = document.getElementById("btn-text");
const btnIcon = document.getElementById("btn-icon");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Honeypot anti-spam 
    const honeypot = document.getElementById("website");
    if (honeypot && honeypot.value !== "") {
      return;
    }
    // Fin honeypot

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    const submitBtn = contactForm.querySelector(".btn-submit");
    submitBtn.disabled = true;
    btnText.textContent = "Envoi en cours...";

    try {
      const response = await emailjs.send(
        "service_29uh90c",       
        "template_69pdnln",     
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      formMessage.textContent = "✅ Message envoyé avec succès !";
      formMessage.className = "form-message success";
      contactForm.reset();

    } catch (error) {
      console.error("Erreur :", error);
      formMessage.textContent = "❌ Une erreur est survenue. Essayez à nouveau.";
      formMessage.className = "form-message error";

    } finally {
      submitBtn.disabled = false;
      btnText.textContent = "Envoyer le message";

      setTimeout(() => {
        formMessage.className = "form-message"; 
        formMessage.textContent = ""; 
      }, 5000);
    }
  });
}
