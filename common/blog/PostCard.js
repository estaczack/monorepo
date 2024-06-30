const API = require('../api/api')
const UserData = require('../users/UserData')
const Message = require('../messages/Message')

class PostCardSummary {
  constructor (post) {
    this.id = post._id
    this.title = post.title
    this.content = post.content
    this.image = post.image
    this.user_id = post.user_id
    this.authorFullName = post.authorFullName
    this.likes = post.likes
    this.authorId = post.authorId
    this.externalLink = post.externalLink
    this.createdAt = post.createdAt
    this.updatedAt = post.updatedAt
    this.userLiked = null
    UserData.init()
  }

  getLikedHeart = function () {
    return this.userLiked
      ? "<i class='fa-solid fa-heart'></i>"
      : "<i class='fa-regular fa-heart'></i>"
  }

  getLikedStatus = async function () {
    const payload = { postId: this.id, userId: UserData.id() }
    return await API.postWithPayload(
      '/api/closed/posts/user-liked',
      payload
    ).then(res => res.json())
  }

  togglePostLike = async function (ev) {
    this.userLiked = !this.userLiked
    const payload = { postId: this.id, userId: UserData.id() }
    await API.postWithPayload('/api/closed/posts/toggle-like', payload)
      .then(res => res.json())
      .then(json => json.post)
      .then(json => {
        let postCountArea = document.getElementById(`post-${this.id}`)
        postCountArea.innerText = json.likes.length
      })
  }

  hasImage = function () {
    if (this.image === 'null') return false
    if (this.image === 'undefined') return false
    return true
  }

  formattedDate = function () {
    let months = 'Jan|Feb|Mar|Abr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec'.split('|')
    let dt = this.updatedAt.split(' ')[0]
    let hr = this.updatedAt.split(' ')[1]
    let dtParts = dt.split('-').map(e => parseInt(e, 10))
    let dtSuffix = 'th'
    dtSuffix = dtParts[2] === 1 ? 'st' : dtSuffix
    dtSuffix = dtParts[2] === 21 ? 'st' : dtSuffix
    dtSuffix = dtParts[2] === 31 ? 'st' : dtSuffix
    dtSuffix = dtParts[2] === 2 ? 'nd' : dtSuffix
    dtSuffix = dtParts[2] === 22 ? 'nd' : dtSuffix
    dtSuffix = dtParts[2] === 3 ? 'rd' : dtSuffix
    dtSuffix = dtParts[2] === 23 ? 'rd' : dtSuffix
    let res = `${months[dtParts[1]]} ${dtParts[2]}${dtSuffix}, ${
      dtParts[0]
    } - ${hr} (GMT)`
    return res
  }

  show = async function (area) {
    this.userLiked = await this.getLikedStatus()

    let postEnvelope = document.createElement('div')
    postEnvelope.setAttribute('class', 'block')
    area.appendChild(postEnvelope)

    let myPost = document.createElement('div')
    myPost.setAttribute('class', 'card')
    postEnvelope.appendChild(myPost)

    let cardHeader = document.createElement('header')
    cardHeader.setAttribute('class', 'card-header is-pink')
    myPost.appendChild(cardHeader)

    let authorAndDate = document.createElement('p')
    authorAndDate.setAttribute('class', 'card-header-title')

    let authorAnchor = document.createElement('a')
    authorAnchor.setAttribute('class', 'card-footer-item')
    authorAnchor.setAttribute('href', '#') // TODO: link to author profile
    authorAnchor.innerText =
      this.authorFullName + '  -  ' + this.formattedDate()
    cardHeader.appendChild(authorAnchor)

    if (this.hasImage()) {
      let cardImage = document.createElement('div')
      cardImage.setAttribute('class', 'card-image')
      myPost.appendChild(cardImage)

      let cardFigure = document.createElement('figure')
      cardFigure.setAttribute('class', 'image is-4x3')
      cardImage.appendChild(cardFigure)

      let cardImg = document.createElement('img')
      cardImg.setAttribute('src', `data:image/jpeg;base64, ${this.image}`)
      cardImg.setAttribute('alt', 'Placeholder 4x3')
      cardFigure.appendChild(cardImg)
    }

    let cardContent = document.createElement('div')
    cardContent.setAttribute('class', 'card-content')
    myPost.appendChild(cardContent)

    if (this.externalLink.trim() !== '') {
      let elink = document.createElement('div')
      elink.innerHTML = `<span>Link: </span><a href='${this.externalLink}}' target='_new'>${this.externalLink}</a>`
      cardContent.appendChild(elink)
      cardContent.appendChild(document.createElement('hr'))
    }

    let title = document.createElement('h1')
    title.setAttribute('class', 'is-size-5')
    title.innerHTML = `<strong>${this.title}</strong>`
    cardContent.appendChild(title)

    cardContent.appendChild(document.createElement('hr'))

    let content = document.createElement('div')
    content.setAttribute('class', 'content')
    content.innerText = this.content
    cardContent.appendChild(content)

    let cardFooter = document.createElement('footer')
    cardFooter.setAttribute('class', 'card-footer')
    myPost.appendChild(cardFooter)

    let likeArea = document.createElement('a')
    likeArea.setAttribute('class', 'card-footer-item')
    likeArea.setAttribute('href', '#')
    likeArea.setAttribute('data-disabled', this.authorId === UserData.id())
    likeArea.innerHTML = this.getLikedHeart()
    cardFooter.appendChild(likeArea)

    likeArea.addEventListener('click', ev => {
      ev.preventDefault()
      if (ev.target.dataset.disabled === 'false') {
        this.togglePostLike(ev)
        likeArea.innerHTML = this.getLikedHeart()
      } else {
        Message('danger', "You can't like your own posts!")
      }
    })

    let likeCountArea = document.createElement('a')
    likeCountArea.setAttribute('class', 'card-footer-item')
    likeCountArea.setAttribute('id', `post-${this.id}`)
    likeCountArea.innerText = this.likes.length
    cardFooter.appendChild(likeCountArea)

    let postCommentArea = document.createElement('a')
    postCommentArea.setAttribute('class', 'card-footer-item')
    authorAnchor.setAttribute('href', '#') // TODO: link to open a post comment
    postCommentArea.innerText = 'Comment'
    cardFooter.appendChild(postCommentArea)

    area.appendChild(myPost)
  }
}

module.exports = PostCardSummary
