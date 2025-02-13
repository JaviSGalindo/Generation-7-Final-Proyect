CREATE TABLE productos(
	id_producto INT AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
	descripcion VARCHAR(150) NOT NULL,
	categoria VARCHAR(50) NOT NULL,
	imagen_producto VARCHAR(150) NOT NULL,
	stock INT NOT NULL,	
	precio DECIMAL(10,2) NOT NULL
);