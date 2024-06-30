const mongoose = require('mongoose')

const authorSchema = require('./schema')

const Author = mongoose.model('Author', authorSchema)

module.exports = Author
