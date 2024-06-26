-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-06-2024 a las 19:40:42
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `formulario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `informacion`
--

CREATE TABLE `informacion` (
  `id` int(10) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `img` text DEFAULT NULL,
  `color` varchar(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `informacion`
--

INSERT INTO `informacion` (`id`, `nombre`, `descripcion`, `img`, `color`) VALUES
(1, 'Bob Esponja', 'Se caracteriza por su optimismo y actitud infantil.', 'https://upload.wikimedia.org/wikipedia/commons/7/7a/SpongeBob_SquarePants_character.png', '#FFFF00'),
(2, 'Calamardo', 'El personaje es retratado como de mal genio, impaciente, arrogante, atrevido, introvertido, condescendiente, amargado y misántropo, y desprecia las constantes travesuras disruptivas de sus dos vecinos.', 'https://i.pinimg.com/originals/69/df/4b/69df4b5e99013529dff05d1d6661ed0d.png', '#748597'),
(3, 'Arenita', 'Es una ardilla originaria de Texas y está orgullosa de serlo, aun siendo objeto de burlas por su condición de animal terrestre bajo el agua.', 'https://i.pinimg.com/originals/bc/4b/c3/bc4bc3e332e7044f611b7cf462790758.png', '#ADD8E6'),
(4, 'Patricio Estrella', 'Patricio, una estrella de mar rosa coral con sobrepeso, vive debajo de una roca en la ciudad submarina de Fondo de Bikini y es el mejor amigo de Bob Esponja. ', 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiObdazldqzOLsrQ_IKwnNWnqm6x3U3c3Zk4AbPmuKjR0xUgUzr4GGal8pAfohkY_uE6dexqlofw0dtUayIYJY3XXQyuZDT0OilDAPsI295RjmXWrCAFmoGMTuk4ZpaE60FJcyUf2sx9L-q/s1600/Patricio_1', '#FFC0CB');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `informacion`
--
ALTER TABLE `informacion`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `informacion`
--
ALTER TABLE `informacion`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
