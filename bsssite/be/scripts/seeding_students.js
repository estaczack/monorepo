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

  const dadosConteudo = fs.readFileSync('./data/matriculados.csv', 'utf-8')
  const dadosConteudoArray = dadosConteudo.split(/\r?\n/)

  dadosConteudoArray.forEach(async (item, ind) => {
    let linha = item.split('$')
    console.log(linha)
    let pessoa = {}
    pessoa.fullName = linha[2].toUpperCase()
    pessoa.email = linha[1].toLowerCase()
    pessoa.rg = 'Completar'
    pessoa.cpf = 'Completar'
    pessoa.nota = 10
    pessoa.roles = 'user|student|newsletter'
    pessoa.status = 'matriculado'
    result = await postData('open', 'users', pessoa)
    console.log(result)
  })
}

seedData()
