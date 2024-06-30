var express = require("express");
var router = express.Router();

var RateLimit = require('express-rate-limit');
var limiter = RateLimit({
  windowMs: 1*60*1000,
  max: 30
});

router.use(limiter);

var User = require("../../src/models/user");

router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/about", function (req, res, next) {
  res.render("about");
});

router.get("/bss", function (req, res, next) {
  res.render("bss");
});

router.get("/donate", function (req, res, next) {
  res.render("donate");
});

router.get("/terms", function (req, res, next) {
  res.render("terms");
});

router.get("/signup", function (req, res, next) {
  res.render("signup");
});

router.get("/forgot", function (req, res, next) {
  res.render("forgot");
});

router.post("/authenticate", async function (req, res, next) {
  res.json(await User.authenticate(req.body));
});

module.exports = router;
