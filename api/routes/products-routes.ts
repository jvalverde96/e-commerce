import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProducts,
  patchProduct,
  updateProduct,
} from '../controllers/products-controller';

const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.patch('/:id', patchProduct);
router.delete('/:id', deleteProduct);

export default router;
