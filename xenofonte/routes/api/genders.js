var express = require("express");
var router = express.Router();

var Gender = require("../../src/models/gender");

router.get("/", async function (req, res, next) {
  res.json(await Gender.all());
});

router.post("/", async function (req, res, next) {
  res.json(await Gender.save(req.body));
});

module.exports = router;