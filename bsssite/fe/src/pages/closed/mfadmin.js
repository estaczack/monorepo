const HeaderClosed = require('../../../../../common/entities/header/HeaderClosed')
const FooterClosed = require('../../../../../common/entities/footer/FooterClosed')

const preferredLanguage = navigator.language || navigator.userLanguage
const prefLanguage = preferredLanguage.split('-')[0]

const contentArea = document.getElementById('Content')

const loadPageData = async function () {
  return fetch('/api/closed/users/').then(res => res.json())
}

const showPage = async function () {
  await HeaderClosed.show()

  let estudantes = await loadPageData()
  let lista = estudantes.users.filter(a => a.status !== 'Staff')
  let lista2 = lista.filter(a => a.status !== 'Não fez o teste')
  let lista3 = lista2.sort((a, b) => a.fullName.localeCompare(b.fullName))

  let myTable = document.createElement('table')
  myTable.setAttribute(
    'class',
    'table is-bordered is-striped is-hoverable is-fullwidth'
  )
  contentArea.appendChild(myTable)

  let myTableHeader = document.createElement('thead')
  myTable.appendChild(myTableHeader)

  let tr = document.createElement('tr')
  myTableHeader.appendChild(tr)

  th = document.createElement('th')
  th.innerText = 'NOME'
  tr.appendChild(th)

  th = document.createElement('th')
  th.innerText = 'EMAIL'
  tr.appendChild(th)

  th = document.createElement('th')
  th.innerText = 'RG'
  tr.appendChild(th)

  th = document.createElement('th')
  th.innerText = 'CPF'
  tr.appendChild(th)

  th = document.createElement('th')
  th.innerText = 'STATUS'
  tr.appendChild(th)

  th = document.createElement('th')
  th.innerText = 'ACTIONS'
  tr.appendChild(th)

  let myTableBody = document.createElement('tbody')
  myTable.appendChild(myTableBody)

  lista3.forEach(estudante => {
    tr = document.createElement('tr')
    myTableBody.appendChild(tr)

    let td = document.createElement('td')
    td.innerText = estudante.fullName
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = estudante.email
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = estudante.rg
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = estudante.cpf
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = estudante.status
    tr.appendChild(td)

    td = document.createElement('td')
    td.setAttribute('id', `td_user_${estudante._id}`)
    td.innerHTML = `<input id="user_${estudante._id}" class="input" /><button class="button btn-pago is-danger is-fullwidth is-small" data-status="${estudante.status}" data-id="${estudante._id}" data-name="${estudante.fullName}">Pago</button>`
    tr.appendChild(td)
  })
}

const behavior = async function () {
  await showPage()

  let botoes = document.querySelectorAll('.btn-pago')

  botoes.forEach(botao => {
    botao.addEventListener('click', async ev => {
      let btnId = ev.target.dataset.id
      let btnStatus = ev.target.dataset.status
      let btnName = ev.target.dataset.name
      let payload = {
        id: btnId,
        name: btnName,
        status: btnStatus,
        ano: 2023,
        mes: 10,
        valor: document.getElementById(`user_${btnId}`).value
      }
      let result = await fetch('/api/closed/users/pagou', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      }).then(res => res.json())
      if (result.ok) {
        document.getElementById(`td_user_${result.payment.userId}`).innerHTML =
          '<span>Pagou</span>'
      }
    })
  })
}

behavior()