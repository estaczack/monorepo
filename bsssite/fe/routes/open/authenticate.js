const express = require('express')

const router = express.Router()

router.post('/', async function (req, res) {
  const { email, password } = req.body
  let payload = {
    query:
      'mutation { authenticate( email: "' +
      email +
      '", password: "' +
      password +
      '") { _id fullName email roles jwt } }'
  }
  try {
    let result = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(payload)
    }).then(res => res.json()).then(json => json.data.authenticate)
    let myResult = {}
    let firstName = result.fullName.split(" ")[0]
    if (firstName === "ERROR") {
      myResult.ok = false
      myResult.msg = result.fullName
    } else {
      myResult.ok = true
      myResult.user = result
    }
    res.send(myResult)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
