CREATE TABLE ordenes(
    id_orden INT AUTO_INCREMENT PRIMARY KEY,
    total DECIMAL(10,2) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    fecha_orden DATE NOT NULL,
    usuario_id INT NOT NULL
);