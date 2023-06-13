import express from 'express';
import bodyParser from 'body-parser';
import prisma from './prisma/prismaClient.js';

import channelRoutes from './routes/channels.js';

const app = express();

app.use('/channels', channelRoutes);

app.use(bodyParser.json());

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});