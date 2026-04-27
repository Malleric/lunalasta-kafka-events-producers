import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { JwtPayloadData, LoginInput } from "../models/auth.model";

type FakeUser = {
    id: string;
    email: string;
    password: string;
    role: "user" | "admin";
};

const users: FakeUser[] = [
    {
        id: "1",
        email: "alice@example.com",
        password: "password123",
        role: "user"
    },
    {
        id: "2",
        email: "admin@example.com",
        password: "admin123",
        role: "admin"
    }
];

export function login(input: LoginInput): string | null {
  const user = users.find(
    (u) => u.email === input.email && u.password === input.password
  );

  if (!user) {
    return null;
  }

  const payload: JwtPayloadData = {
    sub: user.id,
    email: user.email,
    role: user.role
  };

  return jwt.sign(payload, env.jwtSecret, { expiresIn: "1h" });
}