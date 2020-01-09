DROP DATABASE IF EXISTS seed;
CREATE DATABASE seed;

\c seed;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR UNIQUE,
    password VARCHAR NOT NULL,
    created_at VARCHAR,
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
    -- image_id INT REFERENCES images (id),
    album_owner VARCHAR REFERENCES users (id)
);

INSERT INTO USERS (email, password, created_at, is_logged_in) VALUES
('Bob@email.com', '123456', null, false),
('Sam@email.com', '123456', null, false),
('Adam@email.com', '123456', null, false)
;