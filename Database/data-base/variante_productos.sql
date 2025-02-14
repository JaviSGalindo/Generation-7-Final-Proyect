CREATE TABLE variante_productos (
    id_variante_productos INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT NOT NULL,
    FOREIGN KEY (producto_id) REFERENCES productos(id_producto)
    talla CHAR(5) NOT NULL,
    color VARCHAR(50),
    stock_variante INT NOT NULL
);