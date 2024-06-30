module.exports = {
  loadConfig: async function () {
    this.preferredLanguage = navigator.language || navigator.userLanguage
    this.prefLanguage = this.preferredLanguage.split('-')[0]
    this.config = await fetch(
      `/json/footeropen-${this.prefLanguage}.json`
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

  createHeroBody: function (id) {
    let res = document.createElement('div')
    res.setAttribute('class', 'hero-body')
    return res
  },

  createNav: function () {
    let res = document.createElement('nav')
    res.setAttribute('class', 'level')
    return res
  },

  createLevelLeft: function () {
    let res = document.createElement('div')
    res.setAttribute('class', 'level-left')
    return res
  },

  createLevelRight: function () {
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

  show: async function () {
    await this.loadConfig()
    let hero = this.createHero('footer-hero1')
    this.contentTag.appendChild(hero)
    let heroBody = this.createHeroBody()
    hero.appendChild(heroBody)
    let nav = this.createNav()
    heroBody.appendChild(nav)
    let levelLeft = this.createLevelLeft()
    nav.appendChild(levelLeft)
    let itemLogo = this.createLevelItem()
    levelLeft.appendChild(itemLogo)
    let figure = this.createFigure()
    itemLogo.appendChild(figure)
    let logo = this.createImg()
    figure.appendChild(logo)

    let copyrightMessage = document.createElement('div')
    copyrightMessage.innerHTML = '<span>Copyright &copy; 2023</span>'
    levelLeft.appendChild(copyrightMessage)

    let hero2 = this.createHero('footer-hero2')
    this.contentTag.appendChild(hero2)
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
      buttonAnchor.innerHTML = item.text
      nav2.appendChild(buttonAnchor)
    })

    let hero3 = this.createHero('footer-hero3')
    this.contentTag.appendChild(hero3)
    let heroBody3 = this.createHeroBody()
    hero3.appendChild(heroBody3)
    let nav3 = this.createNav()
    heroBody3.appendChild(nav3)
    this.config.socialNetworks.forEach(item => {
      let buttonDiv = document.createElement('div')
      buttonDiv.setAttribute('class', 'level-item')
      let buttonAnchor = document.createElement('a')
      buttonAnchor.setAttribute('href', item.url)
      buttonAnchor.setAttribute('target', '_new')
      buttonDiv.appendChild(buttonAnchor)

      let figure = document.createElement('figure')
      figure.setAttribute('class', 'image is-64x64')
      buttonAnchor.appendChild(figure)

      let img = document.createElement('img')
      img.setAttribute('src', item.logo)
      img.setAttribute('alt', item.title)
      img.setAttribute('class', 'is-rounded')
      figure.appendChild(img)
      nav3.appendChild(buttonDiv)
    })
  }
}
