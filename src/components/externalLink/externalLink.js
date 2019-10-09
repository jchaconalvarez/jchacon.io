import styled from 'styled-components'

import { VARIABLES } from '../../constants'

export const ExternalLink = styled.a.attrs({ target: '_blank' })`
  text-decoration: none;
  color: ${VARIABLES.colors.primary};
  font-weight: 800;
  font-family: 'Raleway', sans-serif;
  font-size: ${VARIABLES.scale.scale1}rem;

  :hover,
  :focus,
  :visited {
    color: ${VARIABLES.colors.primaryDark};
  }
`
