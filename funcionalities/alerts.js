let alertResolver;

export function showCustomAlert() {
    document.getElementById("alertOverlay").classList.add("show");

    return new Promise(resolve => {
        alertResolver = resolve;  // Guardamos la función `resolve`
    });
}

export function resolveAlert() {
    document.getElementById("alertOverlay").classList.remove("show");
    if (alertResolver) alertResolver();  // Llamamos a `resolve` para continuar el código
}

export function cerrarSesion() {
    localStorage.removeItem("token");
    window.location.href = "structure/login.html";
    resolveAlert();
}

// Agregar evento al botón de cierre
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("hide-btn").addEventListener("click", resolveAlert);
    document.getElementById("cerrar-sesion-btn").addEventListener("click", cerrarSesion);
});

export async function ejecutarConAlerta() {
    await showCustomAlert();  // Espera hasta que el usuario haga clic en "Continuar"
}

