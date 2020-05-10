# Host: localhost  (Version: 5.7.26)
# Date: 2020-05-10 14:59:43
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "mi_vip"
#

DROP TABLE IF EXISTS `mi_vip`;
CREATE TABLE `mi_vip` (
  `Mi_Name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Mi_pass` varchar(16) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`Mi_Name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "mi_vip"
#

/*!40000 ALTER TABLE `mi_vip` DISABLE KEYS */;
INSERT INTO `mi_vip` VALUES ('chenpingan','123456'),('meiqihua','meiqihua'),('root','root'),('shabijianmin','111111'),('陈平安','asdsada');
/*!40000 ALTER TABLE `mi_vip` ENABLE KEYS */;
