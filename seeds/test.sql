DROP DATABASE IF EXISTS TWWebBasic;
CREATE DATABASE TWWebBasic DEFAULT CHARSET utf8 COLLATE utf8_general_ci;

USE TWWebBasic;

CREATE TABLE options(
  optionsId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  itemId INT NOT NULL,
  item VARCHAR(5) NOT NULL ,
  title VARCHAR(100) NOT NULL
);

CREATE TABLE topics(
   topicId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
   type VARCHAR(20) NOT NULL,
   name VARCHAR(20) NOT NULL,
   questions VARCHAR(100) NOT NULL,
   answer VARCHAR(100) NOT NULL,
   score INT NOT NULL
);



INSERT INTO options(itemId,item,title)
VALUES
(
   2,
   "",
   ""
);

INSERT INTO options(itemId,item,title)
VALUES
(
   2,
   "",
   ""
);

INSERT INTO options(itemId,item,title)
VALUES
(
   2,
   "",
   ""
);

INSERT INTO options(itemId,item,title)
VALUES
(
   3,
   "A",
   "(A)UML 就是软件工程"
);


INSERT INTO options(itemId,item,title)
VALUES
(
   3,
   "B",
   "(B)UML 参与到软件工程中软件开发过程的几个阶段"
);

INSERT INTO options(itemId,item,title)
VALUES
(
   3,
   "C",
   "(C)UML 与软件工程无关"
);

INSERT INTO options(itemId,item,title)
VALUES
(
   3,
   "D",
   "(D)UML 是软件工程的一部分"
);

INSERT INTO options(itemId,item,title)
VALUES
(
   4,
   "A",
   "(A)单继承"
);


INSERT INTO options(itemId,item,title)
VALUES
(
   4,
   "B",
   "(B)多继承"
);

INSERT INTO options(itemId,item,title)
VALUES
(
   4,
   "C",
   "(C)单继承和多继承都支持"
);

INSERT INTO options(itemId,item,title)
VALUES
(
   4,
   "D",
   "(D)继承和多继承都不支持"
);

INSERT INTO options(itemId,item,title)
VALUES
(
   5,
   "A",
   "(A)概述级"
);


INSERT INTO options(itemId,item,title)
VALUES
(
   5,
   "B",
   "(B)需求级"
);

INSERT INTO options(itemId,item,title)
VALUES
(
   5,
   "C",
   "(C)用户目标级"
);

INSERT INTO options(itemId,item,title)
VALUES
(
   5,
   "D",
   "(D)子功能级"
);

INSERT INTO options(itemId,item,title)
VALUES
(
   6,
   "A",
   "(A)名称(Name)"
);


INSERT INTO options(itemId,item,title)
VALUES
(
   6,
   "B",
   "(B)属性(Attribute)"
);

INSERT INTO options(itemId,item,title)
VALUES
(
   6,
   "C",
   "(C)操作(Operation)"
);

INSERT INTO options(itemId,item,title)
VALUES
(
   6,
   "D",
   "(D)方法(Function)"
);

INSERT INTO options(itemId,item,title)
VALUES
(
   7,
   "V",
   "V"
);

INSERT INTO options(itemId,item,title)
VALUES
(
   7,
   "X",
   "X"
);

INSERT INTO options(itemId,item,title)
VALUES
(
   8,
   "V",
   "V"
);

INSERT INTO options(itemId,item,title)
VALUES
(
   8,
   "X",
   "X"
);

INSERT INTO options(itemId,item,title)
VALUES
(
   9,
   "",
   ""
);


INSERT INTO topics(type,name,questions,answer,score)
VALUES(
   "fill_in_blanks",
   "fill1",
   "UML的中文全称是:",
   "统一建模语言",
   5
);

INSERT INTO topics(type,name,questions,answer,score)
VALUES
(
   "fill_in_blanks",
   "fill2",
   "对象最突出的特征是:",
   "封装性 继承性 多态性",
   5
);

INSERT INTO topics(type,name,questions,answer,score)
VALUES
(
   "single_choose",
   "choice1",
   "UML与软件工程的关系是:",
   "B",
   5
);

INSERT INTO topics(type,name,questions,answer,score)
VALUES
(
   "single_choose",
   "choice2",
   "Java 语言支持:",
   "A",
   5
);

INSERT INTO topics(type,name,questions,answer,score)
VALUES
(
   "multi_choose",
   "multi_choice1",
   "用例的粒度分为以下哪三种。",
   "A B D",
   10
);

INSERT INTO topics(type,name,questions,answer,score)
VALUES
(
   "multi_choose",
   "multi_choice2",
   "类图由以下哪三部分组成。",
   "A B C",
   10
);

INSERT INTO topics(type,name,questions,answer,score)
VALUES
(
   "judge",
   "judge1",
   "用例图只是用于和客户交流和沟通的,用于确定需求。",
   "X",
   10
);

INSERT INTO topics(type,name,questions,answer,score)
VALUES
(
   "judge",
   "judge2",
   "在状态图中,终止状态在一个状态图中允许有任意多个。",
   "V",
   10
);

INSERT INTO topics(type,name,questions,answer,score)
VALUES
(
   "shortAnswer",
   "shortAnswer",
   "简述什么是模型以及模型的表现形式?",
   "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。",
   10
);

INSERT INTO options(itemId,item,title)
VALUES
(
   1,
   "",
   ""
);


