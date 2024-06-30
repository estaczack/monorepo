const HeaderClosed = require('../../../../../common/entities/header/HeaderClosed')

const preferredLanguage = navigator.language || navigator.userLanguage
const prefLanguage = preferredLanguage.split('-')[0]

const loadPageData = async function () {
  return fetch('/json/index.json').then(res => res.json())
}

const listaDeLetras = document.getElementById('lista-de-letras')

const showPage = async function () {
  await HeaderClosed.show()

  let letras = 'A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z'
  let letrasArray = letras.split('|')

  letrasArray.forEach(letra => {
    let col = document.createElement('th')
    listaDeLetras.appendChild(col)
    let aCol = document.createElement('a')
    aCol.setAttribute('class', 'link-letter')
    aCol.innerText = letra
    col.appendChild(aCol)
  })
}

showPage()
