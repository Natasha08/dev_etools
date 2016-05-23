CREATE TABLE users(
  user_id     INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email      VARCHAR(50) UNIQUE NOT NULL,
  firstname     VARCHAR(50) NOT NULL,
  lastname   VARCHAR(50) NOT NULL,
  username  VARCHAR(50) NOT NULL,
  password  CHAR(128) NOT NULL,
  user_salt CHAR(50) NOT NULL   	
) ENGINE=InnoDB;

 //what are the properties of password with a passwordHash
 //what are the properties of the salt 
    MD5 generates a 128-bit hash value. You can use CHAR(32) or BINARY(16)
    SHA-1 generates a 160-bit hash value. You can use CHAR(40) or BINARY(20)
    SHA-224 generates a 224-bit hash value. You can use CHAR(56) or BINARY(28)
    SHA-256 generates a 256-bit hash value. You can use CHAR(64) or BINARY(32)
    SHA-384 generates a 384-bit hash value. You can use CHAR(96) or BINARY(48)
    SHA-512 generates a 512-bit hash value. You can use CHAR(128) or BINARY(64)
    BCrypt generates an implementation-dependent 448-bit hash value. You might need CHAR(56), CHAR(60), CHAR(76), BINARY(56) or BINARY(60)






