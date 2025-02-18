const handleSubmit = (event) => {
  event.preventDefault(); //evita que el formulario se envíe antes de hacer la validación

  // Obtener input de campos de entrada por id y eliminar los espacios en blanco
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const policy = document.getElementById("policy").checked;

  //Obtener los elementos <span> para implementar el mensaje de error
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const policyError = document.getElementById("policyError");

  //Inicializar variable de control de errores
  let hasErrors = false;

  // Limpiar los mensajes de error anteriores
  const clearErrorMessages = () => {
    [nameError, emailError, messageError, policyError].forEach(
      (error) => (error.textContent = "")
    );
  };
  clearErrorMessages();

  if (name === "") {
    nameError.textContent = "Por favor, ingresa tu nombre.";
    hasErrors = true;
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    nameError.textContent = "El nombre solo debe contener letras y espacios.";
    hasErrors = true;
  }

  if (email === "") {
    emailError.textContent = "Por favor, ingresa tu email.";
    hasErrors = true;
  } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.textContent = "Por favor, ingresa un correo electrónico válido.";
    hasErrors = true;
  }

  if (message === "") {
    messageError.textContent = "Por favor, ingresa tu mensaje.";
    hasErrors = true;
  } else if (message.length < 10) {
    messageError.textContent = "Cuéntanos un poco más.";
    hasErrors = true;
  }

  if (!policy) {
    policyError.textContent =
      "Por favor, acepta nuestra politica de privacidad.";
    hasErrors = true;
  }

  if (hasErrors) {
    return;
  }
  if (!hasErrors) {
    // document.getElementById("contactForm").submit(); // Enviar formulario a Formspree (descomentar esta línea para enviar el formulario)
    const successMessage = document.getElementById("successMessage");
    successMessage.textContent = "¡Formulario enviado con éxito!";
    successMessage.style.display = "block";
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 2000); // Oculta el mensaje después de 5 segundos
    document.getElementById("contactForm").reset(); // Limpiar el formulario
  }
};

document.getElementById("contactForm").addEventListener("submit", handleSubmit);
