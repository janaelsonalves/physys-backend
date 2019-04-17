import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to /users resource!");
});

export default router;
