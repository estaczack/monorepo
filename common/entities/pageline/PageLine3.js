module.exports = function (parent, arr) {
  arr.forEach((elem, ind) => {
    let col = document.createElement('div')
    col.setAttribute('class', 'column is-3')
    parent.appendChild(col)

    let card = document.createElement('div')
    card.setAttribute('class', 'card is-light-gray')
    col.appendChild(card)

    let cardHeader = document.createElement('header')
    cardHeader.setAttribute('class', 'card-header')

    let title = document.createElement('div')
    title.setAttribute('class', 'card-header-title')
    title.innerText = elem.title
    cardHeader.appendChild(title)

    let cardContent = document.createElement('div')
    cardContent.setAttribute('class', 'card-content')
    card.appendChild(cardContent)

    let media = document.createElement('div')
    media.setAttribute('class', 'media')
    cardContent.appendChild(media)

    let mediaLeft = document.createElement('div')
    mediaLeft.setAttribute('class', 'media-left')
    media.appendChild(mediaLeft)

    let figure = document.createElement('figure')
    figure.setAttribute('class', 'image')
    mediaLeft.appendChild(figure)

    let img = document.createElement('img')
    let nimg = ind + 1 > 9 ? `${ind + 1}.png` : `0${ind + 1}.png`
    img.setAttribute('src', `/images/nbullets/b${nimg}`)
    figure.appendChild(img)

    let mediaContent = document.createElement('div')
    mediaContent.setAttribute('class', 'media-content')
    media.appendChild(mediaContent)

    let content = document.createElement('div')
    content.setAttribute('class', 'content')
    content.innerHTML = `<div><strong>${elem.title}</strong></div><div>${elem.text}</div>`
    cardContent.appendChild(content)
  })
}
