DROP DATABASE IF EXISTS seed;
CREATE DATABASE seed;

\c seed;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR UNIQUE,
    is_logged_in BOOLEAN
);

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    imageUrl VARCHAR
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    post_owner INT REFERENCES users (id),
    caption VARCHAR
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    image_id INT REFERENCES images (id)
);

INSERT INTO USERS (email, is_logged_in) VALUES
('Bob@email.com', false),
('Sam@email.com', false),
('Adam@email.com', false)
;