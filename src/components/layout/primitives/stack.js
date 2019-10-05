import styled from 'styled-components'

export const Stack = styled.div`
  > * + * {
    margin-top: 1.5rem;
  }

  * + * {
    ${props => props.recursive && 'margin-top: 1.5rem;'}
  }
`
