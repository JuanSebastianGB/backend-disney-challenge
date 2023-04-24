import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import { Movie } from '../interfaces/Movie';
import CharacterModel from './Character.model';

interface MovieInstance extends Model<Movie>, Movie {}

const MovieModel = sequelize.define<MovieInstance>('movies', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  release_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

MovieModel.belongsToMany(CharacterModel, { through: 'character_movie' });
CharacterModel.belongsToMany(MovieModel, { through: 'character_movie' });
export default MovieModel;
