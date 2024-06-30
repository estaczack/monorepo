const bcrypt = require("bcrypt");

const Password = {

  encrypt: async function (pwd) {
    let saltRounds = 10;
    return await bcrypt.hash(pwd, saltRounds);
  },

  verify: async function (pwd, pwdDB) {
    return await bcrypt.compare(pwd, pwdDB);
  }

}

module.exports = Password;