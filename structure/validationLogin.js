import * as validator from "../validacionFormulario.js";
import * as alerts from "../funcionalities/alerts.js";

const form = document.getElementById("loginForm");

const handleSubmit = async (event) => {
  event.preventDefault();

  if (validator.sendLoginForm(event)) {
      
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //Trer la base de de datos que se creó en ValidationRegister Linea 14
    const users = JSON.parse(localStorage.getItem('users')) || [];

    //Ahora se usa un find para encontrar en la base de datos el email y la contraseña
    const validuser = users.find(user => user.email === email && user.password === password)

    if (!validuser) {
      validator.incorrectPassword();
    } else {

      validator.correctPassword();
      await alerts.ejecutarConAlerta();
      // window.location.href = "../index.html"; // Redirige al inicio

      // Mostrar nombre y foto de perfil
      const loginIcon = document.querySelector(".login");
      loginIcon.innerHTML = `
        <img src="${users.profilePicture}" alt="Perfil" class="profile-pic" />
        <span>${users.name}</span>
        <button id="logoutButton">Cerrar sesión</button>
      `;

      // Agregar evento de cerrar sesión
      document.getElementById("logoutButton").addEventListener("click", function () {
        localStorage.removeItem("users");
        window.location.href = "../index.html";
      });
      
    }
  }
};

form.addEventListener("submit", handleSubmit);