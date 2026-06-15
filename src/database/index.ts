import { Pool } from "pg";

export const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "dev123",
  database: "estudos",
});

async function main() {
  const result = await pool.query("SELECT NOW()");
  console.log(result.rows);
}

main();
