import * as validator from "../validacionFormulario.js";

const form = document.getElementById("registerForm");

const handleSubmit = async (event) => {
  event.preventDefault();
  
  if (await validator.sendRegisterForm(event)) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("email", btoa(email));
    localStorage.setItem("password", btoa(password));

    document.getElementById("registerForm").reset();
    window.location.href = "structure/login.html"; 
  }
};

form.addEventListener("submit", handleSubmit);
