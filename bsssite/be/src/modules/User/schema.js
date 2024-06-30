const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  rg: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roles: {
    type: [String],
    required: true
  },
  status: {
    type: String,
    required: true
  },
  nota: {
    type: String,
    required: true
  },
  afirmativa: {
    type: String,
    required: true
  },
  jwt: {
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

module.exports = userSchema
