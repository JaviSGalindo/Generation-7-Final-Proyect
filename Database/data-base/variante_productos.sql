CREATE TABLE variante_productos (
    id_variante_productos INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT NOT NULL,
    talla CHAR(5) NOT NULL,
    color VARCHAR(50),
    stock_variante INT NOT NULL,
    CONSTRAINT fk_variante_producto FOREIGN KEY (producto_id) REFERENCES productos(id_producto) ON DELETE CASCADE
) ENGINE=InnoDB;

-- Insertar variantes de productos para los 10 productos
INSERT INTO variante_productos (producto_id, talla, color, stock_variante) VALUES
-- CONFIANZA
(1, 'S', 'Negro', 10), (1, 'M', 'Negro', 10), (1, 'L', 'Negro', 10), (1, 'XL', 'Negro', 10), (1, 'XXL', 'Negro', 10),
(1, 'S', 'Blanco', 10), (1, 'M', 'Blanco', 10), (1, 'L', 'Blanco', 10), (1, 'XL', 'Blanco', 10), (1, 'XXL', 'Blanco', 10),
(1, 'S', 'Azul', 10), (1, 'M', 'Azul', 10), (1, 'L', 'Azul', 10), (1, 'XL', 'Azul', 10), (1, 'XXL', 'Azul', 10),

-- COQUETA
(2, 'S', 'Rojo', 10), (2, 'M', 'Rojo', 10), (2, 'L', 'Rojo', 10), (2, 'XL', 'Rojo', 10), (2, 'XXL', 'Rojo', 10),
(2, 'S', 'Rosa', 10), (2, 'M', 'Rosa', 10), (2, 'L', 'Rosa', 10), (2, 'XL', 'Rosa', 10), (2, 'XXL', 'Rosa', 10),
(2, 'S', 'Blanco', 10), (2, 'M', 'Blanco', 10), (2, 'L', 'Blanco', 10), (2, 'XL', 'Blanco', 10), (2, 'XXL', 'Blanco', 10),

-- TENAZ
(3, 'S', 'Negro', 10), (3, 'M', 'Negro', 10), (3, 'L', 'Negro', 10), (3, 'XL', 'Negro', 10), (3, 'XXL', 'Negro', 10),
(3, 'S', 'Gris', 10), (3, 'M', 'Gris', 10), (3, 'L', 'Gris', 10), (3, 'XL', 'Gris', 10), (3, 'XXL', 'Gris', 10),
(3, 'S', 'Azul', 10), (3, 'M', 'Azul', 10), (3, 'L', 'Azul', 10), (3, 'XL', 'Azul', 10), (3, 'XXL', 'Azul', 10),

-- VALIENTE
(4, 'S', 'Azul', 10), (4, 'M', 'Azul', 10), (4, 'L', 'Azul', 10), (4, 'XL', 'Azul', 10), (4, 'XXL', 'Azul', 10),
(4, 'S', 'Verde', 10), (4, 'M', 'Verde', 10), (4, 'L', 'Verde', 10), (4, 'XL', 'Verde', 10), (4, 'XXL', 'Verde', 10),
(4, 'S', 'Negro', 10), (4, 'M', 'Negro', 10), (4, 'L', 'Negro', 10), (4, 'XL', 'Negro', 10), (4, 'XXL', 'Negro', 10),

-- CREATIVA
(5, 'S', 'Amarillo', 10), (5, 'M', 'Amarillo', 10), (5, 'L', 'Amarillo', 10), (5, 'XL', 'Amarillo', 10), (5, 'XXL', 'Amarillo', 10),
(5, 'S', 'Azul', 10), (5, 'M', 'Azul', 10), (5, 'L', 'Azul', 10), (5, 'XL', 'Azul', 10), (5, 'XXL', 'Azul', 10),
(5, 'S', 'Blanco', 10), (5, 'M', 'Blanco', 10), (5, 'L', 'Blanco', 10), (5, 'XL', 'Blanco', 10), (5, 'XXL', 'Blanco', 10),

-- CORAJE
(6, 'S', 'Rojo', 10), (6, 'M', 'Rojo', 10), (6, 'L', 'Rojo', 10), (6, 'XL', 'Rojo', 10), (6, 'XXL', 'Rojo', 10),
(6, 'S', 'Negro', 10), (6, 'M', 'Negro', 10), (6, 'L', 'Negro', 10), (6, 'XL', 'Negro', 10), (6, 'XXL', 'Negro', 10),
(6, 'S', 'Blanco', 10), (6, 'M', 'Blanco', 10), (6, 'L', 'Blanco', 10), (6, 'XL', 'Blanco', 10), (6, 'XXL', 'Blanco', 10),

-- SOÑADORA
(7, 'S', 'Blanco', 10), (7, 'M', 'Blanco', 10), (7, 'L', 'Blanco', 10), (7, 'XL', 'Blanco', 10), (7, 'XXL', 'Blanco', 10),
(7, 'S', 'Celeste', 10), (7, 'M', 'Celeste', 10), (7, 'L', 'Celeste', 10), (7, 'XL', 'Celeste', 10), (7, 'XXL', 'Celeste', 10),
(7, 'S', 'Rosa', 10), (7, 'M', 'Rosa', 10), (7, 'L', 'Rosa', 10), (7, 'XL', 'Rosa', 10), (7, 'XXL', 'Rosa', 10),

-- COMPASIVA
(8, 'S', 'Beige', 10), (8, 'M', 'Beige', 10), (8, 'L', 'Beige', 10), (8, 'XL', 'Beige', 10), (8, 'XXL', 'Beige', 10),
(8, 'S', 'Blanco', 10), (8, 'M', 'Blanco', 10), (8, 'L', 'Blanco', 10), (8, 'XL', 'Blanco', 10), (8, 'XXL', 'Blanco', 10),
(8, 'S', 'Gris', 10), (8, 'M', 'Gris', 10), (8, 'L', 'Gris', 10), (8, 'XL', 'Gris', 10), (8, 'XXL', 'Gris', 10),

-- COMPROMETIDA
(9, 'S', 'Verde', 10), (9, 'M', 'Verde', 10), (9, 'L', 'Verde', 10), (9, 'XL', 'Verde', 10), (9, 'XXL', 'Verde', 10),
(9, 'S', 'Negro', 10), (9, 'M', 'Negro', 10), (9, 'L', 'Negro', 10), (9, 'XL', 'Negro', 10), (9, 'XXL', 'Negro', 10),
(9, 'S', 'Azul', 10), (9, 'M', 'Azul', 10), (9, 'L', 'Azul', 10), (9, 'XL', 'Azul', 10), (9, 'XXL', 'Azul', 10);

-- FORTALEZA
(10, 'S', 'Negro', 10), (10, 'M', 'Negro', 10), (10, 'L', 'Negro', 10), (10, 'XL', 'Negro', 10), (10, 'XXL', 'Negro', 10),
(10, 'S', 'Gris', 10), (10, 'M', 'Gris', 10), (10, 'L', 'Gris', 10), (10, 'XL', 'Gris', 10), (10, 'XXL', 'Gris', 10),
(10, 'S', 'Azul', 10), (10, 'M', 'Azul', 10), (10, 'L', 'Azul', 10), (10, 'XL', 'Azul', 10), (10, 'XXL', 'Azul', 10);
