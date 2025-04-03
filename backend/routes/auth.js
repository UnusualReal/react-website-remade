const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const router = express.Router();

// 🔐 In-memory mock "database"
let users = [];
let refreshTokens = [];

// 🔐 Create JWT Tokens
const generateAccessToken = (user) => {
  return jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ username: user.username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

// ✅ SIGNUP ROUTE
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  // Check if username already exists
  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "Username already taken." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { username, password: hashedPassword };

  users.push(newUser);

  res.status(201).json({ message: "User created successfully!" });
});

// ✅ LOGIN ROUTE
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials!" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials!" });
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  refreshTokens.push(refreshToken);

  res.json({
    accessToken,
    refreshToken,
    user: {
      username: user.username, // ✅ Only send clean user data
    },
  });
});

// ✅ LOGOUT ROUTE
router.post("/logout", (req, res) => {
  const { refreshToken } = req.body;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(204).json({ message: "Logged out" });
});

module.exports = router;
