import { prisma } from "../config/postgres.js";

export const userService = {
  async profile(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true, createdAt: true },
    });
    return user;
  },
};
