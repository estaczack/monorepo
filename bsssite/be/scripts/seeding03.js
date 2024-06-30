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

  const dadosConteudoArray = [
    {
      nome: 'Lidiano José Silva de Jesus',
      email: 'jesuslidiano@yahoo.com.br',
      rg: '1049736281',
      cpf: '59394358072',
      status: 'Não fez o teste'
    }
  ]

  dadosConteudoArray.forEach(async (item, ind) => {
    let pessoa = {}
    pessoa.fullName = item.nome.toUpperCase()
    pessoa.email = item.email.toLowerCase()
    pessoa.rg = item.rg
    pessoa.cpf = item.cpf
    pessoa.nota = 0
    pessoa.roles = 'user'
    pessoa.status = 'Não fez o teste'
    pessoa.password = '123mudar'
    pessoa.afirmativa = false
    result = await postData('open', 'users', pessoa)
  })
}

seedData()
