import { Request, Response } from "express";

import * as service from "./service";

export async function register(request: Request, response: Response) {
  const body = request.body;

  if (!body.name) {
    return response.status(400).json({
      message: "name is required",
    });
  }

  const user = await service.register(body);

  return response.status(201).json(user);
}
