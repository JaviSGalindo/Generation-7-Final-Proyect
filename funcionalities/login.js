// Obtener los elementos del campo de contraseña y el ícono de alternancia
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

// Alternar la visibilidad de la contraseña al hacer clic en el ícono
togglePassword.addEventListener("click", function () {
  // Cambiar el tipo entre "text" y "password"
  const type = passwordField.type === "password" ? "text" : "password";
  passwordField.type = type;

  // Alternar el ícono de ojo abierto/cerrado
  this.classList.toggle("fa-eye-slash");
});
