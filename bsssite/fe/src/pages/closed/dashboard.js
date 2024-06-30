const HeaderClosed = require('../../../../../common/entities/header/HeaderClosed')

const preferredLanguage = navigator.language || navigator.userLanguage
const prefLanguage = preferredLanguage.split('-')[0]

const column1 = document.getElementById('column1')
const column2 = document.getElementById('column2')
const column3 = document.getElementById('column3')

const tabelaAulas = document.getElementById('tabelaAulas')

const feedbackButton = document.getElementById('feedback-button')
const feedbackArea = document.getElementById('feedback-field')

const logoutButton = document.getElementById('logout-button')

const loadPageData = async function () {
  return await fetch('/json/dashboard.json').then(res => res.json())
}

const loadAulas = async function () {
  return await fetch('/api/closed/lessons').then(res => res.json())
}

feedbackButton.addEventListener('click', async ev => {
  let payload = {
    userId: JSON.parse(window.localStorage.getItem('userData'))._id,
    text: feedbackArea.value
  }
  return await fetch('/api/closed/feedbacks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then(json => (feedbackArea.value = ''))
})

logoutButton.addEventListener('click', async ev => {
  await window.localStorage.clear()
  window.location.href = '/'
})

const showPage = async function () {
  await HeaderClosed.show()

  let aulas = await loadAulas()
  let aulasOrdered = aulas.lessons.sort((a, b) => b.week.localeCompare(a.week))

  aulasOrdered.forEach((item, ind) => {
    let line = document.createElement('tr')
    tabelaAulas.appendChild(line)
    let col1 = document.createElement('td')
    col1.innerText = item.week
    line.appendChild(col1)
    let col2 = document.createElement('td')
    line.appendChild(col2)
    let a = document.createElement('a')
    a.setAttribute('href', item.link)
    a.setAttribute('target', '_new')
    a.innerHTML = item.subject
    col2.appendChild(a)
  })
}

showPage()
