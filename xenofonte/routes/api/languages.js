var express = require("express");
var router = express.Router();

var Language = require("../../src/models/language");

router.get("/", async function (req, res, next) {
  res.json(await Language.all());
});

router.post("/", async function (req, res, next) {
  res.json(await Language.save(req.body));
});

module.exports = router;