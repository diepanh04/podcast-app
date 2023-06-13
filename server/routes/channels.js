import express from 'express';
import { getChannels, createChannel } from '../controllers/channels.js';

const router = express.Router();

router.post('/', createChannel);
router.get('/', getChannels); 

export default router;