import express from "express";
import { addCar } from "../controllers/carController";

const router = express.Router();

router.post('/add', addCar);

export default router;