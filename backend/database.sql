DROP DATABASE IF EXISTS sunset;
CREATE DATABASE sunset;
USE sunset;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  last_name VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  creation_date DATE NOT NULL DEFAULT (CURRENT_DATE),
  UNIQUE (email)
);

INSERT INTO users (last_name, first_name, email, password)
VALUES ('Leporace', 'Amandine', 'leporace.amandine@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$aTMyVHpqOW81eFgzZDVNUA$VkEQbNB6Z42r2qwzd0WOIQ');