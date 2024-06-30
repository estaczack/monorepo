var express = require("express");
var router = express.Router();

var Comment = require("../../src/models/comment");

router.get("/", async function (req, res, next) {
  res.json(await Comment.all());
});

router.post("/", async function (req, res, next) {
  res.json(await Comment.save(req.body));
});

module.exports = router;