import styled from 'styled-components'

export const SocialList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`

export const SocialElement = styled.li`
  & a {
    color: inherit;
  }

  & svg {
    transform: scale(2);
  }
`
