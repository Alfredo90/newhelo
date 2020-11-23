SELECT * FROM users
JOIN posts ON users.id = posts.author_id;
SELECT p.*, u.username, u.profile_pic FROM posts p
JOIN users u ON u.id = p.author_id
WHERE CASE WHEN $1 = false THEN u.id != $2 ELSE true END 
AND LOWER(p.title) LIKE LOWER('%' || $3 || '%');