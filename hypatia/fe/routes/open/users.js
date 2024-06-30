const express = require('express')

const router = express.Router()

router.post('/', async function (req, res) {
  const {
    firstName,
    lastName,
    email,
    password,
    roles,
    createdAt,
    updatedAt
  } = req.body
  let payload = {
    query:
      'mutation { createUser(data: { firstName: "' +
      firstName +
      '", lastName: "' +
      lastName +
      '", email: "' +
      email +
      '", password: "' +
      password +
      '", roles: "' +
      roles +
      '", createdAt: "' +
      createdAt +
      '", updatedAt: "' +
      updatedAt +
      '" }) { _id firstName lastName email roles createdAt updatedAt } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    }).then(res => res.json()).then(json => json.data.createUser)
    let myResult = {
      ok: true,
      user: result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
