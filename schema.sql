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

CREATE TABLE users(
  user_id     INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email      VARCHAR(50) UNIQUE NOT NULL,
  firstname     VARCHAR(50) NOT NULL,
  lastname   VARCHAR(50) NOT NULL,
  username  VARCHAR(50) NOT NULL,
  password  VARCHAR(50) NOT NULL   	
   
) ENGINE=InnoDB;

CREATE TABLE efridge (
  food_id     INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  food_name      VARCHAR(50) NOT NULL,
  brand          VARCHAR(50) NOT NULL,
  serving_size   VARCHAR(50) NOT NULL,
  total_calories DECIMAL(6,2) NOT NULL,
  fat_grams      DECIMAL(4,2) NOT NULL,
  carbohydrate_grams  DECIMAL(5,2) NOT NULL,
  protein_grams  DECIMAL(5,2) NOT NULL,
  total_grams    DECIMAL(7,2) NOT NULL,
  user_id	INT NOT NULL,
  FOREIGN KEY fk_users(user_id)
  REFERENCES users(user_id)
  ON UPDATE CASCADE
  ON DELETE CASCADE
) ENGINE=InnoDB;


