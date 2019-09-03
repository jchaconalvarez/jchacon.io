import React from 'react'
import styled, { keyframes } from 'styled-components'

import { Layout, SEO } from '../components'

// Styled Components
const blink = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
`

const Title = styled.h1`
  font-family: 'Noto Serif', Georgia, Times, serif;
  font-weight: 100;
  
  &::after {
    content: '';
    display: inline-block;
    width: 2px;
    height: 0.8em;
    background: #000;
    animation: ${blink} 1200ms step-end infinite;
  }
`

const Subtitle = styled.h2`
  font-family: 'Noto Serif', Georgia, Times, serif;
  font-weight: 100;
  font-size: 1rem;

`

const IndexPage = () => (
  <Layout>
    <SEO title="" keywords={['portfolio', 'web development', 'javier chacon']} />
    <React.StrictMode>
      <Title>
        jchacon.io
      </Title>
      <Subtitle>
        Front-end web developer based in Barcelona.
      </Subtitle>
    </React.StrictMode>
  </Layout>
)

export default IndexPage
