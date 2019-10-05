import styled from 'styled-components'
import PropTypes from 'prop-types'

import { VARIABLES } from '../../constants'

export const Container = styled.div`
  max-width: 55%;
  margin-top: ${props => props.main && VARIABLES.scale.scale2}rem;

  padding: ${VARIABLES.scale['scale-1']}rem;
  position: relative;
  ${props => props.main ?
    ` margin-left: auto;
      background: ${VARIABLES.colors.primary};` : `
      margin-right: auto;
      background: ${VARIABLES.colors.secondary};
    `}

  ::before {
    content: '${props => props.before && props.before}';
    position: absolute;
    top: -${VARIABLES.scale['scale-1']}rem;
    left: -${VARIABLES.scale.scale0 * 6.5}rem;

    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    border-bottom: ${VARIABLES.scale['scale-4']}rem solid ${props => props.main ?
  VARIABLES.colors.primary :
  VARIABLES.colors.secondary};
  }
`

export const MainTitle = styled.h1`
  margin-bottom: 0;
  font-weight: 800;
  margin-left: ${VARIABLES.scale.scale1}rem;

  ::before {
    content: '${props => props.number && props.number}';
    position: absolute;
    left: -${props => props.number && VARIABLES.scale[`scale${props.number.length}`]}rem;
    top: -${VARIABLES.scale.scale0}rem;

    font-size: ${props => props.number.length > 1 ?
    `${VARIABLES.scale['scale3']}rem` :
    `${VARIABLES.scale['scale3']}rem`};
  }
`

export const SectionTitle = styled.h2`
  margin-left: auto;
  ${props => props.pullSize && `margin-right: -${props.pullSize * VARIABLES.scale.scale0}rem;`}
`

export const Number = styled.span`
  font-size: ${VARIABLES.scale.scale2}rem;
  ${props => props.pullSize && `padding-left: ${props.pullSize * VARIABLES.scale.scale5}rem;`}
`

MainTitle.propTypes = {
  pullSize: PropTypes.number
}
