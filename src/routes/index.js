var express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to api!");
});

module.exports = router;
