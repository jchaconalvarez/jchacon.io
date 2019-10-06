import styled from 'styled-components'

export const Container = styled.div`
  min-width: 50%;
  padding: 2rem;
  ${props => props.noTitle && 'padding-top: 6.6rem;'}

  @media screen and (max-width: 600px) {
    & {
      padding-top: 0rem
    }
  }
`
