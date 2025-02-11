import * as validator from "../validacionFormulario.js";

const form = document.getElementById("recoveryForm");

const handleSubmit = (event) => {
  event.preventDefault();
  
  if(validator.sendRecoveryForm(event)) {
    alert("Mensaje de recuperacion enviado!")
    document.getElementById("recoveryForm").reset();
  }
};

form.addEventListener("submit", handleSubmit);
