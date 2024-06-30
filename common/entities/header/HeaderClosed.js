const HeaderOpen = {
    loadConfig: async function () {
      this.preferredLanguage = navigator.language || navigator.userLanguage;
      this.prefLanguage = this.preferredLanguage.split("-")[0]
      this.config = await fetch(`/json/headerclosed-${this.prefLanguage}.json`).then(res => res.json())
      this.appTag = document.getElementsByClassName('App')[0]
      this.contentTag = document.getElementById('Content')
    },
  
    createHero: function () {
      let res = document.createElement('section')
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
      res.setAttribute('class', 'image is-64x64')
      return res
    },
  
    createImg: function () {
      let res = document.createElement('img')
      res.setAttribute('src', '/images/logo_sm.png')
      res.setAttribute('alt', this.config.altLogo)
      return res
    },
  
    createTitle: function () {
      let res = document.createElement('div')
      res.setAttribute('class', 'title title-script-closed')
      res.innerText = this.config.title
      return res
    },
  
    show: async function () {
      await this.loadConfig()
      let hero = this.createHero()
      this.contentTag.before(hero)
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
      let titles = this.createLevelItem()
      levelLeft.appendChild(titles)
      let title = this.createTitle()
      titles.appendChild(title)
      let levelRight = this.createLevelRight()
      nav.appendChild(levelRight)
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
        buttonAnchor.innerText = item.text
        levelRight.appendChild(buttonAnchor)
      })
    }
  }
  
  module.exports = HeaderOpen
  