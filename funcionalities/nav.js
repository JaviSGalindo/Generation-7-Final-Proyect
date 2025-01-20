//para la visivilidad de la barra y reubicacion de barSections
function SearchBar() {
  const searchBar = document.querySelector(".search-bar");
  const barSections = document.querySelector(".barSections");
  searchBar.classList.toggle("active");
  barSections.classList.toggle("move-bar");
}

//cuando el elemento se carga comletamente, al dar clic en buscar, despliega barra de busquedad
document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.querySelector(".search");
  searchIcon.addEventListener("click", SearchBar);
});

const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".navBar");

// para abrir el icono de hamburger
hamburger.addEventListener("click", () => {
  navBar.classList.toggle("open");
});

function toggleMenu() {
  const navBar = document.querySelector(".navBar");
  navBar.classList.toggle("open"); // Alterna la clase 'open'
}
//DOMContentLoaded es un evento que se dispara cuando el documento HTML ha sido completamente cargado y parseado (sin esperar que se carguen las imágenes, hojas de estilo, etc.).Esto es útil porque garantiza que todo el contenido HTML esté listo para ser manipulado, evitando errores si intentas acceder a elementos que aún no existen en la página.
