const { buildSchema } = require('graphql')

const schema = buildSchema(`

  input AuthorInput {
    firstName: String!
    lastName: String!
  }

  type Author {
    _id: ID!
    firstName: String!
    lastName: String!
    createdAt: String!
    updatedAt: String!
  }

  input BookInput {
    title: String!
    subtitle: String!
    edition: String!
    year: String!
    city: String!
  }

  type Book {
    _id: ID!
    title: String!
    subtitle: String!
    edition: String!
    year: String!
    city: String!
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
    createdAt: String!
    updatedAt: String!
  }

  type BookGenre {
    _id: ID!
    bookType: BookType
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
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    createdAt: String!
    updatedAt: String!
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    serverHello: String!
    authenticate: String!
    getCompanies: [Company!]!
    getCompanyByID(id: ID!): Company!
    getUsers: [User!]!
    getUserByID(id: ID!): User!
  }

  type Mutation {
    createAuthor(data: AuthorInput): Author!
    deleteAuthor(id: ID!): Boolean!
    updateAuthor(id: ID!, data: AuthorInput): Author!
    createCompany(data: CompanyInput): Company
    deleteCompany(id: ID!): Boolean!
    updateCompany(id: ID!, data: CompanyInput!): Company
    createUser(data: UserInput): User
    deleteUser(id: ID!): Boolean
    updateUser(id: ID!, data: UserInput!): User!
  }
`)

module.exports = schema
