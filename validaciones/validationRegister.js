import * as validator from "../validacionFormulario.js";

const form = document.getElementById("registerForm");

const handleSubmit = (event) => {
  event.preventDefault();
  validator.sendRegisterForm(event); // Llama a la validación
};

form.addEventListener("submit", handleSubmit); // Solo este es necesario
