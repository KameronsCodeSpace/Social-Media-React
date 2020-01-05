DROP DATABASE IF EXISTS seed;
CREATE DATABASE seed;

\c seed;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    email VARCHAR UNIQUE,
    is_logged_in BOOLEAN
);

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    imageUrl VARCHAR
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    post_owner VARCHAR REFERENCES users (name),
    caption VARCHAR
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    image_id VARCHAR REFERENCES images (id)
);

INSERT INTO USERS VALUES
("Bob", "Bob@email.com", false),
("Sam", "Sam@email.com", false),
("Adam", "Adam@email.com", false)
;