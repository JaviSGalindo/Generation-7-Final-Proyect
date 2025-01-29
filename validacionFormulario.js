export function sendContactForm(event) {
  let hasErrors = false;
  clearErrorMessagesContact();

  if (validateName()) hasErrors = true;
  if (validateEmail()) hasErrors = true;
  if (validateMessage()) hasErrors = true;
  if (validatePolicyCheck()) hasErrors = true;

  if (!hasErrors) {
    const successMessage = document.getElementById("successMessage");
    successMessage.textContent = "¡Formulario enviado con éxito!";
    successMessage.style.display = "block";
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 2000); // Oculta el mensaje después de 2 segundos
    document.getElementById("contactForm").reset(); // Limpiar el formulario
  } else {
    event.preventDefault(); // Evitar el envío del formulario si hay errores
  }
}

export function sendRegisterForm(event) {
  let hasErrors = false;
  clearErrorMessagesRegister();

  if (validateName()) hasErrors = true;
  if (validateLastName()) hasErrors = true;
  if (validateEmail()) hasErrors = true;
  if (validatePhoneNumber()) hasErrors = true;
  if (validatePassword()) hasErrors = true;

  if (!hasErrors) {
    const successMessage = document.getElementById("successMessage");
    successMessage.textContent = "¡Formulario enviado con éxito!";
    successMessage.style.display = "block";
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 2000); // Oculta el mensaje después de 5 segundos
    document.getElementById("registerForm").reset(); // Limpiar el formulario
  } else {
    event.preventDefault(); // Evitar el envío del formulario si hay errores
  }
}

export function validateName() {
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");

  if (name === "") {
    nameError.textContent = "Por favor, ingresa tu nombre.";
    return true;
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    nameError.textContent = "El nombre solo debe contener letras y espacios.";
    return true;
  }
  return false;
}

export function validateLastName() {
  const lastName = document.getElementById("lastName").value.trim();
  const lastNameError = document.getElementById("lastNameError");

  if (lastName === "") {
    lastNameError.textContent = "Por favor, ingresa tu apellido.";
    return true;
  } else if (!/^[a-zA-Z\s]+$/.test(lastName)) {
    lastNameError.textContent =
      "El apellido solo debe contener letras y espacios.";
    return true;
  }
  return false;
}

export function validateEmail() {
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");

  if (email === "") {
    emailError.textContent = "Por favor, ingresa tu email.";
    return true;
  } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.textContent = "Por favor, ingresa un correo electrónico válido.";
    return true;
  }
  return false;
}

export function validateMessage() {
  const message = document.getElementById("message").value.trim();
  const messageError = document.getElementById("messageError");

  if (message === "") {
    messageError.textContent = "Por favor, ingresa tu mensaje.";
    return true;
  } else if (message.length < 10) {
    messageError.textContent = "Cuéntanos un poco más.";
    return true;
  }
  return false;
}

export function validatePolicyCheck() {
  const policy = document.getElementById("policy").checked;
  const policyError = document.getElementById("policyError");

  if (!policy) {
    policyError.textContent =
      "Por favor, acepta nuestra politica de privacidad.";
    return true;
  }
  return false;
}

export function validatePhoneNumber() {
  const phoneRegex = /^[0-9]{10}$/;
  const phoneNumber = document.getElementById("telefono").value.trim();
  const phoneNumberError = document.getElementById("numberError");

  if (!phoneRegex.test(phoneNumber)) {
    phoneNumberError.textContent =
      "Por favor, ingresa un número de teléfono válido.";
    return true;
  }
  return false;
}

export function validatePassword() {
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  // Expresión regular para verificar al menos:
  // - 8 caracteres de longitud
  // - Al menos una mayúscula
  // - Al menos una minúscula
  // - Al menos un número
  // - Al menos un carácter especial
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  // Validar longitud mínima y otros requisitos con regex
  if (!passwordRegex.test(password)) {
    passwordError.textContent =
      "La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, un número y un carácter especial.";
    return true;
  }

  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Las contraseñas no coinciden.";
    return true;
  }
  return false;
}

export function clearErrorMessagesRegister() {
  const nameError = document.getElementById("nameError");
  const lastNameError = document.getElementById("lastNameError");
  const emailError = document.getElementById("emailError");
  const phoneNumberError = document.getElementById("numberError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  [
    nameError,
    lastNameError,
    emailError,
    phoneNumberError,
    passwordError,
    confirmPasswordError,
  ].forEach((error) => (error.textContent = ""));
}

export function clearErrorMessagesContact() {
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const policyError = document.getElementById("policyError");
  [nameError, emailError, messageError, policyError].forEach(
    (error) => (error.textContent = "")
  );
}
