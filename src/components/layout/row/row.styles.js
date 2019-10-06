import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`
