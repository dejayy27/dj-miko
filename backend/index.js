import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import storyRoutes from "./routes/storyRoutes.js";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/stories", storyRoutes);

// Routes
app.use("/api/auth", authRoutes);

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
