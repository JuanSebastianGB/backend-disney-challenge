import { Router } from 'express';
import {
  createItem,
  deleteItem,
  getAllItems,
  getOneItem,
  updateItem,
} from '../controllers/character.controller';

const router = Router();
router.get('/:id', getOneItem);
router.get('/', getAllItems);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;
