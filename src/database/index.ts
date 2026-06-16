import { Pool } from "pg";

export const pool = new Pool({
  host: String(process.env.DB_HOST),
  port: Number(process.env.DB_PORT),
  user: String(process.env.DB_USER),
  password: String(process.env.DB_PASSWORD),
  database: String(process.env.DB_NAME),
});

async function connectToDataBase() {
  try {
    const result = await pool.query("SELECT NOW()");

    console.log(result, "Database connected successfully!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

export { connectToDataBase };
