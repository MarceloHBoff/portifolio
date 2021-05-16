import { GetStaticProps } from 'next'
import Head from 'next/head'

import PrismicDOM from 'prismic-dom'
import { FormEvent, useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { fetchApi } from 'service/prismic'
import * as S from 'styles/pages/contact'

type Social = {
  uid: string
  description: string
  image: string
  url: string
}

type ContactProps = {
  socials: Social[]
}

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

type FormDataKey = keyof FormData

export default function Contact({ socials }: ContactProps) {
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

      toast.info('Email em processamento!')

      fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          text: data.message
        })
      })
        .then(() => {
          toast.success('Email enviado com sucesso!')
          setData({
            name: '',
            email: '',
            subject: '',
            message: ''
          })
        })
        .catch(err => toast.error(err))
    },
    [data]
  )

  return (
    <S.Container>
      <Head>
        <title>Contato | Marcelo Boff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <S.Form onSubmit={handleSubmit}>
        <S.Title>Se interresou pelo meu trabalho?</S.Title>
        <S.SubTitle>
          Entre em contato comigo por aqui ou por alguma das minhas redes
          sociais
        </S.SubTitle>
        <S.Input
          placeholder="Digite seu nome"
          value={data.name}
          onChange={e => setFormData('name', e.target.value)}
        />
        <S.Input
          placeholder="Digite seu e-mail"
          value={data.email}
          onChange={e => setFormData('email', e.target.value)}
        />
        <S.Input
          placeholder="Digite o assunto"
          value={data.subject}
          onChange={e => setFormData('subject', e.target.value)}
        />
        <S.TextArea
          placeholder="Digite a mensagem"
          value={data.message}
          onChange={e => setFormData('message', e.target.value)}
        />
        <S.Submit type="submit">Enviar</S.Submit>
      </S.Form>

      <S.Socials>
        {socials.map(social => (
          <S.Social key={social.uid}>
            <a
              target="_blank"
              rel="noreferrer"
              href={social.url}
              title={social.description}
            >
              <img src={social.image} alt={social.description} />
            </a>
          </S.Social>
        ))}
      </S.Socials>
    </S.Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const social = await fetchApi(
    `
    query {
      allSocials {
        edges {
          node {
            _meta {
              uid
            }
            description
            image
            url
          }
        }
      }
    }
  `,
    {}
  )

  return {
    props: {
      socials: social.allSocials.edges.map(({ node }: any) => ({
        uid: node._meta.uid,
        description: PrismicDOM.RichText.asText(node.description),
        image: node.image.url,
        url: node.url
      }))
    },
    revalidate: 60 * 60 * 24 // 24 horas
  }
}
