import express from 'express';
import { addHeart, removeHeart } from '../controllers/episodes.js';

const router = express.Router();

router.post('/hearts', addHeart);
router.delete('/hearts/:episodeId/:userId', removeHeart);

export default router;
