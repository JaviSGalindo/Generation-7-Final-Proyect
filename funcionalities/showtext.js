function showtext(){
    const contenido = document.getElementById("content");
    const button = document.getElementById("know-more");

    if (contenido.style.display === "none") {
        contenido.style.display = "block";
        button.textContent ="Saber menos";
    } else {
        contenido.style.display = "none";
        button.textContent = "Saber más"
    }
}