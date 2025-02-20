import * as validator from "../validacionFormulario.js";

const form = document.getElementById("registerForm");

const handleSubmit = async (event) => {
  event.preventDefault(); //Eviita el comportamiento predeterminado del formulario
  
  //es una función de validación que se supone devuelve true o false, dependiendo de si los datos del formulario son válidos.
  if (await validator.sendRegisterForm(event)) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value

    //Uso un array USERS que guarda pares clave-valor en el almacenamiento local del navegador.
    const users = JSON.parse(localStorage.getItem('users')) || []; //Si no está en el storaje lo guarda como vacio

    // Se usa un find para verificar si usuarioya existe en el array
    const isUserRegisted = users.find(user => user.email === email)
    if(isUserRegisted){
        return alert("El usuario ya está registrado")
    }

    //Guardamoe el objeto en el array, se guada un objeto completo
    users.push({ email: email, password: password, name: name})

    //Y ahora se guarda en el storage
    localStorage.setItem('users',JSON.stringify(users))

    // restablece el formulario a su estado inicial, eliminando los datos ingresados en los campos.
    document.getElementById("registerForm").reset();

    //redirige al usuario a la página login.html después de completar el registro exitosamente.
    window.location.href = "structure/login.html"; 
  }
};

form.addEventListener("submit", handleSubmit);
