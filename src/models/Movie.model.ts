import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import { Movie } from '../interfaces/Movie';

interface MovieInstance extends Model<Movie> {}

const MovieModel = sequelize.define<MovieInstance>('movies', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  creation_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  qualification: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default MovieModel;
