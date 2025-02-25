let alertResolvers = {}; // Almacena los resolvers de cada alerta activa

export function showCustomAlert(alertToExecute) {
    const alertElement = document.getElementById(alertToExecute);
    if (!alertElement) return console.error(`No se encontró la alerta con ID: ${alertToExecute}`);

    // Evita abrir la misma alerta varias veces
    if (alertElement.classList.contains("show")) return;

    alertElement.classList.add("show");

    return new Promise(resolve => {
        alertResolvers[alertToExecute] = resolve; // Guarda el `resolve` para esta alerta
    });
}

export function resolveAlert(alertToExecute) {
    const alertElement = document.getElementById(alertToExecute);
    if (!alertElement) return console.error(`No se encontró la alerta con ID: ${alertToExecute}`);

    alertElement.classList.remove("show");

    if (alertResolvers[alertToExecute]) {
        alertResolvers[alertToExecute](); // Llamar a `resolve` para continuar el código
        delete alertResolvers[alertToExecute]; // Eliminar el resolver después de usarlo
    }
}

export function cerrarSesion(alertToExecute) {
    localStorage.removeItem("token");
    resolveAlert(alertToExecute); 
    let currentPage = window.location.pathname;

    if (currentPage.includes('/Catalogo/catalog.html')) {
    window.location.href = "../structure/login.html"
    } else {
    window.location.href = "structure/login.html";
    }
}

// Agregar eventos a los botones de cierre cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("hide-btn")?.addEventListener("click", () => resolveAlert("alertOverlay"));
    document.getElementById("exit-btn")?.addEventListener("click", () => resolveAlert("alertSession"));
    document.getElementById("cerrar-sesion-btn")?.addEventListener("click", () => cerrarSesion("alertSession"));
});

export async function ejecutarConAlerta(alertToExecute) {
    await showCustomAlert(alertToExecute); // Espera hasta que el usuario interactúe con la alerta
}
