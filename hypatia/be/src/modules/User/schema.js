const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: [String],
    required: true
  },
  jwt: {
    type: String,
    required: false
  },
  lastLanguage: {
    type: String,
    required: false
  },
  lastType: {
    type: String,
    required: false
  },
  lastGenre: {
    type: String,
    required: false
  },
  booksUploaded: {
    type: [String],
    required: false,
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

module.exports = userSchema
