const UserData = require('../../../../common/users/UserData')

const UserDataHypatia = UserData

UserDataHypatia.lastLanguage = function () {
  return this.data.lastLanguage
}

UserDataHypatia.lastType = function () {
  return this.data.lastType
}

UserDataHypatia.lastGenre = function () {
  return this.data.lastGenre
}

module.exports = UserDataHypatia
