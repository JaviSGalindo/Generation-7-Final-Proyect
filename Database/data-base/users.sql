CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    direccion VARCHAR(150) NOT NULL,
    contraseña VARCHAR(255) NOT NULL
) ENGINE=InnoDB;


INSERT INTO usuarios (nombre, apellido, telefono, email, direccion, contraseña) VALUES
('Juan', 'Pérez', '555-1234', 'juanperez@gmail.com', 'Calle Falsa 123', 'clave1'),
('María', 'Gómez', '555-5678', 'mariagomez@gmail.com', 'Av. Siempre Viva 742', 'clave2'),
('Carlos', 'López', '555-8765', 'carloslopez@gmail.com', 'Calle Central 45', 'clave3'),
('Ana', 'Martínez', '555-4321', 'anamartinez@gmail.com', 'Blvd. Reforma 100', 'clave4'),
('Pedro', 'Sánchez', '555-1111', 'pedrosanchez@gmail.com', 'Calle Luna 55', 'clave5'),
('Laura', 'Hernández', '555-2222', 'laurahernandez@gmail.com', 'Paseo del Sol 30', 'clave6'),
('Sofía', 'Torres', '555-3333', 'sofiatorres@gmail.com', 'Carrera 8 #20-15', 'clave7'),
('Diego', 'Ramírez', '555-4444', 'diegoramirez@gmail.com', 'Calle Norte 12', 'clave8'),
('Elena', 'Castro', '555-5555', 'elenacastro@gmail.com', 'Av. de los Álamos 90', 'clave9'),
('Luis', 'Morales', '555-6666', 'luismorales@gmail.com', 'Camino Verde 25', 'clave10');
