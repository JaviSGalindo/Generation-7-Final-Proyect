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
              <img id="modalImg" src="${producto.img}" alt="${producto.nombre}" class="img-fluid mb-3">
              <p id="modalDesc">${producto.descripcion}</p>
              <strong id="modalPrecio">${producto.precio.toLocaleString("es-CO", { style: "currency", currency: "COP" })}</strong>

              <div class="mt-3">
                <label for="modalTalla">Talla:</label>
                <select id="modalTalla" class="form-select">
                  ${opcionesTallas}
                </select>
              </div>
              <div class="mt-3">
                <label for="modalColor">Color:</label>
                <select id="modalColor" class="form-select">
                  ${opcionesColores}
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Añadir al carrito</button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Inicializar el modal con Bootstrap para que funcione correctamente
    const modal = new bootstrap.Modal(document.getElementById("productoModal"));
    modal.show();
}