import express from "express";
import mongoose from "mongoose";
import { MONGO_URL } from "../.env";
import userRouter from './routes/user.route.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api',userRouter)

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log(`Database connected`);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
