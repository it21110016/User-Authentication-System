const express = require("express");
const { register, login, logout, refreshToken } = require("../controllers/authController");
const rateLimit = require("express-rate-limit");

const router = express.Router();

// To prevent brute-force attacks on login endpoint
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit login attempts per IP
    message: "Too many login attempts, please try again later.",
  });

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);

module.exports = router;
