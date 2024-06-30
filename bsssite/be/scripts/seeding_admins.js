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

  data = {
    fullName: 'Ed de Almeida',
    email: 'eddealmeida@blackscorpion.tech',
    rg: '927.059.107-78',
    cpf: '14.446.829-5 SSP/PR',
    password: '4lf483t0',
    roles: 'user|professor|admin|superadmin|newsletter',
    status: 'Staff',
    acertos: 0,
    nota: 0,
    afirmativa: false
  }
  result = await postData('open', 'users', data)

  data = {
    fullName: 'Dai Fanchin',
    email: 'daifanchin@blackscorpion.tech',
    rg: '7.516.035-6 SSP/PR',
    cpf: '042.226.539-00',
    password: '4lf483t0',
    roles: 'user|professor|admin|superadmin|newsletter',
    status: 'Staff',
    acertos: 0,
    nota: 0,
    afirmativa: false
  }
  result = await postData('open', 'users', data)

  data = {
    fullName: 'Daniel Magno',
    email: 'danielmagno@blackscorpion.tech',
    rg: '14.707.862',
    cpf: '075.287.806-93',
    password: '4lf483t0',
    roles: 'user|professor|admin|newsletter',
    status: 'Staff',
    acertos: 0,
    nota: 0,
    afirmativa: false
  }
  result = await postData('open', 'users', data)

  data = {
    fullName: 'Nymeria Ronan',
    email: 'nymeriaronan@blackscorpion.tech',
    rg: '349.960-2 SSP/PB',
    cpf: '085.188.224-24',
    password: '123mudar',
    roles: 'user|admin|newsletter',
    status: 'Staff',
    acertos: 0,
    nota: 0,
    afirmativa: true
  }
  result = await postData('open', 'users', data)
}

seedData()
