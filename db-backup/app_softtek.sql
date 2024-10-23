-- --------------------------------------------------------
-- Host:                         database-1.c3eow26icfws.us-east-1.rds.amazonaws.com
-- Versión del servidor:         8.0.39 - Source distribution
-- SO del servidor:              Linux
-- HeidiSQL Versión:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para app_softtek
CREATE DATABASE IF NOT EXISTS `app_softtek` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `app_softtek`;

-- Volcando estructura para tabla app_softtek.clients
CREATE TABLE IF NOT EXISTS `clients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `lastname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `dni` int DEFAULT NULL,
  `age` int DEFAULT NULL,
  `linkedin` varchar(200) DEFAULT NULL,
  `estatus` char(1) DEFAULT 'E',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla app_softtek.clients: ~2 rows (aproximadamente)
INSERT INTO `clients` (`id`, `firstname`, `lastname`, `dni`, `age`, `linkedin`, `estatus`, `createdAt`, `updatedAt`) VALUES
	(1, 'David', 'Cama', 42618338, 40, 'linkedin.com', 'E', '2024-10-22 13:55:00', '2024-10-22 13:55:00'),
	(2, 'Juan', 'Osorio', 12344556, 40, 'linkedin.com', 'E', '2024-10-22 13:57:20', '2024-10-22 13:57:20'),
	(3, 'Jack', 'Diego', 33344556, 29, 'linkedin.com', 'E', '2024-10-22 14:02:33', '2024-10-22 14:02:33'),
	(4, 'Jack', 'Diego', 33344556, 29, 'linkedin.com', 'E', '2024-10-22 14:05:08', '2024-10-22 14:05:08'),
	(5, 'Jack', 'Diego', 33344556, 29, 'linkedin.com', 'E', '2024-10-22 14:08:22', '2024-10-22 14:08:22'),
	(6, 'Jack', 'Diego', 33344556, 29, 'linkedin.com', 'E', '2024-10-22 14:14:56', '2024-10-22 14:14:56'),
	(7, 'Jack', 'Diego', 33344556, 29, 'linkedin.com', 'E', '2024-10-22 14:18:46', '2024-10-22 14:18:46'),
	(8, 'Jack', 'Diego', 33344556, 29, 'linkedin.com', 'E', '2024-10-22 14:23:12', '2024-10-22 14:23:12'),
	(9, 'Jack', 'Diego', 33344556, 29, 'linkedin.com', 'E', '2024-10-22 14:25:47', '2024-10-22 14:25:47'),
	(10, 'Jack', 'Diego', 33344556, 29, 'linkedin.com', 'E', '2024-10-22 14:27:20', '2024-10-22 14:27:20'),
	(11, 'Jack', 'Diego', 33344556, 29, 'linkedin.com', 'E', '2024-10-22 14:28:11', '2024-10-22 14:28:11'),
	(12, 'Jack', 'Diego', 33344556, 29, 'linkedin.com', 'E', '2024-10-22 21:53:48', '2024-10-22 21:53:48'),
	(13, 'Jack', 'Diego', 33344556, 29, 'linkedin.com', 'E', '2024-10-23 03:12:18', '2024-10-23 03:12:18');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
