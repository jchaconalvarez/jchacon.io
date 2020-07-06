import styled from 'styled-components'

export const Wrapper = styled.div`
  display: none;

  @media screen and (min-width: var(--break-sm)) {
    width: var(--sidebar-width);
    border-right: var(--border-medium);
  }
`
