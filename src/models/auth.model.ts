export interface LoginInput {
  email: string;
  password: string;
}

export interface JwtPayloadData {
  sub: string;
  email: string;
  role: "user" | "admin";
}