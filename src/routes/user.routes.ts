import { Router } from "express";
import { profile } from "../controllers/user.controller.js";
import { auth as authMiddleware } from "../middlewares/auth.js";

const router = Router();

// Protected route for user profile
router.get("/profile", authMiddleware, profile);

export default router;
