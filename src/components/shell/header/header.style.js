import styled from 'styled-components'

import { VARIABLES } from '../../../constants'

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 1em 1.5em;
`

export const Title = styled.h2`
  color: ${VARIABLES.colors.text};
  margin: 0;
  transition: all 250ms ease-in-out;
  :hover,
  :focus {
    transform: scale(1.01);
    color: ${VARIABLES.colors.primary};
  }
`

export const SubTitle = styled.h3`
  margin: 0 0 0 auto;
  text-align: right;
`
