CREATE TABLE  detalle_ordenes (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    cantidad INT NOT NULL,
    orden_id INT NOT NULL,
    FOREIGN KEY (orden_id) REFERENCES ordenes(id_orden),
    variante_producto_id INT NOT NULL,
    FOREIGN KEY (variante_producto_id) REFERENCES variante_productos(id_variante_productos)
);

