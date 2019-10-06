import React from 'react'
import PropTypes from 'prop-types'

import { WithSidebar } from './sidebar.style'

export const Sidebar = ({ children, contentMinWidth, minWidth }) => (
  <WithSidebar contentMinWidth={contentMinWidth} minWidth={minWidth}>
    <div>
      {children}
    </div>
  </WithSidebar>
)

Sidebar.defaultProps = {
  contentMinWidth: '50%',
  minWidth: 10
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  contentMinWidth: PropTypes.string,
  minWidth: PropTypes.number
}
