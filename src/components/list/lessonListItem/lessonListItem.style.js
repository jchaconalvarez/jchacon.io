import styled from 'styled-components'

import { VARIABLES } from '../../../constants'

export const Text = styled.span`
  display: inline-block;
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  text-decoration: none;
  color: ${VARIABLES.colors.text};

  ::before {
    ${props => props.number && `content: '${props.number}';`}
    position: absolute;

    left: -${VARIABLES.scale.scale0}rem;
    top: -${VARIABLES.scale.scale0}rem;

    font-size: ${props =>
    props.number && props.number.length > 1 ?
      `${VARIABLES.scale['scale2']}rem` :
      `${VARIABLES.scale['scale2'] * 1.1}rem`};
  }
`
export const Container = styled.div`
  padding: ${VARIABLES.scale['scale-1']}rem;
  position: relative;
  padding-left: ${VARIABLES.scale.scale2}rem;
  background: ${VARIABLES.colors.primary};
  border-radius: 5px;
  color: ${VARIABLES.colors.text};
  transition: transform 100ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
    background: ${VARIABLES.colors.primaryLight};
  }

  &:active {
    background: ${VARIABLES.colors.primaryDark};
  }

  ::before {
    ${props => props.before && `content: '${props.before}';`}
    position: absolute;
    top: -${VARIABLES.scale['scale-1']}rem;
    left: -${VARIABLES.scale.scale0 * 5.5}rem;

    font-family: 'Raleway', sans-serif;
    font-weight: 800;

    border-bottom: 3px solid ${VARIABLES.colors.primary};
  }

  @media screen and (max-width: 480px) {
    ::before {
      left: initial;
      right: 1ch;
      top: -2ch;

      padding: 0.2rem;
      font-size: 0.75rem;
      background: ${VARIABLES.colors.secondary};

      border-radius: 5px;
      border-bottom: none;
    }
  }
`
