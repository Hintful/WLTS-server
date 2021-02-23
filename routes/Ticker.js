import express from 'express';
import { getTickers, newTicker } from '../controllers/Ticker.js';

const router = express.Router();

router.get('/', getTickers);
router.post('/', newTicker);

export default router;