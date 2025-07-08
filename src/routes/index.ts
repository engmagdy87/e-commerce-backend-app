import { Router } from "express";
import authPublicRoutes from "./auth.public.routes.js";
import authProtectedRoutes from "./auth.protected.routes.js";
import userRoutes from "./user.routes.js";
import productRoutes from "./product.routes.js";

const router = Router();

// Public routes
router.use("/", authPublicRoutes);

// Protected routes
router.use("/user", userRoutes);
router.use("/product", productRoutes);

// Add more routes here

export default router;
