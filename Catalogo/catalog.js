/*
//Bucle para agregar productos dinámicamente 
const productos = [
  { nombre: "Producto 1", descripcion: "Descripción", precio: 69, img: "https://picsum.photos/id/237/200/300" },
  // Más productos...
];

const contenedor = document.querySelector('.productos-container');
productos.forEach(producto => {
  contenedor.innerHTML += `
    <article class="producto-catalogo">
      <img src="${producto.img}" alt="${producto.nombre}" />
      <div class="primer-renglon">
        <h5>${producto.nombre}</h5>
        <div class="action-btns">
          <button class="wishlist-btn" aria-label="Agregar a wishlist">
            <i class="fas fa-heart"></i>
          </button>
          <button class="carrito-btn" aria-label="Agregar al carrito">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <p>${producto.descripcion}</p>
      <h6>$${producto.precio.toFixed(2)}</h6>
    </article>
  `;
});

//Fn Slider
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  
  // Asegurarse de que el índice sea válido
  if (index >= totalSlides) {
    currentIndex = 0; // Vuelve al inicio
  } else if (index < 0) {
    currentIndex = totalSlides - 1; // Va al final
  } else {
    currentIndex = index;
  }
  
  // Mover el contenedor de slides
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Mostrar la primera slide al cargar
showSlide(currentIndex);


*/