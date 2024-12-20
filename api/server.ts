import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/products-routes';
import { errorHandler } from './middlewares/error-handler';
import { connectDatabase } from './config/database';

dotenv.config();

connectDatabase();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', routes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
