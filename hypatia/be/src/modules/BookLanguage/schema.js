const mongoose = require('mongoose')

const bookLanguageSchema = new mongoose.Schema({
  name: {
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

module.exports = bookLanguageSchema
