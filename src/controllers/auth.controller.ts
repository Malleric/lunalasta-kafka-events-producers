import { Request, Response } from "express";
import { LoginInput } from "../models/auth.model";
import { login } from "../services/auth.service";

export function loginController(
  req: Request<unknown, unknown, LoginInput>,
  res: Response
): void {
  const { email, password } = req.body;

  const token = login({ email, password });

  if (!token) {
    res.status(401).json({ message: "Email ou mot de passe invalide" });
    return;
  }

  res.status(200).json({ accessToken: token });
}