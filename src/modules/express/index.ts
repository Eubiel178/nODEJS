import express from "express";

import { connectToDataBase } from "@/database";

import { userRouter } from "@/routes";

const app = express();
const port = 4000;

// middleware
app.use(express.json());

// routes
app.use(userRouter);

export function startApp() {
  app.listen(port, async () => {
    console.log(`Rodando com Express na porta ${port}!`);

    await connectToDataBase();
  });
}
