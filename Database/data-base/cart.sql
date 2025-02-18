CREATE TABLE carrito (
    id_carrito INT AUTO_INCREMENT PRIMARY KEY,
    cantidad INT NOT NULL,
    usuario_id INT NOT NULL,
    variante_producto_id INT NOT NULL,
    CONSTRAINT fk_carrito_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    CONSTRAINT fk_carrito_variante FOREIGN KEY (variante_producto_id) REFERENCES variante_productos(id_variante_productos) ON DELETE CASCADE
) ENGINE=InnoDB;

INSERT INTO carrito (cantidad, usuario_id, variante_producto_id) VALUES
(2, 1, 1),
(1, 2, 2),
(3, 3, 3),
(1, 4, 4),
(4, 5, 5),
(2, 6, 6),
(1, 7, 7),
(3, 8, 8),
(2, 9, 9),
(1, 10, 10);