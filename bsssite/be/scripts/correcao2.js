const fs = require('fs')
const formData = require('form-data')
const Mailgun = require('mailgun.js')
const mailgun = new Mailgun(formData)
const mg = mailgun.client({
  username: 'api',
  key: 'd90ce5fc5133c32703df28947acd3eac-7ca144d2-cd2b965e'
})

seedData = async () => {
  let result = null

  const dadosConteudo = fs.readFileSync('./data/teste2.csv', 'utf-8')
  const dadosConteudoArray = dadosConteudo.split(/\r?\n/)

  gabarito = ['Elaboram', 'D', 'B', 'B', 'A', 'C']

  let testes = []

  dadosConteudoArray.forEach(async (item, ind) => {
    let linha = item.split('$')
    let teste = {}
    teste.data = linha.shift()
    teste.email = linha.shift().toLowerCase()
    teste.respostas = []
    linha.forEach(r => {
      letra = r.split(' - ')
      teste.respostas.push(letra[0])
    })
    acertos = 0
    teste.respostas.forEach((r, ind) => {
      if (r === gabarito[ind]) {
        acertos = acertos + 1
      }
    })
    teste.acertos = acertos
    teste.nota = (10 * acertos) / 6
    testes.push(teste)
  })

  const sendEmail = async function () {
    console.log(`Faltam ${testes.length}`)
    let item = testes.pop()
    mg.messages
      .create('mg.blackscorpion.tech', {
        from: 'BSS Brasil <no-reply@blackscorpion.tech>',
        to: [item.email, 'edvaldoajunior@gmail.com'],
        subject: 'BSS Brasil - Informações para a matrícula',
        text: `Olá!\n\nPara efetuar sua matrícula no nosso Programa de Mentoria você precisa efetuar os seguintes passos:\n\n- Efetuar o pagamento do mês de Outurbro/2023, no valor de R$ 300,00. Esta pagamento pode ser feito via PIX para a chave (47)99626-2369;\n\n- Preencher o formulário de matrícula no link https://bit.ly/bss_mentoria_mat\n\nÉ bom esclarecer que este valor é referente ao primeiro mês de mentoria, ou seja, Outubro/2023, no período de 02/10/2023 até 31/10/2023. Não cobramos taxa de matrícula.\n\nEm até 48 horas após efetuar sua matrícula, você receberá um comprovante de matrícula, de quitação do primeiro mês e todas as instruções para acessar a Área Reservada da Mentoria no site da BSS Brasil.\n\nNós resolvemos dar uma semana antecipada de aulas abertas e a nossa Aula Inaugural será hoje, 25/09/2023, às 20 horas, no link https://bit.ly/bss_aula_inaugural. Contamos com a sua participação.\n\nAtenciosamente,\nEquipe da BSS Brasil`
      })
      .then(msg => console.log(msg))
      .catch(err => console.log(err))
  }

  const intervalMilliseconds = 0.5 * 60 * 1000
  const intervalId = setInterval(sendEmail, intervalMilliseconds)
}

seedData()
