var fs = require('fs')
var express = require('express')
const { userInfo } = require('os')

var router = express.Router()

// Middleware para verificar authentication and authorization

router.get('/', function (req, res, next) {
  console.log('Rota /')
  let loadedFile = fs.readFile('../dist/index.js')
  console.log(loadedFile)
  res.download(loadedFile)
})

module.exports = router