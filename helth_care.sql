-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 06, 2020 at 02:15 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `helth_care`
--

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
CREATE TABLE IF NOT EXISTS `payment` (
  `PayID` int(10) NOT NULL AUTO_INCREMENT,
  `cardName` varchar(20) NOT NULL,
  `cardNo` int(20) NOT NULL,
  `zipCode` int(20) NOT NULL,
  `secCode` varchar(20) NOT NULL,
  `hospitalID` int(10) NOT NULL,
  `patientID` int(10) NOT NULL,
  `AID` int(10) NOT NULL,
  PRIMARY KEY (`PayID`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`PayID`, `cardName`, `cardNo`, `zipCode`, `secCode`, `hospitalID`, `patientID`, `AID`) VALUES
(1, 'HNB', 448691, 54749, 'Paid', 1, 2, 1),
(2, 'Peoples', 47896, 4789, 'Paid', 1, 2, 1),
(3, 'Commercial', 78965, 7894, 'Paid', 1, 1, 2),
(4, 'Sampath', 4564, 1475, 'Paid', 1, 1, 5),
(5, 'Sampath', 465465456, 22210, 'Paid', 2, 1, 2),
(7, 'HNB', 235435, 57357, 'No Paid', 3, 3, 3);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
