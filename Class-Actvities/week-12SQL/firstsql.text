DROP DATABASE IF EXISTS animals_db;

CREATE DATABASE animals_db;

USE animals_db;

CREATE TABLE people (
	id INTEGER NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
    has_pet BOOLEAN NOT NULL,
    pet_name VARCHAR(30),
    pet_age INTEGER(10),
    PRIMARY KEY (id)
	);

DROP DATABASE IF EXISTS favorite_db;
CREATE DATABASE favorite_db;

USE favorite_db;

CREATE TABLE favorite_songs (
	id INTEGER NOT NULL AUTO_INCREMENT,
    song VARCHAR(100) NOT NULL,
    artist VARCHAR(50),
    score INTEGER(10),
    vinyl BOOLEAN,
    PRIMARY KEY (id)
    );
    
CREATE TABLE favorite_foods (
	id INTEGER NOT NULL AUTO_INCREMENT,
	food VARCHAR(100) NOT NULL,
    score INTEGER(10),
    PRIMARY KEY (id)
	);
    
CREATE TABLE favorite_movies (
	id INTEGER NOT NULL AUTO_INCREMENT,
	title TEXT NOT NULL,
    five_times BOOLEAN,
	score INTEGER(10),
    PRIMARY KEY (id)
    );
    
INSERT INTO favorite_songs (song, artist, score, vinyl)
VALUES ("Echo", "Thomas Abban", 10, false);

INSERT INTO favorite_songs (song, artist, score, vinyl)
VALUES 
	("Fear", "Thomas Abban", 7, false),
	("Russalka, Russalka/Wild Rushes", "The Decemberists", 8, true),
    ("Starwatcher", "The Decemberists", 7, true),
    ("Faded", "P.O.S", 6, false);
    
SELECT * FROM favorite_songs;

INSERT INTO favorite_movies (title, five_times, score)
VALUES
	("The Lord of the Rings: The Fellowship of the Ring", true, 10),
    ("The Lord of the Rings: The Two Towers", true, 10),
    ("The Lord of the Rings: The Return of the King", true, 10),
    ("A Knight's Tale", true, 8);
    
INSERT INTO favorite_foods (food, score)
VALUES 
	("Pizza", 10),
    ("Fajitas", 8),
    ("Nachos", 9);
    
CREATE TABLE favorite_books (
	id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL,
    series BOOLEAN,
    number_in_series INTEGER(10),
    rating INTEGER(10),
    PRIMARY KEY (id)
    );
    
INSERT INTO favorite_books (title, author, rating)
VALUES
    ("The Buried Giant", "Kazuo Ishiguro", 10),
    ("American Gods", "Neil Gaiman", 10),
    ("Into English", "Martha Collins and Kevin Prufer", 9);
    
ALTER TABLE favorite_books
ADD genre VARCHAR(50);

ALTER TABLE favorite_books
ADD owned BOOLEAN;

UPDATE favorite_books
SET owned = true, genre = "Translation"
WHERE id = 3;

UPDATE favorite_books
SET owned = true, genre = "Adventure, Magical Realism, Fantasy"
WHERE id = 2;

UPDATE favorite_books
SET owned = true, genre = "Adventure, Magical Realism, Fantasy"
WHERE id = 1; 

CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages (
	id INTEGER NOT NULL AUTO_INCREMENT,
    language VARCHAR(30),
    rating INTEGER(10),
    mastered BOOLEAN,
    PRIMARY KEY (id)
    );
    
ALTER TABLE programming_languages
	MODIFY COLUMN mastered BOOLEAN DEFAULT true;
    
INSERT INTO programming_languages (language, rating)
VALUES
	("HTML5", 6),
    ("CSS", 4),
    ("JavaScript", 8),
    ("JQuery", 9),
    ("Node.js", 8);
    

    

    
