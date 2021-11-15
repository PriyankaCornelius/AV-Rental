import express from "express";
import { addCar, getCarsByOwner, getCarsByType } from "../controllers/carController";

const router = express.Router();

router.post('/add', addCar);
router.get('/getCarsByType', getCarsByType);
router.get('/getCarsByOwner', getCarsByOwner);

export default router;