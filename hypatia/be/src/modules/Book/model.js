const mongoose = require('mongoose')

const bookSchema = require('./schema')

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
