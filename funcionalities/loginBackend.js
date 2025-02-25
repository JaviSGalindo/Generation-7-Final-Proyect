const API_URL = 'http://localhost:8080/usuarios';

const form = document.getElementById("loginForm");

if (form) {
    form.addEventListener('submit', async function (event) {
        event.preventDefault();

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

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }

            const data = await response.json();
            console.log("Inicio de sesión exitoso:", data);

        } catch (error) {
            console.error("Error al iniciar sesión: ", error);
        }
    });
}

// Función de logout
function logout() {
    // Eliminar el token JWT del localStorage
    localStorage.removeItem('jwt');

    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = 'login.html';
}
