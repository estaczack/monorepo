var express = require('express')

var router = express.Router()

router.get('/', async function (req, res) {
  let payload = {
    query:
      'query { getPosts { _id title content image authorId authorFullName languageId typeId genreId likes externalLink createdAt updatedAt } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    }).then(res => res.json()).then(json => json.data.getPosts)
    myResult = {
      res: true,
      posts: result 
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

router.post('/by-filter', async function (req, res) {
  const { languageId, typeId, genreId } = req.body
  let payload = {
    query:
      'query { getPostsByFilter( languageId: "' +
      languageId +
      '", typeId: "' +
      typeId +
      '", genreId: "' +
      genreId +
      '" ) { _id title content image authorId authorFullName languageId typeId genreId likes externalLink createdAt updatedAt } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    }).then(res => res.json()).then(json => json.data.getPostsByFilter)
    let myResult = {
      ok: true,
      posts: result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

router.post('/toggle-like', async function (req, res) {
  const { postId, userId } = req.body
  let payload = {
    query: `mutation { toggleLikePost( postId: "${postId}", userId: "${userId}") { _id likes } }`
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data.toggleLikePost)
    let myResult = {
      ok: true,
      post: result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

router.post('/user-liked', async function (req, res) {
  const { postId, userId } = req.body
  let payload = {
    query: `query { userLiked( postId: "${postId}", userId: "${userId}") }`
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(json => json.data.userLiked)
    res.send(result)
  } catch (err) {
    console.log(err)
  }
})



router.post('/', async function (req, res) {
  const {
    title,
    content,
    image,
    authorId,
    authorFullName,
    languageId,
    typeId,
    genreId,
    externalLink,
    createdAt,
    updatedAt
  } = req.body
  let payload = {
    query:
      'mutation { createPost(data: { title: "' +
      title +
      '", content: "' +
      content +
      '", image: "' +
      image +
      '", authorId: "' +
      authorId +
      '", authorFullName: "' +
      authorFullName +
      '", languageId: "' +
      languageId +
      '", typeId: "' +
      typeId +
      '", genreId: "' +
      genreId +
      '", externalLink: "' +
      externalLink +
      '", createdAt: "' +
      createdAt +
      '", updatedAt: "' +
      updatedAt +
      '" }) { _id title content image authorId authorFullName languageId typeId genreId externalLink createdAt updatedAt } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    }).then(res => res.json())
    res.send(result)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
