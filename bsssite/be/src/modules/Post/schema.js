const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  authorFullName: {
    type: String,
    required: true
  },
  languageId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false
  },
  typeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false
  },
  genreId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false
  },
  likes: {
    type: [String],
    required: true
  },
  externalLink: {
    type: String,
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

module.exports = postSchema
