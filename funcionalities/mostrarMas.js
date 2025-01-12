document.getElementById("toggleButton").addEventListener("click", function () {
    const infoDiv = document.getElementById("info");
    

    if (infoDiv.style.display === "none") {
        infoDiv.style.display = "block";
        this.textContent = "...";
    } else {
        infoDiv.style.display = "none";
        this.textContent = "Descubre más sobre nosotros";
    }   
});