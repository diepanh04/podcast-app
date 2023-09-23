import express from 'express';
import { authenticateUser, register, getFavouriteChannels, getFavouriteEpisodes } from '../controllers/users.js';
import authenticate from '../middleware/authenticate.js';

const router = express.Router();

router.post('/register', register);
router.get('/', authenticate, authenticateUser);
router.get('/:userId/favChannels', getFavouriteChannels);
router.get('/:userId/favEpisodes', getFavouriteEpisodes);

export default router;