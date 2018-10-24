SET NAMES UTF8;
DROP DATABASE IF EXISTS dhtcd;
CREATE DATABASE dhtcd CHARSET = utf8;
USE dhtcd;
#登录注册
CREATE TABLE users(
    uid INT PRIMARY KEY AUTO_INCREMENT,	#用户ID
    uname VARCHAR(16) NOT NULL,		#用户名称
    phone VARCHAR(11) NOT NULL,		#用户电话
    email VARCHAR(64) NOT NULL,		#用户邮箱
    upwd VARCHAR(32) NOT NULL,		#用户密码
    img_url VARCHAR(128) DEFAULT 'http://localhost:3000/image/head/uhead_no.svg'
					#用户头像和默认值
); 
#头像图片根据自动生成的id修改
INSERT INTO users VALUES(NULL,'小丁','15116614377','123456@qq.com','123456','http://localhost:3000/image/head/head1.jpg');
INSERT INTO users VALUES(NULL,'小钱','15122221661','223456@qq.com','123456',DEFAULT);
INSERT INTO users VALUES(NULL,'小孙','15133331661','233456@qq.com','123456',DEFAULT);
INSERT INTO users VALUES(NULL,'小李','15144441661','323456@qq.com','123456',DEFAULT);

#商品类型
CREATE TABLE shopType(
  tid INT PRIMARY KEY AUTO_INCREMENT,	#类型编号
  typeShop VARCHAR(16)			#类型名称
);
INSERT INTO shopType VALUES(101,'手办');
INSERT INTO shopType VALUES(102,'布娃娃');
INSERT INTO shopType VALUES(103,'手机');
INSERT INTO shopType VALUES(104,'游戏账户');
INSERT INTO shopType VALUES(105,'显卡');
INSERT INTO shopType VALUES(201,'电脑');
#商品信息
CREATE TABLE shopList(
  sid INT PRIMARY KEY AUTO_INCREMENT,   #商品编号
  tid INT NOT NULL,			#类型编号
  sname  VARCHAR(128) NOT NULL,		#商品名称
  info  VARCHAR(128),			#商品详情
  price  INT(128) NOT NULL,		#商品价格
  shopCar INT DEFAULT '0',		#运费
  staring VARCHAR(128) NOT NULL,	#邮件起点
  img_url VARCHAR(128)			#商品图片
);
INSERT INTO shopList VALUES(null,101,'七龙珠小悟空','商品的介绍...',12899,DEFAULT,'上海浦东',"http://127.0.0.1:3000/images/ludo-albrand-cadre.jpg");
INSERT INTO shopList VALUES(null,101,'七龙珠小悟空','商品的介绍...',15699,DEFAULT,'上海浦东',"http://127.0.0.1:3000/images/ludo-albrand-cadre.jpg");
INSERT INTO shopList VALUES(null,101,'七龙珠小悟空','商品的介绍...',52899,DEFAULT,'湖南长沙',"http://127.0.0.1:3000/images/ludo-albrand-cadre.jpg");
INSERT INTO shopList VALUES(null,101,'七龙珠小悟空','商品的介绍...',18899,1000,'上海浦东',"http://127.0.0.1:3000/images/ludo-albrand-cadre.jpg");
INSERT INTO shopList VALUES(null,101,'七龙珠小悟空','商品的介绍...',32899,1020,'上海浦东',"http://127.0.0.1:3000/images/ludo-albrand-cadre.jpg");
INSERT INTO shopList VALUES(null,101,'七龙珠小悟空','商品的介绍...',82899,510,'海南三亚',"http://127.0.0.1:3000/images/ludo-albrand-cadre.jpg");
INSERT INTO shopList VALUES(null,101,'七龙珠小悟空','商品的介绍...',32899,200,'上海浦东',"http://127.0.0.1:3000/images/ludo-albrand-cadre.jpg");