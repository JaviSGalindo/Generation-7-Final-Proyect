import * as validator from "../validacionFormulario.js";
import * as alerts from "../funcionalities/alerts.js";

const form = document.getElementById("loginForm");

const handleSubmit = async (event) => {
  event.preventDefault();

  if (validator.sendLoginForm(event)) {
      
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //Traer la base de de datos que se creó en ValidationRegister Linea 14
    const users = JSON.parse(localStorage.getItem('users')) || [];

    //Ahora se usa un find para encontrar en la base de datos el email y la contraseña
    const validuser = users.find(user => user.email === email && user.password === password)

    if (!validuser) {
      validator.incorrectPassword();
    } else {

      validator.correctPassword();
      await alerts.ejecutarConAlerta();

      // Mostrar cambio de icono
      const loginIcon = document.querySelector(".login");
      loginIcon.innerHTML = `
        <i alt="Perfil" class="fa-solid fa-house-user onclick="toggleDropdown()" /></i>`;
      
      //window.location.href = "../index.html"; // Redirige al inicio
      
    }
  }
};

form.addEventListener("submit", handleSubmit);