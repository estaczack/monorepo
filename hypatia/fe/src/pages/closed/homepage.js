const PostCard = require('../../../../../common/blog/PostCard')
const HeaderClosed = require('../../../../../common/entities/header/HeaderClosed')
const API = require('../../../../../common/api/api')

const UserData = require('../../aux/UserDataHypatia')

HeaderClosed.show()

UserData.init()

const fullNameField = document.getElementById('link-for-profile')
fullNameField.innerText = UserData.fullName()

const languageSelect = document.getElementById('language-select')
const typeSelect = document.getElementById('type-select')
const genreSelect = document.getElementById('genre-select')

const spanModalTitle = document.getElementById('span-modal-title')
const addPostMenuButton = document.getElementById('add-post-menu-button')
const modalPost = document.getElementById('post-modal')
const closeModalPostButton = document.getElementById('close-modal-button')
const cancelPostButton = document.getElementById('cancel-post-button')
const postImage = document.getElementById('postimage')
const postsArea = document.getElementById('posts-area')
const formPost = document.getElementById('form-post')

let languagesArray = []
let typesArray = []
let postsArray = []

addPostMenuButton.addEventListener('click', ev => {
  modalPost.classList.add('is-active')
})

closeModalPostButton.addEventListener('click', ev => {
  modalPost.classList.remove('is-active')
})

cancelPostButton.addEventListener('click', ev => {
  modalPost.classList.remove('is-active')
})

languageSelect.addEventListener('change', async ev => {
  const payload = {
    id: UserData.id(),
    lastLanguageId: ev.target.value
  }
  await API.postWithPayload('/api/closed/users/last-language', payload)
    .then(res => res.json())
    .then(json => {
      if (json.ok) {
        localStorage.clear()
        localStorage.setItem('userData', JSON.stringify(json.user))
      }
      UserData.init()
    })
  showPosts()
})

typeSelect.addEventListener('change', async ev => {
  const payload = {
    id: UserData.id(),
    lastTypeId: ev.target.value
  }
  await API.postWithPayload('/api/closed/users/last-type', payload)
    .then(res => res.json())
    .then(json => {
      if (json.ok) {
        localStorage.clear()
        localStorage.setItem('userData', JSON.stringify(json.user))
      }
      UserData.init()
    })
  genreSelect.innerHTML = ''
  newGenres = typesArray.filter(e => e._id === ev.target.value)
  await loadSelect(newGenres[0].genres, genreSelect, null)
  showPosts()
})

genreSelect.addEventListener('change', async ev => {
  const payload = {
    id: UserData.id(),
    lastGenreId: ev.target.value
  }
  await API.postWithPayload('/api/closed/users/last-genre', payload)
    .then(res => res.json())
    .then(json => {
      if (json.ok) {
        localStorage.clear()
        localStorage.setItem('userData', JSON.stringify(json.user))
      }
      UserData.init()
    })
  showPosts()
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

async function loaders () {
  languagesArray = await languagesLoader()
  typesArray = await typesLoader()
  return await true
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

async function loadSideMenu () {
  const loaded = await loaders()
  let ind = null
  const getTypeIndex = async ltype => {
    await typesArray.forEach((e, i) => {
      if (e._id === ltype) {
        ind = i
      }
    })
    return ind ? ind : 0
  }
  await loadSelect(languagesArray, languageSelect, UserData.lastLanguage())
  await loadSelect(typesArray, typeSelect, UserData.lastType())
  ind = await getTypeIndex(UserData.lastType())
  await loadSelect(typesArray[ind].genres, genreSelect, UserData.lastGenre())
}

async function loadPostsWithFilter () {
  const payload = {
    languageId: UserData.lastLanguage(),
    typeId: UserData.lastType(),
    genreId: UserData.lastGenre()
  }
  return await API.postWithPayload('/api/closed/posts/by-filter', payload)
    .then(res => res.json())
    .then(json => json.posts)
}

async function showPosts () {
  postsArea.innerHTML = ''
  postsArray = await loadPostsWithFilter()
  await postsArray.forEach(p => {
    let pc = new PostCard(p)
    pc.show(postsArea)
  })
}

async function loadFullPage () {
  await loadSideMenu()
  await showPosts()
}

formPost.addEventListener('submit', async ev => {
  ev.preventDefault()
  let imageData = null
  const readImage = function () {
    const file = document.getElementById('postimage').files[0]
    const reader = new FileReader()
    reader.onloadend = function () {
      const base64String = reader.result
        .replace('data:', '')
        .replace(/^.+,/, '')
      imageData = base64String
    }
    if (file) {
      reader.readAsDataURL(file)
    }
  }
  readImage()
  setTimeout(async function () {
    const payload = {
      title: ev.target.title.value,
      content: ev.target.text.value,
      authorId: UserData.id(),
      authorFullName: UserData.fullName(),
      languageId: UserData.lastLanguage(),
      typeId: UserData.lastType(),
      genreId: UserData.lastGenre(),
      externalLink: ev.target.externalLink.value,
      image: imageData
    }
    await API.postWithPayload('/api/closed/posts', payload)
    modalPost.classList.remove('is-active')
    await showPosts()

    ev.target.title.value = ''
    ev.target.text.value = ''
    ev.target.externalLink.value = ''
  }, 1500)
})

loadFullPage()
