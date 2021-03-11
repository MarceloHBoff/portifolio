import Head from 'next/head'

import { FormEvent, useCallback, useState } from 'react'
import {
  Container,
  Form,
  Input,
  Submit,
  SubTitle,
  TextArea,
  Title
} from 'styles/pages/contact'

interface HomeProps {
  title: string
}

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

type FormDataKey = keyof FormData

export default function Contact({ title }: HomeProps) {
  const [data, setData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const setFormData = useCallback((key: FormDataKey, value: string) => {
    setData(d => ({ ...d, [key]: value }))
  }, [])

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      console.log(data)
    },
    [data]
  )

  return (
    <Container>
      <Head>
        <title>Marcelo Boff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Se interresou pelo meu trabalho?</Title>
      <SubTitle>
        Entre em contato comigo por aqui ou por alguma das minhas redes sociais
      </SubTitle>

      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Digite seu nome"
          value={data.name}
          onChange={e => setFormData('name', e.target.value)}
        />
        <Input
          placeholder="Digite seu e-mail"
          value={data.email}
          onChange={e => setFormData('email', e.target.value)}
        />
        <Input
          placeholder="Digite o assunto"
          value={data.subject}
          onChange={e => setFormData('subject', e.target.value)}
        />
        <TextArea
          placeholder="Digite a mensagem"
          value={data.message}
          onChange={e => setFormData('message', e.target.value)}
        />
        <Submit type="submit">Enviar</Submit>
      </Form>
    </Container>
  )
}
