
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

// const CONNECTION_URL = 'mongodb+srv://nasimd:2596nwsh@cluster0.ti98j.mongodb.net/social?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  //.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  //https://nasimfinal.herokuapp.com/
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: https://nasimfinal.herokuapp.com/`)))
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set('useFindAndModify', false);