var express = require('express')

var router = express.Router()

router.get('/', async function (req, res, next) {
  let payload = {
    query: 'query { getBookLanguages { _id name } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data)
      .then(json => json.getBookLanguages)
    let myResult = {
      ok: true,
      bookLanguages: result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

router.post('/', async function (req, res, next) {
  const { languageName, createdAt, updatedAt } = req.body
  let payload = {
    query:
      'mutation { createBookLanguage( name: "' +
      languageName +
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
    })
      .then(res => res.json())
      .then(json => json.data.createBookLanguage)
    let myResult = {
      ok: true,
      bookLanguage: result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
