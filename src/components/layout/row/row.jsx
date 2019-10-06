import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './row.styles'

export const Row = ({ children }) => (
  <Container>
    {children}
  </Container>
)

Row.propTypes = {
  children: PropTypes.node.isRequired
}
