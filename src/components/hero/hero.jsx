// Dependencies
import React from 'react'

// Styled Components
import {
  Container,
  Title,
  Text,
} from './hero.style'

import Redacted from '../redacted/redacted'

const Hero = () => (
  <Container>
    <Text end>
      April 2, <Redacted>2019</Redacted>
    </Text>

    <Text start>
      SUBJECT: <Redacted>Javier</Redacted> Chacón
    </Text>

    <Text start>
      <Redacted>English philologist turned web developer.</Redacted> Tech
      nerd with a knack for problem solving.
    </Text>

    <Title>jchacon</Title>
  </Container>
)

export default Hero;
