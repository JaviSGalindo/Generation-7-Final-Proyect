import * as validator from "../validacionFormulario.js";

const form = document.getElementById("registerForm");

const handleSubmit = (event) => {
  event.preventDefault();
  validator.sendRegisterForm(event); // Llama a la validación
};

form.addEventListener("submit", handleSubmit); 

// Guardar los datos en el localStorage

