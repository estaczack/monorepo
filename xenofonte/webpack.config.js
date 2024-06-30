const path = require('path')

module.exports = {
  entry: {
    about: './src/pages/about/index.js',
    bss: './src/pages/bss/index.js',
    donate: './src/pages/bss/index.js',
    forgot: './src/pages/forgot/index.js',
    homepage: './src/pages/homepage/index.js',
    index: './src/pages/index/index.js',
    signup: './src/pages/signup/index.js',
    signout: './src/pages/signout/index.js',
    terms: './src/pages/terms/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/js')
  }
}
