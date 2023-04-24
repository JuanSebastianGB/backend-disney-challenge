import { Request, Response } from 'express';
import {
  createService,
  deleteService,
  getAllService,
  getOneService,
  updateService,
} from '../services/character.service';

const getAllItems = async (req: Request, res: Response) => {
  const allItems = await getAllService({ fields: ['image', 'name'] });
  res.status(200).json(allItems);
};
const getOneItem = async ({ params: { id } }: Request, res: Response) => {
  const item = await getOneService(Number(id));
  return res.status(200).json(item);
};
const createItem = async ({ body }: Request, res: Response) => {
  const newItem = await createService(body);
  return res.status(201).json(newItem);
};
const updateItem = async ({ params: { id }, body }: Request, res: Response) => {
  const updatedItem = await updateService(Number(id), body);
  return res.status(200).json(updatedItem);
};
const deleteItem = async ({ params: { id } }: Request, res: Response) => {
  const deletedItem = await deleteService(Number(id));
  return res.status(200).json(deletedItem);
};

export { getAllItems, getOneItem, createItem, updateItem, deleteItem };
