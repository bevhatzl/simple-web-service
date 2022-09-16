import { Router } from 'express';
import { showsList } from './default.js';

const router = Router();

router.post('/shows', showsList);

export default router;
