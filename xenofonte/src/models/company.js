const Entity = require("../../../common/db/Entity");

const Company = {

  save: async function (obj) {
    return await Entity.save("Companies", obj).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg, data: err.data };
    });
  },

  all: async function () {
    return await Entity.allOrdered("Companies", null, "title", "ASC", null).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg, data: err.data };
    });
  }

};

module.exports = Company;