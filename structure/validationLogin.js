import * as validator from "../validacionFormulario.js";
import * as alerts from "../funcionalities/alerts.js";

const form = document.getElementById("loginForm");

const handleSubmit = async (event) => {
  event.preventDefault();
  if (validator.sendLoginForm(event)) {
      
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userEmail = atob(localStorage.getItem("email"));
    const userPassword = atob(localStorage.getItem("password"));

    if (email !== userEmail || password !== userPassword) {
      validator.incorrectPassword();
    } else {
      validator.correctPassword();
      await alerts.ejecutarConAlerta();
      window.location.href = "../index.html";
    }
  }
};

form.addEventListener("submit", handleSubmit);
