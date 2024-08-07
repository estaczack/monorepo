const path = require('path')

module.exports = {
  entry: {
    bss: './src/pages/open/bss.js',
    contact: './src/pages/open/contact.js',
    dashboard: './src/pages/closed/dashboard.js',
    development: './src/pages/open/development.js',
    education: './src/pages/open/education.js',
    hr: './src/pages/open/hr.js',
    index: './src/pages/open/index.js',
    languages: './src/pages/open/languages.js',
    library: './src/pages/closed/library.js',
    loginmentoria: './src/pages/open/loginmentoria.js',
    participate: './src/pages/open/participate.js',
    privacy: './src/pages/open/privacy.js',
    pwdchange: './src/pages/closed/pwdchange.js',
    terms: './src/pages/open/terms.js',
    mfadmin: './src/pages/closed/mfadmin.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/js')
  }
}
