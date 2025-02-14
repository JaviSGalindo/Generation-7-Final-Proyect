CREATE TABLE ordenes (
    id_orden INT AUTO_INCREMENT PRIMARY KEY,
    total DECIMAL(10,2) NOT NULL,
    estado VARCHAR(50) NOT NULL,
    fecha_orden DATE NOT NULL,
    usuario_id INT NOT NULL,
    CONSTRAINT fk_orden_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
) ENGINE=InnoDB;

INSERT INTO ordenes (total, estado, fecha_orden, usuario_id) VALUES
(59.99, 'Pendiente', '2025-02-01', 1),
(89.99, 'Completado', '2025-02-02', 2),
(19.99, 'Cancelado', '2025-02-03', 3),
(39.99, 'Pendiente', '2025-02-04', 4),
(99.99, 'Enviado', '2025-02-05', 5),
(14.99, 'Completado', '2025-02-06', 6),
(49.99, 'Pendiente', '2025-02-07', 7),
(79.99, 'Enviado', '2025-02-08', 8),
(54.99, 'Pendiente', '2025-02-09', 9),
(29.99, 'Completado', '2025-02-10', 10);