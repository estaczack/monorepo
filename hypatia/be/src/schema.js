const { buildSchema } = require('graphql')

const schema = buildSchema(`

  type AuthenticationResponse {
    msg: String!
    auth: Boolean!
    user: [User]!
  }

  type Author {
    _id: ID!
    name: String!
    createdAt: String!
    updatedAt: String!
  }

  input BookInput {
    user: ID!
    title: String!
    subtitle: String
    edition: String!
    editor: String!
    year: String!
    location: String!
    isbn: String!
    authorsList: [ID!]!
    bookLanguage: ID!
    bookType: ID!
    bookGenre: ID!
    createdAt: String!
    updatedAt: String!
  }

  type Book {
    _id: ID!
    userId: ID!
    title: String!
    subtitle: String
    edition: String!
    editor: String!
    year: String!
    location: String!
    isbn: String!
    authors: [Author!]!
    bookLanguage: String!
    bookType: String!
    bookGenre: String!
    createdAt: String!
    updatedAt: String!
  }

  type BookLanguage {
    _id: ID!
    name: String!
    createdAt: String!
    updatedAt: String!
  }

  type BookType {
    _id: ID!
    name: String!
    genres: [BookGenre!]!
    createdAt: String!
    updatedAt: String!
  }

  type BookGenre {
    _id: ID!
    name: String!
    createdAt: String!
    updatedAt: String!
  }

  type Comment {
    _id: ID!
    content: String
  }

  input CompanyInput {
    companyName: String!
    contactName: String!
    contactPhone: String!
    contactEmail: String!
    domain: String!
    suspended: Boolean!
    banned: Boolean!
  }

  type Company {
    _id: ID!
    companyName: String!
    contactName: String!
    contactPhone: String!
    contactEmail: String!
    domain: String!
    suspended: Boolean!
    banned: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  input PostInput {
    title: String!
    content: String!
    image: String
    createdAt: String!
    updatedAt: String!
    authorId: ID!
    authorFullName: String!
    languageId: ID!
    typeId: ID!
    genreId: ID!
    externalLink: String!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    image: String
    authorId: ID!
    authorFullName: String!
    languageId: ID!
    typeId: ID!
    genreId: ID!
    likes: [String!]!
    externalLink: String!
    createdAt: String!
    updatedAt: String!
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    roles: String!
    createdAt: String!
    updatedAt: String!
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    roles: [String!]!
    lastLanguage: String
    lastType: String
    lastGenre: String
    booksUploaded: [String]!
    jwt: String
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getBookLanguages: [BookLanguage!]!
    getBookTypes: [BookType!]!
    getPosts: [Post!]!
    getPostsByFilter(languageId: ID!, typeId: ID!, genreId: ID!): [Post!]!
    userLiked(postId: ID!, userId: ID!): Boolean
    getAuthorsByPartOfName(partOfName: String!): [Author!]!
    getAuthors: [Author!]!
  }

  type Mutation {
    authenticate(email: String!, password: String!): User!
    createUser(data: UserInput!): User!
    saveUserLastLanguage(id: ID!, lastLanguageId: ID!, updatedAt: String!): User!
    saveUserLastType(id: ID!, lastTypeId: ID!, updatedAt: String!): User!
    saveUserLastGenre(id: ID!, lastGenreId: ID!, updatedAt: String!): User!
    createBookLanguage(name: String!, createdAt: String!, updatedAt: String!): BookLanguage!
    createBookType(name: String!, createdAt: String!, updatedAt: String!): BookType!
    createBookGenre(name: String!, typeId: ID!, createdAt: String!, updatedAt: String!): BookGenre!
    createPost(data: PostInput): Post!
    toggleLikePost(postId: ID!, userId: ID!): Post!
    createAuthor(name: String!, createdAt: String!, updatedAt: String!): Author!
    createBook(data: BookInput!): Book!
  }
`)

module.exports = schema
