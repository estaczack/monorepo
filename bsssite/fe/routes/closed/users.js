const express = require('express')

const router = express.Router()

router.post('/updatepwd', async function (req, res) {
  const { id, newPwd, createdAt, updatedAt } = req.body
  let payload = {
    query:
      'mutation { updateUserPassword( id: "' +
      id +
      '", newPwd: "' +
      newPwd +
      '", createdAt: "' +
      createdAt +
      '", updatedAt: "' +
      updatedAt +
      '" ) { _id fullName email rg cpf roles status nota afirmativa } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => console.log(json))
  //    .then(json => json.data.updateUserPassword)
    let myResult = {
      ok: true,
      user: result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

router.get('/', async function (req, res) {
  let payload = {
    query: 'query { getUsers { _id fullName email rg cpf status } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data)
      .then(json => json.getUsers)
    let myResult = {}
    myResult.ok = true
    myResult.users = result
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

router.post('/pagou', async function (req, res) {
  const { id, name, status, ano, mes, valor, createdAt, updatedAt } = req.body
  let payload = {
    query:
      'mutation { registerPayment( data: { userId: "' +
      id +
      '", userName: "' +
      name +
      '", status: "' +
      status +
      '", ano: "' +
      ano +
      '", mes: "' +
      mes +
      '", valor: "' +
      valor +
      '", createdAt: "' +
      createdAt +
      '", updatedAt: "' +
      updatedAt +
      '" }) { _id userId userName status ano mes valor createdAt updatedAt } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data)
      .then(json => json.registerPayment)
    let myResult = {}
    myResult.ok = true
    myResult.payment = result
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

router.post('/find-by-email', async function (req, res) {
  const { email } = req.body
  let payload = {
    query:
      'query { findUserByEmail( email: "' +
      email +
      '" ) { _id fullName email status } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data)
      .then(json => json.findUserByEmail)
    let myResult = {}
    myResult.ok = true
    myResult.user = result
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
