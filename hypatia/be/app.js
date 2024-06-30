require('dotenv').config()

const mongoose = require('mongoose')

const server = require('./src/server')

// Connect to the MongoDB server
mongoose
  .connect('mongodb://172.17.0.2:27017/hypatia', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to the database')
    // You can start interacting with the database here
  })
  .catch(error => {
    console.error('Error connecting to the database', error)
  })

const port = process.env.PORT || 4000
server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
