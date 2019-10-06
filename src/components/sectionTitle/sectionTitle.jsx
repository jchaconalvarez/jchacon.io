import React from 'react'
import PropTypes from 'prop-types'

import { Container, Title } from './sectionTitle.style'

export const SectionTitle = ({ maxWidth, pullSize, reverse, title }) => (
  <Container maxWidth={maxWidth} pullSize={pullSize} reverse={reverse}>
    <Title pullSize={pullSize} reverse={reverse}>{title}</Title>
  </Container>
)

SectionTitle.defaultProps = {
  maxWidth: '50%',
  pullSize: 0,
  reverse: false
}

SectionTitle.propTypes = {
  maxWidth: PropTypes.string,
  pullSize: PropTypes.number,
  reverse: PropTypes.bool,
  title: PropTypes.string.isRequired
}
