const http = require('http')
const { graphql } = require('graphql')
const schema = require('./schema')
const rootQueries = require('./resolvers').Query
const rootMutations = require('./resolvers').Mutation

let root = null

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/graphql') {
    let body = ''
    req.on('data', chunk => {
      body += chunk.toString()
    })

    req.on('end', () => {
      let qry = JSON.parse(body)
      root = Object.keys(qry).contains('query') ? rootQueries : rootMutations
      graphql({ schema, source: query, rootValue: root })
        .then(result => {
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(result))
        })
        .catch(error => {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: error.message }))
        })
    })
  } else {
    res.statusCode = 404
    res.end()
  }
})

module.exports = server
