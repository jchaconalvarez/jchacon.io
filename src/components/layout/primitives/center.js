import styled from 'styled-components'
import PropTypes from 'prop-types'

import { VARIABLES } from '../../../constants/variables'

export const Center = styled.div`
  box-sizing: content-box;
  max-width: ${props => props.maxWidth ?
    `${props.maxWidth}ch` :
    `${VARIABLES.measure}ch`}; 
  margin-left: auto;
  margin-right: auto;
  ${props => props.padding && `
    padding-left: ${props.padding};
    padding-right: ${props.padding};
  `}
  ${props => props.text && 'text-align: center;'}
  ${props => props.flex && `
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`

Center.propTypes = {
  maxWidth: PropTypes.number,
  padding: PropTypes.number,
  text: PropTypes.bool,
  flex: PropTypes.bool
}
