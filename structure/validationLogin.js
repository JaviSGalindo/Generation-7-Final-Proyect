import * as validator from "../validacionFormulario.js";

const form = document.getElementById("loginForm");

const handleSubmit = (event) => {
  event.preventDefault();
  if (validator.sendLoginForm(event)) {
      
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userEmail = atob(localStorage.getItem("email"));
    const userPassword = atob(localStorage.getItem("password"));

    if (email !== userEmail || password !== userPassword) {
      alert("Email o contraseña incorrectos");
    } else {
      alert("Inicio de sesión exitoso");
      window.location.href = "../Catalogo/catalog.html";
    }
  }
};

form.addEventListener("submit", handleSubmit);
