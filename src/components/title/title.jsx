import React from 'react'
import PropTypes from 'prop-types'

import { Container, MainTitle } from './title.style'

export const Title = ({ title, number, main, before }) => {
  return (
    <Container main={main} before={before} pullSize={1}>
      <MainTitle number={number}>{title}</MainTitle>
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
