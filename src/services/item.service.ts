import { Character } from '../interfaces/Character';
import CharacterModel from '../models/Character.model';

const getAllService = async () => {
  const allItems = await CharacterModel.findAll();
  return allItems;
};
const getOneService = async (id: number) => {
  const item = await CharacterModel.findOne({ where: { id } });
  return item;
};
//@ts-ignore
const createService = async (item) => {
  const newItem = await CharacterModel.create(item);
  return newItem;
};
const updateService = async (id: number, item: Character) => {
  const updatedItem = await CharacterModel.update(item, { where: { id } });
  return updatedItem;
};
const deleteService = async (id: number) => {
  const deletedItem = await CharacterModel.destroy({ where: { id } });
};

export {
  getAllService,
  getOneService,
  createService,
  updateService,
  deleteService,
};
