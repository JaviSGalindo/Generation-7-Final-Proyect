// Aquí se enlaza todo con el HTML para actualizar el carrito dinámicamente
const openCartButton = document.getElementById("abrir-carrito");
const cerrarCarrito = document.getElementById("cerrar-carrito");
const carritoModal = document.getElementById("carrito-modal");
const btnCerrar = document.querySelector(".cerrar-carrito");

// Abrir el carrito y mostrar el fondo oscuro
openCartButton.addEventListener("click", () => {
    cerrarCarrito.style.display = "block"; // Muestra el contenedor con fondo oscuro
});

// Cerrar el carrito al hacer clic fuera del modal
cerrarCarrito.addEventListener("click", (e) => {
    // Si se hace clic fuera del carrito-modal, se cierra
    if (e.target === cerrarCarrito) {
        cerrarCarrito.style.display = "none";
    }
});

btnCerrar.addEventListener("click", (e) => {
  cerrarCarrito.style.display = "none";
})

// Cerrar el carrito al hacer clic en un botón específico (opcional)
document.getElementById("vaciar-carrito").addEventListener("click", () => {
    localStorage.removeItem("carrito"); // Limpia el carrito en localStorage
    location.reload(); // Recarga la página para reflejar los cambios
});

  
  document.getElementById("vaciar-carrito").addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.removeItem("carrito"); // Limpiar carrito en localStorage
    location.reload(); // Recargar la página para actualizar el estado del carrito
  });

  