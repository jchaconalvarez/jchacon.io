import styled from 'styled-components'

import { VARIABLES } from '../../../constants'

export const Stack = styled.div`
  > * + * {
    margin-top: ${VARIABLES.scale.scale1}rem;
  }

  * + * {
    ${props => props.recursive && `margin-top: ${VARIABLES.scale.scale1}rem`}
  }
`
