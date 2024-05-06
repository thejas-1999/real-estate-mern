import express from "express";
import mongoose from "mongoose";
import { MONGO_URL } from "../.env";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/api", userRouter);
app.use("/api/auth", authRouter);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log(`Database connected`);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });
