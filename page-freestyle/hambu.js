// Selecciona el botón de hamburguesa y el modal
const btnHamburguesa = document.getElementById("btnHamburguesa");
const menuModal = document.getElementById("menuModal");
const closeModal = document.getElementById("closeModal");

// Agrega un evento de clic al botón de hamburguesa para abrir el modal
btnHamburguesa.addEventListener("click", () => {
  menuModal.style.display = "block";
});

// Agrega un evento de clic al botón de cierre del modal
closeModal.addEventListener("click", () => {
  menuModal.style.display = "none";
});

// Cierra el modal si el usuario hace clic fuera del contenido del modal
window.addEventListener("click", (event) => {
  if (event.target == menuModal) {
    menuModal.style.display = "none";
  }
});
