import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

const Container = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `

const Title = styled.h1`
  font-family: inherit;
  font-weight: inherit;
  padding: 0.1em;
  `

const Subtitle = styled.h2`
  font-family: inherit;
  font-weight: inherit;
  font-size: 1rem;
  `

export const Landing = () => {
  const [crtMode, setCrtMode] = useState(false)
  const crtSwitchAnimation = useSpring({
    color: crtMode ? '#41FF00' : '#000',
    background: crtMode ?
      '#121010' :
      '#FCFCFC',
    backgroundSize: '100% 2px, 3px 100%',
    zIndex: 2,
    fontFamily: crtMode ? '\'Ubuntu Mono\', Arial, sans-serif' : '\'Noto Serif\', Georgia, Times, serif',
    fontWeight: 100
  })

  return (
    <Container style={crtSwitchAnimation}>
      <Title
        onMouseEnter={() => setCrtMode(!crtMode)}
        onMouseLeave={() => setCrtMode(!crtMode)}
      >
        jchacon.io
      </Title>
      <Subtitle>
        Front-end web developer based in Barcelona.
      </Subtitle>
    </Container>
  )
}
