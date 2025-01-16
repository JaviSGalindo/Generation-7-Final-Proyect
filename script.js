const checkbox = document.getElementById("policy");
const sumitbtn = document.getElementById("submitButton");

checkbox.addEventListener('change',() => {
    //habilitar o desabilidad segun eñ eestado del checkbox
    sumitbtn.disabled = !checkbox.checked;
})

function privacidad() {
    alert("Nos comprometemos a proteger tu privacidad y garantizar el uso adecuado de tus datos personales.")

}