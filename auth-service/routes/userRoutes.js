const express = require("express");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

const router = express.Router();

// Route for all authenticated users
router.get("/user-profile", protect, (req, res) => {
  res.json({ message: "Welcome to your profile", user: req.user });
});

// Admin-only route
router.get("/admin-dashboard", protect, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome to the Admin Dashboard", user: req.user });
});

module.exports = router;
