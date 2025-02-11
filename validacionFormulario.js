export function validateName() {
  const name = document.getElementById("name");
  const nameError = document.getElementById("nameError");

  if (name.value.trim() === "") {
    nameError.textContent = "Por favor, ingresa tu nombre.";
    nameError.classList.add("show");
    return true;
  } else if (!/^[a-zA-Z\s]+$/.test(name.value.trim())) {
    nameError.textContent = "El nombre solo debe contener letras y espacios.";
    nameError.classList.add("show");
    return true;
  }

  nameError.textContent = "";
  nameError.classList.remove("show");
  return false;
}

export function validateLastName() {
  const lastName = document.getElementById("lastName");
  const lastNameError = document.getElementById("lastNameError");

  if (lastName.value.trim() === "") {
    lastNameError.textContent = "Por favor, ingresa tu apellido.";
    lastNameError.classList.add("show");
    return true;
  } else if (!/^[a-zA-Z\s]+$/.test(lastName.value.trim())) {
    lastNameError.textContent = "El apellido solo debe contener letras y espacios.";
    lastNameError.classList.add("show");
    return true;
  }

  lastNameError.textContent = "";
  lastNameError.classList.remove("show");
  return false;
}

export function validateEmail() {
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  if (email.value.trim() === "") {
    emailError.textContent = "Por favor, ingresa tu email.";
    emailError.classList.add("show");
    return true;
  } else if (!email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.textContent = "Por favor, ingresa un correo electrónico válido.";
    emailError.classList.add("show");
    return true;
  }

  emailError.textContent = "";
  emailError.classList.remove("show");
  return false;
}

export function validateMessage() {
  const message = document.getElementById("message");
  const messageError = document.getElementById("messageError");

  if (message.value.trim() === "") {
    messageError.textContent = "Por favor, ingresa tu mensaje.";
    messageError.classList.add("show");
    return true;
  } else if (message.value.trim().length < 10) {
    messageError.textContent = "Cuéntanos un poco más.";
    messageError.classList.add("show");
    return true;
  }

  messageError.textContent = "";
  messageError.classList.remove("show");
  return false;
}

export function validatePolicyCheck() {
  const policy = document.getElementById("policy");
  const policyError = document.getElementById("policyError");

  if (!policy.checked) {
    policyError.textContent = "Por favor, acepta nuestra política de privacidad.";
    policyError.classList.add("show");
    return true;
  }

  policyError.textContent = "";
  policyError.classList.remove("show");
  return false;
}

export function validatePhoneNumber() {
  const phoneNumber = document.getElementById("telefono");
  const phoneNumberError = document.getElementById("numberError");
  const phoneRegex = /^\d{10}$/;

  if (!phoneRegex.test(phoneNumber.value.trim())) {
    phoneNumberError.textContent = "Por favor, ingresa un número de teléfono válido.";
    phoneNumberError.classList.add("show");
    return true;
  }

  phoneNumberError.textContent = "";
  phoneNumberError.classList.remove("show");
  return false;
}


export function validatePassword() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  if (!passwordRegex.test(password.value.trim())) {
    passwordError.textContent = "La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, un número y un carácter especial.";
    passwordError.classList.add("show");
    return true;
  }

  if (password.value.trim() !== confirmPassword.value.trim()) {
    confirmPasswordError.textContent = "Las contraseñas no coinciden.";
    confirmPasswordError.classList.add("show");
    return true;
  }

  passwordError.textContent = "";
  passwordError.classList.remove("show");
  confirmPasswordError.textContent = "";
  confirmPasswordError.classList.remove("show");
  return false;
}


export function validateEmptyPassword() {
  const password = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");

  if (password.value.trim() === "") {
    passwordError.style.display = "block";
    passwordError.textContent = "Ingresa tu contraseña";
    return true;
  } else {
    passwordError.style.display = "none";
    passwordError.textContent = "";
    return false;
  }
}

// Agregar event listeners para validación en tiempo real

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("name").addEventListener("input", validateName);
  document.getElementById("lastName").addEventListener("input", validateLastName);
  document.getElementById("email").addEventListener("input", validateEmail);
  document.getElementById("message").addEventListener("input", validateMessage);
  document.getElementById("policy").addEventListener("change", validatePolicyCheck);
  document.getElementById("telefono").addEventListener("input", validatePhoneNumber);
  document.getElementById("password").addEventListener("input", validatePassword);
});

export function clearErrorMessages() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((error) => (error.textContent = ""));
}

export function successMessage() {
  const successMessage = document.getElementById("successMessage");
  successMessage.textContent = "¡Formulario enviado con éxito!";
  successMessage.style.display = "block";
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 2000);
  // document.querySelectorAll(".formulario").forEach((form) => form.reset());
}

export function sendContactForm(event) {
  let hasErrors = false;
  clearErrorMessages();

  if (validateName()) hasErrors = true;
  if (validateEmail()) hasErrors = true;
  if (validateMessage()) hasErrors = true;
  if (validatePolicyCheck()) hasErrors = true;

  if (!hasErrors) {
    successMessage(event);
  } else {
    event.preventDefault();
  }
}

export function sendRegisterForm(event) {
  let hasErrors = false;
  clearErrorMessages();

  if (validateName()) hasErrors = true;
  if (validateLastName()) hasErrors = true;
  if (validateEmail()) hasErrors = true;
  if (validatePhoneNumber()) hasErrors = true;
  if (validatePassword()) hasErrors = true;

  if (!hasErrors) {
    successMessage();
    return true;
  } else {
    event.preventDefault();
    return false;
  }
}

export function sendLoginForm(event) {
  let hasErrors = false;
  clearErrorMessages();

  if (validateEmail()) hasErrors = true;
  if (validateEmptyPassword()) hasErrors = true;  

  if (!hasErrors) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
}

export function sendRecoveryForm(event) {
  let hasErrors = false;
  clearErrorMessages();

  if (validateEmail()) hasErrors = true;  

  if (!hasErrors) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
}
