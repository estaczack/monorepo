var express = require("express");
var router = express.Router();

router.get("/homepage", function (req, res, next) {
  res.render("homepage");
});

router.get("/upload", function (req, res, next) {
  res.render("upload");
});

router.get("/search", function (req, res, next) {
  res.render("search");
});

router.get("/signout", function (req, res, next) {
  res.render("signout");
});

router.get("/donate", function (req, res, next) {
  res.render("udonate");
});

module.exports = router;
