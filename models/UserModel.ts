
import { query } from '../config/db';

interface User {
  id: number;
  fname: string;
  lname: string;
  email: string;
  password: string;
}

export async function createUser(user: User) {
  const { fname, lname, email, password } = user;
  const result = await query(
    'INSERT INTO users (fname, lname, email, password) VALUES ($1, $2, $3, $4) RETURNING id, fname, lname, email',
    [fname, lname, email, password]
  );
  return result.rows[0];
}

export async function getUsers() {
  const result = await query('SELECT id, fname, lname, email FROM users ORDER BY id');
  return result.rows;
}

export async function updateUser(user: User) {
  const { id, fname, lname, email } = user;
  const result = await query(
    'UPDATE users SET fname = $1, lname = $2, email = $3 WHERE id = $4 RETURNING id, fname, lname, email',
    [fname, lname, email, id]
  );
  return result.rows[0];
}

export async function deleteUser(id: number) {
  const result = await query('DELETE FROM users WHERE id = $1 RETURNING id, fname, lname, email', [
    id,
  ]);
  return result.rows[0];
}
