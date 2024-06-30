const mongoose = require('mongoose')

const bookGenreSchema = require('../BookGenre/schema')

const bookTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  genres: {
    type: [bookGenreSchema],
    required: false
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

module.exports = bookTypeSchema
