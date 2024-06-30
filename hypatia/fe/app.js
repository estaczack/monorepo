const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

require('dotenv').config()

const Timestamp = require('../../common/db/Timestamp')

const closedLanguagesRouter = require('./routes/closed/languages')
const closedTypesRouter = require('./routes/closed/types')
const closedGenresRouter = require('./routes/closed/genres')
const closedUsersRouter = require('./routes/closed/users')
const closedPostsRouter = require('./routes/closed/posts')
const closedAuthorsRouter = require('./routes/closed/authors')
const closesBooksRouter = require('./routes/closed/books')

const openAuthenticateRouter = require('./routes/open/authenticate')
const openUsersRouter = require('./routes/open/users')

const app = express()

app.use(logger('dev'))
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// app.use('*', (req, res, next) => {
//   console.log(req.body)
//   next()
// })

app.use('*', (req, res, next) => {
  let dt = new Date()
  if (req.method === 'POST') {
    req.body.createdAt = Timestamp.fullTimestamp(dt)
    req.body.updatedAt = Timestamp.fullTimestamp(dt)
  }
  next()
})

app.use('/api/open/authenticate', openAuthenticateRouter)
app.use('/api/open/users', openUsersRouter)

app.use('/api/closed/languages', closedLanguagesRouter)
app.use('/api/closed/types', closedTypesRouter)
app.use('/api/closed/genres', closedGenresRouter)
app.use('/api/closed/users', closedUsersRouter)
app.use('/api/closed/posts', closedPostsRouter)
app.use('/api/closed/authors', closedAuthorsRouter)
app.use('/api/closed/books', closesBooksRouter)

module.exports = app
