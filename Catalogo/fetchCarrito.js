const contenedorCatalogo = document.querySelector(".productos-container");
const contenedorCarrito = document.querySelector(".carrito-items");
const btnVaciar = document.getElementById("vaciar-carrito");
const totalPrecio = document.getElementById("total-precio");
const contadorCarrito = document.getElementById("contadorCarrito");
const toast = document.getElementById("toast-container");


// Cargar carrito desde localStorage si existe
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Formateador para pesos colombianos
const formatoPesos = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

// Guardar carrito en localStorage
const guardarCarrito = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

// Renderizar el carrito en pantalla
const renderCarrito = () => {
  contenedorCarrito.innerHTML = "";

  carrito.forEach((producto) => {
    contenedorCarrito.innerHTML += `
      <div class="carrito-item">
        <img src="${producto.img}" alt="${producto.nombre}" />
        <div id="items-container">
          <h4>${producto.nombre}</h4>
          <h5>${formatoPesos.format(producto.precio)}</h5>
          <div class="cantidad-container">
            <button class="btn-decrementar" data-nombre="${producto.nombre}">-</button>
            <span class="cantidad">${producto.cantidad}</span>
            <button class="btn-incrementar" data-nombre="${producto.nombre}">+</button>
          </div>
        </div>
      </div>
    `;
  });

  actualizarTotal();
  actualizarContadorCarrito();
};

// Actualizar el total del carrito
const actualizarTotal = () => {
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  totalPrecio.textContent = `Total: ${formatoPesos.format(total)}`;
};

// Actualizar el contador de productos en el carrito
const actualizarContadorCarrito = () => {
  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  contadorCarrito.textContent = totalUnidades;
};

// Agregar un producto al carrito
const addToCart = (producto) => {
  const productoExistente = carrito.find((item) => item.nombre === producto.nombre);

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  guardarCarrito();
  renderCarrito();
  addToast(`${producto.nombre} agregado al carrito`);
};

// Incrementar la cantidad de un producto
const incrementarCantidad = (nombreProducto) => {
  const producto = carrito.find((item) => item.nombre === nombreProducto);
  if (producto) {
    producto.cantidad += 1;
    guardarCarrito();
    renderCarrito();
  }
};

// Decrementar la cantidad de un producto
const decrementarCantidad = (nombreProducto) => {
  const producto = carrito.find((item) => item.nombre === nombreProducto);
  if (producto) {
    producto.cantidad -= 1;
    if (producto.cantidad === 0) {
      carrito = carrito.filter((item) => item.nombre !== nombreProducto);
    }
    guardarCarrito();
    renderCarrito();
  }
};

// Vaciar el carrito
const vaciarCarrito = () => {
  carrito = [];
  guardarCarrito();
  renderCarrito();
  totalPrecio.textContent = "Total: $0.00";
};

// Mostrar un mensaje en pantalla
const addToast = (message) => {
  const nuevoToast = document.createElement("div");
  nuevoToast.classList.add("toast");
  nuevoToast.innerHTML = `<h4>${message}</h4>`;
  toast.appendChild(nuevoToast);

  setTimeout(() => {
    nuevoToast.remove();
  }, 3000);
};

// Delegación de eventos en el catálogo
contenedorCatalogo.addEventListener("click", (event) => {
  if (event.target.closest(".carrito-btn")) {
    const articulo = event.target.closest(".producto-catalogo");
    const producto = {
      nombre: articulo.querySelector("h3").textContent,
      img: articulo.querySelector("img").src,
      descripcion: articulo.querySelector(".descripcion-producto").textContent,
      precio: parseFloat(
        articulo.querySelector("h4").textContent.replace(/[^\d]/g, "")
      ),
    };

    addToCart(producto);
  }
});

// Delegación de eventos en el carrito
contenedorCarrito.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-incrementar")) {
    const nombreProducto = event.target.dataset.nombre;
    incrementarCantidad(nombreProducto);
  }

  if (event.target.classList.contains("btn-decrementar")) {
    const nombreProducto = event.target.dataset.nombre;
    decrementarCantidad(nombreProducto);
  }
});



// Vaciar el carrito al hacer clic en el botón
btnVaciar.addEventListener("click", (event) => {
  event.preventDefault();
  vaciarCarrito();
});

// Renderizar el carrito al cargar la página
window.addEventListener("load", () => {
  renderCarrito();
});
