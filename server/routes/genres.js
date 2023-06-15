import express from 'express';
import { getChannelsByGenre } from '../controllers/genres.js';

const router = express.Router();

router.get('/:id', getChannelsByGenre);

export default router;