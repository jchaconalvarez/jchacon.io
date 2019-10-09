import React from 'react'
import { Link } from 'gatsby'

// Styled Components
import { MainHeader, Title, SubTitle } from './header.style'

export const Header = () => (
  <MainHeader>
    <Link to="/courses">
      <Title>Coding module</Title>
    </Link>
    <SubTitle>UX/UI 05/19</SubTitle>
  </MainHeader>
)
