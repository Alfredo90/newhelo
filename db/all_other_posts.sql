-- write every other post  except user id .
SELECT posts, username, posts.id FROM posts
INNER JOIN users ON posts.author_id = users.id