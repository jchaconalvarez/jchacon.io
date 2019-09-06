import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import { MainHeader, Nav, NavLink, Title } from './header.style'

export const Header = ({ children, from, to }) => (
  <MainHeader>
    <Nav>
      <NavLink to={from} entry={{ delay: 0 }} exit={{ length: 1 }}>{'<-'}</NavLink>
      <Title>
        { children }
      </Title>
      <NavLink to={to} exit={{ length: 1 }}>-></NavLink>
    </Nav>
  </MainHeader>
)

Header.defaultProps = {
  children: null,
  from: '',
  to: ''
}

Header.propTypes = {
  children: PropTypes.node,
  from: PropTypes.string,
  to: PropTypes.string
}
