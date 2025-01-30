const express = require("express");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public")); // Sirve archivos estáticos, como el HTML

// Funciones simuladas para base de datos (reemplazar con lógica real)
async function findUserByEmail(email) {
  // Simulación de búsqueda en la base de datos
  return { id: 1, email };
}

async function saveResetToken(userId, token, expiration) {
  // Simulación de guardado en la base de datos
  console.log(`Token guardado para usuario ${userId}: ${token}`);
}

async function findUserByResetToken(token) {
  // Simulación de búsqueda en la base de datos
  return { id: 1, resetTokenExpiration: Date.now() + 3600000 };
}

async function updatePassword(userId, newPassword) {
  // Simulación de actualización de contraseña
  console.log(`Contraseña actualizada para usuario ${userId}`);
}

async function clearResetToken(userId) {
  // Simulación de limpieza del token en la base de datos
  console.log(`Token eliminado para usuario ${userId}`);
}

// Configuración de transporte de nodemailer (debes configurar con credenciales reales)
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "tuemail@gmail.com",
    pass: "tupassword",
  },
});

// Ruta para solicitar recuperación de contraseña
app.post("/recuperar-contrasena", async (req, res) => {
  const { email } = req.body;
  const user = await findUserByEmail(email);
  if (!user) {
    return res.status(404).send("Correo no registrado");
  }

  const resetToken = crypto.randomBytes(20).toString("hex");
  const resetTokenExpiration = Date.now() + 3600000;
  await saveResetToken(user.id, resetToken, resetTokenExpiration);

  const recoveryLink = `https://tuaplicacion.com/restablecer-contrasena?token=${resetToken}`;

  await transporter.sendMail({
    to: email,
    subject: "Recupera tu contraseña",
    text: `Hola, haz clic en el siguiente enlace para restablecer tu contraseña: ${recoveryLink}`,
  });

  res.send("Correo enviado");
});

// Ruta para restablecer la contraseña
app.post("/restablecer-contrasena", async (req, res) => {
  const { token, nuevaContrasena } = req.body;
  const user = await findUserByResetToken(token);
  if (!user || user.resetTokenExpiration < Date.now()) {
    return res.status(400).send("El enlace ha expirado o es inválido");
  }

  await updatePassword(user.id, nuevaContrasena);
  await clearResetToken(user.id);

  res.send("Contraseña actualizada");
});

// Servir el HTML de recuperación de contraseña
app.get("/recuperar", (req, res) => {
  res.sendFile(__dirname + "/public/recuperar.html");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
