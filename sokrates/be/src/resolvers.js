module.exports = {
  Query: {
    serverHello: () => 'Hello from the GraphQL server!',

    getUsers: async () => {
      try {
        const users = await User.findAll()
        return users
      } catch (error) {
        throw new Error('Error retrieving users\' list')
      }
    },

    getUser: async ({ id }) => {
      try {
        const user = await User.findById(id)
        return user
      } catch (error) {
        throw new Error('Error retrieving user')
      }
    }
  },

  Mutation: {
    createUser: async ({ firstName, lastName, email, password }) => {
      try {
        const user = new User({
          firstName,
          lastName,
          email,
          password
        })
        await user.save()
        return user
      } catch (error) {
        throw new Error('Error creating user')
      }
    }
  }
}
