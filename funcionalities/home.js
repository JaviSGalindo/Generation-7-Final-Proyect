let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 6000); // Cambia la diapositiva cada 7 segundos
}

function moveSlide(n) {
  let slides = document.getElementsByClassName("slides");
  slideIndex += n;

  // Asegurarse de que el índice esté dentro del rango
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  // Ocultar todas las diapositivas
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Mostrar la diapositiva actual
  slides[slideIndex - 1].style.display = "block";
}
