import { Request, Response } from 'express';
import Perfume, { IPerfume } from '../models/product';

export const getProducts = async (req: Request, res: Response) => {
  const products: IPerfume[] = await Perfume.find();
  res.status(200).json(products);
};

export const createProduct = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Product created' });
};

export const updateProduct = async (req: Request, res: Response) => {
  res.status(200).json({ message: `Updated product ${req.params.id}` });
};

export const patchProduct = async (req: Request, res: Response) => {
  res.status(200).json({ message: `Patched product ${req.params.id}` });
};

export const deleteProduct = async (req: Request, res: Response) => {
  res.status(200).json({ message: `Deleted product ${req.params.id}` });
};
