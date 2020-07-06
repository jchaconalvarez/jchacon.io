import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export const NavLink = ({ text, to }) => {
  const isActive = ({ isCurrent }) => isCurrent

  return (
    <Link to={to} getProps={isActive}>
      {text}
    </Link>
  )
}

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}
