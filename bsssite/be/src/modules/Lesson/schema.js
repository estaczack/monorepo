const mongoose = require('mongoose')

const lessonSchema = new mongoose.Schema({
  week: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  link: {
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

module.exports = lessonSchema
