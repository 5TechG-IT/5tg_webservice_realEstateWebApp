-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 08, 2020 at 06:21 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.1.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rfs_db_5techg`
--

-- --------------------------------------------------------

--
-- Table structure for table `admindata`
--

CREATE TABLE `admindata` (
  `logo` varchar(100) NOT NULL,
  `adminMobileNumber` varchar(10) NOT NULL,
  `adminEmailId` varchar(50) NOT NULL,
  `facebook` varchar(50) NOT NULL,
  `twitter` varchar(50) NOT NULL,
  `linkedIn` varchar(50) NOT NULL,
  `instagram` varchar(50) NOT NULL,
  `happyCustomers` varchar(50) NOT NULL,
  `propertiesInStock` varchar(50) NOT NULL,
  `cityRegistered` varchar(50) NOT NULL,
  `dealerBranches` varchar(50) NOT NULL,
  `adminAddress` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admindata`
--

INSERT INTO `admindata` (`logo`, `adminMobileNumber`, `adminEmailId`, `facebook`, `twitter`, `linkedIn`, `instagram`, `happyCustomers`, `propertiesInStock`, `cityRegistered`, `dealerBranches`, `adminAddress`) VALUES
('images/logo.jpeg', '7028828831', '5techgteam@gmail.com', '', '', '', '', '100', '100', '20', '20', 'Pune');

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `propertyId` bigint(255) NOT NULL,
  `customerId` bigint(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`propertyId`, `customerId`) VALUES
(1, 1),
(3, 1),
(2, 1),
(6, 1);

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedbackId` int(255) NOT NULL,
  `fullName` varchar(40) NOT NULL,
  `feedbackData` varchar(255) NOT NULL,
  `profileImage` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedbackId`, `fullName`, `feedbackData`, `profileImage`) VALUES
(1, 'Name', 'data', 'images/1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `properties`
--

CREATE TABLE `properties` (
  `propertyId` bigint(255) NOT NULL,
  `propertyImg` varchar(128) NOT NULL,
  `propertyName` varchar(40) NOT NULL,
  `propertyArea` varchar(128) NOT NULL,
  `propertyPrice` varchar(128) NOT NULL,
  `bedNumber` int(5) NOT NULL,
  `showerNumber` int(5) NOT NULL,
  `carParkings` int(5) NOT NULL,
  `topStatus` tinyint(1) NOT NULL,
  `propertyImg2` varchar(255) NOT NULL,
  `propertyImg3` varchar(255) NOT NULL,
  `propertyImg4` varchar(255) NOT NULL,
  `userId` bigint(255) NOT NULL,
  `propertyStatus` varchar(20) NOT NULL,
  `propertyDescription` varchar(255) NOT NULL,
  `waterFront` varchar(255) NOT NULL,
  `builtIn` varchar(255) NOT NULL,
  `propertyView` varchar(255) NOT NULL,
  `waterFrontDescription` varchar(255) NOT NULL,
  `features` varchar(255) NOT NULL,
  `propertyVideo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `properties`
--

INSERT INTO `properties` (`propertyId`, `propertyImg`, `propertyName`, `propertyArea`, `propertyPrice`, `bedNumber`, `showerNumber`, `carParkings`, `topStatus`, `propertyImg2`, `propertyImg3`, `propertyImg4`, `userId`, `propertyStatus`, `propertyDescription`, `waterFront`, `builtIn`, `propertyView`, `waterFrontDescription`, `features`, `propertyVideo`) VALUES
(1, 'images/properties/1590136660929.jpg', 'undefined', 'undefined', 'undefined', 0, 0, 1, 1, 'images/properties/1/property2.jpg', 'images/properties/1/property3.jpg', 'images/properties/1/property4.jpg', 1, 'undefined', 'undefined', '', '', '', '', '', ''),
(2, 'images/properties/1607430541680.jpg', 'undefined', 'undefined', 'undefined', 0, 0, 1, 0, 'images/properties/1/property2.jpg', 'images/properties/1/property3.jpg', 'images/properties/1/property4.jpg', 1, 'undefined', 'undefined', '', '', '', '', '', ''),
(3, 'images/properties/1607430541680.jpg', 'undefined', 'undefined', 'undefined', 0, 0, 1, 0, 'images/properties/1/property2.jpg', 'images/properties/1/property3.jpg', 'images/properties/1/property4.jpg', 1, 'undefined', 'undefined', '', '', '', '', '', ''),
(4, 'images/properties/1590136660929.jpg', 'name2', '10', '100', 10, 10, 1, 0, 'images/properties/1/property2.jpg', 'images/properties/1/property3.jpg', 'images/properties/1/property4.jpg', 1, 'Buy', 'desc', '', '', '', '', '', ''),
(5, 'images/properties/1607431708067.jpg', 'price', '1', '100', 1, 1, 1, 0, 'images/properties/1/property2.jpg', 'images/properties/1/property3.jpg', 'images/properties/1/property4.jpg', 1, 'Rent', 'des', '', '', '', '', '', ''),
(6, 'images/properties/1607431849793.jpg', 'price', '1000', '100', 100, 100, 1, 0, 'images/properties/1/property2.jpg', 'images/properties/1/property3.jpg', 'images/properties/1/property4.jpg', 1, 'Buy', 'des', '', '', '', '', '', ''),
(7, 'images/properties/1607444791849.jpg', 'name2', '100', '100', 1, 1, 1, 0, 'images/properties/1/property2.jpg', 'images/properties/1/property3.jpg', 'images/properties/1/property4.jpg', 1, 'Rent', 'desc', '', '', '', '', '', ''),
(8, 'images/properties/1607447935813.jpg', 'price', '10', '100', 10, 10, 1, 0, 'images/properties/1/property2.jpg', 'images/properties/1/property3.jpg', 'images/properties/1/property4.jpg', 1, 'Rent', 'des', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` bigint(255) NOT NULL,
  `userName` varchar(40) NOT NULL,
  `fullName` varchar(40) NOT NULL,
  `password` varchar(128) NOT NULL,
  `profileImage` varchar(255) NOT NULL,
  `mobileNumber` varchar(10) NOT NULL,
  `address` varchar(100) NOT NULL,
  `city` varchar(20) NOT NULL,
  `state` varchar(20) NOT NULL,
  `country` varchar(20) NOT NULL,
  `pinCode` varchar(10) NOT NULL,
  `userProerties` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `userName`, `fullName`, `password`, `profileImage`, `mobileNumber`, `address`, `city`, `state`, `country`, `pinCode`, `userProerties`) VALUES
(1, 'kulkarni.abhishek2407@gmail.com', 'Abhishek Ghanshyam Kulkarni', '$2b$10$GtXBZZE4ivjl636ed0oLqOmSBcOC/a3A1Sm6smZXHmNtzXY3B8/nW', 'images/properties/1607447099216.jpg', '0930788337', 'Kavathe Mahankal', 'Sangli', 'Maharashtra', 'India', '416405', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `enquiry`
--
ALTER TABLE `enquiry`
  ADD KEY `enquiry_fk0` (`propertyId`),
  ADD KEY `enquiry_fk1` (`customerId`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedbackId`);

--
-- Indexes for table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`propertyId`),
  ADD KEY `properties_fk0` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedbackId` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `properties`
--
ALTER TABLE `properties`
  MODIFY `propertyId` bigint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` bigint(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `enquiry`
--
ALTER TABLE `enquiry`
  ADD CONSTRAINT `enquiry_fk0` FOREIGN KEY (`propertyId`) REFERENCES `properties` (`propertyId`),
  ADD CONSTRAINT `enquiry_fk1` FOREIGN KEY (`customerId`) REFERENCES `users` (`userId`);

--
-- Constraints for table `properties`
--
ALTER TABLE `properties`
  ADD CONSTRAINT `properties_fk0` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
