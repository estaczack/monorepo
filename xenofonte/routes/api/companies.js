var express = require('express')
var router = express.Router()

var Company = require('../../src/models/company')

router.get('/', async function (req, res, next) {
  res.json(await Company.all())
})

router.post('/', async function (req, res, next) {
  res.json(await Company.save(req.body))
})

module.exports = router
