const mongoose = require('mongoose')

const authorSchema = require('../Author/schema')

const bookSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
  },
  authors: {
    type: [authorSchema],
    required: true
  },
  edition: {
    type: String,
    required: true
  },
  editor: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  bookLanguage: {
    type: String,
    required: true
  },
  bookType: {
    type: String,
    required: true
  },
  bookGenre: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  },
  updatedAt: {
    type: String,
    required: true
  }
})

module.exports = bookSchema
