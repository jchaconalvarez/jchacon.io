import React from 'react'
import PropTypes from 'prop-types'

import { Ul } from './list.style'

export const List = ({ bullets, children, marginTop }) => (
  <Ul bullets={bullets} marginTop={marginTop}>
    {children}
  </Ul>
)

List.defaultProps = {
  bullets: false,
  marginTop: false
}

List.propTypes = {
  bullets: PropTypes.bool,
  children: PropTypes.node.isRequired,
  marginTop: PropTypes.bool
}
