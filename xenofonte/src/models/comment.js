const Entity = require("../../../common/db/Entity");

const Comment = {

  save: async function (obj) {
    return await Entity.save("Comments", obj).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg, data: err.data };
    });
  },

  all: async function () {
    return await Entity.list("Comments", null, "name", "ASC", null).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg, data: err.data };
    });
  }

};

module.exports = Comment;