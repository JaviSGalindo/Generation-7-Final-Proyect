CREATE TABLE carrito(
    id_carrito INT AUTO_INCREMENT PRIMARY KEY,
    cantidad INT NOT NULL,
    usuario_id INT NOT NULL,
    variante_producto_id INT NOT NULL
);