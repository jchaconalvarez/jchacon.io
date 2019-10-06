import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './column.style'

export const Column = ({ children, noTitle }) => (
  <Container noTitle={noTitle}>
    {children}
  </Container>
)

Column.defaultProps = {
  noTitle: false
}

Column.propTypes = {
  children: PropTypes.node.isRequired,
  noTitle: PropTypes.bool
}
