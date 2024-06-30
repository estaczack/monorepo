const HeaderOpen = require('../../../../../common/entities/header/HeaderOpen')
const FooterOpen = require('../../../../../common/entities/footer/FooterOpen')
const showLine = require('../../../../../common/entities/pageline/PageLine')

const preferredLanguage = navigator.language || navigator.userLanguage;
const prefLanguage = preferredLanguage.split("-")[0]

const firstLine = document.getElementById('first-line')
const secondLine = document.getElementById('second-line')

const section1 = document.getElementById("section1")
const section2 = document.getElementById("section2")

const loadPageData = async function () {
  return fetch(`/json/education-${prefLanguage}.json`).then(res => res.json())
}

const showPage = async function () {
  await HeaderOpen.show()

  let pageData = await loadPageData()
  showLine(firstLine, pageData.firstLine)
  showLine(secondLine, pageData.secondLine)
  
  section1.innerText = pageData.sections[0]
  section2.innerText = pageData.sections[1]

  await FooterOpen.show()

}

showPage()
