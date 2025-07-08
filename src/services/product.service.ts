import { prisma } from "../config/postgres.js";

export const productService = {
  async create(data: any) {
    return prisma.product.create({ data });
  },
  async getAll() {
    return prisma.product.findMany();
  },
  async getById(id: string) {
    return prisma.product.findUnique({ where: { id } });
  },
  async update(id: string, data: any) {
    return prisma.product.update({ where: { id }, data });
  },
  async remove(id: string) {
    return prisma.product.delete({ where: { id } });
  },
};
