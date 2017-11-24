drop database if exists notesApiIonic;
create database notesApiIonic;
use notesApiIonic;

create table notes (
	id INT not null primary key auto_increment,
    title VARCHAR(255),
    content TEXT,
    datepost DATETIME,
	user_id int not null
)engine=innodb;

create table users (
	id INT not null primary key auto_increment,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    email varchar(255),
	password varchar(255)
)engine=innodb;

alter table notes
ADD FOREIGN KEY (user_id) REFERENCES users(id);