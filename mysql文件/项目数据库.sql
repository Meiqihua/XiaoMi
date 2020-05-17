# Host: localhost  (Version: 5.7.26)
# Date: 2020-05-17 16:11:47
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `typeId` char(3) NOT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`),
  KEY `typeId` (`typeId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

/*!40000 ALTER TABLE `goodsinfo` DISABLE KEYS */;
INSERT INTO `goodsinfo` VALUES ('01001','小米10','001',3999,100,'骁龙865/1亿像素相机','./images/case_1.1.webp','钛银黑,冰海蓝','xiaomi','','「256GB赠价值199元立式风冷无线充，+1元得镜面视窗保护套」','对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配WiFi 6 / 超强VC液冷散热 / 4500mAh大电量 / 多功能NFC','4299','4699','./images/lbtBanner/01001banner-101.jpg,./images/lbtBanner/01001banner-201.jpg','./images/lbtBanner/01001banner-102.jpg,./images/lbtBanner/01001banner-202.jpg','./images/lbtBanner/01001banner-103.jpg,./images/lbtBanner/01001banner-203.jpg','./images/lbtBanner/01001banner-104.jpg,./images/lbtBanner/01001banner-204.jpg','./images/lbtBanner/01001banner-105.jpg,./images/lbtBanner/01001banner-205.jpg','./images/nav-phone2.webp'),('01002','小米10Pro','001',4999,100,'骁龙865 / 50倍变焦','./images/goods-phone02.jpg','珍珠白,星空蓝','xiaomi','','「赠价值199元立式风冷无线充」','对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储 / 全面适配WiFi 6 / 超强VC液冷散热 / 4500mAh大电量 / 多功能NFC','5499','5999','./images/lbtBanner/01002banner-101.jpg,./images/lbtBanner/01002banner-201.jpg','./images/lbtBanner/01002banner-102.jpg,./images/lbtBanner/01002banner-202.jpg','./images/lbtBanner/01002banner-103.jpg,./images/lbtBanner/01002banner-203.jpg','./images/lbtBanner/01002banner-104.jpg,./images/lbtBanner/01002banner-204.jpg','./images/lbtBanner/01002banner-105.jpg,./images/lbtBanner/01002banner-205.jpg','./images/nav-phone.webp'),('01003','小米10青春版5G','001',2099,100,'50倍潜望式变焦/轻薄5G手机','./images/goods-phone03.jpg','蓝莓薄荷,白桃乌龙','xiaomi','','「购机享3期免息，低至700元起/期；+1元得几何保护壳，赠善诊体检卡」','向往的生活同款/ 50倍潜望式超远变焦 / 双模5G / 骁龙765G处理器 / 三星AMOLED原色屏 / 180Hz采样率 / 4160mAh大电池 / 多功能NFC / 红外遥控器','2699','3099','./images/lbtBanner/01003banner-101.jpg,./images/lbtBanner/01003banner-201.jpg','./images/lbtBanner/01003banner-102.jpg,./images/lbtBanner/01003banner-202.jpg','./images/lbtBanner/01003banner-103.jpg,./images/lbtBanner/01003banner-203.jpg','./images/lbtBanner/01003banner-104.jpg,./images/lbtBanner/01003banner-204.jpg','./images/lbtBanner/01003banner-105.jpg,./images/lbtBanner/01003banner-205.jpg','./images/nav-phone3.png'),('01004','Redmi K30 Pro','001',2999,100,'双模5G，骁龙865， 弹出全面屏','./images/goods-phone04.jpg','黑色','redmi','','','','','','./images/lbtBanner/01004banner-101.jpg','','','','','./images/nav-rm01.jpg'),('01005','Redmi K30 Pro变焦版','001',3799,100,'双模5G，骁龙865，弹出全面屏','./images/goods-phone05.jpg','黑色','redmi','','','','','','./images/lbtBanner/01005banner-101.jpg','','','','','./images/nav-rm02.jpg'),('01006','Redmi K30','001',1599,100,'120Hz流速屏，全速热爱','./images/goods-phone06.jpg','黑色','redmi','1699','','','','','./images/lbtBanner/01006banner-101.jpg','','','','','./images/nav-rm03.jpg'),('01007','Redmi K30 5G','001',1999,100,'双模5G，120Hz流速屏','./images/goods-phone07.jpg','黑色','','','','','','','./images/lbtBanner/01007banner-101.jpg','','','','','./images/goods-phone07.jpg'),('01008','Redmi 8','001',699,100,'5000mAh超长续航','./images/goods-phone08.jpg','黑色','','799','','','','','./images/lbtBanner/01008banner-101.jpg','','','','','./images/goods-phone08.jpg'),('02001','Redmi Book','002',4499,10,'超高性价比','./images/last-show01.webp','银色','pc','','','','','','./images/lbtBanner/02001banner-101.jpg','','','','','./images/nav-pc01.jpg'),('02002','小米笔记本 Pro 15','002',5899,100,'高性能笔记本','./images/lbtBanner/02002banner-101.jpg','黑色','pc','','','','','','./images/lbtBanner/02002banner-101.jpg','','','','','./images/lbtBanner/02002banner-101.jpg'),('02003','Redmi Book 14','002',4499,100,'新一代Redmi Book','./images/lbtBanner/02003banner-101.jpg','黑色','pc','','','','','','./images/lbtBanner/02003banner-101.jpg','','','','','./images/nav-pc03.png'),('03001','Redmi红米电视70英寸','003',3099,100,'70英寸震撼巨屏，4K画质，细腻如真','./images/goods-jiadian01.jpg','白色','tv','3799','','','','','./images/goods-jiadian01.jpg','','','','','./images/nav-tv01.jpg'),('03002','小米全面屏电视E32C','003',699,100,'全面屏设计，人工智能系统','./images/goods-jiadian02.jpg','黑色','tv','899','','','','','./images/goods-jiadian02.jpg','','','','','./images/nav-tv02.jpg'),('03003','小米全面屏电视E55A','003',1799,100,'全面屏设计，人工智能语音','./images/goods-jiadian03.jpg','银色','tv','1999','','','','','./images/goods-jiadian03.jpg','','','','','./images/nav-tv03.jpg'),('03004','米家空调','003',1399,100,'出众静音，快速制冷热','./images/goods-jiadian04.jpg','黑色','','1799','','','','','./images/goods-jiadian04.jpg','','','','','./images/goods-jiadian04.jpg'),('03005','米家互联网洗烘- -体机 Pro 10kg','003',2999,10,'智能洗烘，省心省力','./images/goods-jiadian05.jpg','白色','','','','','','','./images/goods-jiadian05.jpg','','','','','./images/goods-jiadian05.jpg'),('03006','Redmi全自动波轮洗衣机1A','003',799,10,'一键操作， 父母都爱用','./images/goods-jiadian06.jpg','白色','jd','899','','','','','./images/goods-jiadian06.jpg','','','','','./images/nav-jd03.jpg'),('03008','小米体脂秤2','003',99,100,'轻松掌握身体脂肪率','./images/goods-jiadian08.jpg','白色','','','','','','','./images/goods-jiadian08.jpg','','','','','./images/goods-jiadian08.jpg'),('03009','全新Air 13.3 2019款','003',5699,100,'轻薄商务办公','./images/lbtBanner/02001banner-101.jpg','黑色','','','','','','','./images/lbtBanner/02001banner-101.jpg','','','','','./images/last-show01.webp'),('03010','米家互联网空调C1 (一级能效)','003',1999,100,'高级制冷，智能省电','./images/nav-jd01.png','白色','jd','','','','','','./images/nav-jd01.png','','','','','./images/nav-jd01.png'),('03011','米家互联网空调(一级能效)','003',1999,100,'高级制冷，智能省电','./images/nav-jd02.png','白色','jd','','','','','','./images/nav-jd02.png','','','','','./images/nav-jd02.png'),('04001','小米AloT路由器AX3600','004',599,100,'超高信号，WiFi6','./images/lbtBanner/07001banner-101.jpg','黑色','lyq','','','','','','./images/lbtBanner/07001banner-101.jpg','','','','','./images/nav-zn01.png'),('04002','Redmi路由器AC2100','004',169,100,'高信号，网速进一步加快','./images/lbtBanner/07002banner-101.jpg','白色','lyq','','','','','','./images/lbtBanner/07002banner-101.jpg','','','','','./images/nav-zn02.png'),('04003','小米路由器AC2100','004',229,100,'高信号，网速进一步加快','./images/lbtBanner/07003banner-101.jpg','白色','lyq','','','','','','./images/lbtBanner/07003banner-101.jpg','','','','','./images/nav-zn03.png'),('04004','小米米家智能摄像机云台版','004',199,100,'高清摄像','./images/lbtBanner/07004banner-101.jpg','白色','zn','','','','','','./images/lbtBanner/07004banner-101.jpg','','','','','./images/nav-zn04.jpg'),('04005','小米小爱老师','004',429,100,'智能语音助手','./images/lbtBanner/07005banner-101.jpg','白色','zn','','','','','','./images/lbtBanner/07005banner-101.jpg','','','','','./images/nav-zn05.jpg'),('04006','小米米家智能门锁','004',1299,10,'智能开关锁','./images/lbtBanner/07006banner-101.jpg','黑色','zn','','','','','','./images/lbtBanner/07006banner-101.jpg','','','','','./images/nav-zn06.jpg'),('05001','冰箱','005',2999,10,'家用智能冰箱','./images/goods-live01.jpg','白色','','','','','','','./images/lbtBanner/05001banner-101.jpg','','','','','./images/goods-live01.jpg'),('05002','立式空调','005',1999,10,'家用节能空调','./images/goods-live02.png','白色','','','','','','','./images/lbtBanner/05002banner-101.jpg','','','','','./images/goods-live02.png'),('05003','壁挂空调','005',1999,10,'家用挂式智能空调','./images/goods-live03.png','白色','','','','','','','./images/lbtBanner/05003banner-101.jpg','','','','','./images/goods-live03.png'),('06001','小米手表','006',699,100,'小米个性手表','./images/goods-dai01.png','黑色','','','','','','','./images/lbtBanner/06001banner-101.jpg','','','','','./images/goods-dai01.png'),('06002','小米手环','006',299,100,'小米多功能智能手环','./images/lbtBanner/06002banner-101.jpg','黑色','','','','','','','./images/lbtBanner/06002banner-101.jpg','','','','','./images/goods-dai02.png'),('06003','小米VR','006',2999,10,'高清VR','./images/goods-dai03.jpg','白色','','','','','','','./images/lbtBanner/06003banner-101.jpg','','','','','./images/goods-dai03.jpg'),('07001','移动电源','007',99,100,'小米充电宝','./images/goods-dy01.png','黑色','','','','','','','./images/lbtBanner/07007banner-101.jpg','','','','','./images/goods-dy01.png'),('07002','数据线','007',29,100,'小米高速传输数据线','./images/lbtBanner/07008banner-101.jpg','白色','','','','','','','./images/lbtBanner/07008banner-101.jpg','','','','','./images/goods-dy02.jpg'),('07003','充电头','007',49,100,'小米快充充电头','./images/goods-dy03.png','白色','','','','','','','./images/lbtBanner/07009banner-101.jpg','','','','','./images/goods-dy03.png'),('08001','洗手机','008',699,100,'小米洗手机','./images/goods-jk01.jpg','白色','','','','','','','./images/lbtBanner/08001banner-101.jpg','','','','','./images/goods-jk01.jpg'),('08002','修剪器','008',99,10,'小米修剪器','./images/goods-jk02.jpg','黑色','','','','','','','./images/lbtBanner/08002banner-101.jpg','','','','','./images/goods-jk01.jpg'),('08003','剃须刀','008',99,100,'小米剃须刀','./images/lbtBanner/08003banner-101.jpg','黑色','','','','','','','./images/lbtBanner/08003banner-101.jpg','','','','','./images/goods-jk03.jpg'),('09001','Redmi小爱触屏音箱 8','009',299,10,'高智能触屏音箱','./images/goods-ej01.png','白色','','','','','','','./images/lbtBanner/09001banner-101.jpg','','','','','./images/goods-ej01.png'),('09002','小爱音箱','009',199,100,'小米经典款音箱','./images/goods-ej02.png','白色','','','','','','','./images/lbtBanner/09002banner-101.jpg','','','','','./images/goods-ej02.png'),('09003','音箱Pro','009',299,10,'高音质音箱','./images/goods-ej03.png','黑色','','','','','','','./images/lbtBanner/09003banner-101.jpg','','','','','./images/goods-ej03.png'),('10001','小背包','010',59,100,'小米经典背包','./images/lbtBanner/10001banner-101.jpg','黄色','','','','','','','./images/lbtBanner/10001banner-101.jpg','','','','','./images/goods-back01.jpg'),('10002','双肩包','010',99,100,'更好更耐用','./images/goods-back02.jpg','黑色','','','','','','','./images/lbtBanner/10002banner-101.jpg','','','','','./images/goods-back02.jpg'),('10003','旅行箱','010',299,10,'出差旅行必备，大容量，更结实','./images/goods-back03.jpg','黑色','','','','','','','./images/lbtBanner/10003banner-101.jpg','','','','','./images/goods-back03.jpg');
/*!40000 ALTER TABLE `goodsinfo` ENABLE KEYS */;

#
# Structure for table "goodstype"
#

DROP TABLE IF EXISTS `goodstype`;
CREATE TABLE `goodstype` (
  `typeid` char(3) NOT NULL,
  `goodstype` varchar(20) NOT NULL,
  PRIMARY KEY (`typeid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodstype"
#

/*!40000 ALTER TABLE `goodstype` DISABLE KEYS */;
INSERT INTO `goodstype` VALUES ('001','手机'),('002','电脑'),('003','家电'),('004','智能'),('005','生活用品'),('006','穿戴'),('007','电源'),('008','健康'),('009','耳机 音箱'),('010','箱包');
/*!40000 ALTER TABLE `goodstype` ENABLE KEYS */;

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
INSERT INTO `mi_vip` VALUES ('chenhongyi','meiqihua'),('chenpingan','123456'),('goodstest','aaaaaa'),('meiqihua','meiqihua'),('root','root'),('shabijianmin','111111'),('陈平安','asdsada');
/*!40000 ALTER TABLE `mi_vip` ENABLE KEYS */;

#
# Structure for table "shoppingcart"
#

DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart` (
  `vipName` varchar(10) DEFAULT NULL,
  `goodsId` int(10) DEFAULT NULL,
  `goodsCount` varchar(80) DEFAULT NULL,
  `goodsNum` int(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
INSERT INTO `shoppingcart` VALUES ('root',1001,'小米10&nbsp;8+256GB&nbsp;冰海蓝&nbsp;,3999',1),('root',8003,'剃须刀&nbsp;黑色&nbsp;,99',2),('chenhongyi',6002,'小米手环&nbsp;黑色&nbsp;,299',1),('chenhongyi',1002,'小米10Pro&nbsp;12+512GB&nbsp;珍珠白&nbsp;,5999',3);
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;

#
# Structure for table "vip"
#

DROP TABLE IF EXISTS `vip`;
CREATE TABLE `vip` (
  `username` varchar(20) NOT NULL,
  `userpass` varchar(16) NOT NULL,
  `sex` char(2) DEFAULT '女',
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "vip"
#

/*!40000 ALTER TABLE `vip` DISABLE KEYS */;
/*!40000 ALTER TABLE `vip` ENABLE KEYS */;
