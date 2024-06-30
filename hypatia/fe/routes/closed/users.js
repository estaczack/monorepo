const express = require('express')

const router = express.Router()

router.post('/last-language', async function (req, res) {
  const { id, lastLanguageId, updatedAt } = req.body
  let payload = {
    query:
      'mutation { saveUserLastLanguage( id: "' +
      id +
      '", lastLanguageId: "' +
      lastLanguageId +
      '", updatedAt: "' +
      updatedAt +
      '" ) { _id firstName lastName email lastLanguage lastType lastGenre jwt } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data)
      .then(json => json.saveUserLastLanguage)
    let myResult = {}
    myResult.ok = true
    myResult.user = result
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

router.post('/last-type', async function (req, res) {
  const { id, lastTypeId, updatedAt } = req.body
  let payload = {
    query:
      'mutation { saveUserLastType( id: "' +
      id +
      '", lastTypeId: "' +
      lastTypeId +
      '", updatedAt: "' +
      updatedAt +
      '" ) { _id firstName lastName email lastLanguage lastType lastGenre jwt } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data)
      .then(json => json.saveUserLastType)
    let myResult = {}
    myResult.ok = true
    myResult.user = result
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

router.post('/last-genre', async function (req, res) {
  const { id, lastGenreId, updatedAt } = req.body
  let payload = {
    query:
      'mutation { saveUserLastGenre( id: "' +
      id +
      '", lastGenreId: "' +
      lastGenreId +
      '", updatedAt: "' +
      updatedAt +
      '" ) { _id firstName lastName email lastLanguage lastType lastGenre jwt } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data)
      .then(json => json.saveUserLastGenre)
    let myResult = {}
    myResult.ok = true
    myResult.user = result
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})
module.exports = router
