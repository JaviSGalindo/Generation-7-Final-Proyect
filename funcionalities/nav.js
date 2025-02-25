import * as alerts from "/funcionalities/alerts.js";

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".navBar");
  const barSections = document.querySelector(".barSections");

  if (hamburger && navBar) {
    hamburger.addEventListener("click", () => {
      navBar.classList.toggle("open");
      barSections.style.display = navBar.classList.contains("open") ? "flex" : "none";
    });
  }

  const token = localStorage.getItem("token");
  const loginBtn = document.getElementById("login");

  if (!loginBtn) return; // Si el botón no existe, salir de la función

  if (!token) {
    // Si NO hay sesión, redirigir al login al hacer clic
    loginBtn.addEventListener("click", () => {
      let currentPage = window.location.pathname.split("/").pop(); // Obtiene solo el nombre del archivo actual

      if (currentPage === "catalog.html") {
        window.location.href = "../structure/login.html"; // Retrocede una carpeta
      } else {
        window.location.href = "structure/login.html"; // Accede directamente
      }
    });
  } else {
    // Si HAY sesión, cambiar la apariencia del botón y mostrar alerta solo en clic
    loginBtn.style.opacity = "0.5"; // Reduce visibilidad para indicar sesión activa

    loginBtn.addEventListener("click", async () => {
      await alerts.ejecutarConAlerta("alertSession"); // Ejecutar la alerta al hacer clic
    });
  }
});
