// Dependencies
import React from 'react'

// Styled Components
import {
  Container,
  Title,
  Text,
  Redacted
} from './hero.style'

const Hero = () => (
  <Container>
    <Title>jchacon</Title>
    <Text>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      <Redacted>Commodi modi impedit nemo quos maiores quidem inventore laudantium.</Redacted>
      Labore, veritatis, quo placeat commodi pariatur <Redacted>impedit</Redacted>
      maiores sapiente <Redacted>quasi repellat quibusdam consectetur?</Redacted>
    </Text>

    <Text>
      <Redacted>Lorem ipsum dolor sit amet consectetur</Redacted> adipisicing elit.
      Ratione ex quae neque fugiat tenetur dicta, <Redacted>libero recusandae qui </Redacted>
      <Redacted>veritatis, in ipsa quas</Redacted> enim consequatur, nostrum odio
      aut quam odit iusto.
    </Text>

    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <Redacted>Soluta</Redacted>, enim a, officiis rerum quae voluptatem dolor tempora <Redacted>possimus
      fugiat odit voluptatibus nostrum</Redacted> temporibus suscipit incidunt.
      <Redacted>Temporibus, modi</Redacted> explicabo! Officia, corrupti!
    </Text>

    <Text>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      <Redacted>Officiis quis inventore repellat aspernatur?</Redacted>
      Adipisci minus <Redacted>optio</Redacted> blanditiis ipsum saepe molestiae quaerat ullam, suscipit unde 
      <Redacted>laboriosam error, nobis fugit reprehenderit praesentium?</Redacted>
    </Text>
  </Container>
)

export default Hero;
