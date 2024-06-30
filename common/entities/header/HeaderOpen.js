module.exports = {
  loadConfig: async function () {
    this.preferredLanguage = navigator.language || navigator.userLanguage
    this.prefLanguage = this.preferredLanguage.split('-')[0]
    this.config = await fetch(
      `/json/headeropen-${this.prefLanguage}.json`
    ).then(res => res.json())
    this.appTag = document.getElementsByClassName('App')[0]
    this.contentTag = document.getElementById('Content')
  },

  createHero: function (id) {
    let res = document.createElement('section')
    res.setAttribute('id', id)
    res.setAttribute('class', 'hero is-small is-very-dark')
    return res
  },

  createHeroBody: function () {
    let res = document.createElement('div')
    res.setAttribute('class', 'hero-body')
    return res
  },

  createNav: function () {
    let res = document.createElement('nav')
    res.setAttribute('class', 'level')
    return res
  },

  createNavLeft: function () {
    let res = document.createElement('div')
    res.setAttribute('class', 'level-left')
    return res
  },

  createNavRight: function () {
    let res = document.createElement('div')
    res.setAttribute('class', 'level-right')
    return res
  },

  createLevelItem: function () {
    let res = document.createElement('div')
    res.setAttribute('class', 'level-item')
    return res
  },

  createFigure: function () {
    let res = document.createElement('figure')
    res.setAttribute('class', 'image is-128x128')
    return res
  },

  createImg: function () {
    let res = document.createElement('img')
    res.setAttribute('src', '/images/logo_sm.png')
    res.setAttribute('alt', this.config.altLogo)
    return res
  },

  createSimpleDiv: function () {
    let res = document.createElement('div')
    return res
  },

  createTitle: function () {
    let res = document.createElement('div')
    res.setAttribute('class', 'title separador-titulo-subtitulo title-script')
    res.innerText = this.config.title
    return res
  },

  createSubtitle: function () {
    let res = document.createElement('div')
    res.setAttribute('class', 'subtitle subtitle-thin')
    res.innerText = this.config.subtitle
    return res
  },

  show: async function () {
    await this.loadConfig()
    let hero = this.createHero('main-hero')
    this.contentTag.before(hero)
    let heroBody = this.createHeroBody()
    hero.appendChild(heroBody)
    let nav = this.createNavLeft()
    heroBody.appendChild(nav)
    let itemLogo = this.createLevelItem()
    nav.appendChild(itemLogo)
    let figure = this.createFigure()
    itemLogo.appendChild(figure)
    let logo = this.createImg()
    figure.appendChild(logo)
    let titles = this.createLevelItem()
    nav.appendChild(titles)
    let simpleDiv = this.createSimpleDiv()
    titles.appendChild(simpleDiv)
    let title = this.createTitle()
    simpleDiv.appendChild(title)
    let subtitle = this.createSubtitle()
    simpleDiv.appendChild(subtitle)

    let hero2 = this.createHero('menu-hero')

    this.contentTag.before(hero2)

    let heroBody2 = this.createHeroBody()
    hero2.appendChild(heroBody2)

    let nav2 = this.createNav()
    heroBody2.appendChild(nav2)

    this.config.menu.forEach(item => {
      let buttonDiv = document.createElement('div')
      buttonDiv.setAttribute('class', 'level-item')
      let buttonAnchor = document.createElement('a')
      buttonAnchor.setAttribute('href', item.url)
      if (item.status == 'normal') {
        buttonAnchor.setAttribute('class', this.config.normalClasses)
      } else {
        buttonAnchor.setAttribute('class', this.config.emphasisClasses)
      }
      if (item.external == 'y') {
        buttonAnchor.setAttribute('target', '_new')
      }
      buttonAnchor.innerText = item.text
      nav2.appendChild(buttonAnchor)
    })
  }
}
