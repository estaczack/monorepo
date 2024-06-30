const fs = require('fs')
const formData = require('form-data')
const Mailgun = require('mailgun.js')
const mailgun = new Mailgun(formData)
const mg = mailgun.client({
  username: 'api',
  key: 'd90ce5fc5133c32703df28947acd3eac-7ca144d2-cd2b965e'
})

const loadData = async function () {
  return fetch('http://localhost:3000/api/closed/users/')
    .then(res => res.json())
    .then(json => json.users)
}

const preparaLista = async function () {
  return await loadData()
}

const enviaMensagens = async function () {
  let myLista = await preparaLista()

  const sendEmail = async function () {
    console.log(`Faltam ${myLista.length}`)
    let item = myLista.pop()
    mg.messages
      .create('mg.blackscorpion.tech', {
        from: 'BSS Brasil <no-reply@blackscorpion.tech>',
        to: [item.email],
        subject: 'BSS Brasil - Aula de Lógica de Programação, Algoritmos e Estruturas de Dados (04/10/2023)',
        text: `Olá ${item.fullName}!\n\nVocê poderá assistir a aula de Lógica de Programação, Algoritmos e Estruturas de Dados hoje no link https://youtube.com/live/hTrflXcVZTg \n\nAtenciosamente,\nEquipe da BSS Brasil`
      })
      .then(msg => console.log(msg))
      .catch(err => console.log(err))
  }

  const intervalMilliseconds = 0.2 * 60 * 1000
  const intervalId = setInterval(sendEmail, intervalMilliseconds)
}

enviaMensagens()
