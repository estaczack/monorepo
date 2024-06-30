const mongoose = require('mongoose')

const feedbackSchema = require('./schema')

const Feedback = mongoose.model('Feedback', feedbackSchema)

module.exports = Feedback
