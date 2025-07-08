import { Request, Response } from "express";
import { userService } from "../services/user.service.js";

export const profile = async (req: Request, res: Response) => {
  try {
    const user = await userService.profile((req as any).user.id);
    res.json({ user });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
