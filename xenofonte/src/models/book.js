const Entity = require("../../../common/db/Entity");

const Book = {

  save: async function (obj) {
    return await Entity.save("Books", obj).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg, data: err.data };
    });
  },

  all: async function () {
    return await Entity.allOrdered("Books", null, "title", "ASC", null).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg, data: err.data };
    });
  }

};

module.exports = Book;