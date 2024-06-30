const express = require('express')

const router = express.Router()

router.get('/', async function (req, res) {
  let payload = {
    query: `query { getFeedbacks { _id userId text createdAt updatedAt } }`
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data.getFeedbacks)
    myResult = {
      res: true,
      feedbacks: result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

router.post('/', async function (req, res) {
  let { userId, text, createdAt, updatedAt } = req.body
  let payload = {
    query: `mutation { createFeedback( userId: "${userId}", text: "${text}", createdAt: "${createdAt}", updatedAt:"${updatedAt}") { _id userId text createdAt updatedAt } }`
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data.createFeedback)
    myResult = {
      res: true,
      lesson: result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
