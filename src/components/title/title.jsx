import React from 'react'
import PropTypes from 'prop-types'

import { Container, MainTitle, SectionTitle } from './title.style'

export const Title = ({ title, number, main, before }) => {
  return (
    <Container main={main} before={before}>
      {main ?
        <>
          {/* <Number>{number}</Number> */}
          <MainTitle number={number} pullSize={1}>{title}</MainTitle>
        </> :
        <SectionTitle pullSize={1}>{title}</SectionTitle>
      }
    </Container>
  )
}

Title.defaultProps = {
  before: null,
  main: false,
  number: null
}

Title.propTypes = {
  before: PropTypes.string,
  main: PropTypes.bool,
  number: PropTypes.string,
  title: PropTypes.string.isRequired
}
