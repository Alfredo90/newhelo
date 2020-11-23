CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
    
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author_id INT REFERENCES users (id)
);
-- VALUES
-- ('title1', 'img1', 'content1', null)

ALTER TABLE users
ALTER password
TYPE TEXT;

SELECT * FROM users
JOIN posts ON users.id = posts.author_id;
