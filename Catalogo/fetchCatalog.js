import { renderModal } from "./modalProducto.js";

const contenedor = document.querySelector(".productos-container");

let productosCache = []; // Guardará los datos cargados

// Cargar los productos desde el archivo JSON
fetch("catalogo.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json(); // Convertir la respuesta a JSON
    })
    .then((data) => {
        productosCache = data; // Guardar los datos en memoria
        data.forEach((producto) => addProducts(producto)); // Renderizar cada producto
    })
    .catch((error) => {
        console.error("Hubo un problema con la solicitud fetch:", error);
    });

// Formateador para pesos colombianos
const formatoPesos = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
});


// Función para agregar un producto al contenedor
export const addProducts = (producto) => {
    contenedor.innerHTML += `
    <article class="producto-catalogo">
      <a href="#!" class="open-modal" data-nombre="${producto.nombre}">
        <img src="${producto.img}" alt="${producto.nombre}" />
      </a>
      <div class="primer-row">
        <h3>${producto.nombre}</h3>
        <div class="action-btns">
          <button class="wishlist-btn" aria-label="Agregar a wishlist">
            <i class="fas fa-heart"></i>
          </button>
          <button class="tooltiper carrito-btn" aria-label="Agregar al carrito">
            <i class="fas fa-shopping-cart"></i>
            <span class="tooltiptext">Haz clic para agregar al carrito</span>
          </button>
        </div>
      </div>
      <h4>${formatoPesos.format(producto.precio)}</h4>
    </article>
  `;
};

// Evento para capturar clics en las imágenes
document.addEventListener("click", (event) => {
    const openModalElement = event.target.closest(".open-modal"); // Detectar si se hizo clic en un elemento con clase `open-modal`

    if (openModalElement) {
        const productoNombre = openModalElement.dataset.nombre; // Obtener el atributo data-nombre

        // Buscar el producto correspondiente en la caché
        const productoSeleccionado = productosCache.find(
            (producto) => producto.nombre === productoNombre
        );

        // Si se encuentra el producto, mostrar el modal
        if (productoSeleccionado) {
            renderModal(productoSeleccionado); // Llamar a renderModal con los datos del producto
        }
    }
});
