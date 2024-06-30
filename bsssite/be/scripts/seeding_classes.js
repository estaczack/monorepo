const fs = require('fs')

const postData = async (oc, url, data) => {
  let fetchURL = `http://localhost:3000/api/${oc}/${url}`
  return await fetch(fetchURL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
}

seedData = async () => {
  let result = null

  const dadosConteudo = fs.readFileSync('./data/aulas.json', 'utf-8')
  const dadosConteudoJson = JSON.parse(dadosConteudo)
  const keys = Object.keys(dadosConteudoJson)

  keys.forEach(async (item, i) => {
    let myWeek = dadosConteudoJson[item]
    myWeek.forEach(async (aula, j) => {
      let lesson = {}
      lesson.week = item
      lesson.subject = aula.text
      lesson.link = aula.link
      result = await postData('closed', 'lessons', lesson)
      console.log(result)
    })
  })
}

seedData()
