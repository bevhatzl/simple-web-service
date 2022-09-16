import { Router } from 'express';
import { showsList } from '../controllers/showsList.js';

const router = Router();

router.post('/shows', showsList);

export default router;
