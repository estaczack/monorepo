const HeaderOpen = require('../../../../../common/entities/header/HeaderOpen')
const FooterOpen = require('../../../../../common/entities/footer/FooterOpen')

const preferredLanguage = navigator.language || navigator.userLanguage;
const prefLanguage = preferredLanguage.split("-")[0]

const loadPageData = async function () {
  return fetch('/json/index.json').then(res => res.json())
}

const showPage = async function () {
  await HeaderOpen.show()

  // Insert your code here

  await FooterOpen.show()
  const footerHero = document.getElementById('footer-hero')
  footerHero.classList.remove('is-dark')
  footerHero.classList.add('is-very-dark')
}

showPage()
