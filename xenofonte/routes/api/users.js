var express = require("express");
var router = express.Router();

var User = require("../../src/models/user");

router.get("/", async function (req, res, next) {
  res.json(await User.all());
});

router.post("/", async function (req, res, next) {
  res.json(await User.save(req.body));
});

router.post("/forgot", function (req, res, next) {
  // Code to check the email and send the reset link
  res.json({ "ok": true });
});

module.exports = router;

