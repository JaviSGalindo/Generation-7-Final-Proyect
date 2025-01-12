document.getElementById("toggleButton").addEventListener("click", function () {
  const infoDiv = document.getElementById("info");

  if (infoDiv.classList.contains("visible")) {
    infoDiv.classList.remove("visible");
    this.textContent = "Mostrar menos";
  } else {
    infoDiv.classList.add("visible");
    this.textContent = "Descubre más";
  }
});
