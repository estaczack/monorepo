const express = require('express')

const router = express.Router()

router.post('/', async function (req, res) {
  const {
    fullName,
    email,
    rg,
    cpf,
    password,
    roles,
    status,
    nota,
    afirmativa,
    createdAt,
    updatedAt
  } = req.body
  let payload = {
    query:
      'mutation { createUser(data: { fullName: "' +
      fullName +
      '", email: "' +
      email +
      '", rg: "' +
      rg +
      '", cpf: "' +
      cpf +
      '", password: "' +
      password +
      '", roles: "' +
      roles +
      '", status: "' +
      status +
      '", nota: "' +
      nota +
      '", afirmativa: "' +
      afirmativa +
      '", createdAt: "' +
      createdAt +
      '", updatedAt: "' +
      updatedAt +
      '" }) { _id fullName email rg cpf roles status nota afirmativa createdAt updatedAt } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data.createUser)
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
