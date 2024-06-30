const HeaderOpen = require('../../../../../common/entities/header/HeaderOpen')
const FooterOpen = require('../../../../../common/entities/footer/FooterOpen')
const showLine = require("../../../../../common/entities/pageline/PageLine3")

const preferredLanguage = navigator.language || navigator.userLanguage;
const prefLanguage = preferredLanguage.split("-")[0]

const firstLine = document.getElementById('first-line')

const section1 = document.getElementById("section1")

const loadPageData = async function () {
  return fetch(`/json/terms-${prefLanguage}.json`).then(res => res.json())
}

const showPage = async function () {
  await HeaderOpen.show()

  let pageData = await loadPageData()
  showLine(firstLine, pageData.firstLine)
  
  section1.innerText = pageData.sections[0]

  await FooterOpen.show()
}

showPage()
