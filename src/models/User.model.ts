import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import { User } from '../interfaces/User';

interface UserInstance extends Model<User> {}

const UserModel = sequelize.define<UserInstance>('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default UserModel;
