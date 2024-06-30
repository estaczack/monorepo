const Entity = require("../../../common/db/Entity");
const Password = require("../../../common/login/Password");
const JWT = require("../../../common/login/JWT");

const User = {

  save: async function (obj) {
    return await Entity.save("Users", obj).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg, data: err.data }
    });
  },

  authenticate: async function (obj) {
    let res = await Entity.list("Users", [["email", obj.email]], "firstName", "ASC", null).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg }
    });
    if (res.ok) {
      if (res.results.length === 0) {
        return { ok: false, msg: "Email " + obj.email + " not registered." };
      } else {
        let res2 = await Password.verify(obj.password, res.results[0].password);
        if (res2) {
          return { ok: true, jwt: JWT.generate(res.results[0]), userData: res.results[0] };
        } else {
          return { ok: false, msg: "Wrong password." };
        }
      }
    }
  },

  all: async function (tbl) {
    return await Entity.list("Users", null, "firstName", "ASC", null).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg, data: err.data }
    });
  }
};

module.exports = User;