const mongoose = require('mongoose')

const bookTypeSchema = require("./schema")

const BookType = mongoose.model('BookType', bookTypeSchema)

module.exports = BookType
