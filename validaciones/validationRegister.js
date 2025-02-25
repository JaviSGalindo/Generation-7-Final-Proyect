import * as validator from "../validacionFormulario.js";
import { emailRegistered } from "../validacionFormulario.js";
import * as alerts from "../funcionalities/alerts.js";

const form = document.getElementById("registerForm");
const API_URL = "http://localhost:8080/usuarios";

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

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ nombre, apellido, telefono, email, contrasena }),
        });

        // Intentar parsear la respuesta JSON
        let data;
        try {
            data = await response.json();
        } catch (error) {
            console.error("Error al procesar la respuesta:", error);
            return;
        }

        if (response.ok) {
            emailRegistered(false); // Oculta el mensaje de error si el registro es exitoso
            console.log("Registro exitoso:", data);
            await alerts.ejecutarConAlerta();

            // Limpiar formulario y redirigir después de un registro exitoso
            form.reset();
            window.location.href = "structure/login.html";
        } else if (response.status === 400) {
            emailRegistered(true); // Muestra error si el email ya está registrado
        } else {
            console.error("Error:", data.message || "Error desconocido");
        }
    } catch (error) {
        console.error("Error al registrarse:", error);
    }
};

// Agregar el listener correctamente
form.addEventListener("submit", handleSubmit);
