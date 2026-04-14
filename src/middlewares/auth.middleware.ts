import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { JwtPayloadData } from "../models/auth.model";

export function authenticateJwt(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: "Authorization header manquant" });
    return;
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    res.status(401).json({ message: "Format Authorization invalide" });
    return;
  }

  try {
    const decoded = jwt.verify(token, env.jwtSecret) as JwtPayloadData;

    // 👉 On attache l'utilisateur à la requête
    req.user = decoded;

    next();
  } catch {
    res.status(401).json({ message: "Token invalide ou expiré" });
  }
}