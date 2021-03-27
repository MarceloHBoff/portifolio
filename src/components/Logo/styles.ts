import styled from 'styled-components'

export const Container = styled.div`
  animation: animation 2s ease-in-out infinite;

  @keyframes animation {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.05);
    }

    100% {
      transform: scale(1);
    }
  }
`
