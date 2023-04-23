import { Sequelize } from 'sequelize';

const config = {
  DB_Name: process.env.DB_NAME || 'name',
  DB_USER: process.env.DB_USER || 'user',
  DB_PASS: process.env.DB_PASS || 'pass',
};
const sequelize = new Sequelize(
  config.DB_Name,
  config.DB_USER,
  config.DB_PASS,
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export { sequelize, testConnection };
