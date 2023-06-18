import express from 'express';
import { getAllGenres, getChannelsByGenreName } from '../controllers/genres.js';

const router = express.Router();

router.get('/', getAllGenres);
router.get('/:name', getChannelsByGenreName);

export default router;