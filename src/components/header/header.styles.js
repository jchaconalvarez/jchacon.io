import styled from 'styled-components'

export const Wrapper = styled.header`
  height: var(--header-height);

  padding: var(--s0);

  display: flex;
  align-items: center;

  background: var(--color-main);
  border-bottom: var(--border-medium);
`

export const Brand = styled.h1`
  font-size: 6rem;
  letter-spacing: -3px;
  color: var(--color-background);
  user-select: none;
`
