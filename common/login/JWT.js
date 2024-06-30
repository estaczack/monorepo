const { JSONWebToken, HS256Strategy } = require('@mokuteki/jwt');

const strategy = new HS256Strategy({
  ttl: 10000,
  secret: process.env.APP_SECRET,
});

const jwt = new JSONWebToken(strategy);

const JWT = {

  generate: function(obj) {
    let newObj = { sub: obj.id, ema: obj.email, pwd: obj.password };
    let token = jwt.generate(newObj);
    return token;
  },

  extract: function(token) {
    return jwt.verify(token);
  }

}

module.exports = JWT;