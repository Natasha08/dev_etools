CREATE TABLE egym (
  id   INT PRIMARY KEY AUTO_INCREMENT,
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
  reps12  DECIMAL(7,2) NOT NULL
);

//inserted into the root database for my the machine\'s mysql on Friday. Use this database 
//to work with the app. If this works, move onto the digital ocean server. 

//want to use this with or without routes to show the database.
//also check textbook for creating an array out of an array.
//document.getElementById( "MyButton" ).onclick = DoSomething;