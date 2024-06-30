const Password = require('../../../common/login/Password')
const JWT = require('../../../common/login/JWT')

const Feedback = require('./modules/Feedback/model')
const Lesson = require('./modules/Lesson/model')
const Payment = require('./modules/Payment/model')
const User = require('./modules/User/model')

module.exports = {
  Query: {
    getFeedbacks: async args => {
      try {
        return await Feedback.find()
      } catch (error) {
        console.log(error)
      }
    },
    getLessons: async args => {
      try {
        return await Lesson.find()
      } catch (error) {
        console.log(error)
      }
    },
    getUsers: async args => {
      try {
        return await User.find()
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
            fullName: 'ERROR - Email not registered.',
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
            fullName: 'ERROR - Invalid password.',
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
    createFeedback: async args => {
      try {
        const feedback = new Feedback({
          userId: args.userId,
          text: args.text,
          createdAt: args.createdAt,
          updatedAt: args.updatedAt,
          solved: false
        })
        await feedback.save()
        return feedback
      } catch (error) {
        console.log(error)
        throw new Error('Error creating feedback.')
      }
    },
    createLesson: async args => {
      try {
        const lesson = new Lesson({
          week: args.week,
          subject: args.subject,
          link: args.link,
          createdAt: args.createdAt,
          updatedAt: args.updatedAt
        })
        await lesson.save()
        return lesson
      } catch (error) {
        console.log(error)
        throw new Error('Error creating lesson.')
      }
    },
    createUser: async args => {
      let encryptedPwd = await Password.encrypt(args.data.password)
      try {
        const user = new User({
          fullName: args.data.fullName,
          email: args.data.email,
          rg: args.data.rg,
          cpf: args.data.cpf,
          password: encryptedPwd,
          roles: args.data.roles.split('|'),
          status: args.data.status,
          acertos:
            args.data.acertos === undefined
              ? 0
              : parseInt(args.data.acertos, 10),
          nota: args.data.nota === undefined ? 0 : parseFloat(args.data.nota),
          afirmativa:
            args.data.afirmativa === undefined
              ? true
              : args.data.afirmativa === 'true'
              ? true
              : false,
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
    updateUserStatus: async args => {
      try {
        const user = await User.findOne({ email: args.email })
        user.status = args.status
        await user.save()
        return user
      } catch (error) {
        console.log(error)
        throw new Error('Error updating user status.')
      }
    },
    updateUserPassword: async args => {
      let encryptedPwd = await Password.encrypt(args.newPwd)
      try {
        const user = await User.findById(args.id)
        user.password = encryptedPwd
        user.updatedAt = args.updatedAt
        await user.save()
        return user
      } catch (error) {
        console.log(error)
        throw new Error('Error updating user password.')
      }
    },
    registerPayment: async args => {
      console.log(args)
      try {
        const payment = new Payment({
          userId: args.data.userId,
          userName: args.data.userName,
          status: args.data.status,
          ano: args.data.ano,
          mes: args.data.mes,
          valor: args.data.valor,
          createdAt: args.data.createdAt,
          updatedAt: args.data.updatedAt
        })
        await payment.save()
        return payment
      } catch (error) {
        console.log(error)
        throw new Error('Error creating payment.')
      }
    }
  }
}
