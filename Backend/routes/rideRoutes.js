import express from 'express';
import { addRide, getUserRides } from '../controllers/rideController';

const router = express.Router();

router.post('/addRide', addRide);
router.get('/userRides/:userId', getUserRides);

export default router;