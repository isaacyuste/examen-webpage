function mostrarCorreo() {
  const correo = document.getElementById("correo");
  correo.style.display = "block";
}

document.getElementById("modo-btn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});