import React from 'react'
import { Link } from 'gatsby'

// Styled Components
import { MainHeader, Nav } from './header.style'

export const Header = () => (
  <MainHeader>
    <Nav>
      <Link to="/">Previous</Link>
      <h1>Courses</h1>
      <Link to="/courses/start">Next</Link>
    </Nav>
  </MainHeader>
)
