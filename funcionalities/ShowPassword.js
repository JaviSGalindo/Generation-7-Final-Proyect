const password = document.getElementById("password");
const icon = document.getElementById("togglePassword")
 
icon.addEventListener("click", e => {
    if (password.type =="password"){
        password.type = "text";
    }else{
        password.type = "password"
    }
})