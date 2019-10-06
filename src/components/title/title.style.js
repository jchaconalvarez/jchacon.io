import styled from 'styled-components'
import PropTypes from 'prop-types'

import { VARIABLES } from '../../constants'

export const Container = styled.div`
  max-width: 55%;
  margin-top: ${VARIABLES.scale.scale2}rem;
  margin-bottom: ${VARIABLES.scale.scale2}rem;
  margin-left: auto;
  padding: ${VARIABLES.scale['scale-1']}rem;
  position: relative;
  border-radius: 5px;
  ${props => props.pullSize && `margin-right: -${VARIABLES.scale.scale0 * props.pullSize}rem;`}
  background: ${VARIABLES.colors.primary};

  ::before {
    content: '${props => props.before && props.before}';
    position: absolute;
    top: -${VARIABLES.scale['scale-1']}rem;
    left: -${VARIABLES.scale.scale0 * 6.5}rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    border-bottom: ${VARIABLES.scale['scale-4']}rem solid ${VARIABLES.colors.primary}};
  }

  @media screen and (max-width: 480px) {
    & {
      max-width: 90%;
    }

    ::before {
      left: initial;
      right: 4ch;
      top: -2ch;

      padding: 0.2rem;
      font-size: 0.75rem;
      background: ${VARIABLES.colors.secondary};

      border-radius: 5px;
      border-bottom: none;
    }
  }
`

export const MainTitle = styled.h1`
  margin-bottom: 0;
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

  @media screen and (max-width: 480px) {
    & {
      font-size: ${VARIABLES.scale.scale1}rem;
    }
  }
`

MainTitle.propTypes = {
  pullSize: PropTypes.number
}
