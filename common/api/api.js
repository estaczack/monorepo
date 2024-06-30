const API = {
  get: async function (path) {
    return await fetch(path, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
  },
  postWithPayload: async function (path, payload) {
    return await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    })
  }
}

module.exports = API
