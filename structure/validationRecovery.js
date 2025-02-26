import * as validator from "../validacionFormulario.js";
import * as alerts from "../funcionalities/alerts.js";

const form = document.getElementById("recoveryForm");

const handleSubmit = async (event) => {
  event.preventDefault();
  
  if(validator.sendRecoveryForm(event)) {
    
    await alerts.ejecutarConAlerta("alertOverlay");
    document.getElementById("recoveryForm").reset();
    window.location.href = "../structure/login.html"; 
  }
};

form.addEventListener("submit", handleSubmit);
