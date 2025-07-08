import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = Router();

// Public auth routes
router.post("/register", register);
router.post("/login", login);
router.post("/forget-password", login); // change login to forget-password

export default router;
