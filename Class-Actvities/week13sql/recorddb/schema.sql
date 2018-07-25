DROP DATABASE IF EXISTS topSongsdb;

CREATE DATABASE topSongsdb;

USE topSongsdb;

CREATE TABLE top_songs (
	id INTEGER AUTO_INCREMENT NOT NULL,
    rank INTEGER(10),
    artist VARCHAR(30) NOT NULL,
    song VARCHAR(50) NOT NULL,
    year_released INTEGER(6) NOT NULL,
    raw_total DECIMAL(5,3) NOT NULL,
    raw_us DECIMAL (5,3) NOT NULL,
    raw_uk DECIMAL(5,3) NOT NULL,
    raw_eur DECIMAL (5,3) NOT NULL,
    raw_rest_of_world DECIMAL (5,3) NOT NULL,
    PRIMARY KEY (id)
    );
    