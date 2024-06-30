const express = require('express')

const router = express.Router()

router.post('/', async function (req, res) {
  const {
    user,
    authorsList,
    title,
    subtitle,
    bookLanguage,
    bookType,
    bookGenre,
    edition,
    editor,
    year,
    location,
    isbn,
    createdAt,
    updatedAt
  } = req.body
  let payload = {
    query:
      'mutation { createBook(data: { user: "' +
      user +
      '", title: "' +
      title +
      '", subtitle: "' +
      subtitle +
      '", authorsList: "' +
      authorsList +
      '", bookLanguage: "' +
      bookLanguage +
      '", bookType: "' +
      bookType +
      '", bookGenre: "' +
      bookGenre +
      '", edition: "' +
      edition +
      '", editor: "' +
      editor +
      '", year: "' +
      year +
      '", location: "' +
      location +
      '", isbn: "' +
      isbn +
      '", createdAt: "' +
      createdAt +
      '", updatedAt: "' +
      updatedAt +
      '" }) { _id userId authors { _id name } title subtitle bookLanguage bookType bookGenre edition editor year location isbn createdAt updatedAt } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data.createBook)
    let myResult = {
      ok: true,
      book: result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
