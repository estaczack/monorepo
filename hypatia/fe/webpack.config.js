const path = require('path')

module.exports = {
  entry: {
    about: './src/pages/open/about.js',
    bss: './src/pages/open/bss.js',
    donate: './src/pages/open/donate.js',
    forgot: './src/pages/open/forgot.js',
    index: './src/pages/open/index.js',
    signup: './src/pages/open/signup.js',
    terms: './src/pages/open/terms.js',
    homepage: './src/pages/closed/homepage.js',
    profile: './src/pages/closed/profile.js',
    search: './src/pages/closed/search.js',
    signout: './src/pages/closed/signout.js',
    upload: './src/pages/closed/upload.js',
  },
  output: {
    path: path.resolve(__dirname, 'public/js')
  }
}
