import { addToCart } from "./fetchCarrito.js";
import { formatoPesos } from "./fetchCatalog.js";

export function renderModal(producto) {
    const contenedorModal = document.getElementById("product-modal");

    // Generar las opciones de tallas dinámicamente
    const opcionesTallas = producto.tallas.map(talla => `<option value="${talla}">${talla}</option>`).join("");

    // Generar las opciones de colores dinámicamente
    const opcionesColores = producto.colores.map(color => `<option value="${color}">${color}</option>`).join("");

    contenedorModal.innerHTML = "";

    contenedorModal.innerHTML = `
      <div class="modal fade" id="productoModal" tabindex="-1" aria-labelledby="modalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitle">${producto.nombre}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body">
              <!-- Contenedor de dos columnas (imagen e información) -->
              <div class="d-flex flex-column flex-lg-row gap-3">
                <!-- Columna izquierda: Imagen -->
                <div class="modal-img-container">
                  <img id="modalImg" src="${producto.img}" alt="${producto.nombre}" class="img-fluid">
                </div>
                <!-- Columna derecha: Información -->
                <div class="modal-info-container">
                <p id="modalDesc">${producto.descripcion}</p>
                  
                  

                  <!-- Selector de talla -->
                  <div class="mt-3">
                    <label for="modalTalla">Talla:</label>
                    <select id="modalTalla" class="form-select">
                      ${opcionesTallas}
                    </select>
                  </div>
                  <!-- Selector de color -->
                  <div class="mt-3">
                    <label for="modalColor">Color:</label>
                    <select id="modalColor" class="form-select">
                      ${opcionesColores}
                    </select>
                  </div>
                  <strong id="modalPrecio">${formatoPesos.format(producto.precio)}</strong>
                </div>
              </div>
              <!-- Botones debajo -->
              <div class="modal-footer flex-column flex-lg-row gap-3">
                <button type="button" class="btn btn-primary w-100 w-lg-auto">Guía de Tallas</button>
                <button id="btn-add-to-cart" type="button" class="btn btn-primary w-100 w-lg-auto">Añadir al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;


    // Inicializar el modal con Bootstrap para que funcione correctamente
    const modal = new bootstrap.Modal(document.getElementById("productoModal"));
    modal.show();

    // Capturar el clic en "Añadir al carrito"
    document.getElementById("btn-add-to-cart").addEventListener("click", () => {
        // Obtener los valores seleccionados del modal
        const tallaSeleccionada = document.getElementById("modalTalla").value;
        const colorSeleccionado = document.getElementById("modalColor").value;

        // Crear el objeto producto con la información seleccionada
        const productoParaCarrito = {
            nombre: producto.nombre,
            img: producto.img,
            descripcion: producto.descripcion,
            precio: producto.precio,
            talla: tallaSeleccionada,
            color: colorSeleccionado,
        };

        // Llamar a la función addToCart del carrito
        addToCart(productoParaCarrito);
    });

}