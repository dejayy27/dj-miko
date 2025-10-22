import express from "express";
import Story from "../models/Story.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Middleware to verify JWT token
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
};

// CREATE story
router.post("/", auth, async (req, res) => {
  try {
    const { title, content } = req.body;
    const newStory = new Story({
      title,
      content,
      author: req.user.id,
    });
    await newStory.save();
    res.status(201).json(newStory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ all stories
router.get("/", async (req, res) => {
  try {
    const stories = await Story.find().populate("author", "fullName");
    res.json(stories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
