function showtext(){
    const contenido = document.getElementById("content");
    const button = document.getElementById("know-more");

    if (contenido.style.display === "none") {
        contenido.style.display = "block";
        button.textContent ="Mostrar menos";
    } else {
        contenido.style.display = "none";
        button.textContent = "Mostrar más"
    }
}