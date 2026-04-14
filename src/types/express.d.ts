import { JwtPayloadData } from "../models/auth.model";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayloadData;
    }
  }
}

export {};