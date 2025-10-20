// Fonction pour ouvrir la modal
function openModal(projectId) {
  const modal = document.getElementById("modal-" + projectId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// Fonction pour fermer la modal
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
