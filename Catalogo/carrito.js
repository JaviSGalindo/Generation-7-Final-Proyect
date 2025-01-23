// Aquí se enlaza todo con el HTML para actualizar el carrito dinámicamente

document.getElementById("abrir-carrito").addEventListener("click", () => {
    document.getElementById("carrito-modal").style.display = "block";
  });
  
  document.getElementById("cerrar-carrito").addEventListener("click", () => {
    document.getElementById("carrito-modal").style.display = "none";
  });
  
  document.getElementById("vaciar-carrito").addEventListener("click", () => {
    localStorage.removeItem("carrito"); // Limpiar carrito en localStorage
    location.reload(); // Recargar la página para actualizar el estado del carrito
  });
  