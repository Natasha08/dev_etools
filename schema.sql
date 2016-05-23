

CREATE TABLE users(
  user_id     INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email      VARCHAR(50) UNIQUE NOT NULL,
  firstname  VARCHAR(50) NOT NULL,
  lastname   VARCHAR(50) NOT NULL,
  username  VARCHAR(50) NOT NULL,
  password  VARCHAR(2000) NOT NULL,
  user_salt VARCHAR(100) NOT NULL     
) ENGINE=InnoDB;

CREATE TABLE egym (
  workout_id   INT PRIMARY KEY AUTO_INCREMENT,
  date DATE NOT NULL,
  workout_day VARCHAR(50) NOT NULL,
  key_lift1 VARCHAR(50) NOT NULL,
  weight1 DECIMAL(6,2) NOT NULL,
  weight2 DECIMAL(4,2) NOT NULL,
  weight3 DECIMAL(5,2) NOT NULL,
  reps1 DECIMAL(5,2) NOT NULL,
  reps2 DECIMAL(7,2) NOT NULL,
  reps3 DECIMAL(7,2) NOT NULL,
  key_lift2 VARCHAR(50) NOT NULL,
  weight4 DECIMAL(6,2) NOT NULL,
  weight5 DECIMAL(4,2) NOT NULL,
  weight6 DECIMAL(5,2) NOT NULL,
  reps4 DECIMAL(5,2) NOT NULL,
  reps5 DECIMAL(7,2) NOT NULL,
  reps6 DECIMAL(7,2) NOT NULL,
  secondary_lift1 VARCHAR(50) NOT NULL,
  weight7 DECIMAL(5,2) NOT NULL,
  reps7 DECIMAL(5,2) NOT NULL,
  reps8 DECIMAL(7,2) NOT NULL,
  reps9 DECIMAL(7,2) NOT NULL,
  secondary_lift2 VARCHAR(50) NOT NULL,
  weight8 DECIMAL(5,2) NOT NULL,
  reps10  DECIMAL(5,2) NOT NULL,
  reps11  DECIMAL(7,2) NOT NULL,
  reps12  DECIMAL(7,2) NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY fk_users(user_id)
  REFERENCES users(user_id)
  ON UPDATE CASCADE
  ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE efridge (
  food_id     INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  food_name      VARCHAR(50) NOT NULL,
  brand          VARCHAR(50) NOT NULL,
  serving_size   VARCHAR(50) NOT NULL,
  total_calories DECIMAL(6,2) NOT NULL,
  fat_grams DECIMAL(4,2) NOT NULL,
  carbohydrate_grams  DECIMAL(5,2) NOT NULL,
  protein_grams  DECIMAL(5,2) NOT NULL,
  total_grams DECIMAL(7,2) NOT NULL,
  user_id	 INT NOT NULL,
  FOREIGN KEY fk_users(user_id)
  REFERENCES users(user_id)
  ON UPDATE CASCADE
  ON DELETE CASCADE
) ENGINE=InnoDB;


 -- //what are the properties of password with a passwordHash
 -- //what are the properties of the salt 
    -- MD5 generates a 128-bit hash value. You can use CHAR(32) or BINARY(16)
    -- SHA-1 generates a 160-bit hash value. You can use CHAR(40) or BINARY(20)
    -- SHA-224 generates a 224-bit hash value. You can use CHAR(56) or BINARY(28)
    -- SHA-256 generates a 256-bit hash value. You can use CHAR(64) or BINARY(32)
    -- SHA-384 generates a 384-bit hash value. You can use CHAR(96) or BINARY(48)
    -- SHA-512 generates a 512-bit hash value. You can use CHAR(128) or BINARY(64)
    -- BCrypt generates an implementation-dependent 448-bit hash value. You might need CHAR(56), CHAR(60), CHAR(76), BINARY(56) or BINARY(60)