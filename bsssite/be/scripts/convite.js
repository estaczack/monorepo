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
        subject: 'BSS Brasil - Convite para a Aula Inaugural',
        text: `Olá ${item.fullName}!\n\nHoje, segunda-feira, 25/09/2023, teremos a nossa Aula Inaugural do Programa de Mentoria da BSS, que será transmitida pelo link https://bit.ly/bss_aula_inaugural e ficará gravada no Youtube.\n\nEsta primeira semana de aula será aberta, então você poderá participar mesmo se não houver efetuado sua matrícula. Tem tempo para isso antes do início oficial das aulas fechadas, que será na próxima segunda-feira, 02/10/2023.\n\nPor isso mesmo, queremos muito que você participe da nossa Aula Inaugural, onde vamos explicar em detalhes tudo sobre a mentoria e sobre a BSS.\n\nQueremos também que saiba que não somos uma empresa focada apenas no dinheiro. Se você não fez ainda a sua matrícula porque está com problemas nessa área, responda a esse email explicando seus motivos e teremos prazer em achar uma forma de garantir a sua participação.\n\nAtenciosamente,\nEquipe da BSS Brasil`
      })
      .then(msg => console.log(msg))
      .catch(err => console.log(err))
  }

  const intervalMilliseconds = 0.1 * 60 * 1000
  const intervalId = setInterval(sendEmail, intervalMilliseconds)
}

enviaMensagens()
