import { pool } from "@/database";

export async function createUser(
  name: string,
  email: string,
  dateBirth?: string,
) {
  return pool.query(
    `
      INSERT INTO users(name,email,date_birth)
      VALUES($1,$2,$3)
      RETURNING *
    `,
    [name, email, dateBirth],
  );
}

export async function findUserByEmail(email: string) {
  return pool.query(
    `
      SELECT * FROM users
      WHERE email=$1
    `,
    [email],
  );
}
