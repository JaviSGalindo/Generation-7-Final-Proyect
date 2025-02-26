import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { MercadoPagoConfig, Preference } from "mercadopago";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar Mercado Pago
const client = new MercadoPagoConfig({
  accessToken: process.env.ACCESS_TOKEN,
});

app.use(cors());
app.use(bodyParser.json());

app.post("/create_preference", async (req, res) => {
  try {
    const { total } = req.body;

    if (!total) {
      return res.status(400).json({ error: "El total del carrito es requerido" });
    }

    let preference = new Preference(client);
    const response = await preference.create({
      body: {
        items: [
          {
            title: "Compra en la tienda",
            quantity: 1,
            currency_id: "COP",
            unit_price: parseFloat(total),
          },
        ],
      },
    });

    res.json({ id: response.id, init_point: response.init_point });
  } catch (error) {
    console.error("Error al crear la preferencia:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
