import { Character } from '../interfaces/Character';
import CharacterModel from '../models/Character.model';

type requiredFieldsTypes = 'image' | 'name' | 'age' | 'weight' | 'story' | 'id';
const getAllService = async ({
  fields,
}: {
  fields?: requiredFieldsTypes[];
}) => {
  const selectedFields = fields ? fields : [];
  const allItems = await CharacterModel.findAll({ attributes: selectedFields });
  return allItems;
};
const getOneService = async (id: number) => {
  const item = await CharacterModel.findOne({
    where: { id },
    include: 'movies',
  });
  return item;
};
const createService = async (item: Character) => {
  const newItem = await CharacterModel.create(item);
  return newItem;
};
const updateService = async (id: number, item: Character) => {
  const updatedItem = await CharacterModel.update(item, { where: { id } });
  return updatedItem;
};
const deleteService = async (id: number) => {
  const deletedItem = await CharacterModel.destroy({ where: { id } });
  return deletedItem;
};

export {
  getAllService,
  getOneService,
  createService,
  updateService,
  deleteService,
};
