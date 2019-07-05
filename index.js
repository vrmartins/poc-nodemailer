const nodemailer = require('nodemailer')
const fs = require('fs')

const sendEmail = (params) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'marcelo.wolff78@ethereal.email',
      pass: 'EQMZ1vCb78a4Q4vvZJ'
    }
  })
  return transporter
    .sendMail(params)
    .then((info) => {
      console.log('Message sent: %s', info.messageId)
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
      return info
    })
}

const fileDir = `${__dirname}/files/C3PO-Batman.png`
const emailParams = {
  from: '"C-3PO" <c3po@starwars.com>',
  to: 'r2d2@starwars.com, luke@starwars.com',
  subject: 'Oh Céus!!! Esse é só um teste!',
  text: 'Sou fluente em 6 milhões de meios de comunicação. Não sabia!?',
  html: '<b>Sou fluente em 6 milhões de meios de comunicação. Não sabia!?</b>',
  attachments: [
    {
      filename: 'C3PO-Batman.png',
      // path: fileDir
      content: Buffer.from(fs.readFileSync(fileDir))
    }
  ]
}

sendEmail(emailParams)
  .then((info) => {
    console.log('info ===>', info)
  })
  .catch(console.error)
