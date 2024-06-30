const Entity = require("../../../common/db/Entity");

const Type = {

  save: async function (obj) {
    return await Entity.save("Types", obj).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg, data: err.data };
    });
  },

  all: async function () {
    return await Entity.list("Types", null, "name", "ASC", null).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg, data: err.data };
    });
  }

};

module.exports = Type;