const HeaderOpen = require('../../../../../common/entities/header/HeaderOpen')
const FooterOpen = require('../../../../../common/entities/footer/FooterOpen')

const preferredLanguage = navigator.language || navigator.userLanguage
const prefLanguage = preferredLanguage.split('-')[0]

const firstLine = document.getElementById('first-line')

const loadPageData = async function () {
  return fetch(`/json/404-${prefLanguage}.json`).then(res => res.json())
}

const showPage = async function () {
  await HeaderOpen.show()

  let pageData = await loadPageData()
  showLine(firstLine, pageData.firstLine)

  await FooterOpen.show()
}

showPage()
