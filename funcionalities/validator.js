import * as validator from "../validacionFormulario.js";

const form = document.getElementById("contactForm");

const handleSubmit = async (event) => {
  event.preventDefault();
  
  if (await validator.sendContactForm(event)) {
   
    document.getElementById("contactForm").reset();
    
  }
};

form.addEventListener("submit", handleSubmit);
