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

CREATE TABLE categories (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  creation_date DATE NOT NULL DEFAULT (CURRENT_DATE),
  UNIQUE (name)
);

CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  image_url VARCHAR(500) NULL,
  creation_date DATE NOT NULL DEFAULT (CURRENT_DATE),
  user_id INT NOT NULL,
  category_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO users (last_name, first_name, email, password)
VALUES ('Leporace', 'Amandine', 'leporace.amandine@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$aTMyVHpqOW81eFgzZDVNUA$VkEQbNB6Z42r2qwzd0WOIQ');

INSERT INTO categories (id, name)
VALUES 
(1, 'Plages'),
(2, 'Villes'),
(3, 'Montagnes')