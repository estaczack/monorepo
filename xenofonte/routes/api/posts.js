const path = require("path");

var express = require("express");
var router = express.Router();

const multer = require("multer");

const multerConfig = require("../../config/multer1");

var Post = require("../../src/models/post");

router.get("/", async function (req, res, next) {
  let { q, l, t, g } = req.query;
  res.json(await Post.lastWithUsers(q, l, t, g));
});

router.post("/", multer(multerConfig).single("postimage"), async function (req, res, next) {
  res.json(await Post.save(req.body));
});

module.exports = router;