import express from 'express';
import bodyParser from 'body-parser';
import prisma from './prisma/prismaClient.js';
import cors from 'cors';

import genreRoutes from './routes/genres.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/genres', genreRoutes);

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});