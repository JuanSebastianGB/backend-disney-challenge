import cors from 'cors';
import 'dotenv/config';
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import { testConnection } from './config/database';
import router from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.get('/api', (req: Request, res: Response) =>
  res.json({ message: 'Welcome to Disney API' })
);
app.use('/api', router);
app.use(morgan('dev'));

testConnection();

export default app;
