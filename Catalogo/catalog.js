//Bucle para agregar productos dinámicamente
const productos = [
  {
    nombre: "CONFIANZA",
    descripcion: "Vestido con escote profundo con amarre al frente y recogido en las mangas.",
    precio: 165,
    img: "../images/imgAccesorios1.webp",
  },
  {
    nombre: "COQUETA",
    descripcion: "Enterizo disponible en negro, incluye cinturón",
    precio: 172,
    img: "../images/imgAccesorios1.webp",
  },
  {
    nombre: "TENAZ",
    descripcion: "Set x 2. Top con manga en capa y falda.",
    precio: 162,
    img: "../images/imgAccesorios1.webp",
  },
  {
    nombre: "VALIENTE",
    descripcion: "Set x 3. En lino.",
    precio: 199,
    img: "../images/imgAccesorios1.webp",
  },
  {
    nombre: "CREATIVA",
    descripcion: "Set x 2",
    precio: 155,
    img: "../images/imgAccesorios1.webp",
  },
  
]; //confianza, coqueta, tenaz, valiente, creativa
// coraje, audaz, compasiva, comprometida, sabia

const contenedor = document.querySelector(".productos-container");
productos.forEach((producto) => {
  contenedor.innerHTML += `
    <article class="producto-catalogo">
            <a href="#">
              <img src="${producto.img}" />
            </a>
            <div class="primer-row">
              <h3>${producto.nombre}</h3>   <h4>$${producto.precio.toFixed(3)}</h4>
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
            
          </article>
  `;
}); //La descripcion debe tener un maximo de n caracteres.

/*
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
