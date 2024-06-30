const mongoose = require('mongoose')

const bookLanguageSchema = require('./schema')

const BookLanguage = mongoose.model('BookLanguage', bookLanguageSchema)

module.exports = BookLanguage
