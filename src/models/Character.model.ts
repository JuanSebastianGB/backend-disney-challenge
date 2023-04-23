import Sequelize, { Model } from 'sequelize';
import { sequelize } from '../config/database';
import { Character } from '../interfaces/Character';

const { DataTypes } = Sequelize;
interface CharacterInstance extends Model<Character> {}

const CharacterModel = sequelize.define<CharacterInstance>('characters', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  story: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default CharacterModel;
