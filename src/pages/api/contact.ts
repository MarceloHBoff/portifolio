import { VercelRequest, VercelResponse } from '@vercel/node'

import nodemailer from 'nodemailer'

export default (request: VercelRequest, response: VercelResponse): void => {
  const { name, email, text, subject } = request.body

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_EMAIL_PASSWORD
    }
  })

  const mailOption = {
    from: `${email}`,
    to: process.env.GMAIL_EMAIL,
    subject: `Novo email de ${email} - ${subject}`,
    text: `${name} wrote:

    ${text}
    `
  }

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      return response.status(500).send(JSON.stringify(err))
    } else {
      return response.status(200).send('success')
    }
  })
}
