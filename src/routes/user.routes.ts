import { Router } from "express";
import { meController } from "../controllers/user.controller";
import { authenticateJwt } from "../middlewares/auth.middleware";

const router = Router();

router.get("/me", authenticateJwt, meController);

export default router;