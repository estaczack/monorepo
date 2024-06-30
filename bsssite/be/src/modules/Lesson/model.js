const mongoose = require('mongoose')

const lessonSchema = require('./schema')

const Lesson = mongoose.model('Lesson', lessonSchema)

module.exports = Lesson
