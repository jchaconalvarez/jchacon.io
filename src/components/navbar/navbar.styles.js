import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrapper = styled.nav`
  height: 4rem;

  padding: var(--s0);

  border-top: var(--border-medium);
`

export const NavList = styled.ul`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavElement = styled.li`
  font-size: 1.9rem;
  color: var(--color-main);
`

export const NavLink = styled(Link).attrs({
  activeClassName: 'active',
})`
  text-decoration: none;
  color: inherit;

  &.active {
    color: var(--color-background);
    background: var(--color-main);
  }
`
