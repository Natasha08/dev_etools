CREATE TABLE users (
  id     INT PRIMARY KEY AUTO_INCREMENT,
  email      VARCHAR(50) UNIQUE NOT NULL,
  firstname     VARCHAR(50) NOT NULL,
  lastname   VARCHAR(50) NOT NULL,
  username  VARCHAR(50) NOT NULL,
  password  VARCHAR(50) NOT NULL

);