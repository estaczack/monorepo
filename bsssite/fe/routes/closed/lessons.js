const express = require('express')

const router = express.Router()

router.get('/', async function (req, res) {
  let payload = {
    query: `query { getLessons { _id week subject link createdAt updatedAt } }`
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data.getLessons)
    myResult = {
      res: true,
      lessons: result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

router.post('/', async function (req, res) {
  let { week, subject, link, createdAt, updatedAt } = req.body
  let payload = {
    query: `mutation { createLesson( week: "${week}", subject: "${subject}", link: "${link}", createdAt: "${createdAt}", updatedAt:"${updatedAt}") { _id week subject link createdAt updatedAt } }`
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data.createLesson)
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
