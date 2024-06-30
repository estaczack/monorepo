var express = require('express')

var router = express.Router()

router.get('/', async function (req, res, next) {
  let payload = {
    query: 'query { getAuthors { _id name } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data)
      .then(json => json.getAuthors)
    let myResult = {
      ok: true,
      authors: result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

router.post('/by-part', async function (req, res, next) {
  let { partOfName } = req.body
  let payload = {
    query: 'query { getAuthorsByPartOfName(partOfName: "' + partOfName + '") { _id name } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data)
      .then(json => json.getAuthorsByPartOfName)
    let myResult = {
      ok: true,
      authors: result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

router.post('/', async function (req, res, next) {
  const { name, createdAt, updatedAt } = req.body
  let payload = {
    query:
      'mutation { createAuthor( name: "' +
      name +
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
      .then(json => json.data.createAuthor)
    let myResult = {
      ok: true,
      author: result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
