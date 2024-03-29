// require("dotenv").config();
import dotenv from 'dotenv'
import { createConnection } from 'mysql';
import express from 'express';

import userRouter from './routes/userRoutes.js';
import carRouter from  './routes/carRoutes.js';
import rideRouter from './routes/rideRoutes.js';

dotenv.config();
var app = express();
app.use(express.json());

import cors from 'cors';
const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));

var con = createConnection({
  host: "",
  port: 3306,
  user: "",
  password: "",
  database: ""
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

app.use('/user', userRouter);
app.use('/car', carRouter);
app.use('/ride', rideRouter);

export default con;
