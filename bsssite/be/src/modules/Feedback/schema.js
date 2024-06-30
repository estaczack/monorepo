const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  solved: {
    type: Boolean,
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

module.exports = feedbackSchema
