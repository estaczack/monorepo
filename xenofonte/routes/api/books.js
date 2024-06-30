var express = require("express");
var router = express.Router();

var Book = require("../../src/models/book");

router.get("/", async function (req, res, next) {
  res.json(await Book.all());
});

router.post("/", async function (req, res, next) {
  res.json(await Book.save(req.body));
});

module.exports = router;