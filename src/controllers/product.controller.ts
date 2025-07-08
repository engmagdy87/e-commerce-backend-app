import { Request, Response } from "express";
import { productService } from "../services/product.service.js";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.create(req.body);
    res.status(201).json({ product });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await productService.getAll();
    res.json({ products });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await productService.getById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ product });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.update(req.params.id, req.body);
    res.json({ product });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await productService.remove(req.params.id);
    res.status(204).send();
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
