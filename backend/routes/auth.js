const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');
dotenv.config();

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

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    return res.status(400).json({ message: "Username or email already taken." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  await newUser.save();

  const token = jwt.sign({ username, email }, process.env.JWT_SECRET, { expiresIn: '2h' });

  res.status(201).json({ token, username, email });
});

// ✅ LOGIN ROUTE
router.post('/login', async (req, res) => {
  const { identifier, password } = req.body;

  console.log("Login request:", { identifier, password });

  const user = await User.findOne({
    $or: [{ username: identifier }, { email: identifier }]
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials." });
  }

  const token = jwt.sign({ username: user.username, email: user.email }, process.env.JWT_SECRET, { expiresIn: '2h' });

  res.status(200).json({ token, username: user.username, email: user.email });
});


// ✅ LOGOUT ROUTE
router.post("/logout", (req, res) => {
  const { refreshToken } = req.body;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(204).json({ message: "Logged out" });
});

module.exports = router;
