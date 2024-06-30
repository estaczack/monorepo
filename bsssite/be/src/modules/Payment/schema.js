const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  ano: {
    type: String,
    required: true
  },
  mes: {
    type: String,
    required: true
  },
  valor: {
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

module.exports = paymentSchema
