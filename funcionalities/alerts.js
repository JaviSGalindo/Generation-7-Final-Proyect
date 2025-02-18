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

// Agregar evento al botón de cierre
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("hide-btn").addEventListener("click", resolveAlert);
});

export async function ejecutarConAlerta() {
    console.log("Antes de la alerta...");
    await showCustomAlert();  // Espera hasta que el usuario haga clic en "Continuar"
    console.log("Después de la alerta, código sigue...");
}
