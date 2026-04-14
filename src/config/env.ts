import "dotenv/config";

export const env = {
  port: Number(process.env.PORT) || 3000,
  jwtSecret: process.env.JWT_SECRET || "local-dev-secret",
  host: process.env.HOST || "http://localhost",
};