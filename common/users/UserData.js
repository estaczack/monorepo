const userData = {

  id: function() {
    return this.data._id;
  },

  firstName: function() {
    return this.data.firstName;
  },

  lastName: function() {
    return this.data.lastName;
  },

  fullName: function() {
    return this.firstName() + " " + this.lastName();
  },

  getToken: function() {
    return this.data.jwt
  },

  init: function() {
    this.data = JSON.parse(localStorage.getItem("userData"));
  }

}

module.exports = userData;