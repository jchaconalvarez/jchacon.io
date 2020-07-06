import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import { Wrapper } from './sidebar.styles'

export const Sidebar = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

Sidebar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
}

Sidebar.defaultProps = {
  children: [],
}
