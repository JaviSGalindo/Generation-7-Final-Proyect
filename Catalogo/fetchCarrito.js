import { addProducts } from "./fetchCatalog";

const contenedorCatalogo = document.querySelector(".productos-container");
const contenedorCarrito = document.querySelector(".carrito-items");
const btnVaciar = document.getElementById("vaciar-carrito");
const totalPrecio = document.getElementById("total-precio");

let carrito = []; // Para almacenar los productos del carrito

const addToCart = (producto) => {
  carrito.push(producto);

  contenedorCarrito.innerHTML += `
      <div class="carrito-item">
        <img src="${producto.img}" alt="${producto.nombre}" />
        <div>
          <h4>${producto.nombre}</h4>          
          <h5>$${producto.precio.toFixed(2)}</h5>
        </div>
      </div>
    `;

  actualizarTotal();
};

const actualizarTotal = () => {
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);
  totalPrecio.textContent = `Total: $${total.toFixed(2)}`;
};

const vaciarCarrito = () => {
  carrito = [];
  contenedorCarrito.innerHTML = "";
  totalPrecio.textContent = "Total: $0.00";
};


// Delegación de eventos para los botones del carrito
contenedorCatalogo.addEventListener("click", (event) => {
  if (event.target.closest(".carrito-btn")) {
    // Encontrar el elemento padre (artículo) para obtener los datos del producto
    const articulo = event.target.closest(".producto-catalogo");
    const producto = {
      nombre: articulo.querySelector("h3").textContent,
      img: articulo.querySelector("img").src,
      descripcion: articulo.querySelector(".descripcion-producto").textContent,
      precio: parseFloat(
        articulo.querySelector("h4").textContent.replace("$", "")
      ),
    };

    // Agregar el producto al carrito
    addToCart(producto);
  }
});

btnVaciar.addEventListener("click", vaciarCarrito);
