module.exports = function (parent, arr) {
  arr.forEach(elem => {
    let col = document.createElement('div')
    col.setAttribute('class', 'column is-3')
    parent.appendChild(col)

    let card = document.createElement('div')
    card.setAttribute('class', 'card is-light-gray')
    col.appendChild(card)

    let cardImage = document.createElement('div')
    cardImage.setAttribute('class', 'card-image')
    card.appendChild(cardImage)

    let cardFigure = document.createElement('figure')
    cardFigure.setAttribute('class', 'image')
    cardImage.appendChild(cardFigure)

    let cardImg = document.createElement('img')
    cardImg.setAttribute('src', elem.image)
    cardFigure.appendChild(cardImg)

    let cardContentWrapper = document.createElement('div')
    cardContentWrapper.setAttribute('class', 'card-content')
    card.appendChild(cardContentWrapper)

    let cardContent = document.createElement('div')
    cardContent.setAttribute('class', 'content is-size-6')
    cardContent.innerHTML = elem.text
    cardContentWrapper.appendChild(cardContent)
  })
}
