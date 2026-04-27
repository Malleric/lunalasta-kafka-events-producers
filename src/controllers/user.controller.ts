import { Request, Response } from "express";

export function meController(req: Request, res: Response): void {
  if (!req.user) {
    res.status(401).json({ message: "Non authentifié" });
    return;
  }

  res.status(200).json({
    message: "Profil courant",
    user: req.user
  });
}