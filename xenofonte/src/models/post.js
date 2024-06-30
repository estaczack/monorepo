const Entity = require("../../../common/db/Entity");

const Post = {

  save: async function (obj) {
    return await Entity.save("Posts", obj).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg, data: err.data };
    });
  },

  last: async function (q, l, t, g) {
    let filterQuery = [["language_id", l], ["type_id", t], ["gender_id", g]];
    return await Entity.list("Posts", filterQuery, "updatedAt", "DESC", q).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg, data: err.data };
    });
  },

  lastWithUsers: async function (q, l, t, g) {
    let filterQuery = [["language_id", l], ["type_id", t], ["gender_id", g]];
    return await Entity.listPostsWithUsers("Posts", filterQuery, "updatedAt", "DESC", q).catch((err) => {
      return { ok: false, code: err.code, msg: err.msg, data: err.data };
    });
  }

};

module.exports = Post;