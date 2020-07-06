import styled from 'styled-components'

export const Company = styled.h4`
  margin-block-end: var(--s-2);

  text-transform: capitalize;

  & a {
    color: inherit;
  }
`

export const Description = styled.p``

export const Stack = styled.ul`
  display: flex;
  flex-wrap: wrap;

  align-content: space-between;

  margin-top: calc(var(--s-1) * -1);
  margin-left: calc(var(--s-1) * -1);
  margin-bottom: var(--s-1);
`

export const StackElement = styled.li`
  padding: 0 var(--s-2);

  color: var(--color-background);
  background: var(--color-main);

  margin-top: var(--s-1);
  margin-left: var(--s-1);
`

export const Title = styled.h3`
  line-height: 1;
`

export const Wrapper = styled.div``
