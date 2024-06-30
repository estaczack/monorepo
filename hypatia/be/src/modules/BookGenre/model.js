const mongoose = require('mongoose')

const bookGenreSchema = require('./schema')

const BookGenre = mongoose.model('BookGenre', bookGenreSchema)

module.exports = BookGenre
