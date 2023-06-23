import express from 'express';
import { authenticateUser, register } from '../controllers/users.js';
import authenticate from '../middleware/authenticate.js';

const router = express.Router();

router.post('/register', register);
router.get('/', authenticate, authenticateUser);

export default router;