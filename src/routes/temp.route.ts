import { Router } from 'express';
import CharacterModel from '../models/Character.model';
import MovieModel from '../models/Movie.model';

const router = Router();
router.get('/', async (req, res) => {
  const movies = await MovieModel.findAll({ include: [CharacterModel] });
  res.json({ movies });
});
router.post('/', async (req, res) => {
  const movie = await MovieModel.create({
    title: 'Star Wars: A New Hope',
    image_url: 'https://example.com/star-wars.jpg',
    release_date: new Date('1977-05-25'),
    rating: 8.7,
    genre: 'Sci-Fi',
  });

  const character = await CharacterModel.create({
    name: 'Luke Skywalker',
    image: 'https://example.com/luke-skywalker.jpg',
    age: 19,
    weight: 75.0,
    story: 'A farm boy from Tatooine who becomes a Jedi Knight.',
  });

  //@ts-ignore
  await movie.addCharacter(character);
  //@ts-ignore
  const characters = await movie.getCharacters();
  const anotherMovie = await MovieModel.findOne({
    where: { title: 'The Empire Strikes Back' },
  });
  //@ts-ignore
  await character.addMovie(anotherMovie);
  return res.json({ movie, characters });
});

router.get('/:id', async ({ params: { id } }, res) => {
  const movie = await MovieModel.findByPk(id);
  if (!movie) return res.status(404).json({ message: 'Movie not found' });
  //@ts-ignore
  const characters = await movie.getCharacters();
  const {
    dataValues: { image_url, title },
  } = movie;
  return res.json({ image_url, title, characters });
});

export default router;
