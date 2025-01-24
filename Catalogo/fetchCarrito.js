const contenedorCatalogo = document.querySelector(".productos-container");
const contenedorCarrito = document.querySelector(".carrito-items");
const btnVaciar = document.getElementById("vaciar-carrito");
const totalPrecio = document.getElementById("total-precio");
const contadorCarrito = document.getElementById("contadorCarrito");
const toast = document.getElementById("toast-container");

// Cargar carrito desde localStorage si existe
let carrito = JSON.parse(localStorage.getItem("carrito")) || []; // Si no existe, se inicializa como vacío

// Formateador para pesos colombianos
const formatoPesos = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

// Guardar carrito en localStorage
const guardarCarrito = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardamos el carrito como string
};

// Función para agregar un producto al carrito
const addToCart = (producto) => {
  carrito.push(producto);
  guardarCarrito(); // Guardar después de agregar el producto al carrito

  contenedorCarrito.innerHTML += `
    <div class="carrito-item">
      <img src="${producto.img}" alt="${producto.nombre}" />
      <div>
        <h4>${producto.nombre}</h4>          
        <h5>${formatoPesos.format(producto.precio)}</h5>
      </div>
    </div>
  `;

  actualizarTotal();
};

// Función para mostrar un mensaje en pantalla
const addToast = (message) => {
  const nuevoToast = document.createElement("div");
  nuevoToast.classList.add("toast");
  nuevoToast.innerHTML = `<h4>${message}</h4>`;
  
  // Agregar el nuevo toast al contenedor
  toast.appendChild(nuevoToast);

  // Eliminar el toast después de 3 segundos
  setTimeout(() => {
    nuevoToast.remove();
  }, 3000);
};

// Actualizar el contador de productos en el carrito
const actualizarContadorCarrito = () => {
  contadorCarrito.textContent = carrito.length; // Actualiza el número de productos
};

// Actualizar el total del carrito
const actualizarTotal = () => {
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);
  totalPrecio.textContent = `Total: ${formatoPesos.format(total)}`;
};

// Vaciar el carrito
const vaciarCarrito = () => {
  carrito = [];
  guardarCarrito(); // Guardar carrito vacío en localStorage
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
        articulo.querySelector("h4").textContent.replace(/[^\d]/g, "")
      ),
    };

    // Agregar el producto al carrito
    addToCart(producto);
    actualizarContadorCarrito();
    addToast(`${producto.nombre} agregado al carrito`);
  }
});

// Vaciar el carrito al hacer clic en el botón
btnVaciar.addEventListener("click", (event) => {
  event.preventDefault();
  vaciarCarrito();
  actualizarContadorCarrito();
});

// Cargar los productos del carrito cuando la página se recarga
window.addEventListener("load", () => {
  carrito.forEach((producto) => {
    contenedorCarrito.innerHTML += `
      <div class="carrito-item">
        <img src="${producto.img}" alt="${producto.nombre}" />
        <div>
          <h4>${producto.nombre}</h4>          
          <h5>${formatoPesos.format(producto.precio)}</h5>
        </div>
      </div>
    `;
  });

  actualizarContadorCarrito();
  actualizarTotal();
});
