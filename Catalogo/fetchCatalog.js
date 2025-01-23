// Este código se encargará de agregar el producto al carrito y actualizar la vista.

const contenedor = document.querySelector(".productos-container");
let carrito = JSON.parse(localStorage.getItem("carrito")) || []; // Obtener carrito del localStorage

// Cargar los productos desde el archivo JSON
fetch('catalogo.json')
  .then(response => response.json()) // Parsear respuesta a JSON
  .then(data => {
    data.forEach(producto => {
      addProducts(producto);  // Llamamos a la función que agrega los productos a la vista
    });
  })
  .catch(error => {
    console.error('Error al cargar el catálogo:', error);
  });

// Función para agregar un producto al carrito
const agregarAlCarrito = (producto) => {
  carrito.push(producto); // Agregar el producto al array carrito
  localStorage.setItem("carrito", JSON.stringify(carrito)); // Guardar el carrito en localStorage
  actualizarCarrito(); // Actualizar el carrito en la interfaz
};

// Función para actualizar la vista del carrito
const actualizarCarrito = () => {
  const carritoItems = document.getElementById("carrito-items");
  const totalPrecio = document.getElementById("total-precio");

  carritoItems.innerHTML = ""; // Limpiar la lista de productos del carrito
  let total = 0;

  carrito.forEach(producto => {
    carritoItems.innerHTML += `
      <div class="carrito-item">
        <img src="${producto.img}" alt="${producto.nombre}" />
        <div>
          <h4>${producto.nombre}</h4>
          <p>${producto.descripcion}</p>
          <h5>$${producto.precio.toFixed(2)}</h5>
        </div>
      </div>
    `;
    total += producto.precio; // Sumar el precio de cada producto al total
  });

  totalPrecio.textContent = `Total: $${total.toFixed(2)}`; // Mostrar el total en el modal
};

// Función para agregar productos a la vista (en el contenedor de productos)
const addProducts = (producto) => {
  contenedor.innerHTML += `
    <article class="producto-catalogo" data-id="${producto.nombre}">
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

  // Seleccionamos el botón de agregar al carrito y asignamos el evento
  const btnCarrito = document.querySelector(`[data-id="${producto.nombre}"] .carrito-btn`);

  // Añadir evento de clic para agregar el producto al carrito
  btnCarrito.addEventListener("click", () => {
    agregarAlCarrito(producto);
  });
};

// Actualizamos el carrito al cargar la página si hay productos en el carrito
actualizarCarrito();

// const contenedor = document.querySelector(".productos-container");

// // Cargar los productos desde el archivo JSON
// fetch('catalogo.json')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json(); // Convertir la respuesta a JSON
//   })
//   .then(data => {
//     data.forEach(producto => addProducts(producto));
//   })
//   .catch(error => {
//     console.error('Hubo un problema con la solicitud fetch:', error);
//   });

//   // Función para agregar un producto al contenedor
//   const addProducts = (producto) => {
//     contenedor.innerHTML += `
//     <article class="producto-catalogo">
//             <a href="#">
//               <img src="${producto.img}" alt="${producto.nombre}" />
//             </a>
//             <div class="primer-row">
//               <h3>${producto.nombre}</h3>   
//               <div class="action-btns">
//                 <button class="wishlist-btn" aria-label="Agregar a wishlist">
//                   <i class="fas fa-heart"></i>
//                 </button>
//                 <button class="carrito-btn" aria-label="Agregar al carrito">
//                   <i class="fas fa-shopping-cart"></i>
//                 </button>
//               </div>
//             </div>
//             <p class="descripcion-producto">${producto.descripcion}</p> 
//             <h4>$${producto.precio.toFixed(3)}</h4>
//           </article>
//   `;
//  }
