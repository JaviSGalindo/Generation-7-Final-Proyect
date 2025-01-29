import * as validator from "../validacionFormulario.js";

const handleSubmit = (event)=>{
    //Inicializar variable de control de errores
    let hasErrors = false;
    event.preventDefault();
    validator.validateName;
    validator.validateLastName;

    // Limpiar los mensajes de error anteriores
  const clearErrorMessages = () => {
    [nameError, emailError, messageError, policyError].forEach(
      (error) => (error.textContent = "")
    );
    };

}

