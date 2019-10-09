import styled from 'styled-components'

import { VARIABLES } from '../../constants'

export const Ul = styled.ul`
  ${props => !props.bullets && 'list-style: none'};
  margin: 0;
  ${props => props.marginTop && `margin-top: ${VARIABLES.scale.scale1}rem;`}
  padding: 0;
`
