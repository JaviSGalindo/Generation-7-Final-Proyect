import * as validator from "../validacionFormulario.js";

const form = document.getElementById("registerForm");

const handleSubmit = (event) => {
  event.preventDefault();
  if (validator.sendRegisterForm(event)) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("email", btoa(email));
    localStorage.setItem("password", btoa(password));
    document.getElementById("registerForm").reset();
    window.location.href = "login.html";
  }
};

form.addEventListener("submit", handleSubmit);
