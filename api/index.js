import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((error) => {
    console.log(error.message);
  });
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);