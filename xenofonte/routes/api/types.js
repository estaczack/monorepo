var express = require("express");
var router = express.Router();

var Type = require("../../src/models/type");

router.get("/", async function (req, res, next) {
  res.json(await Type.all());
});

router.post("/", async function (req, res, next) {
  res.json(await Type.save(req.body));
});


module.exports = router;