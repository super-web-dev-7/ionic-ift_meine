/*
SQLyog Enterprise Trial - MySQL GUI v7.11 
MySQL - 5.5.5-10.4.13-MariaDB : Database - addiction
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`addiction` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `addiction`;

/*Table structure for table `code` */

DROP TABLE IF EXISTS `code`;

CREATE TABLE `code` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Code` varchar(50) NOT NULL,
  `backup_password` varchar(50) CHARACTER SET utf8 NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT 0,
  `Created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `type` enum('qr','alphanumeric') NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `code` */

insert  into `code`(`Id`,`Code`,`backup_password`,`isAdmin`,`Created_at`,`type`) values (1,'12345','11111',0,'2020-05-16 19:49:01','alphanumeric'),(2,'45678','22222',1,'2020-05-16 19:49:08','alphanumeric');

/*Table structure for table `daily_challenge` */

DROP TABLE IF EXISTS `daily_challenge`;

CREATE TABLE `daily_challenge` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Dispense_Id` int(11) NOT NULL,
  `day1` tinyint(1) DEFAULT NULL,
  `day2` tinyint(1) DEFAULT NULL,
  `day3` tinyint(1) DEFAULT NULL,
  `day4` tinyint(1) DEFAULT NULL,
  `day5` tinyint(1) DEFAULT NULL,
  `day6` tinyint(1) DEFAULT NULL,
  `day7` tinyint(1) DEFAULT NULL,
  `day8` tinyint(1) DEFAULT NULL,
  `day9` tinyint(1) DEFAULT NULL,
  `day10` tinyint(1) DEFAULT NULL,
  `day11` tinyint(1) DEFAULT NULL,
  `day12` tinyint(1) DEFAULT NULL,
  `day13` tinyint(1) DEFAULT NULL,
  `day14` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

/*Data for the table `daily_challenge` */

insert  into `daily_challenge`(`Id`,`Dispense_Id`,`day1`,`day2`,`day3`,`day4`,`day5`,`day6`,`day7`,`day8`,`day9`,`day10`,`day11`,`day12`,`day13`,`day14`) values (15,15,NULL,NULL,NULL,1,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(16,16,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,17,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `dispense` */

DROP TABLE IF EXISTS `dispense`;

CREATE TABLE `dispense` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) NOT NULL,
  `maximumValue` int(5) NOT NULL,
  `hopeValue` int(5) NOT NULL,
  `currentValue` int(5) NOT NULL,
  `deviceId` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `day_after` int(3) NOT NULL DEFAULT 0,
  `type` varchar(50) NOT NULL,
  `cancel_reason` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

/*Data for the table `dispense` */

insert  into `dispense`(`id`,`category`,`maximumValue`,`hopeValue`,`currentValue`,`deviceId`,`created_at`,`updated_at`,`status`,`day_after`,`type`,`cancel_reason`) values (15,'Alkohol',1,1,11,'7b874029-ca98-4c42-bee2-269d0a4a9800','2020-07-22 00:44:51','2020-07-22 00:44:51',0,4,'alkohol',NULL),(16,'eating meat',11,12,23,'7b874029-ca98-4c42-bee2-269d0a4a9800','2020-07-22 01:27:46','2020-07-22 01:27:46',0,1,'other',NULL),(17,'eating meat',11,12,22,'7b874029-ca98-4c42-bee2-269d0a4a9800','2020-07-22 01:30:26','2020-07-22 01:30:26',0,0,'other',NULL);

/*Table structure for table `reaction` */

DROP TABLE IF EXISTS `reaction`;

CREATE TABLE `reaction` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `dispense_id` int(10) NOT NULL,
  `reaction` int(5) DEFAULT NULL,
  `day1` int(5) DEFAULT NULL,
  `day2` int(5) DEFAULT NULL,
  `day3` int(5) DEFAULT NULL,
  `day4` int(5) DEFAULT NULL,
  `day5` int(5) DEFAULT NULL,
  `day6` int(5) DEFAULT NULL,
  `day7` int(5) DEFAULT NULL,
  `day8` int(5) DEFAULT NULL,
  `day9` int(5) DEFAULT NULL,
  `day10` int(5) DEFAULT NULL,
  `day11` int(5) DEFAULT NULL,
  `day12` int(5) DEFAULT NULL,
  `day13` int(5) DEFAULT NULL,
  `day14` int(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

/*Data for the table `reaction` */

insert  into `reaction`(`id`,`dispense_id`,`reaction`,`day1`,`day2`,`day3`,`day4`,`day5`,`day6`,`day7`,`day8`,`day9`,`day10`,`day11`,`day12`,`day13`,`day14`) values (5,15,5,NULL,NULL,NULL,3,NULL,5,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,16,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,17,5,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
