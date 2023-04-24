import Sequelize, { Model } from 'sequelize';
import { sequelize } from '../config/database';
import { Character } from '../interfaces/Character';

const { DataTypes } = Sequelize;
export interface CharacterInstance extends Model<Character> {}

const CharacterModel = sequelize.define<CharacterInstance>('characters', {
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
