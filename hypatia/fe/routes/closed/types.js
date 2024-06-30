var express = require('express')

var router = express.Router()

router.get('/', async function (req, res, next) {
  let payload = {
    query: 'query { getBookTypes { _id name genres { _id name } } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data)
      .then(json => json.getBookTypes)
    let myResult = {
      ok: true,
      bookTypes: result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

router.post('/', async function (req, res, next) {
  const { typeName, createdAt, updatedAt } = req.body
  let payload = {
    query:
      'mutation { createBookType( name: "' +
      typeName +
      '", createdAt: "' +
      createdAt +
      '", updatedAt: "' +
      updatedAt +
      '" ) { _id name } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    }).then(res => res.json()).then(json => json.data.createBookType)
    let myResult = {
      ok: true,
      bookType: result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
