const Entity = require("../../../common/db/Entity");

const Language = {

  save: async function (obj) {
    return await Entity.save("Languages", obj).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg, data: err.data }
    });
  },

  all: async function () {
    return await Entity.list("Languages", null, "name", "ASC", null).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg, data: err.data }
    });
  }

};

module.exports = Language;