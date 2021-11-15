import express from "express";
import { addCar, getCarsByType } from "../controllers/carController";

const router = express.Router();

router.post('/add', addCar);
router.get('/getCarsByType', getCarsByType);

export default router;