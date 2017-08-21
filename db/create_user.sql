INSERT INTO users (userid, username)
VALUES ($1, $2)
RETURNING *