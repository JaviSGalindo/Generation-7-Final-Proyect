const contenedor = document.querySelector(".productos-container");

// Cargar los productos desde el archivo JSON
fetch("catalogo.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Convertir la respuesta a JSON
  })
  .then((data) => {
    data.forEach((producto) => addProducts(producto));
  })
  .catch((error) => {
    console.error("Hubo un problema con la solicitud fetch:", error);
  });

// Función para agregar un producto al contenedor
const addProducts = (producto) => {
  contenedor.innerHTML += `
    <article class="producto-catalogo">
            <a href="#">
              <img src="${producto.img}" alt="${producto.nombre}" />
            </a>
            <div class="primer-row">
              <h3>${producto.nombre}</h3>   
              <div class="action-btns">
                <button class="wishlist-btn" aria-label="Agregar a wishlist">
                  <i class="fas fa-heart"></i>
                </button>
                <button class="carrito-btn" aria-label="Agregar al carrito">
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
            <p class="descripcion-producto">${producto.descripcion}</p> 
            <h4>$${producto.precio.toFixed(3)}</h4>
          </article>
  `;
};
