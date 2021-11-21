import express from 'express';
import { addRide, getInProgressRide, getUserRides } from '../controllers/rideController';

const router = express.Router();

router.post('/addRide', addRide);
router.get('/userRides', getUserRides);
router.get('/inProgress', getInProgressRide);


export default router;