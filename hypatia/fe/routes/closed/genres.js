var express = require('express')

var router = express.Router()

// Middleware para verificar authentication and authorization

router.get('/', async function (req, res, next) {
  let payload = {
    query: 'query { getBookGenres { _id name } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data)
      .then(json => json.getBookGenres)
    let myResult = {
      ok: true,
      bookGenres: result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

router.post('/', async function (req, res, next) {
  const { genreName, typeId, createdAt, updatedAt } = req.body
  let payload = {
    query:
      'mutation { createBookGenre( name: "' +
      genreName +
      '", typeId: "' +
      typeId +
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
      .then(json => json.data.createBookGenre)
    let myResult = {
      ok: true,
      bookGenre: result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
