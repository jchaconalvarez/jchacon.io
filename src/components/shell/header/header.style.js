import styled from 'styled-components'
import TransitionLink from 'gatsby-plugin-transition-link'

export const MainHeader = styled.header`
  width: 100%;
  padding-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  h1 {
    margin: 0 1em;
  }
`

export const NavLink = styled(TransitionLink)`
  text-decoration: none;
  color: #101112;
`

export const Title = styled.div`
  margin: 0 3em;
`
