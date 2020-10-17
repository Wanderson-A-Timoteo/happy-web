import express from 'express';
import 'express-async-errors';
import path from 'path';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';


const app = express();

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.use(errorHandler);


// Definindo porta localhost:3333
app.listen(3333);

