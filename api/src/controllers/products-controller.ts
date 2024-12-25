import { Request, Response } from 'express';
import Perfume, { IPerfume } from '../models/product';

export const getProducts = async (request: Request, response: Response) => {
  const products: IPerfume[] = await Perfume.find();
  response.status(200).json(products);
};

export const createProduct = async (request: Request, response: Response) => {
  const { body } = request;
  const newProduct = await Perfume.create(body);
  response.status(200).json(newProduct);
};

export const updateProduct = async (request: Request, response: Response) => {
  const { id } = request.params;
  const product = await Perfume.findById(id);
  if (!product) {
    response.status(400);
    throw new Error(`Product with id: ${id} not found.`);
  }
  const { body } = request;
  const updatedProduct = await Perfume.findByIdAndUpdate(id, body, {
    returnDocument: 'after',
    runValidators: true,
  });
  response.status(200).json(updatedProduct);
};

export const deleteProduct = async (request: Request, response: Response) => {
  const { id } = request.params;
  const product = await Perfume.findByIdAndDelete(id);

  if (!product) {
    response.status(400);
    throw new Error(`Product with id: ${id} not found.`);
  }

  response
    .status(200)
    .json({ message: `Deleted product ${request.params.id}`, id });
};
