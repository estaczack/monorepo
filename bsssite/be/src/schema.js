const { buildSchema } = require('graphql')

const schema = buildSchema(`

  type AuthenticationResponse {
    msg: String!
    auth: Boolean!
    user: [User]!
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
    fullName: String!
    email: String!
    rg: String!
    cpf: String!
    password: String!
    roles: String!
    status: String!
    nota: String!
    afirmativa: String!
    createdAt: String!
    updatedAt: String!
  }

  type User {
    _id: ID!
    fullName: String!
    email: String!
    rg: String!
    cpf: String!
    password: String!
    roles: [String!]!
    status: String!
    nota: String!
    afirmativa: String!
    jwt: String
    createdAt: String!
    updatedAt: String!
  }

  input PaymentInput {
    userId: String!
    userName: String!
    status: String!
    ano: String!
    mes: String!
    valor: String!
    createdAt: String!
    updatedAt: String!
  }

  type Payment {
    _id: ID!
    userId: String!
    userName: String!
    status: String!
    ano: String!
    mes: String!
    valor: String!
    createdAt: String!
    updatedAt: String!
  }

  type Lesson {
    _id: ID!
    week: String!
    subject: String!
    link: String!
    createdAt: String!
    updatedAt: String!
  }

  type Feedback {
    _id: ID!
    userId: String!
    text: String!
    solved: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getFeedbacks: [Feedback!]!
    getLessons: [Lesson!]!
    getUsers: [User!]!
  }

  type Mutation {
    authenticate(email: String!, password: String!): User!
    createLesson(week: String!, subject: String!, link: String!, createdAt: String!, updatedAt: String!): Lesson!
    createFeedback(userId: String!, text: String!, createdAt: String!, updatedAt: String!): Feedback!
    createUser(data: UserInput!): User!
    updateUserStatus(email: String!, newStatus: String!, createdAt: String!, updatedAt: String!): User!
    updateUserPassword(id: String!, newPwd: String!, createdAt: String!, updatedAt: String!): User!
    registerPayment(data: PaymentInput!): Payment!
  }
`)

module.exports = schema
