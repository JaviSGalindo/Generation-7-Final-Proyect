CREATE TABLE detalle_ordenes (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    cantidad INT NOT NULL,
    orden_id INT NOT NULL,    
    variante_producto_id INT NOT NULL,
    CONSTRAINT fk_detalle_orden FOREIGN KEY (orden_id) REFERENCES ordenes(id_orden) ON DELETE CASCADE,
    CONSTRAINT fk_detalle_variante FOREIGN KEY (variante_producto_id) REFERENCES variante_productos(id_variante_productos) ON DELETE CASCADE
) ENGINE=InnoDB;

INSERT INTO detalle_ordenes (cantidad, orden_id, variante_producto_id) VALUES
(2, 1, 1),
(1, 1, 2),
(3, 2, 3),
(1, 3, 4),
(4, 4, 5),
(2, 5, 6),
(1, 6, 7),
(3, 7, 8),
(2, 8, 9),
(1, 9, 10);