// Dependencies
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: inline;
  background: ${props => props.isVisible ? 'none' : '#000'};
  user-select: none;
`
