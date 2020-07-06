import styled from 'styled-components'

export const UnorderedList = styled.ul``

export const ListElement = styled.li``

export const Field = styled.span``

export const Information = styled.span`
  ${props =>
    props.redacted &&
    `background: var(--color-main); color: var(--color-background); padding: 0 var(--s-2);`};
`
