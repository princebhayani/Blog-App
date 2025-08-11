import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Debug log to verify dotenv loaded
// console.log('Loaded MONGO_URI:', process.env.MONGO_URI);

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import postRoutes from './routes/post.routes.js';
import commentRoutes from './routes/comment.routes.js';
import cookieParser from 'cookie-parser';
import path from 'path';

const mongoUri = process.env.MONGO_URI;
if (!mongoUri || typeof mongoUri !== 'string') {
  console.error('MongoDB connection error: MONGO_URI is not defined or not a string. Check your .env file.');
  process.exit(1);
}

mongoose
  .connect(
    mongoUri,
    {
      serverSelectionTimeoutMS: 30000, // Increase timeout to 30s
      socketTimeoutMS: 30000,
      // useNewUrlParser: true, // deprecated, remove
      // useUnifiedTopology: true, // deprecated, remove
    }
  )
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process if unable to connect
  });
  
const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000!!");
});

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  });
});