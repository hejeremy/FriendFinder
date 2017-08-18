DROP DATABASE IF EXISTS friend_finder_db;

CREATE DATABASE friend_finder_db;
USE friend_finder_db;

CREATE TABLE friends
(
	id int(10) NOT NULL AUTO_INCREMENT,
	name varchar(45) NOT NULL,
	photo varchar(255) NOT NULL,
	q1 int(8) NOT NULL,
	q2 int(8) NOT NULL,
	q3 int(8) NOT NULL,
	q4 int(8) NOT NULL,
	q5 int(8) NOT NULL,
	q6 int(8) NOT NULL,
	q7 int(8) NOT NULL,
	q8 int(8) NOT NULL,
	q9 int(8) NOT NULL,
	q10 int(8) NOT NULL,
	PRIMARY KEY (id)
);
