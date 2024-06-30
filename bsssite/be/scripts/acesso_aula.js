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
        subject: 'BSS Brasil - Acesso ao portal e aula de Inglês',
        text: `Olá ${item.fullName}!\n\nEm função de alguns problemas no processamento do cadastro de matriculados (assista https://youtu.be/7_hqvMUlAbc) nós tivemos um pequeno atraso no lançamento do nosso Portal de Mentoria, pois estamos revisando as matrículas uma por uma para evitar duplicidades.\n\nIsso, porém, não trará nenhum prejuízo a você que se matriculou. Você poderá assistir a aula de Inglês hoje, normalmente, pontualmente às 20 horas, no link: https://whereby.com/magndonfeatbss \n\nAmanhã você receberá um email com os dados de acesso ao portal, incluindo uma senha provisoria que deve ser alterada no seu primeiro acesso.\n\nContamos com a sua compreensão para esse pequeno atraso e fizemos de tudo para ter certeza de que isso não criará nenhum transtorno para você.\n\nAtenciosamente,\nEquipe da BSS Brasil`
      })
      .then(msg => console.log(msg))
      .catch(err => console.log(err))
  }

  const intervalMilliseconds = 0.75 * 60 * 1000
  const intervalId = setInterval(sendEmail, intervalMilliseconds)
}

enviaMensagens()
