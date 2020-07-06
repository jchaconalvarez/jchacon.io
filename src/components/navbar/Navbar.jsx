import React from 'react'

// Styled Components
import { NavElement, NavLink, NavList, Wrapper } from './navbar.styles'

export const Navbar = () => {
  return (
    <Wrapper>
      <NavList>
        <NavElement>
          <NavLink to={'/'}>HOME</NavLink>
        </NavElement>
        <NavElement>
          <NavLink to={'/profile'}>PROFILE</NavLink>
        </NavElement>
        <NavElement>
          <NavLink to={'/experience'}>EXPERIENCE</NavLink>
        </NavElement>
      </NavList>
    </Wrapper>
  )
}
