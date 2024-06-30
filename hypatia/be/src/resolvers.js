const Password = require('../../../common/login/Password')
const JWT = require('../../../common/login/JWT')

const Author = require('./modules/Author/model')
const Book = require('./modules/Book/model')
const BookLanguage = require('./modules/BookLanguage/model')
const BookType = require('./modules/BookType/model')
const BookGenre = require('./modules/BookGenre/model')
const Post = require('./modules/Post/model')
const User = require('./modules/User/model')

module.exports = {
  Query: {
    getBookLanguages: async () => {
      try {
        let bookLanguages = await BookLanguage.find({})
        return bookLanguages
      } catch (error) {
        console.log(error)
      }
    },
    getBookTypes: async () => {
      try {
        let bookTypes = await BookType.find({})
        return bookTypes
      } catch (error) {
        console.log(error)
      }
    },
    getPosts: async args => {
      try {
        const posts = await Post.find({})
        return posts
      } catch (error) {
        console.log(error)
      }
    },
    getPostsByFilter: async args => {
      try {
        let posts = await Post.find({
          languageId: args.languageId,
          typeId: args.typeId,
          genreId: args.genreId
        })
        posts = posts.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
        return posts
      } catch (error) {
        console.log(error)
      }
    },
    userLiked: async args => {
      try {
        const post = new Post(await Post.findById(args.postId))
        return post.likes.includes(args.userId)
      } catch (error) {
        console.log(error)
        throw new Error('Error liking post.')
      }
    },
    getAuthorsByPartOfName: async args => {
      try {
        let authors = await Author.find({})
        authors = authors.filter(e => e.name.includes(args.partOfName)) // TODO
        return authors
      } catch (error) {
        console.log(error)
      }
    },
    getAuthors: async args => {
      try {
        let authors = await Author.find({})
        authors = authors.sort((a, b) => a.name.localeCompare(b.name))
        return authors
      } catch (error) {
        console.log(error)
      }
    }
  },
  Mutation: {
    authenticate: async args => {
      try {
        let possibleUser = await User.findOne({ email: args.email })
        if (!possibleUser) {
          let errorUser = new User({
            _id: 'Invalid ID',
            firstName: 'ERROR',
            lastName: 'Email not registered.',
            email: args.email,
            jwt: 'Not authenticated.',
            roles: ['none']
          })
          return errorUser
        }
        let validPassword = await Password.verify(
          args.password,
          possibleUser.password
        )
        if (!validPassword) {
          let errorUser = new User({
            _id: 'Invalid ID',
            firstName: 'ERROR',
            lastName: 'Invalid password.',
            email: args.email,
            jwt: 'Not authenticated.',
            roles: ['none']
          })
          return errorUser
        }
        let obj = {
          id: possibleUser._id,
          email: possibleUser.email,
          password: possibleUser.password
        }
        let jwt = JWT.generate(obj)
        possibleUser.jwt = jwt
        await possibleUser.save()
        return possibleUser
      } catch (error) {
        console.log(error)
      }
    },
    createUser: async args => {
      let encryptedPwd = await Password.encrypt(args.data.password)
      let languageId = await BookLanguage.find({ name: 'English' })
      let typeId = await BookType.find({ name: 'Fiction' })
      try {
        const user = new User({
          firstName: args.data.firstName,
          lastName: args.data.lastName,
          email: args.data.email,
          password: encryptedPwd,
          roles: args.data.roles.split('|'),
          lastLanguage: languageId[0]._id,
          lastType: typeId[0]._id,
          lastGenre: typeId[0].genres[0]._id,
          booksUploaded: [],
          createdAt: args.data.createdAt,
          updatedAt: args.data.updatedAt
        })
        await user.save()
        return user
      } catch (error) {
        console.log(error)
        throw new Error('Error creating user.')
      }
    },
    saveUserLastLanguage: async args => {
      try {
        let user = new User(await User.findById(args.id))
        user = Object.assign(user, {
          lastLanguage: args.lastLanguageId,
          updatedAt: args.updatedAt
        })
        await user.save()
        return user
      } catch (error) {
        console.log(error)
      }
    },
    saveUserLastType: async args => {
      try {
        let user = new User(await User.findById(args.id))
        user = Object.assign(user, {
          lastType: args.lastTypeId,
          updatedAt: args.updatedAt
        })
        await user.save()
        return user
      } catch (error) {
        console.log(error)
      }
    },
    saveUserLastGenre: async args => {
      try {
        let user = new User(await User.findById(args.id))
        user = Object.assign(user, {
          lastGenre: args.lastGenreId,
          updatedAt: args.updatedAt
        })
        await user.save()
        return user
      } catch (error) {
        console.log(error)
      }
    },
    createBookLanguage: async args => {
      try {
        const bookLanguage = new BookLanguage({
          name: args.name,
          createdAt: args.createdAt,
          updatedAt: args.updatedAt
        })
        await bookLanguage.save()
        return bookLanguage
      } catch (error) {
        console.log(error)
        throw new Error('Error creating book language.')
      }
    },
    createBookType: async args => {
      try {
        const bookType = new BookType({
          name: args.name,
          createdAt: args.createdAt,
          updatedAt: args.updatedAt
        })
        await bookType.save()
        return bookType
      } catch (error) {
        console.log(error)
        throw new Error('Error creating book type.')
      }
    },
    createBookGenre: async args => {
      try {
        const bookGenre = new BookGenre({
          name: args.name,
          createdAt: args.createdAt,
          updatedAt: args.updatedAt
        })
        let bookType = new BookType(await BookType.findById(args.typeId))
        bookType.genres.push(bookGenre)
        await bookType.save()
        await bookGenre.save()
        return bookGenre
      } catch (error) {
        console.log(error)
        throw new Error('Error creating book genre.')
      }
    },
    createPost: async args => {
      try {
        const post = new Post({
          title: args.data.title,
          content: args.data.content,
          image: args.data.image,
          authorId: args.data.authorId,
          authorFullName: args.data.authorFullName,
          languageId: args.data.languageId,
          typeId: args.data.typeId,
          genreId: args.data.genreId,
          likes: [],
          externalLink: args.data.externalLink,
          createdAt: args.data.createdAt,
          updatedAt: args.data.updatedAt
        })
        await post.save()
        return post
      } catch (error) {
        console.log(error)
        throw new Error('Error creating post.')
      }
    },
    toggleLikePost: async args => {
      try {
        const post = new Post(await Post.findById(args.postId))
        if (post.likes.includes(args.userId)) {
          post.likes = await post.likes.filter(e => e !== args.userId)
        } else {
          post.likes.push(args.userId)
        }
        await post.save()
        return post
      } catch (error) {
        console.log(error)
        throw new Error('Error liking post.')
      }
    },
    createAuthor: async args => {
      try {
        const author = new Author({
          name: args.name,
          createdAt: args.createdAt,
          updatedAt: args.updatedAt
        })
        await author.save()
        return author
      } catch (error) {
        console.log(error)
        throw new Error('Error creating author.')
      }
    },
    createBook: async args => {
      myAuthorsList = args.data.authorsList[0].split(',')
      try {
        const user = User(await User.findById(args.data.user))
        const bookLanguage = new BookLanguage(
          await BookLanguage.findById(args.data.bookLanguage)
        )
        const bookType = BookType(
          await BookType.findById(args.data.bookType)
        )
        const bookGenre = new BookGenre(
          await BookGenre.findById(args.data.bookGenre)
        )
        const authors = await Author.find({
          _id: { $in: myAuthorsList }
        })
        const book = new Book({
          userId: user._id,
          title: args.data.title,
          subtitle: args.data.subtitle,
          edition: args.data.edition,
          editor: args.data.editor,
          year: args.data.year,
          location: args.data.location,
          isbn: args.data.isbn,
          bookLanguage: bookLanguage.name,
          bookType: bookType.name,
          bookGenre: bookGenre.name,
          authors: authors,
          createdAt: args.data.createdAt,
          updatedAt: args.data.updatedAt
        })
        await book.save()
        user.booksUploaded.push(book._id)
        await user.save()
        return book
      } catch (error) {
        console.log(error)
        throw new Error('Error creating book.')
      }
    }
  }
}
