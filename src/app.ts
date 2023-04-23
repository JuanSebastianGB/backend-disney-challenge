import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { testConnection } from './config/database';
import router from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(morgan('dev'));
testConnection();
export default app;
