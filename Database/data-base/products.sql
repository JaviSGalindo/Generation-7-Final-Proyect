CREATE TABLE productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(150) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    imagen_producto VARCHAR(150) NOT NULL,
    stock INT NOT NULL,    
    precio DECIMAL(10,2) NOT NULL
) ENGINE=InnoDB;


INSERT INTO productos (nombre, descripcion, categoria, imagen_producto, stock, precio) VALUES
('CONFIANZA', 'Ropa cómoda y elegante.', 'Ropa', 'imgProducts/confianza.jpg', 100, 165000),
('COQUETA', 'Diseño femenino y atractivo.', 'Ropa', 'imgProducts/coqueta.webp', 100, 172000),
('TENAZ', 'Resistente y versátil para cualquier ocasión.', 'Ropa', 'imgProducts/tenaz.webp', 100, 162000),
('VALIENTE', 'Moda con carácter y estilo.', 'Ropa', 'imgProducts/valiente.webp', 100, 199000),
('CREATIVA', 'Expresión de arte en cada prenda.', 'Ropa', 'imgProducts/creativa.webp', 100, 155000),
('CORAJE', 'Perfecta para quienes desafían límites.', 'Ropa', 'imgProducts/coraje.jpg', 100, 180000),
('SOÑADORA', 'Suavidad y confort para días relajados.', 'Ropa', 'imgProducts/sonadora.jpg', 100, 171000),
('COMPASIVA', 'Ropa con un toque de ternura y calidez.', 'Ropa', 'imgProducts/compasiva.jpg', 100, 147000),
('COMPROMETIDA', 'Diseño ideal para quienes van con todo.', 'Ropa', 'imgProducts/comprometida.jpg', 100, 175000),
('FORTALEZA', 'Prenda fuerte y duradera para cualquier reto.', 'Ropa', 'imgProducts/fortaleza.jpg', 100, 215000);

