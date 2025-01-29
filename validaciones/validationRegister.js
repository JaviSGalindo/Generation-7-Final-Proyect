import * as validator from "../validacionFormulario.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  if (form) {
      form.addEventListener("submit", handleSubmit);
  }
});

const handleSubmit = (event)=> { 
    event.preventDefault();
    validator.sendRegisterForm(event);
}

