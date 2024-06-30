const Entity = require("../../../common/db/Entity");

const Gender = {

  save: async function (obj) {
    return await Entity.save("Genders", obj).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg, data: err.data };
    });
  },

  all: async function () {
    return await Entity.list("Genders", null, "name", "ASC", null).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg, data: err.data };
    });
  }

};

module.exports = Gender;