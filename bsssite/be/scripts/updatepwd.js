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

const loadData = async function () {
  return fetch('http://localhost:3000/api/closed/users/')
    .then(res => res.json())
    .then(json => json.users)
}

let myLista

const preparaLista = async function () {
  const lista1 = await loadData()
  myLista = await lista1.filter(a => a.status !== 'Staff')
}

const enviaMensagens = async function () {
  await preparaLista()

  const updatePssword = async function () {
    console.log(`Faltam ${myLista.length}`)
    let item = myLista.pop()
    let payload = {
      id: item._id,
      newPwd: '123mudar'
    }
    let result = await postData('closed', 'users/updatepwd', payload)
    console.log(result)
  }

  const intervalMilliseconds = 0.01 * 60 * 1000
  const intervalId = setInterval(updatePssword, intervalMilliseconds)
}

enviaMensagens()
