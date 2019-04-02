// Dependencies
import styled from 'styled-components'

export const Container = styled.div`
  width: 66.66%;
  min-height: 50vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid black;
`
export const Title = styled.h1`
  position: absolute;
  bottom: 0;
  right: 0.5rem;
  margin: 0;
  font-size: 1rem;
`

export const Text = styled.p`
  ${props => (
    props.start && 'align-self: flex-start' ||
    props.end && 'align-self: flex-end'
  )};
`
