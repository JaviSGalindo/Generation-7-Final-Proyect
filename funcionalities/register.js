const togglePassword = document.querySelector(".togglePassword"); 
const passwordField = document.getElementById("password");

document.querySelectorAll(".togglePassword").forEach((button) => {
  button.addEventListener("click", function () {
    // Buscar el input de contraseña en el mismo contenedor
    const passwordField = this.closest(".password-container").querySelector(
      "input"
    );

    if (passwordField) {
      passwordField.type =
        passwordField.type === "password" ? "text" : "password";
      this.classList.toggle("fa-eye-slash");
    }
  });
});
