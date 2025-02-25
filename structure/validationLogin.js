import * as validator from "../validacionFormulario.js";
import { emailNotFound, incorrectPassword } from "../validacionFormulario.js";
import * as alerts from "../funcionalities/alerts.js";

const form = document.getElementById("loginForm");
const API_URL = 'http://localhost:8080/usuarios';
const emailErrorSpan = document.getElementById("emailError");
const passwordErrorSpan = document.getElementById("passwordError");

const handleSubmit = async (event) => {
  event.preventDefault();

  // Limpiar mensajes anteriores
  emailErrorSpan.textContent = "";
  passwordErrorSpan.textContent = "";

  // Validación del formulario
  const isValid = await validator.sendLoginForm(event);
  if (!isValid) return;

  // Obtener valores del formulario
  const email = document.getElementById("email").value;
  const contrasena = document.getElementById("password").value;

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email, contrasena }),
    });

    // Si la respuesta no es OK, manejar errores personalizados
    if (!response.ok) {
      const errorData = await response.json(); // Leer la respuesta una vez

      if (response.status === 500) {
        emailNotFound();
      } else if (response.status === 401) {
        incorrectPassword();
      } else if (errorData && errorData.message) {
        console.error("Error:", errorData.message);
      }
      return; // Salir de la función si hay error
    }

    // Si todo está bien, obtener el token y redirigir
    const data = await response.json();
    localStorage.setItem("token", data.token);
    await alerts.ejecutarConAlerta();
    window.location.href = "../index.html";

  } catch (error) {
    console.error("Error al iniciar sesión:", error);
  }
};

// Agregar el eventListener al formulario
form.addEventListener("submit", handleSubmit);
