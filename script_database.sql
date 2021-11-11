CREATE DATABASE petresempire;

USE petresempire;

CREATE TABLE IF NOT EXISTS guests_table (

id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,

first_name VARCHAR(30) NOT NULL,

last_name VARCHAR(30) NOT NULL,

age INT(2) UNSIGNED NOT NULL,

money INT(100) UNSIGNED NOT NULL

);


INSERT INTO guests_table(first_name, last_name, age, money)
VALUES ('Beniamin', 'Cioban', '20', '30');

INSERT INTO guests_table(first_name, last_name, age, money)
VALUES ('Paul', 'Batin', '20', '5');

INSERT INTO guests_table(first_name, last_name, age, money)
VALUES ('Simona', 'Tivadar', '20', '40');