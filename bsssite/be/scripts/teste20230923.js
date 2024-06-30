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

let myLista

const preparaLista = async function () {
  const lista1 = await loadData()
  myLista = await lista1.filter(a => a.status === 'Não fez o teste')
}

const enviaMensagens = async function () {
  await preparaLista()

  const sendEmail = async function () {
    console.log(`Faltam ${myLista.length}`)
    let item = myLista.pop()
    mg.messages
      .create('mg.blackscorpion.tech', {
        from: 'BSS Brasil <no-reply@blackscorpion.tech>',
        to: [item.email, 'edvaldoajunior@gmail.com'],
        subject: 'BSS Brasil - Instruções para o teste de amanhã (23/09/2023)',
        text: `Olá ${item.fullName}!\n\nAmanhã é sábado, 23/09/2023, e você terá uma segunda oportunidade para fazer o teste para o Programa de Mentoria da BSS Brasil.\n\nAs instruções para realizar o teste estão em https://blackscorpion.click/pt-br/instrucoes e pedimos que leia com atenção esta página, do começo ao fim.\n\nO Programa de Mentoria será iniciado no dia 25/09/2023. A Aula Inaugural ocorrerá em uma live pública no Youtube (https://youtube.com/live/yttXKosv-Bo), que será realizada às 20 horas. Contamos com a sua participação.\n\nDevido ao prazo exíguo entre o teste e a Aula Inaugural, salientamos que você terá até o dia 30/09/2023 para realizar sua matrícula, no caso de aprovação.\n\nDesejamos que tenha uma boa prova e esperamos encontrar você em nosso Programa de Mentoria.\n\nAtenciosamente,\nEquipe da BSS Brasil`
      })
      .then(msg => console.log(msg))
      .catch(err => console.log(err))
  }

  const intervalMilliseconds = 0.5 * 60 * 1000
  const intervalId = setInterval(sendEmail, intervalMilliseconds)
}

enviaMensagens()
