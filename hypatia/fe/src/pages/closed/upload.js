const API = require('../../../../../common/api/api')
const HeaderClosed = require('../../../../../common/entities/header/HeaderClosed')
const UserData = require('../../aux/UserDataHypatia')

HeaderClosed.show()

UserData.init()

const languageSelect = document.getElementById('language-select')
const bookTitle = document.getElementById('book-title')
const bookSubtitle = document.getElementById('book-subtitle')
const bookEdition = document.getElementById('book-edition')
const bookEditor = document.getElementById('book-editor')
const bookYear = document.getElementById('book-year')
const bookLocation = document.getElementById('book-location')
const bookISBN = document.getElementById('book-isbn')
const typeSelect = document.getElementById('type-select')
const genreSelect = document.getElementById('genre-select')
const authorsSelect = document.getElementById('authors-list')
const uploadAuthorsList = document.getElementById('upload-authors-list')
const searchAuthorButton = document.getElementById('search-author-button')
const addAuthorButton = document.getElementById('add-author-button')
const authorModal = document.getElementById('author-modal')
const closeAuthorModalButton = document.getElementById(
  'close-author-modal-button'
)
const performBookUploadButton = document.getElementById(
  'perform-book-upload-button'
)

let languagesArray = []
let typesArray = []
let authorsArray = []

searchAuthorButton.addEventListener('click', ev => {
  alert('Search author')
})

addAuthorButton.addEventListener('click', ev => {
  authorModal.classList.add('is-active')
})

closeAuthorModalButton.addEventListener('click', ev => {
  authorModal.classList.remove('is-active')
})

performBookUploadButton.addEventListener('click', ev => {
  let payload = {}
  let authors = []
  const authorElementsArr = Array.from(
    document.querySelectorAll('.picked-author')
  )
  if (authorElementsArr.length > 0) {
    authorElementsArr.forEach(a => authors.push(a.id.split('-')[1]))
  }
  payload = {
    user: UserData.id(),
    authorsList: authors,
    title: bookTitle.value,
    subtitle: bookSubtitle.value,
    bookLanguage: languageSelect.value,
    bookType: typeSelect.value,
    bookGenre: genreSelect.value,
    edition: bookEdition.value,
    editor: bookEditor.value,
    year: bookYear.value,
    location: bookLocation.value,
    isbn: bookISBN.value
  }
  API.postWithPayload('/api/closed/books', payload)
    .then(res => res.json())
    .then(json => json.book)
})

async function languagesLoader () {
  return await API.get('/api/closed/languages')
    .then(res => res.json())
    .then(json => json.bookLanguages)
}

async function typesLoader () {
  return await API.get('/api/closed/types')
    .then(res => res.json())
    .then(json => json.bookTypes)
}

async function authorsLoader () {
  return await API.get('/api/closed/authors')
    .then(res => res.json())
    .then(json => json.authors)
}

async function loaders () {
  languagesArray = await languagesLoader()
  typesArray = await typesLoader()
  authorsArray = await authorsLoader()
  return await true
}

async function loadAuthorsSelect (optsArray, selectElement) {
  await optsArray.forEach(o => {
    let opt = document.createElement('li')
    opt.innerText = o.name
    opt.id = `nc-author-${o._id}`
    opt.setAttribute('data-author-id', o._id)
    opt.setAttribute('class', 'author-item')
    selectElement.appendChild(opt)
  })
}

async function loadSelect (optsArray, selectElement, selectedId) {
  await optsArray.forEach(o => {
    let opt = document.createElement('option')
    opt.innerText = o.name
    opt.id = o._id
    opt.value = o._id
    if (selectedId) {
      if (o._id === selectedId) {
        opt.setAttribute('selected', true)
      }
    }
    selectElement.appendChild(opt)
  })
}

function handleAuthorRemoveClick (ev) {
  let restoredAuthorId = `nc-${ev.target.id}`
  let restoredAuthor = document.getElementById(restoredAuthorId)
  restoredAuthor.addEventListener('click', handleAuthorAddClick)
  ev.target.removeEventListener('click', handleAuthorRemoveClick)
  ev.target.parentNode.removeChild(ev.target)
}

function handleAuthorAddClick (ev) {
  let liItem = document.createElement('li')
  liItem.setAttribute('id', `author-${ev.target.dataset.authorId}`)
  liItem.setAttribute('class', 'picked-author')
  liItem.innerText = ev.target.innerText
  uploadAuthorsList.appendChild(liItem)
  liItem.addEventListener('click', handleAuthorRemoveClick)
  ev.target.removeEventListener('click', handleAuthorAddClick)
}

async function loadSideMenu () {
  const loaded = await loaders()
  await loadSelect(languagesArray, languageSelect)
  await loadSelect(typesArray, typeSelect)
  await loadSelect(typesArray[0].genres, genreSelect)
  await loadAuthorsSelect(authorsArray, authorsSelect)
  const authorElements = document.querySelectorAll('.author-item')
  const authorElems = Array.from(authorElements)
  authorElems.forEach(e => e.addEventListener('click', handleAuthorAddClick))
}

async function loadFullPage () {
  await loadSideMenu()
}

loadFullPage()
