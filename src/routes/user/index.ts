import { pool } from "@/database";

import express from "express";

const router = express.Router();

router.post(
  "/register",
  async (request: express.Request, response: express.Response) => {
    const body = request.body;

    let message = !body?.name
      ? "name is required"
      : !body.email
        ? "email is required"
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body?.email)
          ? "email must be a valid email address"
          : null;

    if (message) {
      return response.status(400).json({ message });
    }

    try {
      await pool.query(
        `
      INSERT INTO users(name, email, date_birth)
      VALUES ($1, $2, $3)
      RETURNING *
    `,
        [body?.name, body?.email, body?.date_birth],
      );

      return response.status(200).json({
        message: "user created successfully",
      });
    } catch (error: any) {
      if (error?.code === "23505") {
        return response.status(400).json({ message: error?.detail });
      }

      return response.status(500).json({ message: "Internal Server Error" });
    }
  },
);

router.post(
  "authenticate",
  async (request: express.Request, response: express.Response) => {
    try {
      const body = request.body;
      const user = await pool.query(
        `
      SELECT * FROM users WHERE email=$1 
      `,
        [request.body.email],
      );

      console.log(user, "user");
    } catch (error) {}
  },
);

export { router as userRouter };
