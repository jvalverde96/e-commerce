import { Request, Response } from 'express';

export const getProducts = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Products' });
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
