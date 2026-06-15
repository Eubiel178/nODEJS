import express from "express";

import { userRouter } from "@/routes/index";

const app = express();
const port = 4000;

// middleware
app.use(express.json());

// routes
app.use(userRouter);

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));
