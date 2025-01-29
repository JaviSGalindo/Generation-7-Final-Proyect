export function validateName() {
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");

  if (name === "") {
    nameError.textContent = "Por favor, ingresa tu nombre.";
    hasErrors = true;
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    nameError.textContent = "El nombre solo debe contener letras y espacios.";
    hasErrors = true;
  }
}

export function validateEmail() {
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");

  if (email === "") {
    emailError.textContent = "Por favor, ingresa tu email.";
    hasErrors = true;
  } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.textContent = "Por favor, ingresa un correo electrónico válido.";
    hasErrors = true;
  }
}

export function validateMessage() {
    const message = document.getElementById("message").value.trim();
    const messageError = document.getElementById("messageError");

    if (message === "") {
        messageError.textContent = "Por favor, ingresa tu mensaje.";
        hasErrors = true;
      } else if (message.length < 10) {
        messageError.textContent = "Cuéntanos un poco más.";
        hasErrors = true;
      }
}

export function validatePolicyCheck() {
    const policy = document.getElementById("policy").checked;
    const policyError = document.getElementById("policyError");

    if (!policy) {
        policyError.textContent =
          "Por favor, acepta nuestra politica de privacidad.";
        hasErrors = true;
      }
    
}

export function sendForm() {
    if (!hasErrors) {   
        const successMessage = document.getElementById("successMessage");
        successMessage.textContent = "¡Formulario enviado con éxito!";
        successMessage.style.display = "block";
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 2000); // Oculta el mensaje después de 5 segundos
        document.getElementById("contactForm").reset(); // Limpiar el formulario
      }

}