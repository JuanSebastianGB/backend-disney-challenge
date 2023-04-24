import { Movie } from '../interfaces/Movie';
import MovieModel from '../models/Movie.model';

type requiredFieldsTypes = 'image_url' | 'title' | 'release_date' | 'id';
const getAllService = async ({
  fields,
}: {
  fields?: requiredFieldsTypes[];
}) => {
  const selectedFields = fields ? fields : [];
  const allItems = await MovieModel.findAll({ attributes: selectedFields });
  return allItems;
};
const getOneService = async (id: number) => {
  const item = await MovieModel.findOne({
    where: { id },
    include: ['characters'],
  });
  //@ts-ignore
  return item;
};
const createService = async (item: Movie) => {
  const newItem = await MovieModel.create(item);
  return newItem;
};
const updateService = async (id: number, item: Movie) => {
  const updatedItem = await MovieModel.update(item, { where: { id } });
  return updatedItem;
};
const deleteService = async (id: number) => {
  const deletedItem = await MovieModel.destroy({ where: { id } });
  return deletedItem;
};

export {
  getAllService,
  getOneService,
  createService,
  updateService,
  deleteService,
};
