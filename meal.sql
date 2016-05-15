CREATE TABLE emeal (
  id     INT PRIMARY KEY AUTO_INCREMENT,
  food_name      VARCHAR(50) FOREIGN KEY NOT NULL,
  brand          VARCHAR(50) NOT NULL,
  serving_size   VARCHAR(50) NOT NULL,
  total_calories DECIMAL(6,2) NOT NULL,
  fat_grams      DECIMAL(4,2) NOT NULL,
  carbohydrate_grams  DECIMAL(5,2) NOT NULL,
  protein_grams  DECIMAL(5,2) NOT NULL,
  total_grams    DECIMAL(7,2) NOT NULL

);

//inserted into the root database for my the machine\'s mysql on Friday. Use this database 
//to work with the app. If this works, move onto the digital ocean server. 