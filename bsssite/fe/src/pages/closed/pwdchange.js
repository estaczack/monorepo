const HeaderClosed = require('../../../../../common/entities/header/HeaderClosed')

const preferredLanguage = navigator.language || navigator.userLanguage;
const prefLanguage = preferredLanguage.split("-")[0]

const loadPageData = async function () {
  return fetch('/json/index.json').then(res => res.json())
}

const showPage = async function () {
  await HeaderClosed.show()

  // Insert your code here

}

showPage()
