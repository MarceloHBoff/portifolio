import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  margin-top: 2rem;
  font-size: ${props => props.theme.font.sizes.xxlarge};
`

export const SubTitle = styled.h2`
  margin-top: 1rem;
  font-weight: ${props => props.theme.font.light};
  font-size: ${props => props.theme.font.sizes.xlarge};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 60rem;
  margin-top: 10rem;
`

export const Input = styled.input`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  font-size: ${props => props.theme.font.sizes.small};

  border: 0;
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.sizes.small};

  resize: vertical;
  min-height: 10rem;
  max-height: 30rem;
`

export const Submit = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;

  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.font.sizes.large};
  font-weight: ${props => props.theme.font.bold};

  transition: all 0.3s ease-in-out;

  :hover {
    background: ${props => props.theme.colors.primaryDark};
  }
`
