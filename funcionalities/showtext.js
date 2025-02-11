function showtext(){
    const contenido = document.getElementById("content");
    const button = document.getElementById("know-more");

    // Obtiene el estilo computado actual del elemento
    if (window.getComputedStyle(contenido).display === "none") {
        contenido.style.display = "block";
        button.textContent = "Mostrar menos";
    } else {
        contenido.style.display = "none";
        button.textContent = "Mostrar más";
    }
}
