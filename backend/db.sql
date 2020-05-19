/*
SQLyog Community v12.18 (64 bit)
MySQL - 10.4.8-MariaDB : Database - addiction
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`addiction` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `addiction`;

/*Table structure for table `code` */

DROP TABLE IF EXISTS `code`;

CREATE TABLE `code` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Code` int(10) NOT NULL,
  `Created_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

/*Data for the table `code` */

insert  into `code`(`Id`,`Code`,`Created_at`) values 
(4,12345,'2020-05-16 19:49:01'),
(5,45678,'2020-05-16 19:49:08');

/*Table structure for table `dispense` */

DROP TABLE IF EXISTS `dispense`;

CREATE TABLE `dispense` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Topic` varchar(50) NOT NULL,
  `Intensity` int(5) NOT NULL,
  `DeviceId` varchar(100) NOT NULL,
  `Created_At` datetime NOT NULL,
  `Updated_At` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`Id`),
  KEY `Id` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `dispense` */

insert  into `dispense`(`Id`,`Topic`,`Intensity`,`DeviceId`,`Created_At`,`Updated_At`) values 
(4,'zigaretten',75,'79a3e7db-c2cd-9545-3585-320625348478','2020-05-19 17:08:08','2020-05-19 17:08:18');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
