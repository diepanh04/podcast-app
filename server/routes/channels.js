import express from 'express';
import {
  addHeart,
  removeHeart,
  getEpisodesByChannel,
  loadChannelStatus,
} from '../controllers/channels.js';

const router = express.Router();

router.post('/hearts', addHeart);
router.delete('/hearts/:channelId/:userId', removeHeart);
router.get('/:channelName', getEpisodesByChannel);
router.post('/status', loadChannelStatus);

export default router;