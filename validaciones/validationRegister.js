import * as validator from "../validacionFormulario.js";

const form = document.getElementById("registerForm");
const API_URL = 'http://localhost:8080/usuarios';

const handleSubmit = async (event) => {
  event.preventDefault();

  // Validación antes de enviar la solicitud
  const isValid = await validator.sendRegisterForm(event);
  if (!isValid) return;

  // Capturar valores del formulario
  const nombre = document.getElementById("name").value;
  const apellido = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const contrasena = document.getElementById("password").value;

  // Guardar en localStorage (de forma segura, aunque idealmente debería manejarse con tokens)
  localStorage.setItem("email", btoa(email));
  localStorage.setItem("password", btoa(contrasena));

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ nombre, apellido, telefono, email, contrasena }),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data = await response.json();
    console.log("Registro exitoso:", data);

    // Limpiar formulario y redirigir después de un registro exitoso
    form.reset();
    window.location.href = "structure/login.html";

  } catch (error) {
    console.error("Error al registrarse:", error);
  }
};

// Agregar el listener correctamente
form.addEventListener("submit", handleSubmit);
