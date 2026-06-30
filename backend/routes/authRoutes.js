const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {
  res.send("Register route is ready");
});

router.post("/login", (req, res) => {
  res.send("Login route is ready");
});

module.exports = router;
