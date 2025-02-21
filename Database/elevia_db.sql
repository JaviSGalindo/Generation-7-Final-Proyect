-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 14, 2025 at 09:04 PM
-- Server version: 9.1.0
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `elevia_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
CREATE TABLE IF NOT EXISTS `carrito` (
  `id_carrito` int NOT NULL AUTO_INCREMENT,
  `cantidad` int NOT NULL,
  `usuario_id` int NOT NULL,
  `variante_producto_id` int NOT NULL,
  PRIMARY KEY (`id_carrito`),
  KEY `fk_carrito_usuario` (`usuario_id`),
  KEY `fk_carrito_variante` (`variante_producto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `carrito`
--

INSERT INTO `carrito` (`id_carrito`, `cantidad`, `usuario_id`, `variante_producto_id`) VALUES
(1, 2, 1, 1),
(2, 1, 2, 2),
(3, 3, 3, 3),
(4, 1, 4, 4),
(5, 4, 5, 5),
(6, 2, 6, 6),
(7, 1, 7, 7),
(8, 3, 8, 8),
(9, 2, 9, 9),
(10, 1, 10, 10);

-- --------------------------------------------------------

--
-- Table structure for table `detalle_orden`
--

DROP TABLE IF EXISTS `detalle_orden`;
CREATE TABLE IF NOT EXISTS `detalle_orden` (
  `id_detalle` int NOT NULL AUTO_INCREMENT,
  `cantidad` int NOT NULL,
  `orden_id` int NOT NULL,
  `variante_producto_id` int NOT NULL,
  PRIMARY KEY (`id_detalle`),
  KEY `fk_detalle_orden` (`orden_id`),
  KEY `fk_detalle_variante` (`variante_producto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `detalle_orden`
--

INSERT INTO `detalle_orden` (`id_detalle`, `cantidad`, `orden_id`, `variante_producto_id`) VALUES
(1, 2, 1, 1),
(2, 1, 1, 2),
(3, 3, 2, 3),
(4, 1, 3, 4),
(5, 4, 4, 5),
(6, 2, 5, 6),
(7, 1, 6, 7),
(8, 3, 7, 8),
(9, 2, 8, 9),
(10, 1, 9, 10);

-- --------------------------------------------------------

--
-- Table structure for table `orden`
--

DROP TABLE IF EXISTS `orden`;
CREATE TABLE IF NOT EXISTS `orden` (
  `id_orden` int NOT NULL AUTO_INCREMENT,
  `total` decimal(10,2) NOT NULL,
  `estado` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `fecha_orden` date NOT NULL,
  `usuario_id` int NOT NULL,
  PRIMARY KEY (`id_orden`),
  KEY `fk_orden_usuario` (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `orden`
--

INSERT INTO `orden` (`id_orden`, `total`, `estado`, `fecha_orden`, `usuario_id`) VALUES
(1, 59.99, 'Pendiente', '2025-02-01', 1),
(2, 89.99, 'Completado', '2025-02-02', 2),
(3, 19.99, 'Cancelado', '2025-02-03', 3),
(4, 39.99, 'Pendiente', '2025-02-04', 4),
(5, 99.99, 'Enviado', '2025-02-05', 5),
(6, 14.99, 'Completado', '2025-02-06', 6),
(7, 49.99, 'Pendiente', '2025-02-07', 7),
(8, 79.99, 'Enviado', '2025-02-08', 8),
(9, 54.99, 'Pendiente', '2025-02-09', 9),
(10, 29.99, 'Completado', '2025-02-10', 10);

-- --------------------------------------------------------

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` varchar(150) COLLATE utf8mb4_spanish_ci NOT NULL,
  `categoria` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `imagen_producto` varchar(150) COLLATE utf8mb4_spanish_ci NOT NULL,
  `stock` int NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `producto`
--

INSERT INTO `producto` (`id_producto`, `nombre`, `descripcion`, `categoria`, `imagen_producto`, `stock`, `precio`) VALUES
(1, 'CONFIANZA', 'Ropa cómoda y elegante.', 'Ropa', 'imgProducts/confianza.jpg', 100, 165000.00),
(2, 'COQUETA', 'Diseño femenino y atractivo.', 'Ropa', 'imgProducts/coqueta.webp', 100, 172000.00),
(3, 'TENAZ', 'Resistente y versátil para cualquier ocasión.', 'Ropa', 'imgProducts/tenaz.webp', 100, 162000.00),
(4, 'VALIENTE', 'Moda con carácter y estilo.', 'Ropa', 'imgProducts/valiente.webp', 100, 199000.00),
(5, 'CREATIVA', 'Expresión de arte en cada prenda.', 'Ropa', 'imgProducts/creativa.webp', 100, 155000.00),
(6, 'CORAJE', 'Perfecta para quienes desafían límites.', 'Ropa', 'imgProducts/coraje.jpg', 100, 180000.00),
(7, 'SOÑADORA', 'Suavidad y confort para días relajados.', 'Ropa', 'imgProducts/sonadora.jpg', 100, 171000.00),
(8, 'COMPASIVA', 'Ropa con un toque de ternura y calidez.', 'Ropa', 'imgProducts/compasiva.jpg', 100, 147000.00),
(9, 'COMPROMETIDA', 'Diseño ideal para quienes van con todo.', 'Ropa', 'imgProducts/comprometida.jpg', 100, 175000.00),
(10, 'FORTALEZA', 'Prenda fuerte y duradera para cualquier reto.', 'Ropa', 'imgProducts/fortaleza.jpg', 100, 215000.00);

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellido` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `direccion` varchar(150) COLLATE utf8mb4_spanish_ci NOT NULL,
  `contraseña` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre`, `apellido`, `telefono`, `email`, `direccion`, `contraseña`) VALUES
(1, 'Juan', 'Pérez', '555-1234', 'juanperez@gmail.com', 'Calle Falsa 123', 'clave1'),
(2, 'María', 'Gómez', '555-5678', 'mariagomez@gmail.com', 'Av. Siempre Viva 742', 'clave2'),
(3, 'Carlos', 'López', '555-8765', 'carloslopez@gmail.com', 'Calle Central 45', 'clave3'),
(4, 'Ana', 'Martínez', '555-4321', 'anamartinez@gmail.com', 'Blvd. Reforma 100', 'clave4'),
(5, 'Pedro', 'Sánchez', '555-1111', 'pedrosanchez@gmail.com', 'Calle Luna 55', 'clave5'),
(6, 'Laura', 'Hernández', '555-2222', 'laurahernandez@gmail.com', 'Paseo del Sol 30', 'clave6'),
(7, 'Sofía', 'Torres', '555-3333', 'sofiatorres@gmail.com', 'Carrera 8 #20-15', 'clave7'),
(8, 'Diego', 'Ramírez', '555-4444', 'diegoramirez@gmail.com', 'Calle Norte 12', 'clave8'),
(9, 'Elena', 'Castro', '555-5555', 'elenacastro@gmail.com', 'Av. de los Álamos 90', 'clave9'),
(10, 'Luis', 'Morales', '555-6666', 'luismorales@gmail.com', 'Camino Verde 25', 'clave10');

-- --------------------------------------------------------

--
-- Table structure for table `variante_producto`
--

DROP TABLE IF EXISTS `variante_producto`;
CREATE TABLE IF NOT EXISTS `variante_producto` (
  `id_variante_producto` int NOT NULL AUTO_INCREMENT,
  `producto_id` int NOT NULL,
  `talla` char(5) COLLATE utf8mb4_spanish_ci NOT NULL,
  `color` varchar(50) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `stock_variante` int NOT NULL,
  PRIMARY KEY (`id_variante_producto`),
  KEY `fk_variante_producto` (`producto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Dumping data for table `variante_producto`
--

INSERT INTO `variante_producto` (`id_variante_producto`, `producto_id`, `talla`, `color`, `stock_variante`) VALUES
(1, 1, 'S', 'Negro', 10),
(2, 1, 'M', 'Negro', 10),
(3, 1, 'L', 'Negro', 10),
(4, 1, 'XL', 'Negro', 10),
(5, 1, 'XXL', 'Negro', 10),
(6, 1, 'S', 'Blanco', 10),
(7, 1, 'M', 'Blanco', 10),
(8, 1, 'L', 'Blanco', 10),
(9, 1, 'XL', 'Blanco', 10),
(10, 1, 'XXL', 'Blanco', 10),
(11, 1, 'S', 'Azul', 10),
(12, 1, 'M', 'Azul', 10),
(13, 1, 'L', 'Azul', 10),
(14, 1, 'XL', 'Azul', 10),
(15, 1, 'XXL', 'Azul', 10),
(16, 2, 'S', 'Rojo', 10),
(17, 2, 'M', 'Rojo', 10),
(18, 2, 'L', 'Rojo', 10),
(19, 2, 'XL', 'Rojo', 10),
(20, 2, 'XXL', 'Rojo', 10),
(21, 2, 'S', 'Rosa', 10),
(22, 2, 'M', 'Rosa', 10),
(23, 2, 'L', 'Rosa', 10),
(24, 2, 'XL', 'Rosa', 10),
(25, 2, 'XXL', 'Rosa', 10),
(26, 2, 'S', 'Blanco', 10),
(27, 2, 'M', 'Blanco', 10),
(28, 2, 'L', 'Blanco', 10),
(29, 2, 'XL', 'Blanco', 10),
(30, 2, 'XXL', 'Blanco', 10),
(31, 3, 'S', 'Negro', 10),
(32, 3, 'M', 'Negro', 10),
(33, 3, 'L', 'Negro', 10),
(34, 3, 'XL', 'Negro', 10),
(35, 3, 'XXL', 'Negro', 10),
(36, 3, 'S', 'Gris', 10),
(37, 3, 'M', 'Gris', 10),
(38, 3, 'L', 'Gris', 10),
(39, 3, 'XL', 'Gris', 10),
(40, 3, 'XXL', 'Gris', 10),
(41, 3, 'S', 'Azul', 10),
(42, 3, 'M', 'Azul', 10),
(43, 3, 'L', 'Azul', 10),
(44, 3, 'XL', 'Azul', 10),
(45, 3, 'XXL', 'Azul', 10),
(46, 4, 'S', 'Azul', 10),
(47, 4, 'M', 'Azul', 10),
(48, 4, 'L', 'Azul', 10),
(49, 4, 'XL', 'Azul', 10),
(50, 4, 'XXL', 'Azul', 10),
(51, 4, 'S', 'Verde', 10),
(52, 4, 'M', 'Verde', 10),
(53, 4, 'L', 'Verde', 10),
(54, 4, 'XL', 'Verde', 10),
(55, 4, 'XXL', 'Verde', 10),
(56, 4, 'S', 'Negro', 10),
(57, 4, 'M', 'Negro', 10),
(58, 4, 'L', 'Negro', 10),
(59, 4, 'XL', 'Negro', 10),
(60, 4, 'XXL', 'Negro', 10),
(61, 5, 'S', 'Amarillo', 10),
(62, 5, 'M', 'Amarillo', 10),
(63, 5, 'L', 'Amarillo', 10),
(64, 5, 'XL', 'Amarillo', 10),
(65, 5, 'XXL', 'Amarillo', 10),
(66, 5, 'S', 'Azul', 10),
(67, 5, 'M', 'Azul', 10),
(68, 5, 'L', 'Azul', 10),
(69, 5, 'XL', 'Azul', 10),
(70, 5, 'XXL', 'Azul', 10),
(71, 5, 'S', 'Blanco', 10),
(72, 5, 'M', 'Blanco', 10),
(73, 5, 'L', 'Blanco', 10),
(74, 5, 'XL', 'Blanco', 10),
(75, 5, 'XXL', 'Blanco', 10),
(76, 6, 'S', 'Rojo', 10),
(77, 6, 'M', 'Rojo', 10),
(78, 6, 'L', 'Rojo', 10),
(79, 6, 'XL', 'Rojo', 10),
(80, 6, 'XXL', 'Rojo', 10),
(81, 6, 'S', 'Negro', 10),
(82, 6, 'M', 'Negro', 10),
(83, 6, 'L', 'Negro', 10),
(84, 6, 'XL', 'Negro', 10),
(85, 6, 'XXL', 'Negro', 10),
(86, 6, 'S', 'Blanco', 10),
(87, 6, 'M', 'Blanco', 10),
(88, 6, 'L', 'Blanco', 10),
(89, 6, 'XL', 'Blanco', 10),
(90, 6, 'XXL', 'Blanco', 10),
(91, 7, 'S', 'Blanco', 10),
(92, 7, 'M', 'Blanco', 10),
(93, 7, 'L', 'Blanco', 10),
(94, 7, 'XL', 'Blanco', 10),
(95, 7, 'XXL', 'Blanco', 10),
(96, 7, 'S', 'Celeste', 10),
(97, 7, 'M', 'Celeste', 10),
(98, 7, 'L', 'Celeste', 10),
(99, 7, 'XL', 'Celeste', 10),
(100, 7, 'XXL', 'Celeste', 10),
(101, 7, 'S', 'Rosa', 10),
(102, 7, 'M', 'Rosa', 10),
(103, 7, 'L', 'Rosa', 10),
(104, 7, 'XL', 'Rosa', 10),
(105, 7, 'XXL', 'Rosa', 10),
(106, 8, 'S', 'Beige', 10),
(107, 8, 'M', 'Beige', 10),
(108, 8, 'L', 'Beige', 10),
(109, 8, 'XL', 'Beige', 10),
(110, 8, 'XXL', 'Beige', 10),
(111, 8, 'S', 'Blanco', 10),
(112, 8, 'M', 'Blanco', 10),
(113, 8, 'L', 'Blanco', 10),
(114, 8, 'XL', 'Blanco', 10),
(115, 8, 'XXL', 'Blanco', 10),
(116, 8, 'S', 'Gris', 10),
(117, 8, 'M', 'Gris', 10),
(118, 8, 'L', 'Gris', 10),
(119, 8, 'XL', 'Gris', 10),
(120, 8, 'XXL', 'Gris', 10),
(121, 9, 'S', 'Verde', 10),
(122, 9, 'M', 'Verde', 10),
(123, 9, 'L', 'Verde', 10),
(124, 9, 'XL', 'Verde', 10),
(125, 9, 'XXL', 'Verde', 10),
(126, 9, 'S', 'Negro', 10),
(127, 9, 'M', 'Negro', 10),
(128, 9, 'L', 'Negro', 10),
(129, 9, 'XL', 'Negro', 10),
(130, 9, 'XXL', 'Negro', 10),
(131, 9, 'S', 'Azul', 10),
(132, 9, 'M', 'Azul', 10),
(133, 9, 'L', 'Azul', 10),
(134, 9, 'XL', 'Azul', 10),
(135, 9, 'XXL', 'Azul', 10),
(136, 10, 'S', 'Negro', 10),
(137, 10, 'M', 'Negro', 10),
(138, 10, 'L', 'Negro', 10),
(139, 10, 'XL', 'Negro', 10),
(140, 10, 'XXL', 'Negro', 10),
(141, 10, 'S', 'Gris', 10),
(142, 10, 'M', 'Gris', 10),
(143, 10, 'L', 'Gris', 10),
(144, 10, 'XL', 'Gris', 10),
(145, 10, 'XXL', 'Gris', 10),
(146, 10, 'S', 'Azul', 10),
(147, 10, 'M', 'Azul', 10),
(148, 10, 'L', 'Azul', 10),
(149, 10, 'XL', 'Azul', 10),
(150, 10, 'XXL', 'Azul', 10);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `fk_carrito_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_carrito_variante` FOREIGN KEY (`variante_producto_id`) REFERENCES `variante_producto` (`id_variante_producto`) ON DELETE CASCADE;

--
-- Constraints for table `detalle_orden`
--
ALTER TABLE `detalle_orden`
  ADD CONSTRAINT `fk_detalle_orden` FOREIGN KEY (`orden_id`) REFERENCES `orden` (`id_orden`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_detalle_variante` FOREIGN KEY (`variante_producto_id`) REFERENCES `variante_producto` (`id_variante_producto`) ON DELETE CASCADE;

--
-- Constraints for table `orden`
--
ALTER TABLE `orden`
  ADD CONSTRAINT `fk_orden_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE;

--
-- Constraints for table `variante_producto`
--
ALTER TABLE `variante_producto`
  ADD CONSTRAINT `fk_variante_producto` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`id_producto`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
