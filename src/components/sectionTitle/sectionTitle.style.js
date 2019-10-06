import styled from 'styled-components'

import { VARIABLES } from '../../constants'

export const Container = styled.div`
  max-width: ${props => props.maxWidth};
  padding: ${VARIABLES.scale['scale-1']}rem;
  position: relative;
  ${props => props.reverse && `margin-left: auto;`}
  ${props => props.pullSize &&
    props.reverse ?
    `margin-right: -${VARIABLES.scale.scale0 * props.pullSize}rem;` :
    `margin-left: -${VARIABLES.scale.scale0 * props.pullSize}rem;`}

  background: ${VARIABLES.colors.secondary};
  border-radius: 5px;

  /* ::before {
    content: '${props => props.before && props.before}';
    position: absolute;
    top: -${VARIABLES.scale['scale-1']}rem;
    left: -${VARIABLES.scale.scale0 * 6.5}rem;

    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    border-bottom: ${VARIABLES.scale['scale-4']}rem solid ${props => props.main ?
  VARIABLES.colors.primary :
  VARIABLES.colors.secondary};
  } */
`

export const Title = styled.h2`
  margin-bottom: 0;
  ${props => props.reverse ? 'text-align: left;' : 'text-align: right;'};
  ${props => props.pullSize &&
    props.reverse ?
    `margin-left: -${VARIABLES.scale.scale0 * props.pullSize}rem;` :
    `margin-right: -${VARIABLES.scale.scale0 * props.pullSize}rem;`}
`
