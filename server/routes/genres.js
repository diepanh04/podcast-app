import express from 'express';
import { getChannelsByGenreName } from '../controllers/genres.js';

const router = express.Router();

router.get('/:name', getChannelsByGenreName);

export default router;